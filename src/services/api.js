/**
 * API Service for history management
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Get all history records
 */
export const getHistory = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/history/`);
        if (!response.ok) {
            throw new Error('Failed to fetch history');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching history:', error);
        // Fallback to localStorage if API is unavailable
        return JSON.parse(localStorage.getItem('cp_history') || '[]');
    }
};

/**
 * Add a new history record
 */
export const addHistory = async (record) => {
    try {
        const response = await fetch(`${API_BASE_URL}/history/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record),
        });
        if (!response.ok) {
            throw new Error('Failed to add history');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding history:', error);
        // Fallback to localStorage if API is unavailable
        const history = JSON.parse(localStorage.getItem('cp_history') || '[]');
        history.unshift(record);
        localStorage.setItem('cp_history', JSON.stringify(history));
        return record;
    }
};

/**
 * Get the latest result
 */
export const getLatestResult = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/history/latest/`);
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch latest result');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching latest result:', error);
        // Fallback to localStorage if API is unavailable
        const saved = localStorage.getItem('latest_result');
        return saved ? JSON.parse(saved) : null;
    }
};

/**
 * Save the latest result (for quick access)
 */
export const saveLatestResult = async (result) => {
    // Latest result is automatically the first item in history
    // This function is kept for backwards compatibility with localStorage fallback
    localStorage.setItem('latest_result', JSON.stringify(result));
};

/**
 * Delete a history record
 */
export const deleteHistory = async (recordId) => {
    let success = false;

    // Try API
    try {
        const response = await fetch(`${API_BASE_URL}/history/${recordId}/`, {
            method: 'DELETE',
        });
        if (response.ok || response.status === 204) {
            success = true;
        }
    } catch (error) {
        console.error('Error deleting history from API:', error);
    }

    // Always try to delete from localStorage as well (fallback or cleanup)
    try {
        const history = JSON.parse(localStorage.getItem('cp_history') || '[]');
        const initialLength = history.length;
        const newHistory = history.filter(h => h.id !== String(recordId)); // Ensure ID comparison works (string vs num)

        if (newHistory.length !== initialLength) {
            localStorage.setItem('cp_history', JSON.stringify(newHistory));
            // If API failed but we found it locally, count as success
            success = true;
        }
    } catch (error) {
        console.error('Error deleting history from localStorage:', error);
    }

    return success;
};
