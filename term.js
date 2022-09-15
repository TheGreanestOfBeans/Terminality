console.log("unDOm")

window.addEventListener("DOMContentLoaded", (event) =>{
    Print("Welcome to Terminality v1.0"); 
    Print("This terminal is for internal use only! If you are not a SATCOMP employee log off immediately!");
    console.log("Dom")
    var CmdBox = document.getElementById("cmd");

    var NT = document.createElement("p");
    NT.innerHTML = "Guest@231.231.321.312: ";
    var Divs = document.getElementById("terms");
        Divs.insertBefore(NT,Divs.children[Divs.children.length]);
    CmdBox.addEventListener("keyup", (event) => {
        if (event.keyCode === 13){
            //alert(CmdBox.value);
            Print(NT.innerHTML);

            CMD(CmdBox.value);

            CmdBox.value = "";

        }
        NT.innerHTML = "Guest@231.231.321.312: " + CmdBox.value;
        
    });
});

function CMD(CMD){
    var TXT = CMD.toLowerCase();

    switch(TXT){
        case "help":
            Print(TXT+": Help page, ");
            Print("whoami - Shows who you are and what you are connected to");
            P
        break;
        case "whoami":
           Print("`Guest` Connect to `SemiPub` 231.231.321.312");
        break;
        case "":
            Print();
        break;
        case "exit":
            close();
        break;
        default:
            Print(TXT+ ": Unknown Command");
        break;
        
    }
}