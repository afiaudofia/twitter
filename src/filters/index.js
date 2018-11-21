import dateformat from "dateformat"

/**
 * @function dateFormat
 * @description Formats Input Date To Be More User Friendly
 */
const dateFormat = (date) => {
    return dateformat(date, "mmm dS, yyyy, h:MM TT");
};

export {
    dateFormat,
};