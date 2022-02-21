// Get values
function getValues(){

    let first = parseInt(document.getElementById("firstNumber").value);
    let second = parseInt(document.getElementById("secondNumber").value);

    if(Number.isInteger(first) && Number.isInteger(second)){

        //call Generate
        let allValues = generateValues(first, second)

        //call display
        displayValues(allValues);

    }
    else{
        alert("You have to enter numbers")
    }
}

// Generate all the numbers to 100
function generateValues(first, second){

    let returnValues = [];

    for (let index = 1; index <= 100; index++) {
        
        if(index % first == 0 && index % second == 0){

            returnValues.push("AbraKadabra");
        }
        else if(index % second == 0){
            returnValues.push("Kadabra");
        }
        else if(index % first == 0){
            returnValues.push("Abra");
        }
        else{
            returnValues.push(index);
        }
    }

    return returnValues;
}

function generateValuesb(first,second){

    let returnArray = [];

    let fixx = false;
    let buzz = false;

    for (let i = 1; i < 100; i++) {
        
        fizz = i % first == 0;
        buzz = i % second == 0;

        switch(true){

            case fizz && buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case fizz:{
                returnArray.push('fizz');
                break;
            }
            case buzz:{
                returnArray.push('buzz');
                break;
            }
            default:{
                returnArray.push(i);
            }


        }
        
    }



    return returnArray;
}

function generateValuesc(first, second){

    let returnArray = [];

    for (let i = 1; i < 100; i++) {
        
        let value = ( (i % first == 0 ? 'Fizz' : '' ) + (i % second == 0 ? 'buzz' : '' || i) );
        returnArray.push(value);
    }
    return returnArray
}
// Display
function displayValues(allValues){

    //get the table body element 
    let tablebody = document.getElementById("results");
    
    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table
    tablebody.innerHTML = "";
    
    for(let index = 0; index < allValues.length; index+=5){

        let tableRow = document.importNode(templateRow.content, true);

        //grab td's into an array
        let rowCols = tableRow.querySelectorAll("td"); 

        //add content to the class. Either Abra, Kadabra, AbraKadabra or a number. 
        rowCols[0].classList.add(allValues[index]);
        rowCols[0].textContent = allValues[index];

        rowCols[1].classList.add(allValues[index+1]);
        rowCols[1].textContent = allValues[index+1];

        rowCols[2].classList.add(allValues[index+2]);
        rowCols[2].textContent = allValues[index+2];

        rowCols[3].classList.add(allValues[index+3]);
        rowCols[3].textContent = allValues[index+3];

        rowCols[4].classList.add(allValues[index+4]);
        rowCols[4].textContent = allValues[index+4];

        tablebody.appendChild(tableRow);

    }
}