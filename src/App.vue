<template>
  <div class="app">
    <h1 id="appEl">AppEl</h1>
    <input id="inputText" type="text" v-model="data">
    <Child></Child>
    <router-view></router-view>
  </div>
  
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import Child from '@/components/Child.vue';
export default {
  name: 'App',
  components:{
    Child
  },
  setup(){
    const data = ref('A');

    /* ################# lifecycle ################# */
    onBeforeMount(()=>{
      console.log(`App.vue onBeforeMount`);
      console.log('appEl : ',document.getElementById('appEl'));
    });
    onMounted(()=>{
      console.log(`App.vue onMounted`);
      console.log('appEl : ',document.getElementById('appEl'));
    });

    onBeforeUpdate(()=>{
      console.log('App.vue onBeforeUpdate');
      console.log(document.getElementById('inputText').value);
    });

    onUpdated(()=>{
      console.log('App.vue onUpdated');
      console.log(document.getElementById('inputText').value);
    })

    /* ################# return ################# */
    return{
      data
    }
  }
}
</script>

<style>
</style>
