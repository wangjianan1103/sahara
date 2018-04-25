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
            <button type="button" class="btn btn-info btn-sm">删除</button>
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
    data: function(){
      return {
        blog_list: [
        ]
      }
    },
    mounted: function () {
      this.$http({
        url: 'http://api.oopmind.com/manage/getBills',
        method: 'POST',
        body: {
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        this.blog_list = res.body.content;
        console.info(this.blog_list)
      }, function (err) {
        console.info(err)
      });
    },
    filters: {
      formatDate(time) {
        return formatDate(new Date(parseInt(time) * 1000), "yyyy-MM-dd hh:mm");
      },
      formatString(str, length) {
        return formatString(str, length);
      }
    },

  }
</script>

<style></style>
