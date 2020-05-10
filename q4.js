function sumsqr(){
    var x = [];
    var size = 5;
    var i,sum;
    var sqr = [];
    for(i=0;i<size;i++)
    {
        x[i] = Number(prompt("enter elements" + (i+1)));
    }
    //console.log(x);
    document.getElementById("demo2").innerHTML = x;
    for(i=0;i<size;i++)
    {
        sqr[i] = Math.pow(x[i], 2);
        sum = sqr.reduce(function (a,b){
        return a+b;},0);
    }
    console.log(sqr);
    document.getElementById("sum").innerHTML = sum;
}