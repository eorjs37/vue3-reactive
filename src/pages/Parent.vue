<template>
  <h1>양방향 바인딩</h1>
  <label for="parent-data">부모데이터 : </label> <input type="text" v-model="parentData">
  <Props :inputText="parentData" @iptext="parentData = $event"></Props>
</template>

<script>
import Props from '@/components/Props.vue';
import { ref } from 'vue';
export default {
  components:{
    Props
  },
  setup(){
    const parentData = ref('안녕하세요');

    return{
      parentData
    }
  }
}
</script>

<style>

</style>