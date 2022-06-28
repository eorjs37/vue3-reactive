# vue3-reactive

## watch
> ref에서 선언한 데이터를 감시하는 역할을 한다  
cur,old를 이용하여 현재값과 직전값을 확인 할 수 있다.

```javascript

setup(){
    const text = ref('');

    /*================= watch =================*/
    watch(()=> text.value,(cur,old)=>{
      console.log('watch cur : ',cur);
      console.log('watch old : ',old);
    });
}
```

## watchEffect
> ref에서 선언한 데이터에서 나온 결과 값에 대한 값을 다른 값에 영향을 줄때 사용하는것으로 보인다.

```javascript
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
    });

    return{
      text,
      textCount
    }
}
```

## 양방향 바인딩
> 부모에서 자식한테 데이터를 전달후 데이터를 수정하고 싶을때 양방향 바인딩을 통해서 데이터 sync를 맞출 수 있다.

### 부모 vue
```javascript html
//parent.vue => 부모 vue

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
```

### 자식 vue
> props에서 받은 데이터를 input태그의 value로 선언하고, 입력할때마다(@input 이벤트) emits에 등록된(iptext)를 통해  
해당 타겟의value($event.target.value)를 전달한다.

```javascript html
//props.vue => 자식 vue
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
```
