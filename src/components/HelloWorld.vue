<template>
  <div class="">
    <product-list-one :products='products'></product-list-one>
    <product-list-two :products='products'></product-list-two>
    
  </div>
</template>

<script>

import productOne from './product-dist-one';
import productTwo from './product-list-two';

export default {
  props: {},
  data () {
    return {
    products: [
          {id: '1', name: 'aaaa', price: 25},
          {id: '2', name: 'bbbb', price: 40},
          {id: '3', name: 'cccc', price: 55},
          {id: '4', name: 'dddd', price: 78}
        ]
    }
  },
  components: {
    "product-list-one": productOne,
    "product-list-two": productTwo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
