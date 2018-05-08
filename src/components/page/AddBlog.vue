<template>
  <div class="table-responsive">
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">表格</li>
    </ol>
    <div class="container-fluid">
      <!-- 内容区域 -->
      <div class="col-md-10">
        <input type="text" id="title" v-model="title" class="form-control" placeholder="写下笔记标题">
        <input type="hidden" class="form-control" v-model="id">
        <div id="editor">
          <mavon-editor style="height: 100%" @change="change_" @save="save"></mavon-editor>
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
        <div>
          <select class="form-control" v-model="flag_channel">
            <option disabled value="">请选择</option>
            <option v-for="model in channels" v-if="channels" v-bind:value="model.gid">{{model.name}}</option>
          </select>
        </div>
        <br>

        <!-- 分类 -->
        <a data-toggle="tooltip" data-placement="bottom" title="标签">
          <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
        </a>
        <span>分类</span>
        <hr style="margin-top: 5px; margin-bottom: 6px;">
        <div>
          <select multiple class="form-control" v-model="flag_mark_list">
            <option v-for="model in mark_list" v-if="mark_list" v-text="model.name" v-bind:value="model.gid"></option>
          </select>
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
  import qs from 'qs';

  export default {
    name: 'editor',
    components: {
      'mavon-editor': mavonEditor
    },
    data: function () {
      return {
        id: null,
        mark_list: [],
        channels: [],
        value: '',
        markdownContent: '',
        title: null,
        channel: null,
        marks: null,
        flag_channel: null,
        flag_mark_list: []
      }
    },
    methods: {
      change_: function (value, render) {
        this.value = render;
        this.markdownContent = value;
      },
      save: function(){
        let _this = this;
        if (_this.flag_channel === null) {
          alert("请选择标签");
          return;
        }

        if (_this.flag_mark_list === null || _this.flag_mark_list.length <= 0) {
          alert("请选择分类");
          return;
        }

        this.$axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        let body = JSON.stringify({
          name: this.title,
          type: '原创',
          channel: this.flag_channel,
          marks: this.flag_mark_list,
          message: this.value,
          markdownContent: this.markdownContent,
          id: this.id
        });
        this.$axios.post('/manage/blog/do', body)
          .then(function (response) {
            let data = response.data;
            if (data.status === 0) {
              _this.id = data.content.id;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    },
    mounted: function () {
      let _this = this;
      this.$axios.post('/manage/mark/getMark', {})
        .then(function (response) {
          let data = response.data;
          if (data.status === 0) {
            let list = [];
            let content = data.content;
            for (let i = 0; i < content.length; i++) {
              let mark = content[i];
              list.push(mark);
            }
            _this.mark_list = list;
          } else {
            alert(data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      this.$axios.post('/manage/channel/getChannel', {})
        .then(function (response) {
          let data = response.data;
          if (data.status === 0) {
            let list = [];
            let content = data.content;
            for (let i = 0; i < content.length; i++) {
              let channel = content[i];
              list.push(channel);
            }
            _this.channels = list;
          } else {
            alert(data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
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
