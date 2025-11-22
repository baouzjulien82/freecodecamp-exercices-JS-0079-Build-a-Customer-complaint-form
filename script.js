// Version initiale
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
const orderNumRegex = /^2024\d{6}$/;
const productCodeRegex = /^[A-Z]{2}\d{2}-[A-Z]\d{3}-[A-Z]{2}\d$/i;

// Fonction de validation des éléments du formulaire
function validateForm(){
  // variables spécifiques de filtre
const isNotEmptyFullName = formulaire.elements['full-name'].value.trim() !== "";
const isEmailValid = emailRegex.test(formulaire.elements['email'].value);
const isValidOrderNum = orderNumRegex.test(formulaire.elements['order-no'].value);
const isValidProductCode = productCodeRegex.test(formulaire.elements['product-code'].value);
const isPositiveQuantity = Number(formulaire.elements['quantity'].value) >= 1;
const isAtLeastOneChecked = complaintGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
const isComplaintDescription = complaintDescription.querySelector('textarea').value.length > 19 && complaintGroup.querySelector('#other-complaint:checked') !== null;
const isSelectedSolution = desiredSolution.querySelectorAll('input[type="radio"]:checked').length > 0;
const isSolutionDescription = solutionDescription.querySelector('textarea').value.length > 19 && desiredSolution.querySelector('#other-solution:checked') !== null;

// Objet - items : valide ou non
  const fullFormData = {
        'full-name': isNotEmptyFullName,
        'email': isEmailValid,
        'order-no': isValidOrderNum,
        'product-code': isValidProductCode,
        'quantity': isPositiveQuantity,
        'complaints-group': isAtLeastOneChecked,
        'complaint-description': isComplaintDescription,
        'solutions-group': isSelectedSolution,
        'solution-description': isSolutionDescription
    };
    return fullFormData;
};

// Event listener sur submit-form
formulaire.addEventListener('submit', (e) => {
  e.preventDefault();  
  isValid(validateForm);             
});

// fonction de vérification finale de l'objet
function isValid(validateForm) {
  const object = validateForm();
  const allValid = Object.values(object).every(value => value === true);
  return allValid;
}


// Modification CSS sur les filtres
formulaire.elements['full-name'].addEventListener('change', (e) => {
  const isNotEmptyFullName = e.target.value.trim() !== "";
  formulaire.elements['full-name'].style.borderColor = isNotEmptyFullName ? "green" : "red";
});
formulaire.elements['email'].addEventListener('change', (e) => {
  const isEmailValid = emailRegex.test(e.target.value);
  formulaire.elements['email'].style.borderColor = isEmailValid ? "green" : "red";
});
formulaire.elements['order-no'].addEventListener('change', (e) => {
  const isValidOrderNum = orderNumRegex.test(e.target.value);
  formulaire.elements['order-no'].style.borderColor = isValidOrderNum ? "green" : "red";
});
formulaire.elements['product-code'].addEventListener('change', (e) => {
  const isValidProductCode = productCodeRegex.test(e.target.value);
  formulaire.elements['product-code'].style.borderColor = isValidProductCode ? "green" : "red";
});
formulaire.elements['quantity'].addEventListener('change', (e) => {
  const isPositiveQuantity = Number(e.target.value) >= 1;
  formulaire.elements['quantity'].style.borderColor = isPositiveQuantity ? "green" : "red";
});
const checkboxes = complaintGroup.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const isAtLeastOneChecked =
      complaintGroup.querySelectorAll('input[type="checkbox"]:checked').length > 0;
    complaintGroup.style.borderColor = isAtLeastOneChecked ? "green" : "red";
  });
});
complaintDescription.querySelector('textarea').addEventListener('change', (e) => {
  const isComplaintDescription = e.target.value.length > 19 && complaintGroup.querySelector('#other-complaint:checked') !== null;
  complaintDescription.querySelector('textarea').style.borderColor = isComplaintDescription ? "green" : "red";
});
const radioBtn = desiredSolution.querySelectorAll('input[type="radio"]');
radioBtn.forEach(btn => {
  btn.addEventListener('change', () => {
    const isSelectedSolution = desiredSolution.querySelectorAll('input[type="radio"]:checked').length > 0;
    desiredSolution.style.borderColor = isSelectedSolution ? "green" : "red";
  });
});
solutionDescription.querySelector('textarea').addEventListener('change', (e) => {
  const isSolutionDescription = e.target.value.length > 19 && desiredSolution.querySelector('#other-solution:checked') !== null;
solutionDescription.querySelector('textarea').style.borderColor = isSolutionDescription ? "green" : "red";
});
