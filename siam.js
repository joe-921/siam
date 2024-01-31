<script src="https://cdn.jsdelivr.net/gh/brotame/advanced-webflow-forms@1/dist/awf.js"></script>

<script>
var Webflow = Webflow || [];
Webflow.push(function () {
  new AWF.MSF({hiddeButtonsOnSubmit: true, formSelector: '#msf'});
});
</script>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var genderSelect = document.getElementById('GENDER');
    var errorContainerGender = document.getElementById('Error-Msg-Gender');
    var titleSelect = document.getElementById('TITLE');
    var errorContainerTitle = document.getElementById('Error-Msg-Title');
    var firstNameInput = document.getElementById('FIRST-NAME');
    var errorContainerFirstName = document.getElementById('Error-Msg-Firstname');
    var surnameInput = document.getElementById('SURNAME');
    var errorContainerSurname = document.getElementById('Error-Msg-Surname');
    var dateofbirthInput = document.getElementById('DATE');
    var errorContainerDateofbirth = document.getElementById('Error-Msg-Dateofbirth');
    var nationalitySelect = document.getElementById('NATIONALITY');
    var eN = document.getElementById('Error-Msg-Nationality');
		var basedcityInput = document.getElementById('BASED-CITY');
    var errorContainerBasedcity = document.getElementById('Error-Msg-Basedcity');
		var emailInput = document.getElementById('EMAIL');
		var errorContainerEmail = document.getElementById('Error-Msg-Email');
		var addressInput = document.getElementById('ADDRESS');
		var errorContainerAddress = document.getElementById('Error-Msg-Address');
		var towncityInput = document.getElementById('TOWN-CITY');
		var errorContainerTowncity = document.getElementById('Error-Msg-Towncity');
		var zipcodeInput = document.getElementById('ZIPCODE');
		var errorContainerZipcode = document.getElementById('Error-Msg-Zipcode');
		var positionInput = document.getElementById('POSITION');
		var errorContainerPosition = document.getElementById('Error-Msg-Position');
		var countrySelect = document.getElementById('COUNTRY');
		var errorContainerCountry = document.getElementById('Error-Msg-Country');
		var q2Input = document.getElementById('Q2');
		var errorContainerQ2 = document.getElementById('Error-Msg-Q2');
		var q3Input = document.getElementById('Q3');
		var errorContainerQ3 = document.getElementById('Error-Msg-Q3');
		var q4Input = document.getElementById('Q4');
		var errorContainerQ4 = document.getElementById('Error-Msg-Q4');
		var q5Input = document.getElementById('Q5');
		var errorContainerQ5 = document.getElementById('Error-Msg-Q5');
		var checkboxCheck = document.getElementById('checkbox-2');
		var errorContainerCheckbox = document.getElementById('Error-Msg-Checkbox');
    var submitButton = document.getElementById('submit');
		var submitButton2 = document.getElementById('submit2');
		var formconfirm = document.getElementById('form-confirm');
		var allErrorMsg = document.getElementsByClassName('all-error-msg');
    
submitButton.addEventListener('click', validateForm);

