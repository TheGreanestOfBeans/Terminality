function IsFile(filename){
    if (filename != ""){
    var http = new XMLHttpRequest();
    http.open('HEAD', "UAF/"+filename, false);
    http.send();
    return http.status!=404;
    }
    else{
        return false;
    }
}
function ReturnFile(filename){
    fetch("UAF/"+filename)
        .then((data) => data.text())
        .then(data => Print(data));
}
function ListFiles(){
    fetch("UAF/main.tree")
        .then((data) => data.text())
        .then(data => Print(data));
}
    