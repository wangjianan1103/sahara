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

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
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
