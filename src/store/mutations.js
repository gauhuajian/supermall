import {
    ADD_CART,
    ADD_TO_CART
} from './mutation-types'

export default {
    [ADD_CART](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
    },
    checke(state, payload) {
        let upstate = state.cartList.find(item => item.id == payload)
        // upstate.cartList.checke = !upstate.cartList.checke
        upstate.isCheck = !upstate.isCheck

    }
}