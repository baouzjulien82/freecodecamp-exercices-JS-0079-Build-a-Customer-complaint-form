// définition des variables principales
const formulaire = document.getElementById('form');
const personalInfo = document.getElementById('personal-info');
const productInfo = document.getElementById('product-info');
const complaintGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById('complaint-description-container');
const desiredSolution = document.getElementById('solutions-group');
const solutionDescription = document.getElementById('solution-description-container');
const submitBtn = document.getElementById('submit-btn');


// Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const orderNumRegex = /^2024\d{10}$/;
const productCodeRegex = /^[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d$/i;

// variables spécifiques de filtre
const isEmptyFullName = formulaire.elements['full-name'].value.trim()  === "";
const isEmailValid = emailRegex.test(formulaire.elements['email'].value);
const isValidOrderNum = orderNumRegex.test(formulaire.elements['order-no'].value);
const isValidProductCode = productCodeRegex.test(formulaire.elements['product-code'].value);
const isPositiveQuantity = Number(formulaire.elements['quantity'].value) >= 1;
const isAtLeastOneChecked = complaintGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
const iscomplaintDescription = complaintDescription.value.length > 19 && complaintGroup.querySelector('#other-complaint:checked') !== null;
const isSelectedSolution = desiredSolution.querySelectorAll('input[type="radio"]:checked').length > 0;
const isSolutionDescription = solutionDescription.value.length > 19 && desiredSolution.querySelector('#other-solution:checked') !== null;

// Fonction de vérification des input
function checkErrors(e) {
  e.preventDefault();

}


// Event listener sur submit btn
submitBtn.addEventListener('submit', checkErrors);
