function findlargest()
{
    var a = parseInt(f1.value); //document.getElementsById("f1").value;
    console.log(a);
    var b = parseInt(f2.value);
    console.log(b);
    if(a>b)
    {
        document.getElementById("demo4").innerHTML = a;
    }
    else
    {
       document.getElementById("demo4").innerHTML = b; 
    }

}