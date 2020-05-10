function switchCase(string){
    var swapped = [];
    var string = document.getElementById("str").value;
    var l = string.length;
    for(var i=0;i<l;i++)
    {
            if(string[i] == string[i].toUpperCase()){
               // console.log(string[i].toLowerCase());
                swapped.push(string[i].toLowerCase());
                //console.log(string[i]);
            }
            if(string[i] == string[i].toLowerCase())
            {
                //console.log(string[i].toUpperCase());
                swapped.push(string[i].toUpperCase());
               // console.log(string[i]);
            }
    }
    
    document.getElementById("res").innerHTML = swapped.join("");

    
}





