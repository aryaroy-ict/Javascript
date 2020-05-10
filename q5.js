function OddorEven()
{
    var x = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var i;
    var size = x.length;

  /*  for(i=0;i<size;i++)
    {
        x[i] = Number(prompt("Enter the elements" + (i+1)));
    }*/
   // document.getElementById("demo2").innerHTML = x;
   document.getElementById("demo3").innerHTML = x;
    for(i=0;i<size;i++)
    {
        if(x[i]%2==0)
        {
            console.log(x[i]);
           // document.getElementsById("res").innerHTML = x[i];
            console.log("even number");
            
        }
        else 
        {
            console.log(x[i]);
            console.log("odd number");
        }
    }
}