function validateForm(event) {
        event.preventDefault(); 

      var errorMsg = [];

       // title
  if (titleSelect.value.trim() === '' && isElementVisible(titleSelect)) {
    errorContainerTitle.textContent = 'Please select a title.';
		errorMsg.push(' ');
    errorContainerTitle.style.display = 'block';
		formconfirm.style.display = 'none';
		} else {
  errorContainerTitle.style.display = 'none';
  formconfirm.style.display = 'flex';
  }

// gender
if (genderSelect.value.trim() === '' && isElementVisible(genderSelect)) {
  errorContainerGender.textContent = 'Please select a gender.';
	errorMsg.push(' ');
  errorContainerGender.style.display = 'block'; 
    formconfirm.style.display = 'none';
} else {
  errorContainerGender.style.display = 'none';
  formconfirm.style.display = 'flex';
}

      // first name
      if (firstNameInput.value.trim() === '' && isElementVisible(firstNameInput)) {
        errorContainerFirstName.textContent = 'Please enter your first name.';
				errorMsg.push(' ');
        errorContainerFirstName.style.display = 'block';
         formconfirm.style.display = 'none';
			} else {
  		errorContainerFirstName.style.display = 'none';
  formconfirm.style.display = 'flex';
      }

      // surname
      if (surnameInput.value.trim() === '' && isElementVisible(surnameInput)) {
        errorContainerSurname.textContent = 'Please enter your surname.';
				errorMsg.push(' ');
        errorContainerSurname.style.display = 'block';
        
			} else {
  		errorContainerSurname.style.display = 'none';
      }

      // Check if date of birth is
if (dateofbirthInput.value.trim() === '' && isElementVisible(dateofbirthInput)) {
errorContainerDateofbirth.textContent = 'Please enter your date of birth.';
errorMsg.push(' ');
errorContainerDateofbirth.style.display = 'block';
} else {
var dateOfBirthParts = dateofbirthInput.value.split('-');
var dateOfBirth = new Date(dateOfBirthParts[2], dateOfBirthParts[1] - 1, dateOfBirthParts[0]);
var currentDate = new Date();

			// Cal 18 yrs
  var eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);

  // date
  if (dateOfBirth > eighteenYearsAgo) {
    errorContainerDateofbirth.textContent = 'You must be at least 18 years old.';
		errorMsg.push(' ');
    errorContainerDateofbirth.style.display = 'block';
  } else {
    errorContainerDateofbirth.style.display = 'none';
  }
}

      // Nationality
      if (nationalitySelect.value.trim() === '' && isElementVisible(nationalitySelect)) {
        eN.textContent = 'Please enter your nationality.';
				errorMsg.push(' ');
        eN.style.display = 'block';
			} else {
  		eN.style.display = 'none';
          formconfirm.style.display = 'flex';
      }

      //  based
      if (basedcityInput.value.trim() === '' && isElementVisible(basedcityInput)) {
        errorContainerBasedcity.textContent = 'Please enter your based city.';
				errorMsg.push(' ');
        errorContainerBasedcity.style.display = 'block';
			} else {
  errorContainerBasedcity.style.display = 'none';
      }
      
          //  email
    if (emailInput.value.trim() === '' && isElementVisible(emailInput)) {
      errorContainerEmail.textContent = 'Please enter your email.';
			errorMsg.push(' ');
      errorContainerEmail.style.display = 'block';
    } else if (!validateEmail(emailInput.value.trim())) {
      errorContainerEmail.textContent = 'Please enter a valid email address.';
			errorMsg.push(' ');
      errorContainerEmail.style.display = 'block';
    } else {
      errorContainerEmail.style.display = 'none';
    }

  //   address 
  if (addressInput.value.trim() === '' && isElementVisible(addressInput)) {
    errorContainerAddress.textContent = 'Please enter your address.';
		errorMsg.push(' ');
    errorContainerAddress.style.display = 'block';
		} else {
  errorContainerAddress.style.display = 'none';
  }

  //   town
  if (towncityInput.value.trim() === '' && isElementVisible(towncityInput)) {
    errorContainerTowncity.textContent = 'Please enter your town/city.';
		errorMsg.push(' ');
    errorContainerTowncity.style.display = 'block';
		} else {
  	errorContainerTowncity.style.display = 'none';
  }

  //zip
  if (zipcodeInput.value.trim() === '' && isElementVisible(zipcodeInput)) {
		errorContainerZipcode.textContent = 'Please enter your zipcode.';
		errorMsg.push(' ');
    errorContainerZipcode.style.display = 'block';
		} else {
  	errorContainerZipcode.style.display = 'none';
  }

  //  pos
  if (positionInput.value.trim() === '' && isElementVisible(positionInput)) {
    errorContainerPosition.textContent = 'Please enter your position.';
		errorMsg.push(' ');
    errorContainerPosition.style.display = 'block';
		} else {
  errorContainerPosition.style.display = 'none';
  }


  //   country
  if (countrySelect.value.trim() === '' && isElementVisible(countrySelect)) {
    errorContainerCountry.textContent = 'Please select your country.';
		errorMsg.push(' ');
    errorContainerCountry.style.display = 'block';
		} else {
  errorContainerCountry.style.display = 'none';
  }

	//   Q2 
  if (q2Input.value.trim() === '' && isElementVisible(q2Input)) {
    errorContainerQ2.textContent = 'Please fill in an answer.';
		errorMsg.push(' ');
    errorContainerQ2.style.display = 'block';
		} else {
  errorContainerQ2.style.display = 'none';
  }

	// Q3
  if (q3Input.value.trim() === '' && isElementVisible(q3Input)) {
    errorContainerQ3.textContent = 'Please fill in an answer.';
		errorMsg.push(' ');
    errorContainerQ3.style.display = 'block';
		} else {
  errorContainerQ3.style.display = 'none';
  }

// Q4
  if (q4Input.value.trim() === '' && isElementVisible(q4Input)) {
    errorContainerQ4.textContent = 'Please fill in an answer.';
		errorMsg.push(' ');
    errorContainerQ4.style.display = 'block';
		} else {
  errorContainerQ4.style.display = 'none';
  }

// Q5 
  if (q5Input.value.trim() === '' && isElementVisible(q5Input)) {
    errorContainerQ5.textContent = 'Please fill in an answer.';
		errorMsg.push(' ');
    errorContainerQ5.style.display = 'block';
		} else {
  errorContainerQ5.style.display = 'none';
  }


	// Checkbox
if (!checkboxCheck.checked && isElementVisible(checkboxCheck)) {
  errorContainerCheckbox.textContent = 'Please confirm the T&C.';
		errorMsg.push(' ');
  errorContainerCheckbox.style.display = 'block';
} else {
  errorContainerCheckbox.style.display = 'none';
    formconfirm.style.display = 'flex';
}


   // S error
  if (errorMsg.length > 0) {
    showm();
    return false;
  }
}

function showm() {
  var allErrorMsg = document.getElementsByClassName('all-error-msg');
  for (var i = 0; i < allErrorMsg.length; i++) {
    allErrorMsg[i].style.display = 'block';
  }
}

  function isElementVisible(element) {
    return element.offsetParent !== null;
  }
  
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

});
</script>
