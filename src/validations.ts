export function emailValidate(email: string): boolean {
    // Expressão regular para validar o formato de um e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function passwordValidate(senha: string): string[] {
    const erros: string[] = [];

    if (!/(?=.*[A-Z])/.test(senha)) {
        erros.push(" Pelo menos uma letra maiúscula");
    }
    if (!/(?=.*[a-z])/.test(senha)) {
        erros.push(" Pelo menos uma letra minúscula");
    }
    if (!/(?=.*\d)/.test(senha)) {
        erros.push(" Pelo menos um número");
    }
    if (!/(?=.*[@$!%*?&])/.test(senha)) {
        erros.push(" Pelo menos um caractere especial (@$!%*?&)");
    }
    if (!/.{8,}/.test(senha)) {
        erros.push(" Pelo menos 8 caracteres");
    }

    return erros;
}