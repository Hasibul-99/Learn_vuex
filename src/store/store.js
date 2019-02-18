import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {id: '1', name: 'aaaa', price: 25},
            {id: '2', name: 'bbbb', price: 40},
            {id: '3', name: 'cccc', price: 55},
            {id: '4', name: 'dddd', price: 78}
          ]
    },
    getters: {
        saleProducts: state => {
            let seleProducts = state.products.map (product => {
                return {
                    id: product.id,
                    name: '**' + product.name + '**',
                    price: product.price + 10
                }
            })
  
            return seleProducts
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload);
            }, 2000)
        }
    }
})