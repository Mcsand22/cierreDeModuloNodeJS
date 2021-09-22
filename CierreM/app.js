let autos = require("./autos")

const concesionaria = {
    autos: autos,
    buscarAuto: function(patenteB) {
        let autoBuscado = null
        for (let i = 0; i < autos.length; i++) {
            if (autos[i].patente == patenteB) {
                autoBuscado = autos[i]
            }
        }
        return autoBuscado
    },
    venderAuto: function(patenteB) { return this.buscarAuto(patenteB).vendido = true },
    autosParaLaVenta: function() {
        return concesionaria.autos.filter(auto => auto.vendido == false)
    },
    autosNuevos: function() {
        let disponibles = this.autosParaLaVenta()
        return disponibles.filter(autos => autos.km < 100)
    },
    listaDeVentas: function() {
        return concesionaria.autos.filter(auto => auto.vendido).map(auto => auto.precio)
    },
    totalDeVentas: function() {
        let vendidos = concesionaria.listaDeVentas()
        if (vendidos.length == 0) return 0
        return vendidos.reduce((acumulador, num) => acumulador + num)
    },
   
   puedeComprar: function(unAuto, unaPersona){
      if (unaPersona.capacidadDePagoEnCuotas >= (unAuto.precio/unAuto.cuotas) && unaPersona.capacidadDePagoTotal >= unAuto.precio){
         return true
      } else{
         return false
      }
   },
   autosQuePuedeComprar: function (unaPersona){
      return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,unaPersona));
   }
   
}
