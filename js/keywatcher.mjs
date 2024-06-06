// Get all neccessary elements
const transactionsFieldElement = document.querySelector("#antalTrans");
const flerradFieldElement = document.getElementById("flerrad");
const targetFieldElement = document.getElementById("percent");
const calculateButtonElement = document.getElementById("calcButton");

// Listen for the keypress of the amount of transactions field
transactionsFieldElement.addEventListener('keypress', (event)=>{
    // If keypress is 'Enter' key
    if(event.key==='Enter'){
        // Focus next element
        flerradFieldElement.focus()
    }
})

flerradFieldElement.addEventListener('keypress', (event)=>{
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