const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results  = document.querySelector('#results');

    if(height === '' ||height <0 ||isNaN(height)){
        results.innerHTML = "please give the valid height"
    }else if(weight === '' ||weight <0 ||isNaN(weight)){
        results.innerHTML = "please give the valid weight"
    }
    else{
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        // let category = document.querySelector('#weight-guide')
        let category = '';
        if(bmi<=18.6){
            category = 'Under Weight = Less than 18.6'
        }else if(bmi>=18.6 && bmi<=24.9){
            category = 'Normal Range = 18.6 and 24.9'
        }
        else{
            category = 'Overweight = Greater than 24.9'
        }

        //show the result:
        results.innerHTML = ` <span>Your BMI IS :${bmi}</span> <br>
         <span> Your Category is :${category}</span>`;
        
    }

})