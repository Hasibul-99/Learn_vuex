<template>
  <div id="product-list-one">
      <h2>Product list one</h2>

        <Ul>
            <li v-for="product in products" :key="product.id">
                <span class="product">{{product.name}}</span>
                <span class="price">{{product.price}}</span>
            </li>
        </Ul>

        <Ul>
            <li v-for="product in saleProducts" :key="product.id">
                <span class="product">{{product.name}}</span>
                <span class="price">{{product.price}}</span>
            </li>
        </Ul>

  </div>
</template>

<script>
export default {
  computed: {
      products() {
          return this.$store.state.products;
      },
      saleProducts() {
          return this.$store.getters.saleProducts;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
