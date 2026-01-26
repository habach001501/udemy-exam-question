const modules = import.meta.glob('../data/**/*.js');

export const loadCourseData = async (scripts) => {
    const loadedData = [];

    for (const scriptPath of scripts) {
        const key = `../data/${scriptPath}`;
        if (modules[key]) {
            const mod = await modules[key]();
            // Assuming the first export is the data object
            const content = Object.values(mod)[0];

            if (content) {
                const filename = scriptPath.split('/').pop().replace('.js', '');
                loadedData.push({
                    name: formatName(filename),
                    count: content.results ? content.results.length : 0,
                    questions: content.results || []
                });
            }
        } else {
            console.error(`Module not found: ${key}`);
        }
    }
    return loadedData;
};

export const formatName = (varName) => {
    const parts = varName.split('_');
    if (parts.length === 2) {
        return parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + " Set " + parts[1];
    }
    return varName;
};
