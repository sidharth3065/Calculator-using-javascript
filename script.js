// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
        
//     })
// })

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
