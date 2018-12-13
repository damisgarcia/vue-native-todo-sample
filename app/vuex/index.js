import Vue from "vue-native-core";
import Vuex from "vuex";

import todosModule from './todo'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        todosModule
    },
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            // mutate state
            state.count++;
        }
    },
    actions: {
        increment(context) {
            context.commit("increment");
        }
    }
});
export default store;