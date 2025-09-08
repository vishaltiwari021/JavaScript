
const button = document.querySelectorAll('.btn');
const body  = document.querySelector('body');

button.forEach( (button)=>{
    console.log(button);
    button.addEventListener('click', function(e){
        //smart aproach:
        body.style.backgroundColor =e.target.id;
        //root aproach:
        // const color  = e.target.id;
        // switch (color){
        //     case'pink':
        //         body.style.backgroundColor = 'pink';
        //         break;
        //      case 'red':
        //         body.style.backgroundColor = 'red';
        //         break;
        //      case'blue':
        //         body.style.backgroundColor = 'blue';
        //         break;
        //      case'green':
        //         body.style.backgroundColor = 'green';
        //         break;
        //     default:
        //         body.style.backgroundColor = 'white';
        //         break;
        // }
    })
} )
