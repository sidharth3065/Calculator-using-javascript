
const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = "";


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            
            string = calculateExpression(string);
            input.value = string    ;
        } else if (value === 'AC') {
           
            string = "";
            input.value = string;
        } else if (value === 'DEL') {
          
            string = string.slice(0, -1);
            input.value = string;
        } else {
           
            string += value;
            input.value = string;
        }
    });
});


function calculateExpression(str) {
    try {
     
        const regExp = str.replace(/[^-()\d/*+.]/g, '');
        
        const result = new Function(`return ${regExp}`)();
        return result !== undefined ? result : "Error";
    } catch (error) {
        return "Error";
    }
}
