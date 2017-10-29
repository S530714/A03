var number1;


function LengthConverter() {
  document.getElementById("outputMeters").innerHTML=outputMeters();
   $("#outputMeters").css("background-color", "yellow"); 
}



    function LengthConverter2() {
      document.getElementById("outputMeters1").innerHTML=outputMeters1();
       $("#outputMeters1").css("background-color", "red"); 
    }

    function outputMeters(x) {
      var x=parseInt(document.getElementById("inputFeet").value);
      
      if(x>0){         
      number1= x/3.2808;
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