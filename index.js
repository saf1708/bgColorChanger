const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

function randomColor(){
    const hex = "0123456789ABCDEF"
    let color = "#";
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

start.addEventListener('click', startChangingcolor );

stop.addEventListener('click', stopChangingcolor);
let intervalId ;

function startChangingcolor(){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    intervalId =  setInterval(changeBgColor,2000)

}

function stopChangingcolor(){
    clearInterval(intervalId)  ; 
}