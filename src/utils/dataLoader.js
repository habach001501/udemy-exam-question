const modules = import.meta.glob("../data/**/*.js");

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

        // Add source property to each question
        const questionsWithSource = (content.results || []).map((q) => ({
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
