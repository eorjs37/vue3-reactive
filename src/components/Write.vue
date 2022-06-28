<template>
  <h1>
    Write.vue
  </h1>
  <h2>
    props data : {{ title }}
    <input type="text" v-model="test">
  </h2>
</template>

<script>
import { ref, watch } from 'vue'
export default {
    emits:['input'],
    props:{
        title:{
            type: String,
        }
    },
    setup(props, { emit }){
        const test = ref(props.title);

        watch(test, (cur) => { 
          emit(`input`,cur)
        })
        return{
            test,
        }
    }
}
</script>

<style>

</style>