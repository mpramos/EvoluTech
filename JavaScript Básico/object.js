var violin={
    tipo:"cuerda",
    se_toca:"frotada",
    material:"madera",
    sonido:toca
}
var toca= function() {
    console.log("Soy de"
    + this.tipo
    + "!Me tocan"+this.se_toca+"!");
}
console.log(violin)