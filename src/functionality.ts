// Função para concatenar strings de um array, separando os elementos por vírgula,
// e substituindo a última vírgula por "e" para formar uma frase natural.
export function concatenarArrayString(arr: string[]): string {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1");
}

// Interface para representar um livro.
interface Book {
    id: number;         // ID único do livro.
    title: string;      // Título do livro.
    coverUrl: string;   // URL da capa do livro.
    link: string;       // Link de compra ou informações do livro.
}

// Classe para um carrossel que exibe múltiplos livros ao mesmo tempo.
export class Carousel {
    private books: Book[]; // Lista de livros.
    private currentIndex: number; // Índice atual do carrossel.
    private itemWidth: number; // Largura de cada item do carrossel (em pixels).
    private carouselInner: HTMLElement; // Elemento que contém os itens do carrossel.
    private prevBtn: HTMLButtonElement; // Botão para ir ao item anterior.
    private nextBtn: HTMLButtonElement; // Botão para ir ao próximo item.

    // Construtor que inicializa o carrossel com os livros e os elementos do DOM.
    constructor(book: Book[], carouselInner: string, prevBtn: string, nextBtn: string) {
        this.books = book;
        this.currentIndex = 0;
        this.itemWidth = 220; // Largura padrão de cada item.
        this.carouselInner = document.getElementById(carouselInner) as HTMLElement;
        this.prevBtn = document.getElementById(prevBtn) as HTMLButtonElement;
        this.nextBtn = document.getElementById(nextBtn) as HTMLButtonElement;

        this.init(); // Inicializa o carrossel.
    }

    // Método de inicialização.
    private init(): void {
        this.renderBooks(); // Renderiza os livros no carrossel.
        this.updateButtons(); // Atualiza o estado dos botões.
        this.addEventListeners(); // Adiciona os eventos de clique aos botões e itens.
    }

    // Renderiza os livros no carrossel.
    private renderBooks(): void {
        this.carouselInner.innerHTML = this.books.map((book, index) => `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${index + 1}° Posição</p>
            </div>
        `).join("");
    }

    // Atualiza o estado (habilitado/desabilitado) dos botões de navegação.
    private updateButtons(): void {
        this.prevBtn.disabled = this.currentIndex === 0; // Desativa se estiver no início.
        this.nextBtn.disabled = this.currentIndex >= this.books.length - 5; // Desativa se estiver no final.
    }

    // Adiciona os eventos de clique nos botões e itens do carrossel.
    private addEventListeners(): void {
        this.prevBtn.addEventListener("click", () => this.slide(-1)); // Evento para o botão "anterior".
        this.nextBtn.addEventListener("click", () => this.slide(1)); // Evento para o botão "próximo".
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e)); // Evento para clique nos itens.
    }

    // Move o carrossel na direção especificada (-1 para anterior, 1 para próximo).
    private slide(direction: number): void {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 4)); // Ajusta o índice.
        this.carouselInner.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`; // Aplica a transformação.
        this.updateButtons(); // Atualiza o estado dos botões.
    }

    // Lida com cliques nos itens do carrossel, redirecionando para o link do livro.
    private handleItemClick(e: Event): void {
        const target = e.target as HTMLElement;
        const item = target.closest(".carousel-item") as HTMLElement;
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
    private books: Book[]; // Lista de livros.
    private currentIndex: number; // Índice atual.
    private carouselInner: HTMLElement; // Elemento que contém o item do carrossel.
    private prevBtn: HTMLButtonElement; // Botão para ir ao item anterior.
    private nextBtn: HTMLButtonElement; // Botão para ir ao próximo item.

    // Construtor que inicializa o carrossel.
    constructor(book: Book[], carousel: string, prevBtn: string, nextBt: string) {
        this.books = book;
        this.currentIndex = 0;
        this.carouselInner = document.getElementById(carousel) as HTMLElement;
        this.prevBtn = document.getElementById(prevBtn) as HTMLButtonElement;
        this.nextBtn = document.getElementById(nextBt) as HTMLButtonElement;

        this.init(); // Inicializa o carrossel.
    }

    // Método de inicialização.
    private init(): void {
        this.renderCurrentBook(); // Renderiza o livro atual.
        this.updateButtons(); // Atualiza os botões.
        this.addEventListeners(); // Adiciona eventos de clique.
    }

    // Renderiza o livro atual no carrossel.
    private renderCurrentBook(): void {
        const book = this.books[this.currentIndex];
        this.carouselInner.innerHTML = `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${this.currentIndex + 1}° Posição</p>
            </div>
        `;
    }

    // Atualiza o estado dos botões.
    private updateButtons(): void {
        this.prevBtn.disabled = this.currentIndex === 0; // Desativa se estiver no início.
        this.nextBtn.disabled = this.currentIndex === this.books.length - 1; // Desativa se estiver no final.
    }

    // Adiciona eventos de clique aos botões e itens do carrossel.
    private addEventListeners(): void {
        this.prevBtn.addEventListener("click", () => this.slide(-1)); // Evento para botão "anterior".
        this.nextBtn.addEventListener("click", () => this.slide(1)); // Evento para botão "próximo".
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e)); // Evento para itens.
    }

    // Move o carrossel para o livro anterior ou próximo.
    private slide(direction: number): void {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 1)); // Ajusta o índice.
        this.renderCurrentBook(); // Atualiza o livro exibido.
        this.updateButtons(); // Atualiza os botões.
    }

    // Lida com cliques no livro exibido, redirecionando para o link.
    private handleItemClick(e: Event): void {
        const target = e.target as HTMLElement;
        const item = target.closest(".carousel-item") as HTMLElement;
        if (item) {
            const id = parseInt(item.dataset.id || "0", 10); // Obtém o ID do item clicado.
            const book = this.books.find(b => b.id === id); // Busca o livro correspondente.
            if (book) {
                window.location.href = book.link; // Redireciona para o link do livro.
            }
        }
    }
}
