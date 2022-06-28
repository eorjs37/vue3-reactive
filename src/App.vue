<template>
  <div class="app">
    <router-view></router-view>
  </div>
  
</template>

<script>
import { onMounted } from 'vue';
export default {
  name: 'App',
  setup(){
    onMounted(()=>{
      
    })
  }
}
</script>

<style>
.app{
  border: 1px solid #eee;
  padding: 10px;
}
</style>
