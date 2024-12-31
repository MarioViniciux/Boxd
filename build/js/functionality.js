export function removeClasslist(elemento, value) {
    elemento.classList.remove(value);
}
export function addClasslist(elemento, value) {
    elemento.classList.add(value);
}
export function concatenarArrayString(arr) {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1");
}
