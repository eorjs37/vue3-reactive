<template>
  <h1>ChildVue</h1>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated  } from 'vue';
export default {
    setup(){
        onBeforeMount(()=>{
            console.log(`Child.vue onBeforeMount`);
        });
        onMounted(()=>{
            console.log(`Child.vue onMounted`);
        });

        onBeforeUpdate(()=>{
            console.log('Child.vue onBeforeUpdate');
        });

        onUpdated(()=>{
            console.log('Child.vue onUpdated');
        })
    }
}
</script>

<style>

</style>