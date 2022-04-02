let question = document.querySelector("#questionArea");
let button = document.querySelector("button");
let answer = document.querySelector("#answer");


// Tools for 8 ball
function genRanNum(maxNumber) {
  // Generates a random number from 0 to maxNumber.
  return Math.round(Math.random()*maxNumber);
}

button.addEventListener("click", function() {
  // Generate a random number
  let result8Ball = genRanNum(7);
  /* For testing if function runs
  alert(result8Ball);*/
  
  // Turn random number into a string
  let answerText = "";
  
  // Display the answer into the eight ball
  if (result8Ball == 0) {
    answerText = "Yes definitely!";
  }
  else if (result8Ball == 1) {
    answerText = "No, absolutely not!";
  }
  else if (result8Ball == 2) {
    answerText = "Anything is possible, but for you maybe not so much.";
  }
  else if (result8Ball == 3) {
    answerText = "Don't count on it chief.";
  }
  else if (result8Ball == 4) {
    answerText = "How am I supposed to know?";
  }
  else if (result8Ball == 5) {
    answerText = "Yes, yes, yes.";
  }
  else if (result8Ball == 6) {
    answerText = "No, no, no.";
  }
  else if (result8Ball == 7) {
    answerText = "Don't bother me again...";
  }
  
  // Then modify 8ball #answer
  answer.innerHTML = answerText;
})/*.then {
  let data = document.querySelector("#questionArea").val();
  const preQuestion = document.createElement('h3');
  prequestion.appendChild(data);
  document.replaceChild(preQuestion, question);
}*/