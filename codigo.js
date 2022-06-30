let marcaProcesador
let graficosIntegrados
let gamaProcesador

const procesadores = ["Intel Core i3-10100","Intel Core i5-10400","Intel Core i7-10700","Intel Core i3-10100F","Intel Core i5-10400F","Intel Core i7-10700F"]

class Procesador {
    constructor(nombre, generacion, precio) {
        this.nombre = nombre
        this.generacion = generacion
        this.precio = precio
    }
}

const procesador1 = new Procesador("Intel Core i3-10100","10° Gen",18000)
const procesador2 = new Procesador("Intel Core i5-10400","10° Gen",25000)
const procesador3 = new Procesador("Intel Core i7-10700","10° Gen",45000)
const procesador4 = new Procesador("Intel Core i3-10100F","10° Gen",11000)
const procesador5 = new Procesador("Intel Core i5-10400F","10° Gen",20000)
const procesador6 = new Procesador("Intel Core i7-10700F","10° Gen",41000)

debugger

do {
    marcaProcesador = prompt("Seleccione marca de procesador: \n\nintel \namd")

    if (marcaProcesador == "intel") {
        console.log("eligio un procesador INTEL")
        console.log("lista unica: 10° Gen")
    
        graficosIntegrados = confirm("¿Quiere un procesador con graficos integrados?")
    
        if (graficosIntegrados){
            console.log("eligio un procesador con graficos integrados")

            do {
                gamaProcesador = prompt("gama de tu procesador?: baja/media/alta")

                switch (gamaProcesador) {
                    case "baja":
                        console.log("procesador recomendado:",procesador1)
                        break
                    case "media":
                        console.log("procesador recomendado:",procesador2)
                        break
                    case "alta":
                        console.log("procesador recomendado:",procesador3)
                        break
                    default:
                        console.warn("gama no enlistada")
                        break
                }
            } while (gamaProcesador !== ("baja" || "media" || "alta"))
    
        }
        else {
            console.log("eligio un procesador sin graficos integrados")

            do {
                gamaProcesador = prompt("gama de tu procesador?: baja/media/alta")
                
                switch (gamaProcesador) {
                    case "baja":
                        console.log("procesador recomendado:",procesador4.nombre)
                        break
                    case "media":
                        console.log("procesador recomendado:",procesador5.nombre)
                        break
                    case "alta":
                        console.log("procesador recomendado:",procesador6.nombre)
                        break
                    default:
                        console.warn("gama no enlistada")
                        break
                }
            } while (gamaProcesador !== ("baja" || "media" || "alta"))
        }
    }
    else if (marcaProcesador == "amd") {
        console.log("eligio un procesador AMD")
        console.log("no hay data de AMD, sry bro")
    }
    else {
        console.log("no bro, con ese no trabajamo")
    }
} while (marcaProcesador !== "intel")



