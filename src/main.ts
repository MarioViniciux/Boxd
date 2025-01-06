import { passwordValidate, validadePasswordRealTime, validateEmailRealTime, newUser, userLogin } from "./validations.js"
import { concatenarArrayString, Carousel, CarouselOneElement} from "./functionality.js"

/////////////////////////////////////////////////////////////////////////////////////
// HTMLElement 
const body = document.querySelector("body") as HTMLElement
const signUp = document.querySelector("#signUp") as HTMLElement
const loginIn = document.querySelector("#login") as HTMLElement
const modalSign = document.querySelector(".modalSignUp") as HTMLElement
const modalLogin = document.querySelector(".modalLogin") as HTMLElement
const asideTrends = document.querySelector("#asideComments") as HTMLElement
const asidePerfils = document.querySelector("#asidePerfils") as HTMLElement

// HTMLFormElement
const signForm = document.querySelector(".modalSignUp .formSection") as HTMLFormElement
const loginForm = document.querySelector(".modalLogin .formSection") as HTMLFormElement

//HTMLButtonElement
const getStarted = document.querySelector("#get-started-button") as HTMLButtonElement

// HTMLInputElement 
const signUpEmail = document.querySelector("#signUpEmail") as HTMLInputElement
const signUpPassword = document.querySelector("#signUpPassword") as HTMLInputElement
const loginEmail = document.querySelector("#loginEmail") as HTMLInputElement
const loginPassword = document.querySelector("#loginPassword") as HTMLInputElement

// Array que será passado para a classe Carousel

