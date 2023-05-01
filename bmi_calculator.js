function calculateBMI(weight, height) {
    
    height = height / 100;
    
    
    var bmi = weight / (height * height);
    
    
    bmi = Math.round(bmi * 100) / 100;
    
  
    return bmi;
  }
  
 
  var weight = 70; 
  var height = 170; 
  var bmi = calculateBMI(weight, height);
  console.log("BMI: " + bmi);