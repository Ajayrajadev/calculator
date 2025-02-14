let input= document.getElementById("input")



function display(num){
    input.value += num;
}
function calculate(){
    try{
        input.value=eval(input.value)
     }
    catch(err){
        input.value="ERROR";
    }
}

function del(){
    input.value=input.value.slice(0,-1)
}

function clearDisplay(){
    input.value = "";
}