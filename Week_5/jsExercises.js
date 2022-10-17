document.getElementById("btn1").addEventListener("click", btn1Onclick);
document.getElementById("btn2").addEventListener("click", btn2Onclick);
document.getElementById("btn3").addEventListener("click", btn3Onclick);

function btn1Onclick(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    if(isNaN(num1) || num1.length || isNaN(num1)){
        alert("Write good numbers");
        return;
    }

    var msg = document.getElementById("output1");
    if(num1 > num2)
        msg.innerHTML = `The greater number of ${num1} and ${num2} is ${num1}.`;
    else if(num1 < num2)
        msg.innerHTML = `The smaller number of ${num1} and ${num2} is ${num1}.`;
    else
        msg.innerHTML = "The numbers are equal.";
}
function btn2Onclick(){
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);

    if(isNaN(num3) || isNaN(num4)){
        alert("Write good numbers");
        return;
    }

    var msg = document.getElementById("output2");
    var year = 2020 + num4 - num3;

    if(num4<num3)
        alert("Why are you scratching, you already retired, would you like to work more?");
    else
        msg.innerHTML = `It's 2020, so you can retire in ${year}`;
}
function btn3Onclick(){
    var s = document.getElementById("lang");
    switch (s.value) {
        case 'en':
            document.getElementById("output3").innerHTML = "Hello World!"
            break;
        case 'de':
            document.getElementById("output3").innerHTML = "Hallo Leute!" 
            break;
        default:
            document.getElementById("output3").innerHTML = "Merhaba Dunya!" 
            break;
    }
}