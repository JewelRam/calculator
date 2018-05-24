document.getElementById("addition").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let value = num1 + num2;
    document.querySelector("#answer").innerHTML = `The result of ${num1} plus ${num2} is ${value}`
    
})
document.getElementById("subtraction").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let value = num1 - num2;
    document.querySelector("#answer").innerHTML = `The result of ${num1} minus ${num2} is ${value}`
})
document.getElementById("multiply").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let value = num1 * num2;
    document.querySelector("#answer").innerHTML = `The result of ${num1} multiply ${num2} is ${value}`
})
document.getElementById("divide").addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let value = num1 / num2;
    document.querySelector("#answer").innerHTML = `The result of ${num1} divide ${num2} is ${value}`
})

