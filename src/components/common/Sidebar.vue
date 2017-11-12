<template>
  <div class="col-sm-2 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li v-for="sidebar in sidebar_list" v-if="sidebar_list" v-bind:class="{active: sidebar.is_active}" @click="toggleMenu(sidebar)">
        <a href="#">
          <span class="pull-left glyphicon" v-bind:class="sidebar.icon" aria-hidden="true"></span>
          <span class="sidebar_right">{{sidebar.text}}</span>
          <span class="pull-right glyphicon" v-if="sidebar.item_list" v-bind:class="sidebar.is_active ? 'glyphicon-triangle-bottom' : 'glyphicon-triangle-left'"></span>
        </a>
        <ul class="nav nav-small-bar" v-show="sidebar.is_active">
          <li v-for="item in sidebar.item_list" v-bind:class="{active: item.is_active}" @click.stop="toggleItem(sidebar, item)">
            <a href="#">{{item.text}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        sidebar_list: []
      }
    },
    mounted: function () {
      this.$http({
        url: '/static/data/sidebar.json',
        method: 'GET',
        data: {
        },
        headers: {
          'Content-Type': 'x-wwww-form-urlencoded'
        }
      }).then(function (res) {
        this.sidebar_list = res.body.sidebar_list;
      }, function (err) {
        console.info(err)
      });
    },
    methods: {
      /**
       * 菜单切换
       * @param sidebar
       */
      toggleMenu: function (sidebar){
        const _sidebar_active = !sidebar.is_active;

        if (sidebar.href) {
          this.initSidebar();
          sidebar.is_active = true;
          this.$router.push(sidebar.href);
          return;
        }

        this.initSidebar();
        sidebar.is_active = _sidebar_active;
      },

      /**
       * 子菜单切换
       * @param sidebar
       * @param item
       */
      toggleItem: function (sidebar, item) {
        const _item_active = item === null ? false : !item.is_active;

        if (item.href) {
          this.initItem();
          item.is_active = true;
          this.$router.push(item.href);
          return;
        }

        this.initItem();
        if (item !== null && sidebar.is_active){
          item.is_active = _item_active;
        }
      },
      /**
       * 菜单切换时，初始化其他子菜单
       */
      initSidebar: function () {
        this.sidebar_list.forEach(_sidebar => {
          _sidebar.is_active = false;
          if (_sidebar.item_list !== null && _sidebar.item_list !== undefined) {
            _sidebar.item_list.forEach(_item => {
              _item.is_active = false;
            });
          }
        });
      },
      /**
       * 菜单切换时，初始化其他子菜单
       */
      initItem: function () {
        this.sidebar_list.forEach(_sidebar => {
          if (_sidebar.item_list !== null && _sidebar.item_list !== undefined) {
            _sidebar.item_list.forEach(_item => {
              _item.is_active = false;
            });
          }
        });
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

  /*父菜单*/
  @media (min-width: 768px) {
    .sidebar {
      position: fixed;
      top: 50px;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 0;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #373737;
      border-right: 1px solid #eee;
    }
  }
  .nav-sidebar {
    font-size: 17px;
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
    padding: 15px 20px;
    display: block;
    border-left: 1px solid transparent;
    text-decoration: none;
    color: #bfcbd9;
  }

  .nav-sidebar > li > a:hover,
  .nav-sidebar > li > a:focus {
    background-color: #484848;
  }

  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    background-color: #484848;
  }

  /*子菜单*/
  .nav-small-bar {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 15px;
    background-color: #373737;
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
    color: #bfcbd9;
  }

  .nav-small-bar > li > a:hover,
  .nav-small-bar > li > a:focus {
    background-color: #484848;
  }

  .nav-small-bar > .active > a,
  .nav-small-bar > .active > a:hover,
  .nav-small-bar > .active > a:focus {
    color: #1976d2;
    background-color: #373737;
  }

</style>
