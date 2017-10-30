var number1;
var outputMeters;
var outputMeters1;

function LengthConverter() {
  document.getElementById("outputMeters").innerHTML=outputMeters();
   $("#outputMeters").css("background-color", "yellow"); 
}



    function LengthConverter2() {
      document.getElementById("outputMeters1").innerHTML=outputMeters1();
       $("#outputMeters1").css("background-color", "red"); 
    }

    function outputMeters() {
      var x=parseInt(document.getElementById("inputFeet").value);
      
      if(x>0){         
      number1=cal(x);
      return number1;
    }
    else if(x<0){        
      x= "undefined";
      return x;
    }
    else if(x==0){        
      x= 0;
      return x;
    }
  }
   function cal(x){
     return x/3.2808;
   }
   function calv(x){
     if(x<0){
       return "undefined";
     }else{
      return x;
     }
    
  }
  function outputMeters1() {
    var x=parseInt(document.getElementById("inputKilometers").value);
    
    if(x>0){         
    number1=x*1000;
    return number1;
  }
  else if(x<0){        
    x= "undefined";
    return x;
  }
  else if(x==0){        
    x= 0;
    return x;
  }
}