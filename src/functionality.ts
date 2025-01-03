export function concatenarArrayString(arr: string[]): string {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1")
}

interface Book {
    id: number;
    title: string;
    coverUrl: string;
    link: string;
}

export class Carousel {
    private books: Book[]
    private currentIndex: number;
    private itemWidth: number;
    private carouselInner: HTMLElement;
    private prevBtn: HTMLButtonElement;
    private nextBtn: HTMLButtonElement;

    constructor(book: Book[]) {
        this.books = book
        this.currentIndex = 0;
        this.itemWidth = 220; 
        this.carouselInner = document.getElementById("carouselInner") as HTMLElement;
        this.prevBtn = document.getElementById("prevBtn") as HTMLButtonElement;
        this.nextBtn = document.getElementById("nextBtn") as HTMLButtonElement;

        this.init();
    }

    private init(): void {
        this.renderBooks();
        this.updateButtons();
        this.addEventListeners();
    }

    private renderBooks(): void {
        this.carouselInner.innerHTML = this.books.map((book, index) => `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${index + 1}° Posição</p>
            </div>
        `).join("");
    }

    private updateButtons(): void {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.books.length - 4; 
    }

    private addEventListeners(): void {
        this.prevBtn.addEventListener("click", () => this.slide(-1));
        this.nextBtn.addEventListener("click", () => this.slide(1));
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e));
    }

    private slide(direction: number): void {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 4));
        this.carouselInner.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
        this.updateButtons();
    }

    private handleItemClick(e: Event): void {
        const target = e.target as HTMLElement;
        const item = target.closest(".carousel-item") as HTMLElement;
        if (item) {
            const id = parseInt(item.dataset.id || "0", 10);
            const book = this.books.find(b => b.id === id);
            if (book) {
                window.location.href = book.link;
            }
        }
    }
}