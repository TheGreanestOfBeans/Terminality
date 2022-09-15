var url = "/Usr.txt";
document.addEventListener('DOMContentLoaded', () => {
var txt = document.getElementById("ex");
fetch(url)
    .then(x => x.text() )
    .then(sampleResp =>  {
        console.log(sampleResp);
        txt.innerHTML = sampleResp;
    });
});


