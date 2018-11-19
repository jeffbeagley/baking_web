import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// mutations
const mutations = {
    [types.ADD_TO_CART] (state, { id, name }) {
        const record = state.added.find(p => p.id === id)

        if(!record) {
            state.added.push({
                id,
                quantity: 1
            })
        } else {
            record.quantity++
        }

        Vue.notify({
            group: 'store',
            text: `${name} successfully added to your cart`,
            type: 'success'
        })
    },
    [types.REMOVE_FROM_CART] (state, { id, name }) {
        const record = state.added.find(p => p.id === id)

        record.quantity--

        if(record.quantity === 0) {
            state.added.forEach((v, i) => {
                if(v.id === record.id) {
                    state.added.splice(i, 1)
                }
            })
        }

        Vue.notify({
            group: 'store',
            text: `${name} successfully removed from your cart`,
            type: 'success'
        })

    }
}

// initial state
const state = {
    added: [],
    all: [
        {
            id: 'cc919e21-ae5b-5e1f-d023-c40ee669520c',
            name: 'COBOL 101 vintage',
            description: 'Learn COBOL with this vintage programming book',
            price: 399,
            image_url: '/static/images/products/p1.jpg'
        },
        {
            id: 'bcd755a6-9a19-94e1-0a5d-426c0303454f',
            name: 'Sharp C2719 curved TV',
            description:
        'Watch TV like never before with the brand new curved screen technology',
            price: 1995,
            image_url: '/static/images/products/p2.jpg'
        },
        {
            id: '727026b7-7f2f-c5a0-ace9-cc227e686b8e',
            name: 'Remmington X mechanical keyboard',
            description:
        'Excellent for gaming and typing, this Remmington X keyboard ' +
        'features tactile, clicky switches for speed and accuracy',
            price: 595,
            image_url: '/static/images/products/p3.jpg'
        }
    ]
}
// getters
const getters = {
    allProducts: state => state.all, // would need action/mutation if data fetched async
    getNumberOfProducts: state => (state.all ? state.all.length : 0),
    cartProducts: state => {
        return state.added.map(({ id, quantity }) => {
            const product = state.all.find(p => p.id === id)
            return {
                name: product.name,
                price: product.price,
                id: product.id,
                quantity,
                image_url: product.image_url
            }
        })
    }
}
// actions
const actions = {
    addToCart ({ commit }, product) {
        commit(types.ADD_TO_CART, {
            id: product.id,
            name: product.name
        })
    },
    remove_item ({ commit }, product) {
        commit(types.REMOVE_FROM_CART, {
            id: product.id,
            name: product.name
        })
    },
    checkout ({ commit }, product) {
        console.log(this.total)
    }
}

// one store for entire application
export default new Vuex.Store({
    state,
    strict: debug,
    getters,
    actions,
    mutations
})
