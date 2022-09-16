function CMD(txt){
    var cmd = txt.toLowerCase();
    switch(cmd)
    {
     default:
        if (IsFile(cmd)){
            ReturnFile(cmd);
        }
        else{
            Print("Unknown command");   
        }
    break;
    case "help":
        Print("Help, ");
        Print("Ls - list files");
        Print("Help - this menu");
    break;
    case "ls":
        ListFiles();
    break;
    }
}