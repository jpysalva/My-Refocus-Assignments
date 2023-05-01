function calculateBMI(weight, height) {
    // Convert height to meters
    height = height / 100;
    
    // Calculate BMI
    var bmi = weight / (height * height);
    
    // Round to two decimal places
    bmi = Math.round(bmi * 100) / 100;
    
    // Return the BMI value
    return bmi;
  }
  
  // Example usage
  var weight = 70; // kg
  var height = 170; // cm
  var bmi = calculateBMI(weight, height);
  console.log("BMI: " + bmi);