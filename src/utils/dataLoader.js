const modules = import.meta.glob("../data/**/*.js");

/**
 * Normalize a CloudExam question to the Udemy format used throughout the app.
 *
 * CloudExam: { questionId, questionText, answers[], correctAnswer[] (HTML strings), explanation }
 * Udemy:     { id, assessment_type, prompt: { question, answers, explanation }, correct_response[] (letters) }
 */
const normalizeCloudExamQuestion = (q) => {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  // Convert correctAnswer HTML strings → letter indices by matching against answers array
  const correctResponse = (q.correctAnswer || [])
    .map((correctHtml) => {
      const idx = (q.answers || []).findIndex(
        (a) => a.trim() === correctHtml.trim()
      );
      return idx >= 0 ? letters[idx] : null;
    })
    .filter(Boolean);

  return {
    _class: "assessment",
    id: q.questionId || q.attemptAnswerId,
    assessment_type:
      correctResponse.length > 1 ? "multi-select" : "multiple-choice",
    prompt: {
      question: q.questionText || "",
      answers: q.answers || [],
      explanation: q.explanation || "",
      feedbacks: (q.answers || []).map(() => ""),
      relatedLectureIds: "",
    },
    correct_response: correctResponse,
    section: "",
    question_plain: (q.questionText || "").replace(/<[^>]*>/g, ""),
    related_lectures: [],
  };
};

export const loadCourseData = async (scripts) => {
  const loadedData = [];

  for (const scriptPath of scripts) {
    const key = `../data/${scriptPath}`;
    if (modules[key]) {
      const mod = await modules[key]();
      // Assuming the first export is the data object
      const content = Object.values(mod)[0];

      if (content) {
        const filename = scriptPath.split("/").pop().replace(".js", "");
        const sourceName = formatName(filename);

        // Detect format: CloudExam uses attemptAnswers[], Udemy uses results[]
        let rawQuestions;
        if (content.attemptAnswers) {
          // CloudExam format → normalize to Udemy format
          rawQuestions = content.attemptAnswers.map(normalizeCloudExamQuestion);
        } else {
          // Udemy format (default)
          rawQuestions = content.results || [];
        }

        // Add source property to each question
        const questionsWithSource = rawQuestions.map((q) => ({
          ...q,
          source: sourceName,
        }));

        loadedData.push({
          name: sourceName,
          count: questionsWithSource.length,
          questions: questionsWithSource,
        });
      }
    } else {
      console.error(`Module not found: ${key}`);
    }
  }
  return loadedData;
};

export const formatName = (varName) => {
  const parts = varName.split("_");
  if (parts.length === 2) {
    return (
      parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + " Set " + parts[1]
    );
  }
  return varName;
};
