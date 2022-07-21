var numeroAzar= function (valor) {
    return Math.floor(Math.random()*valor)
}
console.log(numeroAzar(5))

var traeAyuda = function (distancia) {
    if(distancia<15){
        return "Quemado"
    }else if(distancia<20){
        return "Muy caliente"
    }else if(distancia<40){
        return "Caliente"
    }else if(distancia<80){
        return "Tibio"
    }else if(distancia<160){
        return "Frio"
    }
}
console.log(traeAyuda(10))