// Função para concatenar strings de um array, separando os elementos por vírgula,
// e substituindo a última vírgula por "e" para formar uma frase natural.
export function concatenarArrayString(arr) {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1");
}
// Classe para um carrossel que exibe múltiplos livros ao mesmo tempo.
export class Carousel {
    // Construtor que inicializa o carrossel com os livros e os elementos do DOM.
    constructor(book, carouselInner, prevBtn, nextBtn) {
        this.books = book;
        this.currentIndex = 0;
        this.itemWidth = 220; // Largura padrão de cada item.
        this.carouselInner = document.getElementById(carouselInner);
        this.prevBtn = document.getElementById(prevBtn);
        this.nextBtn = document.getElementById(nextBtn);
        this.init(); // Inicializa o carrossel.
    }
    // Método de inicialização.
    init() {
        this.renderBooks(); // Renderiza os livros no carrossel.
        this.updateButtons(); // Atualiza o estado dos botões.
        this.addEventListeners(); // Adiciona os eventos de clique aos botões e itens.
    }
    // Renderiza os livros no carrossel.
    renderBooks() {
        this.carouselInner.innerHTML = this.books.map((book, index) => `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${index + 1}° Posição</p>
            </div>
        `).join("");
    }
    // Atualiza o estado (habilitado/desabilitado) dos botões de navegação.
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0; // Desativa se estiver no início.
        this.nextBtn.disabled = this.currentIndex >= this.books.length - 5; // Desativa se estiver no final.
    }
    // Adiciona os eventos de clique nos botões e itens do carrossel.
    addEventListeners() {
        this.prevBtn.addEventListener("click", () => this.slide(-1)); // Evento para o botão "anterior".
        this.nextBtn.addEventListener("click", () => this.slide(1)); // Evento para o botão "próximo".
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e)); // Evento para clique nos itens.
    }
    // Move o carrossel na direção especificada (-1 para anterior, 1 para próximo).
    slide(direction) {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 4)); // Ajusta o índice.
        this.carouselInner.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`; // Aplica a transformação.
        this.updateButtons(); // Atualiza o estado dos botões.
    }
    // Lida com cliques nos itens do carrossel, redirecionando para o link do livro.
    handleItemClick(e) {
        const target = e.target;
        const item = target.closest(".carousel-item");
        if (item) {
            const id = parseInt(item.dataset.id || "0", 10); // Obtém o ID do item clicado.
            const book = this.books.find(b => b.id === id); // Busca o livro correspondente pelo ID.
            if (book) {
                window.location.href = book.link; // Redireciona para o link do livro.
            }
        }
    }
}
// Classe para um carrossel que exibe apenas um livro por vez.
export class CarouselOneElement {
    // Construtor que inicializa o carrossel.
    constructor(book, carousel, prevBtn, nextBt) {
        this.books = book;
        this.currentIndex = 0;
        this.intervalID = null;
        this.intervalDuration = 10000;
        this.carouselInner = document.getElementById(carousel);
        this.prevBtn = document.getElementById(prevBtn);
        this.nextBtn = document.getElementById(nextBt);
        this.init(); // Inicializa o carrossel.
    }
    // Método de inicialização.
    init() {
        this.renderCurrentBook(); // Renderiza o livro atual.
        this.updateButtons(); // Atualiza os botões.
        this.addEventListeners(); // Adiciona eventos de clique.
        this.autoSlide(); // Atualiza o livro após 10 ou 20 segunods (a depender de se houve ou não interação do usuário)
    }
    autoSlide() {
        if (this.intervalID !== null) {
            clearInterval(this.intervalID);
        }
        this.intervalID = setInterval(() => {
            if (this.currentIndex >= this.books.length - 1) {
                this.currentIndex = -1;
            }
            else {
                this.slide(1);
            }
        }, this.intervalDuration);
    }
    // Renderiza o livro atual no carrossel.
    renderCurrentBook() {
        const book = this.books[this.currentIndex];
        this.carouselInner.innerHTML = `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${this.currentIndex + 1}° Posição</p>
            </div>
        `;
    }
    handleButtonClick(direction) {
        this.slide(direction);
        // Atualiza a duração do intervalo para 20 segundos e reinicia
        this.intervalDuration = 20000;
        this.autoSlide();
    }
    // Atualiza o estado dos botões.
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0; // Desativa se estiver no início.
        this.nextBtn.disabled = this.currentIndex === this.books.length - 1; // Desativa se estiver no final.
    }
    // Adiciona eventos de clique aos botões e itens do carrossel.
    addEventListeners() {
        this.prevBtn.addEventListener("click", () => this.handleButtonClick(-1)); // Evento para botão "anterior".
        this.nextBtn.addEventListener("click", () => this.handleButtonClick(1)); // Evento para botão "próximo".
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e)); // Evento para itens.
    }
    // Move o carrossel para o livro anterior ou próximo.
    slide(direction) {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 1)); // Ajusta o índice.
        this.renderCurrentBook(); // Atualiza o livro exibido.
        this.updateButtons(); // Atualiza os botões.
    }
    // Lida com cliques no livro exibido, redirecionando para o link.
    handleItemClick(e) {
        const target = e.target;
        const item = target.closest(".carousel-item");
        if (item) {
            const id = parseInt(item.dataset.id || "0", 10); // Obtém o ID do item clicado.
            const book = this.books.find(b => b.id === id); // Busca o livro correspondente.
            if (book) {
                window.location.href = book.link; // Redireciona para o link do livro.
            }
        }
    }
}
