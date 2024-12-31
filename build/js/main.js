var _a, _b;
import { emailValidate, passwordValidate } from "./validations.js";
import { concatenarArrayString } from "./functionality.js";
// HTMLElement 
const signUp = document.querySelector("#signUp");
const loginIn = document.querySelector("#loginIn");
const modalSign = document.querySelector(".modalSignUp");
const modalLogin = document.querySelector(".modalLoginIn");
const modalErrorEmail = document.querySelector("#errorEmail");
const modalErrorPass = document.querySelector("#errorPass");
// HTMLParagraphElement
const errorEmailP = document.querySelector("#emailParagraph");
const errorPasswordP = document.querySelector("#passwordParagraph");
// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const loginInEmail = document.querySelector("#loginInEmail");
const loginInPassword = document.querySelector("#loginInPassword");
// HTMLFormELement
const signUpForm = document.querySelector(".modalSignUp .formSection");
const loginForm = document.querySelector(".modalLoginIn .formSection");
// redirecionamento para a página dos livros
(_a = document.querySelector("#pageBook")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    window.location.href = "pages/books/books.html";
});
// redirecionamento para a página das listas
(_b = document.querySelector("#pageList")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    window.location.href = "pages/lists/list.html";
});
// verifica se o Sign Up foi clicado, e então, abre o modal
signUp === null || signUp === void 0 ? void 0 : signUp.addEventListener("click", () => {
    modalSign.classList.add("active");
});
// verifica se o Login In foi clicado, e então, abre o modal
loginIn === null || loginIn === void 0 ? void 0 : loginIn.addEventListener("click", () => {
    modalLogin.classList.add("active");
});
// Verifica se ocorreu algum clique fora do modal, e se sim, fecha o modal
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.contains(modalLogin)) {
        modalLogin.classList.remove("active");
    }
    if (target.contains(modalSign)) {
        modalSign.classList.remove("active");
    }
});
// Adiciona o listener ao form do Sign Up
signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signUpEmail.value;
    // Validando email
    if (emailValidate(email)) {
        console.log("E-mail válido em MODAL SIGN UP:", email);
    }
    else {
        console.log("E-mail inválido em MODAL SIGN UP:", email);
        errorEmailP.innerText = `
            E-mail inválido. 
            Ex de email válido:. abcde123@dominio.com`;
        modalErrorEmail.classList.add("active");
        setTimeout(() => {
            modalErrorEmail.classList.remove("active");
        }, 2500);
    }
    const errors = passwordValidate(signUpPassword.value);
    if (errors.length > 0) {
        console.log("Senha inválida em sign up: ", errors);
        errorPasswordP.innerText = `
            Senha inválida. 
            É preciso ter: ${concatenarArrayString(errors).toLowerCase()}`;
        modalErrorPass.classList.add("active");
        setTimeout(() => {
            modalErrorPass.classList.remove("active");
        }, 3000);
    }
    else {
        console.log("Senha válida em sign up");
    }
});
// Adiciona o listener ao form do Login In
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginInEmail.value;
    // Validando email
    if (emailValidate(email)) {
        console.log("E-mail válido em MODAL SIGN UP:", email);
    }
    else {
        console.log("E-mail inválido em MODAL SIGN UP:", email);
        errorEmailP.innerText = `
            E-mail inválido. 
            Ex de email válido:. abcde123@dominio.com`;
        modalErrorEmail.classList.add("active");
        setTimeout(() => {
            modalErrorEmail.classList.remove("active");
        }, 2500);
    }
    const errors = passwordValidate(loginInPassword.value);
    if (errors.length > 0) {
        console.log("Senha inválida em sign up: ", errors);
        errorPasswordP.innerText = `
            Senha inválida. 
            É preciso ter: ${concatenarArrayString(errors).toLowerCase()}`;
        modalErrorPass.classList.add("active");
        setTimeout(() => {
            modalErrorPass.classList.remove("active");
        }, 3000);
    }
    else {
        console.log("Senha válida em sign up");
    }
});
