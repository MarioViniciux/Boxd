var _a, _b;
import { passwordValidate, validadePasswordRealTime, validateEmailRealTime } from "./validations.js";
import { concatenarArrayString } from "./functionality.js";
/////////////////////////////////////////////////////////////////////////////////////
// HTMLElement 
const signUp = document.querySelector("#signUp");
const loginIn = document.querySelector("#login");
const modalSign = document.querySelector(".modalSignUp");
const modalLogin = document.querySelector(".modalLogin");
// HTMLButtonElement
const btnSign = document.querySelector("#btnSignUp");
// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
/////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////////////////
// Adiciona o listener ao input de email do Sign Up
signUpEmail.addEventListener("input", () => {
    validateEmailRealTime(signUpEmail, `
        E-mail inválido. 
        Ex de e-mail válido:. abcde123@gmail.com
    `);
});
// Adiciona o listener de input de senha do Sign Up
signUpPassword.addEventListener("input", () => {
    validadePasswordRealTime(signUpPassword, `
        Senha inválida.
        É preciso ter: ${concatenarArrayString(passwordValidate(signUpPassword.value)).toLowerCase()}
    `);
});
/////////////////////////////////////////////////////////////////////////////////////
// Adiciona o listener ao input de email do Login
loginEmail.addEventListener("input", () => {
    validateEmailRealTime(loginEmail, `
        E-mail inválido. 
        Ex de e-mail válido:. abcde123@gmail.com
    `);
});
// Adiciona o listener de input de senha do Login
loginPassword.addEventListener("input", () => {
    validadePasswordRealTime(loginPassword, `
        Senha inválida.
        É preciso ter: ${concatenarArrayString(passwordValidate(loginPassword.value)).toLowerCase()}
    `);
});
/////////////////////////////////////////////////////////////////////////////////////
