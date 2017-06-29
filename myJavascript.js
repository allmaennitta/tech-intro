document.body.addEventListener('keydown', toggleRed);
document.getElementsByClassName('ccademy')[0].addEventListener('mouseover', addParagraph);

function toggleRed (){
    if (this.classList.contains("red")){
        this.classList.remove("red");
    }
    else {
        this.classList.add("red");
    }
}

function addParagraph (){
    this.appendChild(document.createTextNode("This is a paragraph."));
}

