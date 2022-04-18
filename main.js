let minGoles = 0;
let maxGoles = 4;
let fecha = 1;

let puntosBoca = 0;
let puntosRiver = 0;
let puntosIndependiente = 0;
let puntosRacing = 0;
let puntosColon= 0;

const resultado = () => Math.ceil(Math.random()* (minGoles - maxGoles) + maxGoles)

const puntosCampeonato = () => puntosBoca < 12 && puntosRiver < 12;
const puntosZonaB = () => puntosIndependiente < 12 && puntosRacing < 12;

while(puntosCampeonato()){
    console.log("<main class = 'container'>" + "Fecha" + fecha)
    document.write("<div class = 'fechaZonaA'> Fecha:" + fecha + "</div>");     
    let boca = resultado();
    let river = resultado()

    if(boca==river){
        puntosBoca += 1;
        puntosRiver += 1;
        document.write("<div class = 'resultadoZonaA'> <img src='imagenes/boca.png' width = 50px>" + boca + "<img src='imagenes/river.png' width = 50px>" + river + "<br>" +  "Empataron")
         document.write("<br>" + "PTOS Boca" + " " + puntosBoca + "<br>" + "PTOS River" + " " + puntosRiver + "</div>")
    } else if(boca > river){
        puntosBoca += 3;
        console.log("Gano Boca" + " " + boca + " " + river)
        document.write("<div class = 'resultadoZonaA'> <img src='imagenes/boca.png' width = 50px>" + boca + "<img src='imagenes/river.png' width = 50px>" + river + "<br>" +  "Gano Boca")
        document.write("<br>" + "PTOS Boca" + " " + puntosBoca + "<br>" + "PTOS River" + " " + puntosRiver + "</div>")


    } else{
        puntosRiver += 3;
        console.log("Gano River" + " " + river + " " + boca)
        document.write("<div class = 'resultadoZonaA'> <img src='imagenes/river.png' width = 50>" + river + "<img src='imagenes/boca.png' width = 50px>" + boca + "<br>" +  "Gano River")
        document.write("<br>" + "PTOS River" + " " + puntosRiver + "<br>" + "PTOS Boca" + " " + puntosBoca + "</div>")
    }

    if (puntosBoca >=12){
        console.log("Boca campeon" + puntosBoca)
          document.write("<div class = 'resultadoZonaA'> <img src='imagenes/copa.png' width = 100px> <img src='imagenes/boca.png' width = 50>" + " " + "Campeon!!" + " " + "Total puntos:" +  puntosBoca + "</div>")
    }else if (puntosRiver >=12){
        console.log("River campeon" + puntosRiver)
          document.write("<div class = 'resultadoZonaA'> <img src='imagenes/copa.png' width = 100px> <img src='imagenes/river.png' width = 50>" + " " + "Campeon!!" + " " + "Total puntos:" +  puntosRiver + "</div>" + "</main>")

    }
    fecha +=1;
}

fecha = 1;

while(puntosZonaB()){
    fecha;
    console.log("<main class = 'container'>" + "Fecha" + fecha)
    document.write("<div class = 'fechaZonaB container'> Fecha:" + fecha + "</div>");
    let independiente = resultado();
    let racing = resultado();
    
    if(independiente==racing){
        puntosIndependiente += 1;
        puntosRacing += 1;
        console.log("Empataron" + " " + "Independiente" + " " +  independiente + "  " + "Racing" + racing)
        document.write("<div class = 'resultadoZonaB'> <img src='imagenes/independiente.png' width = 100px>" + independiente + "<img src='imagenes/racing.png' width = 50px>" + racing + "<br>" +  "Empataron")
        document.write("<br>" + "PTOS Independiente" + " " + puntosIndependiente + "<br>" + "PTOS Racing" + " " + puntosRacing + "</div>")

    } else if(independiente > racing){
        puntosIndependiente += 3;
        console.log("Gano Independiente" + " " + "Independiente" + independiente + " " + "Racing" +  racing)
        document.write("<div class = 'resultadoZonaB'> <img src='imagenes/independiente.png' width = 100px>" + independiente + "<img src='imagenes/racing.png' width = 50px>" + racing + "<br>" +  "Gano Independiente")
        document.write("<br>" + "PTOS Independiente" + " " + puntosIndependiente + "<br>" + "PTOS Racing" + " " + puntosRacing + "</div>")
    
    
    } else{
        puntosRacing += 3;
        console.log("Gano Racing" + " " + racing + " " + independiente)
        document.write("<div class = 'resultadoZonaB'> <img src='imagenes/racing.png' width = 50>" + racing + "<img src='imagenes/independiente.png' width = 100px>" + independiente + "<br>" +  "Gano Racing")
        document.write("<br>" + "PTOS Racing" + " " + puntosRacing + "<br>" + "PTOS Independiente" + " " + puntosIndependiente + "</div>")

    }
    if(puntosRacing >= 12){
        console.log("Racing campeon" + puntosRacing)
        document.write("<div class = 'resultadoZonaB'> <img src='imagenes/copa.png' width = 100px> <img src='imagenes/racing.png' width = 50>" + " " + "Campeon!!" + " " + "Total puntos:" +  puntosRacing + "</div>")

    } else if (puntosIndependiente >= 12){
        console.log("Independiente campeon" + puntosIndependiente)
        document.write("<div class = 'resultadoZonaB'> <img src='imagenes/copa.png' width = 100px> <img src='imagenes/independiente.png' width = 100>" + " " + "Campeon!!" + " " + "Total puntos:" +  puntosIndependiente + "</div>" + "</main>")

    }

    fecha +=1;
}

