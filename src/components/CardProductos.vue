<template>
<div class="col-12 col-md-6 col-lg-3">
    <div class="ubi card p-2 m-2 sombra">
    <img :src="producto.image" alt=""/>
    <div class="card-body">
      <h6 class="card-title">{{ producto.nombre }}</h6>
      <p class="card-text">$ {{ producto.precio }}</p>
    </div>
    <button @click="sendProductToCart()"
      class="btn btn-primary mb-2 sombra"      
    > Agregar al carro
    </button>
    <div class="d-flex justify-content-center">
      <button class="btn btn-danger" @click="cantidad != 1 && cantidad--">-</button>
      <h4 class="mx-3">{{ cantidad }}</h4>
      <button class="btn btn-primary" @click="cantidad++">+</button>
    </div>  
  </div>
</div>
</template>

<script>
export default {
  name: 'CardProductos',
  props: {
    producto: Object,
  },
  data(){
    return{
      cantidad:1,
      Venta:[{
        id:"",
        nombre:"",
        precio:0,
        cantidad:0,
        subtotal:0,
        image:"",
      }],
    }
  },
  methods:{
    sendProductToCart:function(){      
      this.Venta=[];
      const yaregistrado = this.$store.state.productosOnCart.find(element => element.id === this.producto.id);
       this.Venta.image = this.producto.image;
       this.Venta.id = this.producto.id;
       this.Venta.nombre = this.producto.nombre;
       this.Venta.precio = this.producto.precio;
       this.Venta.cantidad= this.cantidad;
       this.Venta.subtotal = this.Venta.precio * this.cantidad;
       if (yaregistrado==undefined){
         this.$store.state.productosOnCart.push(this.Venta);
         this.cantidad=1;
       }else{
         this.$store.state.productosOnCart.forEach(element => {
           if (element.id == this.producto.id){
             element.cantidad+=this.Venta.cantidad;
             element.subtotal+=this.Venta.subtotal;
             this.cantidad=1;
           }
         });
       }
      this.$store.dispatch('mostrarsumTotal',this.Venta);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
