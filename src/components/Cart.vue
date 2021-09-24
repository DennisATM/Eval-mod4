<template>
  <div class="row justify-content-end">
                    <button class="btn btn-sm border border-secondary text-info" @click="toggleCarrito" >🛒({{items.length}}) $ {{this.$store.state.totalCart}}
                    <div v-if="showCarrito==true">
                        <div v-if="items">
                        <div class="text-right" v-for="(producto,index) in items" :key="index">
                        -{{producto.nombre}} | cant: {{producto.cantidad}} = $ {{producto.subtotal}}
                        <button class="btn-xs btn-danger" @click="quitToCart(producto.id)">X</button> 
                        </div>
                        </div>
                        <div v-if="items.length == 0">
                            <h6>Carrito vacío</h6>
                        </div>
                    </div>
                    </button>
                </div> 
</template>

<script>
export default {
    name:"Carrito",
    props:{
        items:[],
        totalCart:Number,                
    },
    data(){
        return{
            showCarrito:true,
        }
    },
    methods:{  
            quitToCart: function(id){
               this.items.forEach((element, index) => {
                    if (element.id == id) {
                        this.items.splice(index,1);
                        this.$store.dispatch('mostrarresTotal',element);
                        this.showCarrito=!this.showCarrito;
                    }
               });
            },
            toggleCarrito: function(){
                this.showCarrito=!this.showCarrito;
            },
    }
}
</script>

<style>

</style>