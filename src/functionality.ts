export function removeClasslist(elemento: HTMLElement, value: string) {
    elemento.classList.remove(value)
}

export function addClasslist(elemento: HTMLElement, value: string) {
    elemento.classList.add(value)
}

export function concatenarArrayString(arr: string[]): string {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1")
}