<template>
  <div class="props-container">
    <h1>Props.vue</h1>
    <label for="parentData">부모에서 받은 데이터 : </label> <input type="text" :value="inputText" @input="$emit('iptext',$event.target.value)"/>
  </div>
</template>

<script>
export default {
    emits:['iptext'],
    props:{
        inputText:{
            type:String
        }
    },
    setup(){
        return{
        }
    }
}
</script>

<style scoped>
  .props-container{
    border: 4px solid #000;
    padding: 10px;
    margin-top: 10px;
  }    
</style>