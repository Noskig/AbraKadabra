// get values
function getValues(){

    let first = parseInt(document.getElementById("firstNumber").value);
    let second = parseInt(document.getElementById("secondNumber").value);

    if(Number.isInteger(first) && Number.isInteger(second)){

        let allValues = generateValues(frist, second)
    }
    else{
        alert("You have to enter numbers")
    }
}

// generate all the numbers to 100
function generateValues(first, second){

    let returnValues = [];

    for (let index = 0; index <= 100; index++) {
        
        if(index % first == 0 && index % second == 0){

            returnValues.push("n1n2");
        }
        else if(index % second == 0){
            returnValues.push("n2");
        }
        else if(index % first == 0){
            returnValues.push("n1");
        }
        else{
            returnValues.push(index);
        }
    }

    return returnValues;
}

//dispaly