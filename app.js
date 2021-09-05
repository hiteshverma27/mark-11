const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const output = document.querySelector(".output")

function compareValues(sum, luckyNumber){
  if(sum%luckyNumber===0){
    output.innerHTML="Yes your birthday is lucky!!"
  } else{
    output.innerHTML="Sorry no luck, but you are awesome!!"
  }
}

function checkBirhdayIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(sum&&dob)
  compareValues(sum, luckyNumber.value)
  else 
  output.innerHTML="Enter both fields";
}

function calculateSum(dob){
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for(let index = 0;index<dob.length; index++){
    sum = sum + Number(dob.charAt(index)); 
  }
  return sum;
}

checkNumberBtn.addEventListener('click', checkBirhdayIsLucky);

