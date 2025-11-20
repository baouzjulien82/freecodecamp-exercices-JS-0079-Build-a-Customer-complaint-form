// définition des variables principales
const formulaire = document.getElementById('form');
const personalInfo = document.getElementById('personal-info');
const productInfo = document.getElementById('product-info');
const complaintGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById('complaint-description-container');
const desiredSolution = document.getElementById('solutions-group');
const solutionDescription = document.getElementById('solution-description-container');
const submitBtn = document.getElementById('submit-btn');

// variables spécifiques
const isEmptyFullName = formulaire.elements['full-name'].value.trim()  === "";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = emailRegex.test(formulaire.elements['email'].value);

// Fonction de vérification des input
function checkErrors(e) {
  e.preventDefault();

}


// Event listener sur submit btn
submitBtn.addEventListener('submit', checkErrors);
