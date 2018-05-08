<template>
  <div class="ss">
    <Navb></Navb>
    <div class="container-fluid">
      <Sidebar></Sidebar>
      <div class="row">
        <div class="col-sm-10 col-md-10 col-md-offset-2 col-sm-offset-2">
          <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from '../common/Sidebar.vue';
  import Navb from '../common/Navb.vue';

  export default {
    data: function(){
      return {
        sidebar_list: []
      }
    },
    components: {
      Sidebar,
      Navb
    }
  }
</script>

<style scoped>
  .ss {
    padding-top: 60px;
  }
</style>
