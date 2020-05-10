function alphabetical_order()
{   
  var txt ="";
    var str = document.getElementById("str3").value;
    var l = document.getElementById("size").value;
    //console.log(str);
   var i;
   var s = [];
   for(i in str)
    {
      txt+= str[i] + " ";
    }
    console.log(txt);
   var a = txt.split('').sort().join('');
    //console.log(a);
    document.getElementById("demo5").innerHTML = a;
  
}