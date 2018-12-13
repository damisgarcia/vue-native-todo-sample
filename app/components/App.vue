<template>
    <app-navigation></app-navigation>
</template>

<script>
import Vue from 'vue-native-core'
import { VueNativeBase } from "native-base";

import AppNavigation from '../navigation'

import store from '../vuex'

Vue.use(VueNativeBase)

Vue.prototype.$store = store

export default {
    components: { AppNavigation }
}
</script>