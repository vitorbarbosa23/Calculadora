var body = document.getElementById("body"),
    display = document.querySelector(".input"),
    tema = document.querySelector(".tema")

function insertNum(num){
    
    display.value+=num

}

function reset(){
    display.value=""
}

function backspace(){
    if(display.value != ''){
        let resultado = display.value
        display.value = resultado.substring(0, resultado.length -1)
    }
}

function result(){
    
    display.value = eval(display.value)
    
    if(display.value == "Infinity"){
        display.value = "0"
    }    
    
}


function trocar_tema(){
    if(tema.checked){
        body.style.transition = "1s"
        body.classList.add("tema_2")
        body.classList.remove("tema_1")
    }
    if(tema.checked == false){
        body.style.transition = "1s"
        body.classList.add("tema_1")
        body.classList.remove("tema_2")
    }
}
