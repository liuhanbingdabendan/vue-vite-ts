<script lang="ts">
import { defineComponent } from 'vue';
import { getTest } from '@/api/text'; 

console.log(getTest, 'getTest');
export default defineComponent({
  setup() {
    getTest().then(res => {
      console.log(res, 'res');
    })
  },
})
</script>

<template>
  <div>这是第一组件</div>
</template>

<style lang="stylus" scoped>

</style>
