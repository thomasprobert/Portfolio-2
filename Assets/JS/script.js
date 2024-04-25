
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type") === "correct"){
            alert("You were correct!");
            incrementScore();
        }  else {
           alert("I'm sorry, that was incorrect");
          
        }
    })
}
})




function incrementScore() {
    let oldscore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldscore;

}



