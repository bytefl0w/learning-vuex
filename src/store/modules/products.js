import axios from 'axios';

import filterProducts from '../../products/filter-products';

export default {
  namespaced: true,
  state() {
    return {
      // productFilter: null, Shouldn't be in the store, since it is specific
      // to the product component
      products: null,
      cartItems: [{
        id: '24ab7b14-f935-44c1-b91b-8598123ea54a',
        title: 'Headlight Helmet',
        price: 59.95,
        category: 'Hiking',
        description: 'Protect your noggin and light your way. Get the best of both worlds with this 300 lumen lighted helmet.',
        image: 'headlight-helmet.jpg',
      }, {
        id: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
        title: 'Ultimate Dreamline Kayak',
        price: 649.99,
        category: 'Kayaking',
        description: 'Carbon fiber body with platinum hooks make this the perfect gift for that special someone.',
        image: 'ultimate-dreamline-kayak.jpg',
      }],
    };
  },
  getters: {
    getFilteredProducts(state) {
      // This getter is returning a function with the parameter "filter"
      return (filter) => filterProducts(filter, state.products);
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
  mutations: {
    addItemToCart(state, item) {
      state.cartItems.push(item);
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    // context that is passed in gives us access to the mutations through commits
    // destructuring the context object into just commit (ES6)
    fetchProducts({ commit }) {
      axios.get('/api/products')
        .then((result) => commit('setProducts', result.data));
    },
  },
};
