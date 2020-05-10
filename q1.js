function prime(){
    var array = [];
    var size = 10;
    var i;
    var result = true;
    for(i=0;i<size;i++)
    {
        array[i] = prompt("enter elements" + (i+1));
    }
    console.log(array);
    document.getElementById("demo").innerHTML = array;
    document.getElementById("first").innerHTML = array[0];
    if(array[0]==1)
    {
        result = false;
        
    }
    for(i=2;i<array[0];i++)
    {   
       if(array[0]%2 == 0)  
       {
           result = false;
            break;
       }
      
       
    }
    document.getElementById("pri").innerHTML = result;
    
    

}