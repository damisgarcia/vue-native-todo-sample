<template>
  <nb-container>
    <view class="form-container">
      <nb-form class="form">
        <view class="col">
          <nb-item inlineLabel class="input">
            <nb-input placeholder="Insert your job" v-model="$store.state.todosModule.inputText" />
          </nb-item>
        </view>
        <view>
          <nb-button :on-press="addTodo" bordered dark>
            <nb-text>Add Todo</nb-text>
          </nb-button>
        </view>
      </nb-form>
    </view>
    <nb-content>
      <nb-list>
        <nb-list-item v-for="(item, index) in todosModule.todos" :key="item"  :on-press="() => onTapItem(index)">
          <nb-body>
            <nb-text>{{item.name}}</nb-text>  
          </nb-body>
        </nb-list-item>
      </nb-list>      
    </nb-content>
  </nb-container>
</template>

<script>
import { mapState } from 'vuex'
import { Alert } from 'react-native'

export default {
  methods: {
    onTapItem(item, index){
      setTimeout(this.showItemActions.bind(this, index), 200)
    },
    showItemActions(index){
      Alert.alert(
        'Actions Todo',
        'You want?',
        [
          {text: 'Destroy task', onPress: () => this.deleteTodo(index)},
          {text: 'Cancel', onPress: () => false, style: 'cancel'},
        ],
        { cancelable: false }
      )
    },

    addTodo() {
      this.$store.dispatch('todosModule/add')
    },
    deleteTodo(index) {
      this.$store.dispatch('todosModule/remove', index)
    }
  },
  computed: {
    ...mapState(['todosModule'])
  },
}
</script>

<style>
  .form-container{
    flex: 1;
    max-height: 64px;
    margin: 24px 0px;
  }
  .form{
    flex-direction: row;
  }
  .col{
    flex: 1;
    padding-right: 8px; 
  }
</style>
