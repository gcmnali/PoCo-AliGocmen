// @(delete this paranthesis)ts-check

/*
window.addEventListener('load', (event) => {
  window.alert("load");
});


 function fff(){
  window.alert("sdfsd");
 }
        
window.alert("alert outside of the onload")
*/

document.getElementById("btn1").addEventListener("click", btn1Onclick);
document.getElementById("btn2").addEventListener("click", btn2Onclick);
document.getElementById("btn3").addEventListener("click", btn3Onclick);
document.getElementById("btn4").addEventListener("click", btn4Onclick);
document.getElementById("btn5").addEventListener("click", btn5Onclick);
document.getElementById("btn6").addEventListener("click", btn6Onclick);
document.getElementById("btn7").addEventListener("click", btn7Onclick);
document.getElementById("btn8").addEventListener("click", btn8Onclick);

function HighlightIt(str){
  return "<span class='highlighted'>"+str+"</span>";
}

function btn1Onclick(){
  
  var name = document.getElementById("nameInput").value;
  var output = document.getElementById("output1");
  output.innerHTML = " Welcome "+ HighlightIt(name)+"!";
}

function btn2Onclick(){
  
  var input2 = document.getElementById("input2").value;
  var output2 = document.getElementById("output2");
  output2.innerHTML = input2+" has "+ HighlightIt(input2.toString().length)+" character";
}

function btn3Onclick(){
  
  var input3 = document.getElementById("input3").value;
  var input4 = document.getElementById("input4").value;
  var output3 = document.getElementById("output3");
  output3.innerHTML = HighlightIt(input3)+" says \""+HighlightIt(input4)+"\" ";
}

function btn4Onclick(){
  
  var input5 = document.getElementById("input5").value;
  var input6 = document.getElementById("input6").value;
  var output4 = document.getElementById("output4");
  var age = input6 - input5;
  if(age > 100)
    output4.innerHTML = HighlightIt("You couldn't live as much buddy!");
  else
    output4.innerHTML = "You will be either "+HighlightIt(age)+" or "+HighlightIt(age+1)+" in that year ";
}

function btn5Onclick(){
  
  var input7 = document.getElementById("input7").value;
  var input8 = document.getElementById("input8").value;
  var output5 = document.getElementById("output5");
  
  /*var dayEng = input8;

  alert(dayEng);

  switch (dayEng) {
    case 3:
      alert("dfsdfs");
      break;
  
    default:
      break;
  }
  if(dayEng == 3)
  alert("yaa");

  alert(typeof(dayEng));
*/
  var dayEng = input7.length > 0 ? input7 : input8;

  switch (dayEng) {
    case '1':
    case 'Monday':
        day = "Montag";      
      break;
    case '2':
    case 'Tuesday':
        day = "Dienstag";
      break;
    case 'Wednesday':
    case '3':
        day = "Mittwoch";      
      break;
    case '4':  
    case 'Thursday':
        day = "Donnerstag";
      break;
    case '5':  
    case 'Friday':
        day = "Freitag";      
      break;
    case '6':
    case 'Samstag':
        day = "Saturday";
      break;
    case '7':
    case 'Sunday':
        day = "Sonntag";      
      break;
    default:
      day = "There is no such day";
      break;
  }

  output5.innerHTML = HighlightIt(day);
}

function btn6Onclick(){
  
  var input9 = document.getElementById("input9").value;
  var output6 = document.getElementById("output6");
  var resmsg = input9 % 2 == 0 ? "it is even" : "it is odd";
  output6.innerHTML = HighlightIt(resmsg);
}
function btn7Onclick(){
  var resmsg = "";
  for (let index = 1; index < 2000001; index++) {
    if(index % 20000 == 0){
      resmsg = index + "is even";
      output6.innerHTML = HighlightIt(resmsg);
    } 
  }
}

function btn8Onclick(){
  var resmsg = "";
  var input10 = document.getElementById("input10").value; 
  output7.innerHTML = HighlightIt(input10 * 9);
}


var myArr = new Array();

myArr.push("Ali");
myArr.push("Fatma Nur");
myArr.push("Hülya");
myArr.push("Mehmet");
myArr.push("Burak");

console.log(myArr.join(":"));
var newArr = myArr.concat(["Emre","Elif"]);

myArr.every

console.log(newArr);

var arr = [{name:"Ali"}, "dsfd"];
console.log(arr);

console.log(document.getElementsByTagName("section"));