const booksOne: {id: number, title: string, coverUrl: string, link: string}[] = [
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

const booksTwo: {id: number, title: string, coverUrl: string, link: string}[] = [
    {
      id: 1,
      title: "A Guerra dos Mundos",
      coverUrl: "https://m.media-amazon.com/images/I/71w172G57mS._AC_UY218_.jpg",
      link: "https://a.co/d/dlxIR4R"
    },
    {
      id: 2,
      title: "1984",
      coverUrl: "https://m.media-amazon.com/images/I/81l3pUGbT8L._AC_UL320_.jpg",
      link: "https://www.amazon.com.br/s?k=1984"
    },
    {
      id: 3,
      title: "Duna",
      coverUrl: "https://m.media-amazon.com/images/I/81zN7udGRUL._AC_UY218_.jpg",
      link: "https://a.co/d/71F4Qwr"
    },
    {
      id: 4,
      title: "O Conto da Aia",
      coverUrl: "https://m.media-amazon.com/images/I/915d8NRLU-L._AC_UY218_.jpg",
      link: "https://a.co/d/5m4mBaG"
    },
    {
      id: 5,
      title: "Neuromancer",
      coverUrl: "https://m.media-amazon.com/images/I/91Bx5ilP+EL._AC_UY218_.jpg",
      link: "https://a.co/d/iJsCJHq"
    },
    {
      id: 6,
      title: "Jogador Número 1",
      coverUrl: "https://m.media-amazon.com/images/I/917GI-fesVL._AC_UY218_.jpg",
      link: "https://a.co/d/gvdejsK"
    },
    {
      id: 7,
      title: "A Mão Esquerda da Escuridão",
      coverUrl: "https://m.media-amazon.com/images/I/71-g0eKZDtS._AC_UY218_.jpg",
      link: "https://a.co/d/1pn8nK5"
    },
    {
      id: 8,
      title: "O Hobbit",
      coverUrl: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UY218_.jpg",
      link: "https://a.co/d/aHh4b4t"
    },
    {
      id: 9,
      title: "Fahrenheit 451",
      coverUrl: "https://m.media-amazon.com/images/I/51tAD6LyZ-L._AC_UY218_.jpg",
      link: "https://a.co/d/aDC11n5"
    },
    {
      id: 10,
      title: "O Guia do Mochileiro das Galáxias",
      coverUrl: "https://m.media-amazon.com/images/I/91NAJgaUlKL._AC_UY218_.jpg",
      link: "https://a.co/d/gTshxfa"
    }
]
  
const booksThree: {id: number, title: string, coverUrl: string, link: string}[] = [
    {
      id: 1,
      title: "Clean Code",
      coverUrl: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UY218_.jpg",
      link: "https://a.co/d/9YJW0U3"
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      coverUrl: "https://m.media-amazon.com/images/I/71f1jieYHNL._AC_UY218_.jpg",
      link: "https://a.co/d/dFrB8IN"
    },
    {
      id: 3,
      title: "Código Limpo em Python",
      coverUrl: "https://m.media-amazon.com/images/I/71rxdaudNPL._AC_UL320_.jpg",
      link: "https://a.co/d/6944QWW"
    },
    {
      id: 4,
      title: "Estruturas de Dados e Algoritmos com JavaScript",
      coverUrl: "https://m.media-amazon.com/images/I/71KGa1y8eaL._AC_UL320_.jpg",
      link: "https://a.co/d/d8rwAhm"
    },
    {
      id: 5,
      title: "Introdução ao Machine Learning com Python",
      coverUrl: "https://m.media-amazon.com/images/I/911CH8DQeUL._AC_UL320_.jpg",
      link: "https://a.co/d/bzW9Hep"
    },
    {
      id: 6,
      title: "Você Não Sabe JS",
      coverUrl: "https://m.media-amazon.com/images/I/817kywRJjVL._AC_UL320_.jpg",
      link: "https://a.co/d/2uXmhoy"
    },
    {
      id: 7,
      title: "O Programador Apaixonado",
      coverUrl: "https://m.media-amazon.com/images/I/81l0xVdnV2L._AC_UL320_.jpg",
      link: "https://a.co/d/a9z6GWE"
    },
    {
      id: 8,
      title: "Design Patterns",
      coverUrl: "https://m.media-amazon.com/images/I/81RXMnEXrdL._AC_UL320_.jpg",
      link: "https://a.co/d/6Yo11Ef"
    },
    {
      id: 9,
      title: "Refatoração",
      coverUrl: "https://m.media-amazon.com/images/I/81sTm5M7wjL._AC_UL320_.jpg",
      link: "https://a.co/d/4UR9xMW"
    },
    {
      id: 10,
      title: "Estruturas de Dados e Algoritmos em Python",
      coverUrl: "https://m.media-amazon.com/images/I/614E+XmfeeL._AC_UL320_.jpg",
      link: "https://a.co/d/09X1VsP"
    }
]
  
/////////////////////////////////////////////////////////////////////////////////////
// redirecionamento para a página dos livros
document.querySelector("#pageBook")?.addEventListener("click", () => {
    window.location.href = "pages/books/books.html"
})

// redirecionamento para a página das listas
document.querySelector("#pageList")?.addEventListener("click", () => {
    window.location.href = "pages/lists/list.html"
})

getStarted.addEventListener("click", () => {
    body.style.overflowY = "hidden"

    // gambiarra para colocar blur no aside Trending
    asidePerfils.style.filter = "blur(5px)"
    asideTrends.style.filter = "blur(5px)"
    modalSign.classList.add("active")
})

// verifica se o Sign Up foi clicado, e então, abre o modal
signUp.addEventListener("click", () => {
    body.style.overflowY = "hidden"

    // gambiarra para colocar blur no aside Trending
    asidePerfils.style.filter = "blur(5px)"
    asideTrends.style.filter = "blur(5px)"
    modalSign.classList.add("active")
})

// verifica se o Login In foi clicado, e então, abre o modal
loginIn.addEventListener("click", () => {
    body.style.overflowY = "hidden"

    // gambiarra para colocar blur no aside Trending
    asidePerfils.style.filter = "blur(5px)"
    asideTrends.style.filter = "blur(5px)"
    modalLogin.classList.add("active")
})

/////////////////////////////////////////////////////////////////////////////////////
// Verifica se ocorreu algum clique fora do modal, e se sim, fecha o modal
document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if(target.contains(modalLogin)) {
        modalLogin.classList.remove("active")
        body.style.overflowY = "auto"
        asidePerfils.style.filter = ""
        asideTrends.style.filter = ""
    }

    if(target.contains(modalSign)) {
        modalSign.classList.remove("active")
        body.style.overflowY = "auto"
        asidePerfils.style.filter = ""
        asideTrends.style.filter = ""
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

document.addEventListener("DOMContentLoaded", () => {
    new CarouselOneElement(booksTwo, "carousel-greatest", "prev-greatest", "next-greatest")
    new CarouselOneElement(booksThree, "carousel-most-read", "prev-most-read", "next-most-read")
    new Carousel(booksOne, "first-carousel", "first-carousel-prev", "first-carousel-next");
    new Carousel(booksTwo, "second-carousel", "second-carousel-prev", "second-carousel-next")
    new Carousel(booksThree, "third-carousel", "third-carousel-prev", "third-carousel-next")
});