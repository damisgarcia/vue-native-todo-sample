<template>
  <view class="container">
    <image :source="logo" class="logo" />
    <text class="text-color-primary">My Vue Native App</text>
    <view class="navigation">
      <button
        class="action"
        title="Go Counter"
        :on-press="toCounter" />

      <button
        class="action"
        title="Go Todo"
        :on-press="toTodos" />
    </view>
  </view>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data(){
    return{
      logo: require('../assets/images/vue.png')
    }
  },
  methods: {
    toCounter(){
      this.navigation.navigate('Counter')
    },
    toTodos(){
      this.navigation.navigate('Todos')
    }
  }
}

</script>

 
<style>
  .container {
    background-color: white;
    align-items: center;
    justify-content: space-around;
    flex: 1;
  }
  .navigation {
    flex-direction: row;
    justify-content: space-between;
  }
  .logo{
    width: 100;
    height: 100;
  }
  .action{
    margin-right: 8px;
  }
</style>
