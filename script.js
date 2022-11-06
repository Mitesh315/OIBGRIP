let display = document.getElementById('input-box');
let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).map( button => {
    button.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        if(buttonText == "x"){
            buttonText = "*";
            string = string + buttonText;
            display.value = string;
        }
        else if(buttonText == '='){
            string = eval(string);
            display.value = string;
        }
        else if(buttonText == 'C'){
            string = "";
            display.value = string;
        }
        else{ 
            string = string + buttonText;
            display.value = string;
           }        
    })
})
