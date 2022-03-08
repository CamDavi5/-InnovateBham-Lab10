dieNum = 0;
let diceArr = [];

const genBtn = document.getElementById("genButton");
const rollBtn = document.getElementById("rollButton");
const sumBtn = document.getElementById("sumButton");
const diceDiv = document.getElementsByClassName("diceDiv");

class Die {
    constructor() {
        this.value = this.roll()

        const newDiv = document.createElement('div');
        newDiv.id = 'die'+(++dieNum);
        newDiv.className = 'dice';
        newDiv.textContent = this.value;

        /*newDiv.addEventListener('click', function() {
            
        })*/

        diceArr.push(this);
        diceDiv[0].append(newDiv);
    }

    roll() {
        let result = 1 + Math.floor(Math.random() * 6)
        return result;
    }
}

genBtn.addEventListener('click', function() {
    let newDie = new Die();
})

rollBtn.addEventListener('click', function() {
    let classArr = document.getElementsByClassName("dice");
    for(i=0; i<classArr.length; i++) {
        diceArr[i].value = diceArr[i].roll();
        classArr[i].textContent = diceArr[i].value; 
    }
})

sumBtn.addEventListener('click', function() {
    let total = 0;
    for(j=0; j<diceArr.length; j++) {
        total += diceArr[j].value;
    }
    alert(`Sum of all current dice equals ${total}`);
})