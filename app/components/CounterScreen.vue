<template>
  <view class="container">
    <text class="title">Counter Screen</text>
    <text class="counter">{{ $store.state.count }}</text>
    <button
      :on-press="onPressIncrement"
      title="Incremment"
    />
  </view>
</template>

<script>
export default {
  methods: {
    onPressIncrement(){
      this.$store.dispatch('increment')
    }
  }
}
</script>

 
<style>
  .container{
    background-color: white;
    align-items: center;
    justify-content: space-around;
    flex: 1;
  }
  .title{
    font-size: 24px;
  }
  .counter{
    font-size: 48px;
  }
</style>
