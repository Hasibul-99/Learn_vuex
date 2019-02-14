<template>
  <div class="">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
    
  </div>
</template>

<script>

import productOne from './product-dist-one';
import productTwo from './product-list-two';

export default {
  props: {},
  data () {
    return {
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
