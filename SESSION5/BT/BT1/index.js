
function calculateDogAge(Age){
    Age=Age*7;
    alert(`Your doggie is ${Age} years old in dog years`);
}

function input(){
    Age=prompt('your puppy\'s age: ');

}

for(let i=0;i<3;i++){
    input();
    calculateDogAge(Age);
}