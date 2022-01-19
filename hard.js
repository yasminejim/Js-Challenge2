function whoIsHeavier(){
 
    var tom = {
      height: 9,
      weight: 8
    }
    
    var jerry = {
      height: 10,
      weight:45,
    }
    
    const jerryBMI = bmi(jerry.weight, jerry.height)
    const tomBMI = bmi(tom.weight, tom.height)
    const tomGreater = tomBMI > jerryBMI
    
   console.log("Is Tom's BMI higher than Jerrys?" + tomGreater)
  }

  function bmi(mass,height){
     return mass / (height* height);
  }
  
  whoIsHeavier()