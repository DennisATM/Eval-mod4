<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Catalogo</router-link> |
      <router-link to="/about">Carrito</router-link>
      <div class="container container-fluid">
        <div class="row justify-content-end">
          <cart :showCarrito="true" :items="this.$store.state.productosOnCart"/>
        </div>
      </div>
    </div>
    
    <router-view/>
    
  </div>
</template>
<script>
import Cart from './components/Cart.vue'

export default {
  name: "App",
  components:{
    Cart,
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
