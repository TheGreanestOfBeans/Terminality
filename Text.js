function Print(Text){
    var NT = document.createElement("p");
    NT.innerHTML = Text;
        var Divs = document.getElementById("terms");
        Divs.insertBefore(NT,Divs.children[Divs.children.length - 1]);
}