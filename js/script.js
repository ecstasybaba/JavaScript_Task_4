let title;
let question;
let main;
let select;
let currentPoint = 0;
let query;
let mySelect;
let mySelections; 
let characterA;
let characterB; 
let characterC;
let record;
let counter;
let accurate = 0;
let accurateScore = 0;


let arrQuestions = [
  ["What is the smallest indivisible particle of an element?", "Object", "Atom", "Array", "B"],
  ["What speeds up a chemical reaction?", "Molecule", "Catalyst", "Element", "B"],
  ["Coronavirus is also known as _____________", "Covid-20", "Covid-19", "Covid-21", "B"],
  ["Who discovered River Niger?", "Taiwo Ajagbe", "Mungo Park", "Taiwo Akinkunmi", "B"],
  ["Who discovered electricity?", "Michael Faraday", "Benjamin Franklin", "Isaac Newton", "B"],
];


function revealQuestions(){
  main = document.getElementById("main");
  record = document.getElementById("record");

  if(currentPoint >= arrQuestions.length){

    main.innerHTML = "<h4> "+accurate+" out of "+arrQuestions.length+" questions were answered correctly</h4><br />";
    
    record.innerHTML = "<h4>Total score is: "+accurateScore+" </h4>";
    
    document.getElementById("title").innerHTML = "You have reached the end of the Game";

    document.getElementById("select").style.display = "none";

    document.getElementById("counter").innerHTML = "SCORE COUNTER: "+accurateScore+"";

    currentPoint = 0;
    accurate = 0;
    accurateScore = 0;

    return false;
  }

  
  document.getElementById("title").innerHTML = "Quiz Question "+(currentPoint + 1)+"";
  document.getElementById("select").innerHTML = "Select one(1) option from each question";
  document.getElementById("counter").innerHTML = "SCORE COUNTER: "+accurateScore+"";

  question = arrQuestions[currentPoint][0];
  characterA = arrQuestions[currentPoint][1];
  characterB = arrQuestions[currentPoint][2];
  characterC = arrQuestions[currentPoint][3];

  document.getElementById("main").innerHTML = "<h2>"+question+"</h2>";

  main.innerHTML += "<input onclick='resultCheck()' type='radio' name='options' value='A' id='charA'> <label for='characterA'>" + characterA + "</label><br>";
  main.innerHTML += "<input onclick='resultCheck()' type='radio' name='options' value='B' id='charB'> <label for='characterB'>" + characterB + "</label><br>";
  main.innerHTML += "<input onclick='resultCheck()' type='radio' name='options' value='C' id='charC'> <label for='characterC'>" + characterC + "</label><br><br>";
  main.innerHTML += "<button onclick='nextResult()' disabled='disabled' id='next_Choice'>Next</button>";
}

function resultCheck() {
    choieClicked = true ;
    $("#next_Choice").removeAttr("disabled");
    $("#main label").css("background-color", "transparent");
    if ($("#main input:checked").val() == arrQuestions[currentPoint][4]) {
        $("#main input:checked+label").css("background-color", "green");
        $("#main input:checked+label").css("color", "white");

        accurate++;
        accurateScore+=3;
    }
    else {
        $("#main input:checked+label").css("background-color", "red");
        $("#main input:checked+label").css("color", "white");
        $("#main input:radio[id=charB]+label").css("background-color", "green");
        $("#main input:radio[id=charB]+label").css("color", "white");    
    }
}

function nextResult(){
    setTimeout(function () {
        currentPoint++;
        revealQuestions();
    }, 900);    
}
$("document").ready(function () {
    revealQuestions();
});

