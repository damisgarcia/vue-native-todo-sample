export default {
    namespaced: true,
    state: {
        inputText: "",
        todos: [{
            name: 'Exercitation incididunt id eiusmod aliqua sint excepteur proident amet deserunt commodo officia ipsum elit id.'
        }],
        dones: []
    },
    mutations: {
        add(state){
            if(state.inputText === "") return
            
            state.todos.unshift({
                name: state.inputText
            })

            state.inputText = ""
        },
        remove(state, index){
            state.todos.splice(index, 1)
        }
    },
    actions: {
        add({commit}){
            commit('add')
        },
        remove({commit}, index){
            commit('remove', index)
        }
    }
}