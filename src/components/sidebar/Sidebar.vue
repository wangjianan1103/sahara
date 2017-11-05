<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li v-for="sidebar in sidebar_list" v-bind:class="{active: sidebar.is_active}" @click="greet">
            <a href="#">{{sidebar.name}}<span class="pull-right glyphicon glyphicon-triangle-left"></span></a>
            <ul class="nav nav-small-bar" v-if="sidebar.item_list">
              <li v-for="item in sidebar.item_list"><a href="">{{item.name}}</a></li>
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
            is_active: true,
            name: '星期一',
            url: '',
            item_list: [
              {
                is_active: false,
                name: '1点',
                url: ''
              },
              {
                is_active: false,
                name: '2点',
                url: ''
              }
            ]
          },
          {
            is_active: false,
            name: '星期二',
            url: ''
          },
          {
            is_active: false,
            name: '星期三',
            url: '',
            item_list: [
              {
                is_active: false,
                name: '1点',
                url: ''
              },
              {
                is_active: false,
                name: '2点',
                url: ''
              }
            ]
          },
          {
            is_active: false,
            name: '星期四',
            url: ''
          }
        ]
      }
    },
    methods: {
      greet: function (event){
        if (event) {
          console.log(event)
          event.preventDefault();
        }
        this.is_active = !this.is_active;

      }
    }
  };
</script>

<style scoped>
  /*
   * Sidebar
   */
  @media (min-width: 768px) {
    .sidebar {
      width: 250px;
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
