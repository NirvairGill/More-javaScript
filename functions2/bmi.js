const calculateBMI = (heightInCms, weightInKilograms) => {
  let heightInMeters = heightInCms / 100;
  let bmi =(weightInKilograms / (heightInMeters**2));
  return bmi.toFixed(2);
}


calculateBMI(180, 80); // 24.69