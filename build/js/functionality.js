export function concatenarArrayString(arr) {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1");
}
