function freq()
    {
        var ar = [];
        var size = 5;
        var mf = 1;
        var item,i;
        var m = 0;
        for(i=0;i<size;i++)
        {
            ar[i] = prompt("enter elements" + (i+1));
        }
        console.log(ar);
        document.getElementById("demo1").innerHTML = ar;
        for(i=0;i<=size;i++)
       {   
             if(ar[i]===ar[0])
                {
                    
                    item = ar[i];
                    m++;
                }
            if(ar[0]==null)
            {
                m=0;
            }
        }
    
        

        //console.log(item);
        document.getElementById("fre").innerHTML = item;
        document.getElementById("time").innerHTML = m;
      // console.log(ar[3]);



    }
