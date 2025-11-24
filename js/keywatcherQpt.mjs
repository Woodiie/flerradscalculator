// Get all neccessary elements
const transactionsFieldElement = document.querySelector("#transactions");
const qptFieldElement = document.getElementById("qpt");
const targetFieldElement = document.getElementById("qptTarget");
const calculateButtonElement = document.getElementById("calcButton");

// Listen for the keypress of the amount of transactions field
transactionsFieldElement.addEventListener('keypress', (event)=>{
    // If keypress is 'Enter' key
    if(event.key==='Enter'){
        // Focus next element
        qptFieldElement.focus()
    }
})

qptFieldElement.addEventListener('keypress', (event)=>{
    // If keypress is 'Enter' key
    if(event.key ==='Enter'){
        // Focus next element
        targetFieldElement.focus()
    }
})

targetFieldElement.addEventListener('keypress', (event)=>{
    // If keypress is 'Enter' key
    if(event.key === 'Enter'){
      // Run calculation
      calculateButtonElement.click();
    }
})