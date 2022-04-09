let buttons = document.querySelectorAll('.numkey');
let screen = document.querySelector('.result');
const SciSection = document.querySelector('.SciSection');
// SciSection.style.display = 'none';

let SciBtn = document.getElementById('SciBtn');
SciBtn.addEventListener('click', () => {

    SciSection.style.display = 'block';

    console.log('scikey work');

});

const closeSciBtn = document.getElementById('closeSciBtn');
closeSciBtn.addEventListener('click', () => {
    SciSection.style.display = 'none';
    // SciSection.classList.toggle('anime');

} );

const backspace = (e) => {
    // const backkey= document.getElementById('backkey');
    const size = screen.value.length;
    console.log(size);

    screen.value = screen.value.substring(0,size-1)
    // console.log(clearNum);

    console.log('clerrrrrr');
}


let screenvalue = '';
buttons.forEach( (items) => {
    
    items.addEventListener('click', (e) => {
        
        // for getting length of screen value
        const size = screen.value.length;

        // for getting substring of "screen value - 1"
        substr = screen.value.substring(0, size-1);
        
        // for getting substring of screen value
        screenstr = screen.value.substring(0, size);
        
        const buttonText = e.target.innerText;
        // console.log(buttonText);

        const backSpcBtn = document.getElementById('backSpcBtn');
        backSpcBtn.addEventListener('click', () => {
            screenvalue =  substr;
            screen.value = screenvalue
        });

        if (buttonText == '!') {

            f = 1;
            
            for(i = 2; i <= screenstr; i++)
                f = f*i;
            screen.value = f;
        }
        else if(buttonText == '%'){   
            
            screen.value = screenstr /100
        }
        else if( buttonText == 'log'){
            screenvalue = 'Math.log(';
            screen.value = screenvalue;
        }
        
        else if( buttonText == '√'){
            screenvalue = 'Math.sqrt(';
            screen.value = screenvalue;
        }
        else if( buttonText == '3√'){
            screenvalue = 'Math.cbrt(';
            screen.value = screenvalue;
        }
        
        else if( buttonText == 'l2e'){
            screenvalue = 'Math.LOG2E';
            screen.value = screenvalue;
        }
        else if( buttonText == 'l10e'){
            screenvalue = 'Math.LOG10E';
            screen.value = screenvalue;
        }
        else if( buttonText == 'π'){
            screenvalue = 'Math.PI';
            screen.value = screenvalue;
        }
        else if( buttonText == 'e'){
            screenvalue = 'Math.E';
            screen.value = screenvalue;
        }
        else if( buttonText == 'exp'){
            screenvalue = 'Math.exp(';
            
            screen.value = screenvalue;
        }
        
        else if( buttonText == 'sin'){
            
            screenvalue = 'Math.sin(';
            screen.value = screenvalue;
        }
        else if (buttonText == 'cos'){
            screenvalue = 'Math.cos(';
            screen.value = screenvalue
        }
        else if (buttonText == 'tan'){
            screenvalue = 'Math.tan(';
            screen.value = screenvalue
        }
        else if (buttonText == '^'){
            screenvalue = 'Math.pow(';
            screen.value = screenvalue;
        }
        else if(buttonText == 'AC'){
            screenvalue = "";
            screen.value = screenvalue;
        }
        else if(buttonText == 'rad'){
            screenvalue = screen.value * (Math.PI / 180);
            screen.value = screenvalue;
        }
        else if(buttonText == 'deg'){
            screenvalue = screen.value * ( 180 / Math.PI );
            screen.value = screenvalue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenvalue);
            
        }

        else{
            screenvalue += buttonText;
            screen.value = screenvalue;
        }
        
        const resscreen = document.getElementById('resscreen');
        resscreen.innerHTML =  screenvalue

    });
} );



