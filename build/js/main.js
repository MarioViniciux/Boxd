var _a, _b;
import { passwordValidate, validadePasswordRealTime, validateEmailRealTime, newUser, userLogin } from "./validations.js";
import { concatenarArrayString, Carousel, CarouselOneElement } from "./functionality.js";
/////////////////////////////////////////////////////////////////////////////////////
// HTMLElement 
const signUp = document.querySelector("#signUp");
const loginIn = document.querySelector("#login");
const modalSign = document.querySelector(".modalSignUp");
const modalLogin = document.querySelector(".modalLogin");
// HTMLFormElement
const signForm = document.querySelector(".modalSignUp .formSection");
const loginForm = document.querySelector(".modalLogin .formSection");
// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail");
const signUpPassword = document.querySelector("#signUpPassword");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
// Array que será passado para a classe Carousel
const books = [
    {
        id: 1,
        title: "O Senhor dos Anéis",
        coverUrl: "https://m.media-amazon.com/images/I/A1xRL6qXHOL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=O+Senhor+dos+Anéis",
    },
    {
        id: 2,
        title: "Harry Potter e a Pedra Filosofal",
        coverUrl: "https://m.media-amazon.com/images/I/81pB+joKL4L._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=Harry+Potter+e+a+Pedra+Filosofal",
    },
    {
        id: 3,
        title: "1984",
        coverUrl: "https://m.media-amazon.com/images/I/81l3pUGbT8L._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=1984",
    },
    {
        id: 4,
        title: "Dom Quixote",
        coverUrl: "https://m.media-amazon.com/images/I/91Q2QLxT6BL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=Dom+Quixote",
    },
    {
        id: 5,
        title: "O Pequeno Príncipe",
        coverUrl: "https://m.media-amazon.com/images/I/51nNwwVSclL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=O+Pequeno+Príncipe",
    },
    {
        id: 6,
        title: "Orgulho e Preconceito",
        coverUrl: "https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=Orgulho+e+Preconceito",
    },
    {
        id: 7,
        title: "A Metamorfose",
        coverUrl: "https://m.media-amazon.com/images/I/715JOcuqSSL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=A+Metamorfose",
    },
    {
        id: 8,
        title: "Cem Anos de Solidão",
        coverUrl: "https://m.media-amazon.com/images/I/817esPahlrL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=Cem+Anos+de+Solidão",
    },
    {
        id: 9,
        title: "O Alquimista",
        coverUrl: "https://m.media-amazon.com/images/I/915lTnCKqvL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=O+Alquimista",
    },
    {
        id: 10,
        title: "A Revolução dos Bichos",
        coverUrl: "https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UL320_.jpg",
        link: "https://www.amazon.com.br/s?k=A+Revolução+dos+Bichos",
    },
];
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
// Adiciona o listener de envio no botão do Sign Up
signForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newUser(signUpEmail.value, signUpPassword.value, signUpEmail, signUpPassword);
});
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userLogin(loginEmail.value, loginPassword.value, loginEmail, loginPassword);
});
document.addEventListener("DOMContentLoaded", () => {
    new CarouselOneElement(books, "carousel-greatest", "prev-greatest", "next-greatest");
    new CarouselOneElement(books, "carousel-most-read", "prev-most-read", "next-most-read");
    new Carousel(books, "carouselInner", "prevBtn", "nextBtn");
});
