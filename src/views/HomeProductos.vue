<template>
  <div class="container container-fluid">
  <div class="row"> 
    <div class="col-12 col-md-4 col-lg-3 bg-secondary bg-info text-center text-white">
      <h3 class="mt-2">Buscar productos</h3>
      <form class="form mt-4">
        <label>Categorias</label>
        <select v-model="eleccion" @change="filterMovie">
          <option selected disabled>Elige una categoria</option>
          <option v-for="(tipos,index) in Generos" :key="index">{{ tipos }}</option>
        </select>
      </form>
      <br /><br />
      <form>
        <h3>Añadir productos</h3>
        <input class="mb-2" v-model="nombre" placeholder="Nombre del producto" type="text"/>
        <input class="mb-2" v-model="genero" placeholder="Categoria" type="text"/>
        <input class="mb-2" v-model="precio" placeholder="Precio" type="number"/>
        <input class="mb-2" v-model="image" placeholder="Url de imagen" type="text"/><br />
        <button type="button" @click="agregar">Ingresar</button>
      </form>
    </div>
    <div class="col-12 col-md-8 col-lg-9 justify-content-around">
      <div class="row justify-content-around" v-if="porGenero.length===0">
          <card-productos v-for="(producto,index) in $store.state.productos" :key="index" :producto="producto" ></card-productos>      
      </div>
      <div class="row justify-content-around" v-if="porGenero.length>0">
        <card-productos v-for="(producto , index) in porGenero" :key="index" :producto="producto"></card-productos>
      </div>
    </div>
  </div>
</div>  
</template>

<script>
// @ is an alias to /src
import CardProductos from '../components/CardProductos.vue'

export default {
  name: 'Home',
  components: {
    CardProductos,
  },
  data() {
    return {
      totalCarrito:0,
      nombre:null,
      genero:null,
      precio:null,
      image:null,
      showCarrito : false,
      Generos:["Todos","Abarrotes","Bebidas","Vegetales","Licores"],
      eleccion:null,
      porGenero:[],
      productosonCart:[],
    };
  },
  methods:{
            filterMovie: function(){
                this.porGenero = this.$store.state.productos.filter(prod => prod.genero.includes(this.eleccion));
            },
            agregar:function(){
                if(this.nombre==null || this.precio==null|| this.genero==null || this.image==null){
                    alert("Debe ingresar datos correctamente.")
                }else{
                    let obj={
                        id:(this.$store.state.productos.length+1),
                        nombre:this.nombre,
                        precio:this.precio,
                        genero:this.genero + ",Todos",
                        image:this.image,
                    }
                    this.$store.state.productos.push(obj);                   
                    this.limpiar();                    
                }
              },
            limpiar:function(){
              this.nombre=null,
              this.precio=null,
              this.genero=null,
              this.image=null
            }
  }
}
</script>

    