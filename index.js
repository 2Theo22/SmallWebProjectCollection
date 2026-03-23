console.log('Everything is connected')

let min;
let max;
let result;

function generate() {
    min = parseInt(document.getElementById("minNumber").value);
    console.log(`Mimimum Number: ${min}`);
    max = parseInt(document.getElementById("maxNumber").value);
    console.log(`Maximum Number: ${max}`);

    if (min && max) {
        if(min >= max){
            console.log(`Error: ${min} > ${max}`);
            document.getElementById("result").value = "min must be bigger than max";
        }
        else{
            result = Math.floor(Math.random() * (max- min)) +min;
            console.log(result);
            document.getElementById("result").value = result;
        }
    }
    else{
        console.log(`Error: No number detected`);
        document.getElementById("result").value = "Please enter Numbers";
    }




}