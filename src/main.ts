import { emailValidate, passwordValidate } from "./validations.js"
import { concatenarArrayString } from "./functionality.js"

// HTMLElement 
const signUp = document.querySelector("#signUp") as HTMLElement
const loginIn = document.querySelector("#loginIn") as HTMLElement
const modalSign = document.querySelector(".modalSignUp") as HTMLElement
const modalLogin = document.querySelector(".modalLoginIn") as HTMLElement
const modalErrorEmail = document.querySelector("#errorEmail") as HTMLElement
const modalErrorPass = document.querySelector("#errorPass") as HTMLElement

// HTMLParagraphElement
const errorEmailP = document.querySelector("#emailParagraph") as HTMLParagraphElement
const errorPasswordP = document.querySelector("#passwordParagraph") as HTMLParagraphElement

// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail") as HTMLInputElement
const signUpPassword = document.querySelector("#signUpPassword") as HTMLInputElement
const loginInEmail = document.querySelector("#loginInEmail") as HTMLInputElement
const loginInPassword = document.querySelector("#loginInPassword") as HTMLInputElement

// HTMLFormELement
const signUpForm = document.querySelector(".modalSignUp .formSection") as HTMLFormElement
const loginForm = document.querySelector(".modalLoginIn .formSection") as HTMLFormElement

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

// Adiciona o listener ao form do Sign Up
signUpForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    const email = signUpEmail.value

    // Validando email
    if (emailValidate(email)) {
        console.log("E-mail válido em MODAL SIGN UP:", email)
    } else {
        console.log("E-mail inválido em MODAL SIGN UP:", email)
        errorEmailP.innerText = `
            E-mail inválido. 
            Ex de email válido:. abcde123@dominio.com`
        modalErrorEmail.classList.add("active")

        setTimeout(() => {
            modalErrorEmail.classList.remove("active")
        }, 2500)
    }

    const errors = passwordValidate(signUpPassword.value) 
    
    if (errors.length > 0) {
        console.log("Senha inválida em sign up: ", errors)
        errorPasswordP.innerText = `
            Senha inválida. 
            É preciso ter: ${concatenarArrayString(errors).toLowerCase()}`
        modalErrorPass.classList.add("active")
    
        setTimeout(() => {
            modalErrorPass.classList.remove("active")
        }, 3000)
    } else {
        console.log("Senha válida em sign up")
    }
})

// Adiciona o listener ao form do Login In
loginForm.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    const email = loginInEmail.value

    // Validando email
    if (emailValidate(email)) {
        console.log("E-mail válido em MODAL SIGN UP:", email)
    } else {
        console.log("E-mail inválido em MODAL SIGN UP:", email)
        errorEmailP.innerText = `
            E-mail inválido. 
            Ex de email válido:. abcde123@dominio.com`
        modalErrorEmail.classList.add("active")

        setTimeout(() => {
            modalErrorEmail.classList.remove("active")
        }, 2500)
    }

    const errors = passwordValidate(loginInPassword.value) 
    
    if (errors.length > 0) {
        console.log("Senha inválida em sign up: ", errors)
        errorPasswordP.innerText = `
            Senha inválida. 
            É preciso ter: ${concatenarArrayString(errors).toLowerCase()}`
        modalErrorPass.classList.add("active")
    
        setTimeout(() => {
            modalErrorPass.classList.remove("active")
        }, 3000)
    } else {
        console.log("Senha válida em sign up")
    }
})