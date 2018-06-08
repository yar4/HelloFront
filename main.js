var result;
var number1 = Number(prompt('Please input first number','default'));
    if (isNaN(number1)){
        alert('It not a number!')
    }         
var number2 = Number(prompt('Please input second number','default'));
    if (isNaN(number2)){
        alert('It not a number!')
    }   
var mathop = prompt('Please choose match operator');
switch(mathop){
    case '+':
    result = number1 + number2;
    alert(result)
    break;
    case '-':
    result = number1 - number2;
    alert(result)
    break;
    case '*':
    result = number1 * number2;
    alert(result)
    break;
    case '/':
        if (number2 === 0){
            result = alert('One cannot divide by zero');
        }else{
            result = alert( parseFloat (number1 / number2));
            }
    break
    default:
    result = alert('It is not a math operator')
    break;
}

            
