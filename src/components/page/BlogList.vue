<template>
  <div class="table-responsive">
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">表格</li>
    </ol>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>博客名称</th>
          <th>浏览次数</th>
          <th>创建时间</th>
          <th>简介</th>
          <th>操作</th>
        </tr>
        </thead>
      <tbody>
        <tr v-for="model in blog_list" v-if="blog_list">
          <th scope="row">{{model.id}}</th>
          <td>{{model.name | formatString(30)}}</td>
          <td>{{model.views}}</td>
          <td>{{model.createTime | formatDate}}</td>
          <td>{{model.description | formatString(50)}}</td>
          <td>
            <button type="button" class="btn btn-info btn-sm">编辑</button>
            <button type="button" class="btn btn-info btn-sm" v-on:click="del_blog(model.gid)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {formatDate} from '../utils/FormatUtils.js';
  import {formatString} from '../utils/FormatUtils.js';

  export default {
    data: function () {
      return {
        blog_list: []
      }
    },
    created: function () {
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData'
    },
    methods: {
      del_blog: function (gid) {
        if (gid === null) {
          return;
        }

        let _this = this;
        this.$axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        this.$axios.post('/manage/blog/delete', gid)
          .then(function (response) {
            let data = response.data;
            _this.$router.go({path: '/blog_list', query: {}});
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      fetchData: function () {
        let _this = this;
        this.$axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        this.$axios.post('/manage/getBills', {})
          .then(function (response) {
            let data = response.data;
            if (data.status === 0) {
              _this.blog_list = data.content;
            }
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    },
    filters: {
      formatDate(time) {
        return formatDate(new Date(parseInt(time) * 1000), "yyyy-MM-dd hh:mm");
      },
      formatString(str, length) {
        return formatString(str, length);
      }
    },

  };
</script>

<style></style>
