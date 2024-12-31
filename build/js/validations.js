export function emailValidate(email) {
    // Expressão regular para validar o formato de um e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export function passwordValidate(senha) {
    const erros = [];
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
export function validateEmailRealTime(inputElement, text) {
    const emailValue = inputElement.value;
    if (!emailValidate(emailValue)) {
        inputElement.setCustomValidity(text);
    }
    else {
        // Limpa a mensagem de erro
        inputElement.setCustomValidity('');
    }
}
export function validadePasswordRealTime(inputElement, text) {
    const passwordValue = inputElement.value;
    if (passwordValidate(passwordValue).length > 0) {
        // modalElement.classList.remove("active")
        inputElement.setCustomValidity(text);
    }
    else {
        // modalElement.classList.add("active")
        inputElement.setCustomValidity('');
    }
}
