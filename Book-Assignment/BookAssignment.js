console.log("HELLO");

function Book(title, author, noOfPages, isRead){
    this.title = title;
    this.author = author;
    this.noOfPages = noOfPages;
    this.isRead = isRead;
}

Book.prototype.info = function(){
    var isReadInterpretation;
    if(this.isRead == 1){
        isReadInterpretation = "Read";
    } else {
        isReadInterpretation = "Not Read";
    }
    
    return this.title + ", " + this.author + ", " + this.noOfPages + ", " +  isReadInterpretation;
}


const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 534, 0);
console.log(theHobbit.info());
