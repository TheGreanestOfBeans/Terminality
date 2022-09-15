console.log("unDOm")

window.addEventListener("DOMContentLoaded", (event) =>{
    boot();
    console.log("Dom")
    var CmdBox = document.getElementById("cmd");

    var NT = document.createElement("p");
    NT.innerHTML = "Sci1132@231.231.321.312: ▋";
    var Divs = document.getElementById("terms");
        Divs.insertBefore(NT,Divs.children[Divs.children.length]);
    CmdBox.addEventListener("keyup", (event) => {
        if (event.keyCode === 13){
            //alert(CmdBox.value);
            Print(NT.innerHTML.substring(0, NT.innerHTML.length - 1));

            CMD(CmdBox.value);

            CmdBox.value = "";

        }
        NT.innerHTML = "Sci1132@231.231.321.312: " + CmdBox.value+"▋";
        
    });
});

function CMD(CMD){
    var TXT = CMD.toLowerCase();

    switch(TXT){
        case "help":
            Print(TXT+": Showing Help page, ");
            Print("whoami - Shows who you are and what you are connected to");
            Print("help - Shows this page.");
            Print("exit - Returns to default os.");
            Print("ls - Shows avaliable files to open with filename");
            
        break;
        case "whoami":
           Print("`Sci1132` Connect to `SemiPub` @ 231.231.321.312");
        break;
        case "ls":
            Print("BreachLog.txt");
        break;
        case "breachlog.txt":
            BreachLog1Read();
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