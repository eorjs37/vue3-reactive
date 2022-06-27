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