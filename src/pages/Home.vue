<template>
  <div class="home">
    <h1>
      Home.vue
    </h1>
    <input type="text" v-model="text"> <br>
    <label for="textCount">텍스트길이: </label>{{ textCount }}
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
export default {
  setup(){
    const text = ref('');
    const textCount = ref(0);

    /*================= function =================*/
    const getTextCount = () =>{
      return text.value.length;
    }

    /*================= watch =================*/
    watch(()=> text.value,(cur,old)=>{
      console.log('watch cur : ',cur);
      console.log('watch old : ',old);
    });

    /*================= watchEffect =================*/
    watchEffect(()=> {
      textCount.value = getTextCount();
    })

    return{
      text,
      textCount
    }
  }
}
</script>

<style scoped>
.home{
  border: 1px solid #000;
}
</style>