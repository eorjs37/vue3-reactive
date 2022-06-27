<template>
  <div class="app">
    <h1>
      App.vue
    </h1>
    <Home></Home>
  </div>
  
</template>

<script>
import home from '@/pages/Home.vue';
import { onMounted } from 'vue';
export default {
  name: 'App',
  components:{
    'Home':home
  },
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
