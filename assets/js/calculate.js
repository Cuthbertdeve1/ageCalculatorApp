//variables for current times
  let today = new Date;
  let currentDay = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();
  //function to calculater age
   function calculaterAge(dayInput,monthInput,yearInput ){
  clearErrors();
  //calculating age in years
  let ageYears = currentYear - yearInput;
    //calculating age in Months
let ageMonths = currentMonth - monthInput;
      if(ageMonths<0){
        ageMonths = ageMonths + 12;
        ageYears--;
      }
      //calculating age in days
      let ageDays = currentDay - dayInput;
      if (ageDays<0) {
        ageMonths--;
        if(ageMonths<0){
          ageMonths = 11;
          ageYears--;
        }
        let daysInPrevMnth = new Date(currentYear,currentMonth-1,0);
        let days = daysInPrevMnth.getDate();
        ageDays +=days;
      }
      //displaying age values
        document.getElementById('myYears').innerHTML=(ageYears);
        document.getElementById('myMonths').innerHTML=( ageMonths);
        document.getElementById('myDays').innerHTML=(  ageDays);
}
  // Function to validate input fields
function validateInputFields() {
      clearErrors();
      //clearAgeDisplay();

      let dayIn =document.getElementById('dayInput').value;
      let yearIn = document.getElementById('yearInput').value;
      let monthIn = document.getElementById('monthInput').value;
    // Initialize an empty error message
    let valid = true;

            // Check if the day is valid for the given month and year
           const daysInMonth = new Date(yearIn, monthIn, 0).getDate();
           if (dayIn > daysInMonth) {
             errorShow('validateDay',"Must be a valid date");
               valid = false;
             }
             // Check if the day field value is a correct day
              if (dayIn<1 || dayIn > 31 || isNaN(dayIn)){
                errorShow("validateDay","Must be a valid day");
                  valid = false;
                  }

    if (dayIn.trim() === '' ) {
      errorShow("validateDay","This field is required");
        valid = false;
    }

        if (monthIn < 1 || monthIn > 12 || isNaN(monthIn)) {
          errorShow('validateMonth',"MUst be a valid month");
              valid = false;
        }
    // Check if the Month field is empty
    if (monthIn.trim() === '') {
      errorShow("validateMonth","This field is required");
      valid = false;
    }
    if (yearIn<1800) {
       errorShow('validateYear','Must be a validy year');
       valid = false;
   }
   if(yearIn>currentYear || (currentYear==yearIn && (currentMonth < monthIn || currentDay < dayIn))  || isNaN(yearIn)){
    errorShow('validateYear','Must be in the past');
    valid = false;
  }
    // Check if the Year field is empty
    if (yearIn.trim() === '') {
    errorShow("validateYear","This field is required");
     valid = false;
    }
// If there are no errors processed to calculations
    if (valid) {
      calculaterAge(dayIn,monthIn,yearIn );
    }
}
function errorShow(errorId, errorMessage) {
  document.getElementById(errorId).innerHTML= errorMessage;
  let labelField = document.querySelectorAll('label');
  labelField.forEach(element => {
    element.classList.add('errors');
    //element.style.color = 'hsl(0, 100%, 67%)';
  });
  let inputFields = document.querySelectorAll('input');
  inputFields.forEach(input => {
      input.classList.add('errors'); // Styles the border of input fields with an error to red
  });
}

function clearErrors() {
// Clear any existing error messages
document.getElementById('validateDay').innerText="";
document.getElementById('validateMonth').innerHTML="";
document.getElementById('validateYear').innerHTML="";
//Clear
document.getElementById('myYears').innerText = "--";
document.getElementById('myMonths').innerText = "--";
document.getElementById('myDays').innerText = "--";

  document.getElementById('dayInput').addEventListener('input', function () {
        document.getElementById('validateDay').innerText = "";
        //document.querySelectorAll('label')[0].classList.remove('errors');
        this.classList.remove('errors'); // Remove error styling
    });
    document.getElementById('monthInput').addEventListener('input', function () {
          document.getElementById('validateMonth').innerText = "";
            this.classList.remove('errors'); // Remove error styling
      });
      document.getElementById('yearInput').addEventListener('input', function () {
            document.getElementById('validateYear').innerText = "";
              this.classList.remove('errors');
        });
        let errLables = document.querySelectorAll('label');
        errLables.forEach(element => {
          element.classList.remove('errors');
        });
        let errInput = document.querySelectorAll('input');
        errInput.forEach(element => {
          element.classList.remove('errors');
        });
      }
document.querySelector('.btn').addEventListener('click',validateInputFields);
