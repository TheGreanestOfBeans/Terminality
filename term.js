console.log("unDOm")

window.addEventListener("DOMContentLoaded", (event) =>{
    boot();
    console.log("Dom")
    var CmdBox = document.getElementById("cmd");
    CmdBox.addEventListener("focusout", (fevent) => {
        CmdBox.focus();
        
    });
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

