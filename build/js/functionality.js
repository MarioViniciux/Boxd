export function concatenarArrayString(arr) {
    return arr.join(",").replace(/, ([^,]*)$/, " e $1");
}
export class Carousel {
    constructor(book) {
        this.books = book;
        this.currentIndex = 0;
        this.itemWidth = 220; // 200px width + 20px margin-right
        this.carouselInner = document.getElementById("carouselInner");
        this.prevBtn = document.getElementById("prevBtn");
        this.nextBtn = document.getElementById("nextBtn");
        this.init();
    }
    init() {
        this.renderBooks();
        this.updateButtons();
        this.addEventListeners();
    }
    renderBooks() {
        this.carouselInner.innerHTML = this.books.map((book, index) => `
            <div class="carousel-item" data-id="${book.id}">
                <img src="${book.coverUrl}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${index + 1}° Posição</p>
            </div>
        `).join("");
    }
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.books.length - 4; // Assuming 4 items visible at once
    }
    addEventListeners() {
        this.prevBtn.addEventListener("click", () => this.slide(-1));
        this.nextBtn.addEventListener("click", () => this.slide(1));
        this.carouselInner.addEventListener("click", (e) => this.handleItemClick(e));
    }
    slide(direction) {
        this.currentIndex = Math.max(0, Math.min(this.currentIndex + direction, this.books.length - 4));
        this.carouselInner.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
        this.updateButtons();
    }
    handleItemClick(e) {
        const target = e.target;
        const item = target.closest(".carousel-item");
        if (item) {
            const id = parseInt(item.dataset.id || "0", 10);
            const book = this.books.find(b => b.id === id);
            if (book) {
                window.location.href = book.link;
            }
        }
    }
}
