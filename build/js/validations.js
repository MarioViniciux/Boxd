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
    else if (emailValue === '') {
        inputElement.setCustomValidity('Preencha esse campo.');
    }
    else {
        // Limpa a mensagem de erro
        inputElement.setCustomValidity('');
    }
}
export function validadePasswordRealTime(inputElement, text) {
    const passwordValue = inputElement.value;
    if (passwordValidate(passwordValue).length > 0) {
        inputElement.setCustomValidity(text);
    }
    else if (passwordValue === '') {
        inputElement.setCustomValidity('Preencha esse campo.');
    }
    else {
        inputElement.setCustomValidity('');
    }
}
export function newUser(email, password, signEmail, signPass) {
    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];
    const emailExists = users.some((users) => users.email === email);
    if (emailExists) {
        console.log("Email já existe");
    }
    else {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Usuário cadastrado com sucesso");
        signEmail.value = '';
        signPass.value = '';
    }
}
export function userLogin(email, password, loginEmail, loginPass) {
    const usersData = localStorage.getItem("users");
    const users = usersData ? JSON.parse(usersData) : [];
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        console.log("Login feito com sucesso");
        loginEmail.value = '';
        loginPass.value = '';
    }
    else {
        console.log("Erro ao logar");
    }
}
