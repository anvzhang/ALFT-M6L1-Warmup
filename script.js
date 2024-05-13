function canVote(age) {
  return age >= 18;
}

function canVoteBirthday(birthday) {
  return birthday.split("/")[2] <= new Date().getFullYear() - 18
}

console.log(`18 year old can vote? ${canVote(18)}`);

console.log(`17 year old can vote? ${canVote(17)}`);

console.log(`19 year old can vote? ${canVote(19)}`);

console.log(`Born on 05/07/2001 can vote? ${canVoteBirthday("05/07/2001")}`);

let inputElement = document.getElementById("age-input");

inputElement.onkeydown = function(event){
    if(event.key === 'Enter') {
      if (canVote(inputElement.value)) {
        alert("yes");
      } else {
        alert("no");
      }    
    }
}