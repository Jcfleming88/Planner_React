/**
 * Formats a given Date object to an ISO-like string (YYYY-MM-DD).
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string in 'YYYY-MM-DD' format.
 */
export const dateToIso = (date) => {
    if( !(date instanceof Date)) {
        return null;
    }
    
    return date.toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

/**
 * Parses a date string in 'YYYY-MM-DD' format and returns a Date object.
 *
 * @param {string} isoString - The date string in 'YYYY-MM-DD' format.
 * @returns {Date} The corresponding Date object.
 */
export const isoToDate = (isoString) => {
    if(!isoString || /\d{4}-\d{2}-\d{2}/) {
        return null;
    }

    const [year, month, day] = isoString.split('-').map(Number);
    return new Date(year, month - 1, day);
};