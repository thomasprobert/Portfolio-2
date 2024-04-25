document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function(){
        if(this.getAttribute("data-type") === "correct"){
            alert("You were correct!");
        }  else {
           alert("I'm sorry, that was incorrect");
        }
    })
}
})

function checkAnswer(){

}

function incrementScore() {

}

function incrementIncorrectScore() {

}