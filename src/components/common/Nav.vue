<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Brand</a>
      </div>
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    data: function () {
      return{
        sidebar_list: [
          {
            id: 1,
            text: '服务管理',
            is_active: true,
            href: 'dadawdwadd',
            icon:'glyphicon-home',
            childItems: [
              {
                text: '1点',
                href: ''
              },
              {
                is_active: false,
                text: '2点',
                href: ''
              }
            ]
          },
          {
            id: 2,
            text: '产品管理',
            is_active: false,
            href: '',
            icon:'glyphicon-indent-right',
            childItems: [
              {
                text: '1点',
                href: ''
              },
              {
                is_active: false,
                text: '2点',
                href: ''
              }
            ]
          },
          {
            id: 3,
            text: '日志管理',
            is_active: false,
            href: '',
            icon:'glyphicon-tint',
            childItems: [
              {
                text: '产品信息',
                href: ''
              },
              {
                is_active: false,
                text: '新建',
                href: ''
              }
            ]
          },
          {
            id: 4,
            is_active: false,
            icon:'glyphicon-headphones',
            text: '星期四',
            href: ''
          }
        ]
      }
    },
    methods: {
      toggleMenu: function (menu){

      }
    }
  };
</script>

<style scoped>


</style>
