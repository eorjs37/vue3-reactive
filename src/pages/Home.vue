<template>
  <div class="home">
    <h1>
      Home.vue
    </h1>
    <input type="text" v-model="text"> <br>
    <label for="textCount">텍스트길이: </label>{{ textCount }}
    <Write :title="childData" @input="childData = $event"></Write>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import Write from '@/components/Write.vue';
export default {
  components:{
    Write,
  },
  setup(){
    const text = ref('');
    const textCount = ref(0);
    const childData = ref('parent data');

    /*================= function =================*/
    const getTextCount = () =>{
      return text.value.length;
    }

    const getData = (data) =>{
      childData.value = data
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
      textCount,
      childData,
      getData
    }
  }
}
</script>

<style scoped>
.home{
  border: 1px solid #000;
}
</style>