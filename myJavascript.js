document.body.addEventListener('keydown', toggleRed);
document.getElementsByClassName('ccademy')[0].addEventListener('mouseover', addParagraph);
document.addEventListener('DOMContentLoaded', buildTextblock);

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

var GOT = {
    "Arya Stark":           "Maisie Williams",
    "Cersei Baratheon":     "Lena Headey",
    "Daenerys Targaryen":   "Emilia Clarke",
    "Jon Snow":             "Kit Harington",
    "Sansa Stark":          "Sophie Turner",
    "Ser Jaime Lannister":  "Nikolaj Coster-Waldau",
    "Ser Jorah Mormont":    "Iain Glen",
    "Theon Greyjoy":        "Alfie Allen",
    "Tyrion Lannister":     "Peter Dinklage"
}

function buildTextblock (){
    var section = document.createElement("section");
    section.classList.add("got"); //add class

    for (var key in GOT) {
        var txt = document.createTextNode(key + " ======> " + GOT[key]);
        var p = document.createElement("P");
        p.appendChild(txt);
        section.appendChild(p);
    }
    document.body.appendChild(section);
}

