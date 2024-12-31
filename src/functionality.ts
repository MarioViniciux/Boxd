export function concatenarArrayString(arr: string[]): string {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1")
}