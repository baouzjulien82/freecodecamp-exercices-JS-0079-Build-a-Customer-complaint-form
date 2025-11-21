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
  const fullFormData = validateForm();  
  isValid(fullFormData);             
});

// fonction de vérification finale de l'objet
function isValid(fullFormData) {
  const valueArray = [];
  for (let value of Object.values(fullFormData)) {
    valueArray.push(value);
  };
  console.log(!valueArray.includes(false));
  return !valueArray.includes(false);
};



