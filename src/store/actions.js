import {
    ADD_CART,
    ADD_TO_CART
} from './mutation-types'

export default {
    getCartInfo({
        state,
        commit
    }, payload) {
        return new Promise((resolve) => {
            let product = state.cartList.find(item => item.id == payload.id)
            if (product) {
                resolve('该商品+1')
                commit(ADD_CART, product)
            } else {
                resolve('成功添置购物车')
                commit(ADD_TO_CART, payload)
            }
        })
    }
}