<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li v-for="sidebar in sidebar_list" v-bind:class="{active: sidebar.is_active}" @click="toggleMenu(sidebar)">
            <a href="#">
              <span class="pull-left glyphicon" v-bind:class="sidebar.icon" aria-hidden="true"></span>
              <span class="sidebar_right">{{sidebar.text}}</span>
              <span class="pull-right glyphicon" v-bind:class="sidebar.is_active ? 'glyphicon-triangle-bottom' : 'glyphicon-triangle-left'"></span>
            </a>
            <ul class="nav nav-small-bar" v-show="sidebar.is_active">
              <li v-for="item in sidebar.childItems"><a href="">{{item.text}}</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
        if (menu.href) {
          menu.is_active = true;
          this.$router.push(menu.href);
          return;
        }

        // 其他时候默认进行子菜单的切换
        this.sidebar_list.forEach(item => {
          if (item.id !== menu.id) {
            item.is_active = false;
          }
        });
        menu.is_active = !menu.is_active;
      }
    }
  };
</script>

<style scoped>
  /*
  * css
  */
  .sidebar_right {
    margin-right: 10px;
    margin-left: 10px;
  }

  /*
   * Sidebar
   */
  @media (min-width: 768px) {
    .sidebar {
      width: 220px;
      position: fixed;
      top: 51px;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
    }
  }
  .nav-sidebar {
    font-size: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-sidebar > li {
    position: relative;
    display: block;
  }

  .nav-sidebar > li > a {
    width: 100%;
    padding: 10px 20px;
    display: block;
    border-left: 1px solid transparent;
    text-decoration: none;
  }

  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    color: #fff;
    background-color: #428bca;
  }

  .nav-small-bar {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 13px;
  }

  .nav-small-bar > li {
    position: relative;
    display: block;
  }

  .nav-small-bar > li > a {
    width: 100%;
    padding: 5px 40px;
    display: block;
    text-decoration: none;
  }


</style>
