function pattern()
{
    var str2 = 'Javascript';
    var outstr =""
   
    document.getElementById("d1").innerHTML = str2;
    var x;
   
   for(i=0;i<=str2.length;i++)
   {
     outstr="";
     for(j=0;j<i;j++)
     {
      outstr +=str2[j];
    }
    document.write(outstr);
    document.write("<br>");
   }

  

}