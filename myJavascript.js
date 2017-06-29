document.body.addEventListener('keydown', toggleRed);

function toggleRed (){
    if (this.classList.contains("red")){
        this.classList.remove("red");
    }
    else {
        this.classList.add("red");
    }
}