<template>
  <Sidebar></Sidebar>
</template>

<script>
  import Sidebar from '../sidebar/Sidebar.vue';

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    },
    components: {
      Sidebar
    }
  }
</script>

<style scoped>

</style>
