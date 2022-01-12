const form = document.getElementById("form");
const inputWord = document.getElementById("word");
const btnSubmit = document.getElementById("submit");
const validation = document.getElementById("validation");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

inputWord.addEventListener("keyup", ()=>{
    if(inputWord.value == ""){
        validation.style.display = "block";
        btnSubmit.disabled = true;
        document.getElementById("meaning").value = "";
    }else{
        validation.style.display = "none"
        btnSubmit.disabled = false;
    }
})
btnSubmit.addEventListener("click", () =>{
    submitWord = inputWord.value; 
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + submitWord)
  .then(response => response.json())
  .then(json => {
      const finalMeaning = json[0].meanings[0].definitions[0].definition;
      const textArea = document.getElementById("meaning").value = finalMeaning;
  });
});