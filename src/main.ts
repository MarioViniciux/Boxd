import { passwordValidate, validadePasswordRealTime, validateEmailRealTime, newUser, userLogin } from "./validations.js"
import { concatenarArrayString } from "./functionality.js"

/////////////////////////////////////////////////////////////////////////////////////
// HTMLElement 
const signUp = document.querySelector("#signUp") as HTMLElement
const loginIn = document.querySelector("#login") as HTMLElement
const modalSign = document.querySelector(".modalSignUp") as HTMLElement
const modalLogin = document.querySelector(".modalLogin") as HTMLElement

// HTMLButtonElement
const btnSign = document.querySelector("#btnSignUp") as HTMLButtonElement
const btnLogin = document.querySelector("#btnLogin") as HTMLButtonElement

// HTMLFormElement
const signForm = document.querySelector(".modalSignUp .formSection") as HTMLFormElement
const loginForm = document.querySelector(".modalLogin .formSection") as HTMLFormElement

// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail") as HTMLInputElement
const signUpPassword = document.querySelector("#signUpPassword") as HTMLInputElement
const loginEmail = document.querySelector("#loginEmail") as HTMLInputElement
const loginPassword = document.querySelector("#loginPassword") as HTMLInputElement

/////////////////////////////////////////////////////////////////////////////////////
// redirecionamento para a página dos livros
document.querySelector("#pageBook")?.addEventListener("click", () => {
    window.location.href = "pages/books/books.html"
})

// redirecionamento para a página das listas
document.querySelector("#pageList")?.addEventListener("click", () => {
    window.location.href = "pages/lists/list.html"
})

// verifica se o Sign Up foi clicado, e então, abre o modal
signUp?.addEventListener("click", () => {
    modalSign.classList.add("active")
})

// verifica se o Login In foi clicado, e então, abre o modal
loginIn?.addEventListener("click", () => {
    modalLogin.classList.add("active")
})

/////////////////////////////////////////////////////////////////////////////////////
// Verifica se ocorreu algum clique fora do modal, e se sim, fecha o modal
document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if(target.contains(modalLogin)) {
        modalLogin.classList.remove("active")
    }

    if(target.contains(modalSign)) {
        modalSign.classList.remove("active")
    }
})

/////////////////////////////////////////////////////////////////////////////////////
// Adiciona o listener ao input de email do Sign Up
signUpEmail.addEventListener("input", () => {
    validateEmailRealTime(signUpEmail, `
        E-mail inválido. 
        Ex de e-mail válido:. abcde123@gmail.com
    `)
})

// Adiciona o listener de input de senha do Sign Up
signUpPassword.addEventListener("input", () => {
    validadePasswordRealTime(signUpPassword,  `
        Senha inválida.
        É preciso ter: ${concatenarArrayString(passwordValidate(signUpPassword.value)).toLowerCase()}
    `)
})

/////////////////////////////////////////////////////////////////////////////////////
// Adiciona o listener ao input de email do Login
loginEmail.addEventListener("input", () => {
    validateEmailRealTime(loginEmail, `
        E-mail inválido. 
        Ex de e-mail válido:. abcde123@gmail.com
    `)
})

// Adiciona o listener de input de senha do Login
loginPassword.addEventListener("input", () => {
    validadePasswordRealTime(loginPassword,  `
        Senha inválida.
        É preciso ter: ${concatenarArrayString(passwordValidate(loginPassword.value)).toLowerCase()}
    `)
})

/////////////////////////////////////////////////////////////////////////////////////
// Adiciona o listener de envio no botão do Sign Up
signForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    newUser(signUpEmail.value, signUpPassword.value, signUpEmail, signUpPassword)
})

loginForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    userLogin(loginEmail.value, loginPassword.value, loginEmail, loginPassword)
})