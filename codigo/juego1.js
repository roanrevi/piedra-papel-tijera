
//escoge las veces que desea jugar
let cant = parseInt( prompt("Escoge el numero de veces que deseas jugar, este numero debe ser impar para asi tener un ganador"));
let prueba = cant % 2;
let resultado = 0;
//valida si es par o impar segun el resultado del resto
if(cant % 2 !== 0){

for (let i = 0; i <= cant-1; i++) {
    //se hace la eleccion entre piedra, papel o tijera
    let eleccion = parseInt( prompt("Escoge Piedra = 0, Papel = 1; Tijera = 2"));
    let cpu= Math.floor(Math.random()*3);
    let opcion = " ";
    
    //transforma el dato para poderlo leer en el html
    if ((eleccion==0) || (eleccion==1) || (eleccion==2)){
        if(eleccion==0 ){
            opcion="Piedra"
        }
        else if(eleccion==1 ){
            opcion="Papel"
        }
        else if(eleccion==2 ){
            opcion="Tijera"
        }
        if(cpu==0 ){
            maquina="Piedra"
        }
        else if(cpu==1 ){
            maquina="Papel"
        }
        else if(cpu==2 ){
            maquina="Tijera"
        }
        
         // Verifica segun la seleccion e imprime la opcion
        if (eleccion==cpu){
             // alert("Es un empate, ambos escogieron la misma opcion");
            document.write(`<b>Juego ${i+1}:</b> Es un empate, ambos escogieron la misma opcion, escogieron <b> ${opcion} </b>. <br> <br>`) ;
    
        }
        else if (eleccion==0 && cpu==1){
             // alert("Perdiste, el papel le gana a la piedra")
            document.write(`<b>Juego ${i+1}:</b> Perdiste, porque escogiste <b> ${opcion} </b> por lo que gana el computador que escogio <b>${maquina}</b>. <br> <br>`) ;
            resultado = resultado-1;
        }
        else if (eleccion==0 && cpu==2){
             // alert("Ganaste, la piedra le gana a la tijera")
            document.write(`<b>Juego ${i+1}:</b> Ganaste, porque escogiste <b> ${opcion} </b>  es superior a <b>${maquina}</b> que escogido el computador. <br> <br>`) ;
            resultado = resultado+1;
        }
        else if (eleccion==1 && cpu==0){
            // alert("Ganaste, el papel le gana a la piedra")
            document.write(`<b>Juego ${i+1}:</b> Ganaste,  porque escogiste <b> ${opcion} </b> es superior a <b>${maquina}</b> que escogido el computador.<br> <br>`) ;
            resultado = resultado+1;
        }
        else if (eleccion==1 && cpu==2){
            // alert("Perdiste, la tijera le gana al papel")
            document.write(`<b>Juego ${i+1}:</b> Perdiste, porque gana el computador que escogio <b>${maquina}</b> que le gana al <b> ${opcion} </b>. <br> <br>`) ;
            resultado = resultado-1;
        }
        else if (eleccion==2 && cpu==0){
            // alert("Perdiste, la piedra le gana a la tijera")
            document.write(`<b>Juego ${i+1}:</b> Perdiste, porque gana el computador que escogio <b>${maquina}</b> que le gana al <b> ${opcion} </b> . <br> <br>`) ;
            resultado = resultado-1;
        }
        else if (eleccion==2 && cpu==1){
            // alert("Ganaste, la tijera le gana al papel")
            document.write(`<b>Juego ${i+1}:</b> Ganaste, porque escogiste <b> ${opcion} </b> es superior a <b>${maquina}</b> que escogido el computador. <br> <br>`) ;
            resultado = resultado+1;
        }

        

    
    }
    // Pide una respuesta dentro de los criterios definidos
    else{
        alert(" Favor escoger una respuesta valida entre 0,1,2");
        i--
    }
}
}
// Pide un numero de veces dentro de los criterios definidos
else{
    alert("Debes escoger un valor impar")
}
// Imprime el resultado final del juego segun la sumatoria definiendo ganador o perdedor
if(resultado<0){
    document.write(`<br> <br><b>Perdiste el juego</b>`);
}
else if(resultado>0){
    document.write(`<br> <br><b>Ganaste el juego</b>`);
}
else if(resultado==0){
    document.write(`<br> <br><b>Empataste el juego</b>`);
}
