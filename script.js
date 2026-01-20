const submitBtn = document.getElementById("submitBtn");

function TextCaseAnalyzer() {
  let textInput = document.getElementById("textInput").value;
  let textResult = document.getElementById("textResult");

  textInput = textInput.trim();

  if (!textInput || textInput.includes(" ")) {
    textResult.textContent = `Feild can't Contain Empty text or Spaces!`;
    return;
  }
 
let uppercase = 0 ;
let lowercase = 0;

  for(let i = 0; i < textInput.length ; i++){
   
    let text = textInput.charAt(i);
    // console.log(text, i);

    if(text >= "A" && text <= "Z"){
        uppercase++;
    } else if(text >= "a" && text <= "z"){
        lowercase++;
    }
  }
    textResult.textContent = `Uppercase: ${uppercase}, Lowercase: ${lowercase}`;
console.log(lowercase);
}
submitBtn.onclick = TextCaseAnalyzer;
