class Person {
  Photo;
  Name;
}

function HighlightIt(str){
  return "<span class='highlighted'>"+str+"</span>";
}

function CreatePersonCard(sectionId, personName, photoUrl){
  var sectionTemp = document.createElement("section");
  sectionTemp.setAttribute("class","personCard card");

  var articleTemp1 = document.createElement("article");
  var p = document.createElement("p");
  var b = document.createElement("b");
  b.id = "nameTxt"+sectionId;
  b.innerHTML = HighlightIt(personName);
  p.appendChild(b);
  p.className = "card__name";
  articleTemp1.appendChild(p);

  var articleTemp2 = document.createElement("article"); 
  var img = document.createElement("img");
  img.src = photoUrl;
  img.setAttribute("class","avatar");
  articleTemp2.appendChild(img);
  sectionTemp.appendChild(articleTemp2);
  sectionTemp.appendChild(articleTemp1);

  sectionTemp.setAttribute("id",sectionId);

  return sectionTemp;
}
function CreatePersonForm(sectionId,personName){
  var pForm = document.createElement("p");
  var bForm = document.createElement("b");
  bForm.innerHTML = "Update Person";
  pForm.appendChild(bForm);

  var label1 = document.createElement("label");
  var input1 = document.createElement("input");
  input1.id = "nameInput"+sectionId;
  input1.type = "text";
  input1.value = personName;
  label1.for = "nameInput"+sectionId;
  label1.innerHTML = "Name: ";

  var label2 = document.createElement("label");
  var input2 = document.createElement("input");
  input2.onclick = (evt) => {evt.preventDefault();};
  input2.id = "ageInput"+sectionId;
  input2.type = "number";
  label2.for = "ageInput"+sectionId;
  label2.innerHTML = "Age :";

  var btn1 = document.createElement("button");
  btn1.innerHTML = "Update";
  btn1.onclick = () => {alert("adfasd"); UpdatePerson(sectionId);};
  btn1.className = "btn draw-border";

  /*
  var layerClosePanel = document.createElement("div");
  layerClosePanel.onclick = (evt) => {ClosePersonForm(evt,sectionId);};
  layerClosePanel.className = "closeFormLayer";
*/
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = ()=>{DeletePerson(sectionId);};
  deleteBtn.className = "btn draw-border";

  var divForm = document.createElement("div");
  divForm.id = "personForm"+sectionId;
  divForm.className = "personForm";
  divForm.style.display = "none";
  //divForm.appendChild(layerClosePanel);
  divForm.appendChild(pForm);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(label1);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(input1);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(label2);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(input2);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(btn1);
  divForm.appendChild(document.createElement("br"));
  divForm.appendChild(deleteBtn);

  return divForm;
}
function DeletePerson(sectionId){
  if(confirm("Do you want to delete this Person Card")){
    document.getElementById(sectionId).remove();
  }
}
function UpdatePerson(sectionId){ 
  var i = sectionId.replace("person","");
  var pName = document.getElementById("nameInput"+sectionId).value;
  data[i].personName =  pName;
  UpdateDOM(sectionId);
  OpenPersonForm(sectionId);
}
function UpdateDOM(sectionId){
  var i = sectionId.replace("person","");
  var nameSpan = document.getElementById("nameTxt"+sectionId).getElementsByTagName("span")[0];
  nameSpan.innerHTML = data[i].personName;
}
function OpenPersonForm(sectionId){
  if(document.getElementById("personForm"+sectionId).style.display == "block"){
    document.getElementById("personForm"+sectionId).style.display = "none";
  } 
  else{
    document.getElementById("personForm"+sectionId).style.display = "block";
  }
   
}
function ClosePersonForm(evt,sectionId){
  console.log(evt);
  var form = document.getElementById("personForm"+sectionId);
  if(form.style.display != "none")
    document.getElementById("personForm"+sectionId).style.display = "none";
}

 for (let i = 0; i < data.length; i++) {
  var temp = CreatePersonCard("person"+i, data[i].personName, "images/"+data[i].photoUrl);
  temp.appendChild(CreatePersonForm("person"+i, data[i].personName));
  temp.onclick = (evt) => {if(evt.target.nodeName == "BUTTON" || evt.target.nodeName == "INPUT") return; OpenPersonForm("person"+i)};
  /*
  var openFormLayer = document.createElement("div");
  openFormLayer.className = "openFormLayer";
  openFormLayer.onclick = () => {OpenPersonForm("person"+i)};
  temp.appendChild(openFormLayer); 
*/
  document.getElementById("personal").appendChild(temp);
  
 }

 document.getElementsByTagName("input").onclick = () => {event.stopPropagation()};


/*
let template = "<section class="exerciseSection">
<article>
  <p><b></b></p>
</article>
<article>
  <input type="text" id="nameInput"><br>
  <input type="button" id="btn1" value="Greetings"><br>
  <span id="output1" class="outputSpan">&nbsp;</span>
</article>
</section>"
function btn1Onclick(){
  
  var name = document.getElementById("nameInput").value;
  var output = document.getElementById("output1");
  output.innerHTML = " Welcome "+ HighlightIt(name)+"!";
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
*/