let horaId = document.getElementById("horaId")
let minId = document.getElementById("minId")
let segId = document.getElementById("segId")
const reiniciarId = document.getElementById("reiniciarId")

reiniciarId.disabled = true

let hora = 0
let min = 0
let seg = 0

let cron;

const iniciar = () => {
    reiniciarId.disabled = false

    seg++
    if(seg < 10) segId.innerText = `0${seg}`
    else segId.innerText = seg
    if(seg === 60){
        seg = 0
        if(seg < 10) segId.innerText = `0${seg}`
        else segId.innerText = seg
        min++
        if(min < 10) minId.innerText = `0${min}`
        else minId.innerText = min
    }
    if(min === 60){
        min = 0
        if(min < 10) minId.innerText = `0${min}`
        else minId.innerText = min
        hora++
        horaId.innerText = hora
    }
}
const intervalo = () => {
    cron = setInterval(iniciar, 1000);
}
const parar = () => {
    clearInterval(cron)
}
const reiniciar = () => {
    seg = 0
    segId.innerText = "00"

    min = 0
    minId.innerText = "00"

    hora = 0
    horaId.innerText = "00"

    parar()
}