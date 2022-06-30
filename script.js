
class Autos{
    constructor(patente, titular, kilometros){
        this.patente = patente
        this.titular = titular
        this.kilometros = kilometros
    }
    aumentarKilometros(cantidadKilometros){
        this.kilometros += cantidadKilometros
    }
 }

const auto1 = new Autos("AB885PT", "Jorge Ceballos",500)
const auto2 = new Autos("AA552QR", "Pedro GOnzalez",300)
const auto3 = new Autos("AC889LO", "Jose Perales",235)
const auto4 = new Autos("AA602GH", "Alejandra Perez",178)

const moviles=[auto1, auto2, auto3, auto4]

let cambiarKilometros 
let cantidadKilometros
let estado
estado = 0
     cambiarKilometros = prompt ("Ingrese la patente para actualizar kilometraje")

    for (let autosArray of moviles) {
          if (autosArray.patente === cambiarKilometros) {
           cantidadKilometros = parseFloat(prompt("Ingrese cantidad de Kilometros"))
           autosArray.aumentarKilometros(cantidadKilometros)
       //    alert("Kilometraje actualizado")
           estado=1  
           break
          } else 
            continue
           
          
    }  
    if (estado === 1) {
        alert("Kilometraje actualizado")

        } else 
        alert("Movil no encontrado")

     
           
console.table(moviles)
