<template>
  <div class="table-responsive">
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">表格</li>
    </ol>
    <div class="container-fluid">
      <!-- 内容区域 -->
      <div class="col-md-10">
        <input type="text" id="title" class="form-control" placeholder="写下笔记标题">
        <input type="hidden" class="form-control">
        <div id="editor">
          <mavon-editor style="height: 100%" :value="value" :external_link="external_link" ></mavon-editor>
        </div>
        <hr style="margin-top: 5px;">
      </div>
      <div class="col-md-2">
        <!-- 标签 -->
        <a data-toggle="tooltip" data-placement="bottom" title="标签">
          <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
        </a>
        <span>标签</span>
        <a data-toggle="tooltip" data-placement="bottom" title="添加" >
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
        </a>
        <hr style="margin-top: 5px; margin-bottom: 6px;">
        <br>

        <!-- 分类 -->
        <a data-toggle="tooltip" data-placement="bottom" title="标签">
          <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
        </a>
        <span>分类</span>
        <hr style="margin-top: 5px; margin-bottom: 6px;">
        <div>

        </div>
        <br>

        <a data-toggle="tooltip" data-placement="bottom" title="标签">
          <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
        </a>
        <span>缩略图</span>
        <hr style="margin-top: 5px; margin-bottom: 6px;">
        <a class="thumbnail">
          <img data-src="holder.js/140x140" class="img-circle" alt="140x140" style="width: 140px; height: 140px;" src="http://og4nfuylr.bkt.clouddn.com/psb.jpg" data-holder-rendered="true">
        </a>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor';
  import 'mavon-editor/dist/css/index.css';

  export default {
    name: 'editor',
    components: {
      'mavon-editor': mavonEditor
    },
    data: function () {
      return {
        blog_list: [],
        value: '',
        external_link: true
      }
    },
    methods: {
      $imgAdd(){
        console.info("2222222");
      },
      aa: function(){
        console.info(value);
        console.info("2222222");
      }

    },
    mounted: function () {
      this.$http({
        url: 'http://api.oopmind.com/manage/getBills',
        method: 'POST',
        body: {},
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
    filters: {},

  };
</script>

<style>
  #editor {
    margin: auto;
    width: 100%;
    height: 680px;
  }
</style>
