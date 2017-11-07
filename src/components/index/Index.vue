<template>
    <div>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Sidebar from '../common/Sidebar.vue';
  import Nav from '../common/Nav.vue';

  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
    },
    components: {
      Sidebar,
      Nav
    }
  }
</script>

<style scoped>

</style>
