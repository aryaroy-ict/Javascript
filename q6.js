function truncate(str1,num)
{
    var str1 = document.getElementById("str1").value;
    var num = document.getElementById("num").value;
    var s;
    
    console.log(str1);
    console.log(num);
    if(str1.length<=num)
    {
        console.log(str1);
    }
    else 
    {
        s = str1.slice(0,num) + "......";
        document.getElementById("res1").innerHTML = s;
    }
    
}