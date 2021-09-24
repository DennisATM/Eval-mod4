import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //model
    productos: [
      {id: 1,nombre: "Arroz x 1Kg",genero: "Abarrotes, Todos",precio: 550, image: "./images/aba-arroz.jpg"},
      {id: 2,nombre: "Leche entera x 1Lt",genero: "Abarrotes, Todos",precio: 750, image:"./images/aba-leche.jpg"},
      {id: 3,nombre: "Azucar x 1Kg",genero: "Abarrotes, Todos",precio: 600, image:"./images/aba-azucar.jpg"},
      {id: 4,nombre: "Coca Colca x 2Lt",genero: "Bebidas, Todos",precio: 1300, image:"./images/beb-coca.jpg"},
      {id: 5,nombre: "Cilantro x atado",genero: "Vegetales, Todos",precio: 500, image:"./images/veg-cilantro.jpg"},
      {id: 6,nombre: "Pimiento x unidad",genero: "Vegetales, Todos",precio: 300, image:"./images/veg-pimiento.jpg"},
      {id: 7,nombre: "Wisky Chivas Regal",genero: "Licores, Todos",precio: 5400, image:"./images/cer-chivas.jpg"},
    ],
    productosOnCart:[],
    totalCart:0,
  },
  getters:{ //Selectores

  },
  mutations: { //Setter
    sumTotal(state,producto){
      state.totalCart= state.totalCart+(producto.subtotal)
    },
    resTotal(state,producto){
      state.totalCart= state.totalCart-(producto.subtotal)
    },
  },
  actions: { //Eventos a llamar
    mostrarsumTotal(context,producto){
      context.commit("sumTotal",producto)
    },
    mostrarresTotal(context,producto){
      context.commit("resTotal",producto)
    },
  },
  modules: { //Modulos
  }
})
