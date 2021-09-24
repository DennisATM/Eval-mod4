<template>
  <div class="container">
    <div class="row justify-content-around">
      <h1>Productos en carrito de compras</h1>
    </div>
    <div class="row justify-content-around">
      <div class="col-12 col-md-8 col-lg-9">
        <div class="row">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Img</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody id="detalle">
              <tr v-for="(producto, index) in $store.state.productosOnCart" :key="index">
                <td>{{producto.id}}</td>
                <td><img :src="producto.image" class="icono"/></td>
                <td>{{producto.nombre}}</td>
                <td>{{producto.precio}}</td>
                <td>{{producto.cantidad}}</td>
                <td>{{producto.subtotal}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icono{
  width: 40px;
  height: 40px;
}
</style>

