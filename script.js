let dieNum = 0;
let diceArr = [];
let divArr = [];

const genBtn = document.getElementById("genButton");
const rollBtn = document.getElementById("rollButton");
const sumBtn = document.getElementById("sumButton");
const diceContainer = document.getElementsByClassName("diceContainer");

//The object will have a value and an associated div
class Die {
    constructor() {
        this.value = this.roll()

        const newDiv = document.createElement('div');
        newDiv.id = 'die'+(++dieNum);
        newDiv.className = 'dice';
        newDiv.textContent = this.value;

        //If the die is clicked it will reroll its value 
        newDiv.addEventListener('click', function() {
            let p = 0;
            for(p; p<divArr.length; p++) {
                if (divArr[p].id === this.id) {
                    diceArr[p].value = diceArr[p].roll();
                    this.textContent = diceArr[p].value;
                    break;
                }
            }
        })

        //if the die is double clicked it will be deleted
        newDiv.addEventListener('dblclick', function() {
            let p = 0;
            for(p; p<divArr.length; p++) {
                if (divArr[p].id === this.id) {
                    diceArr.splice(p, 1);
                    divArr.splice(p, 1);
                    this.remove();
                    break;
                }
            }
        })

        divArr.push(newDiv);
        diceContainer[0].append(newDiv);
    }

    //Random number generator for the die's value
    roll() {
        let result = 1 + Math.floor(Math.random() * 6)
        return result;
    }
}

//Creates a new Die object
genBtn.addEventListener('click', function() {
    let newDie = new Die();
    diceArr.push(newDie);
})

//Rerolls the value of all dice currently generated
rollBtn.addEventListener('click', function() {
    for(i=0; i<divArr.length; i++) {
        diceArr[i].value = diceArr[i].roll();
        divArr[i].textContent = diceArr[i].value; 
    }
})

//Sums the values of the generated dice and alerts the sum
sumBtn.addEventListener('click', function() {
    let total = 0;
    for(j=0; j<diceArr.length; j++) {
        total += diceArr[j].value;
    }
    alert(`Sum of all current dice equals ${total}`);
})