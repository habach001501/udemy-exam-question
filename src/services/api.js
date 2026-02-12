/**
 * API Service for history management
 * All endpoints are scoped by courseId: /api/history/<courseId>/...
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

/**
 * Get all history records for a course
 */
export const getHistory = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/history/${courseId}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch history");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching history:", error);
    // Fallback to localStorage if API is unavailable
    return JSON.parse(localStorage.getItem(`cp_history_${courseId}`) || "[]");
  }
};

/**
 * Add a new history record for a course
 */
export const addHistory = async (record, courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/history/${courseId}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });
    if (!response.ok) {
      throw new Error("Failed to add history");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding history:", error);
    // Fallback to localStorage if API is unavailable
    const history = JSON.parse(
      localStorage.getItem(`cp_history_${courseId}`) || "[]",
    );
    history.unshift(record);
    localStorage.setItem(`cp_history_${courseId}`, JSON.stringify(history));
    return record;
  }
};

/**
 * Get the latest result for a course
 */
export const getLatestResult = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/history/${courseId}/latest/`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch latest result");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching latest result:", error);
    // Fallback to localStorage if API is unavailable
    const saved = localStorage.getItem(`latest_result_${courseId}`);
    return saved ? JSON.parse(saved) : null;
  }
};

/**
 * Save the latest result (for quick access)
 */
export const saveLatestResult = async (result, courseId) => {
  // Latest result is automatically the first item in history
  // This function is kept for backwards compatibility with localStorage fallback
  localStorage.setItem(`latest_result_${courseId}`, JSON.stringify(result));
};

/**
 * Delete a history record for a course
 */
export const deleteHistory = async (recordId, courseId) => {
  let success = false;

  // Try API
  try {
    const response = await fetch(
      `${API_BASE_URL}/history/${courseId}/${recordId}/`,
      {
        method: "DELETE",
      },
    );
    if (response.ok || response.status === 204) {
      success = true;
    }
  } catch (error) {
    console.error("Error deleting history from API:", error);
  }

  // Always try to delete from localStorage as well (fallback or cleanup)
  try {
    const history = JSON.parse(
      localStorage.getItem(`cp_history_${courseId}`) || "[]",
    );
    const initialLength = history.length;
    const newHistory = history.filter((h) => h.id !== String(recordId));

    if (newHistory.length !== initialLength) {
      localStorage.setItem(
        `cp_history_${courseId}`,
        JSON.stringify(newHistory),
      );
      success = true;
    }
  } catch (error) {
    console.error("Error deleting history from localStorage:", error);
  }

  return success;
};
