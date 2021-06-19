import queryString from 'query-string'

export const state = () =>({
  productVariations:[],
  empty:true,
  subtotal:null,
  total:null,
  changed:false,
  shipping:null
})
export const getters = {
  productVariations(state) {
    return state.productVariations
  },
  count(state){
    return state.productVariations.length
  },
  empty(state){
    return state.empty
  },
  subtotal(state){
    return state.subtotal
  },
  total(state){
    return state.total
  },
  changed(state){
    return state.changed
  },
  shipping(state){
    return state.shipping
  },
}
export const mutations = {
  SET_PRODUCT_VARIATIONS (state, productVariations){
    state.productVariations = productVariations
  },
  SET_EMPTY (state, empty){
    state.empty = empty
  },
  SET_SUBTOTAL (state, subtotal){
    state.subtotal = subtotal
  },
  SET_TOTAL (state, total){
    state.total = total
  },
  SET_CHANGED (state, changed){
    state.changed = changed
  },
  SET_SHIPPING (state, shipping){
    state.shipping = shipping
  }
}
export const actions={
  async getCart({ commit,state }){
    let query = {}
    if(state.shipping){
      query.shipping_method_id = state.shipping.id
    }
    let response= await this.$axios.$get(`api/cart?${queryString.stringify(query)}`)
    //cart a query er madhome shipping method pathailo.jate oi valu cart totale add hoy
    commit('SET_PRODUCT_VARIATIONS', response.data.productVariations)
    commit('SET_EMPTY', response.meta.empty)
    commit('SET_SUBTOTAL', response.meta.subtotal)
    commit('SET_TOTAL', response.meta.total)
    commit('SET_CHANGED', response.meta.changed)
    return response
  },
//   async destroy({ dispatch },productId){
//     let response= await this.$axios.$delete(`cart/${productId}`)
//     dispatch('getCart')
//   },
  async update({ dispatch },{productId,quantity}){
    try {
      // let response= await this.$axios.$patch(`cart/${productId}`,{
      //   quantity
      // })
      console.log('good')
      let response=await this.$auth.loginWith("laravelSanctumCartUpdate", {
       data:rakib
      });
    } catch (e) {
      console.log('hi')
    }
    dispatch('getCart')
  },
  async store({ dispatch },rakib) {
    try {
      // let response= await this.$axios.$post('api/cart',{
        //         products
        //       })
      let response=await this.$auth.loginWith("laravelSanctumCartStore", {
       data:rakib
      });
    } catch (e) {
      
    }
     dispatch('getCart')
  },
//   async setShipping({ commit },shipping){
//    commit('SET_SHIPPING',shipping)
//   }
}
