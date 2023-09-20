class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
		this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
	}
    
    fix(){
        this.state = this.state * 1.5;
    }
    set state(newState){
        if(newState >= 0 && newState <= 100) {
        this._state = newState;
        }
        if(newState < 0) {
            this.state = 0;
        }
        if(newState > 100) {
            this.state = 100;
        }
    }
    get state() {
        return this._state;        
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
}

class Book extends PrintEditionItem {
    type = "book";
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
    }   
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

//===================================================================

class Library {
    constructor(name){
		this.name = name;
        this.books = [];
	}

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName){
        let currentBook = this.findBookBy(`name`, bookName);
        if (currentBook) {
            this.books.splice(currentBook);
        }
        return currentBook;
    }
}
    
