<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="#">首页</a></li>
      <li class="active">项目介绍</li>
    </ol>
    <div class="jumbotron">
      <h2><a href="#about" id="about">About</a></h2>
      <h3><a href="#项目名-sahara撒哈拉沙漠" id="项目名-sahara撒哈拉沙漠">项目名 sahara(撒哈拉沙漠)</a></h3>
      <p>本项目是一套管理系统, 开发初衷是由于本人专注后端, 对前端技术和框架了解不多, 所以开发一套可配置, 可修改, 自适应的后台管理系统,
        正好也可以应用到个人博客, 充当管理系统.
        项目名即兴起的, 向往撒哈拉沙漠, 希望有机会去一次.</p>
      <h2><a href="#技术栈" id="技术栈">技术栈</a></h2>
      <ul>
        <li><strong>nodejs</strong></li>
        <li><strong>vue</strong></li>
        <li><strong>bootstrap</strong></li>
      </ul>
      <h2><a href="#项目运行" id="项目运行">项目运行</a></h2>
      <pre><code class="bash">
      # install dependencies
      npm install

      # serve with hot reload at localhost:8080
      npm run dev

      # build for production with minification
      npm run build
      </code></pre>
      <h2><a href="#期望目标" id="期望目标">期望目标</a></h2>
      <ul>
        <li class="task-list-item" task-offset="382"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" readonly="readonly" />&nbsp;项目框架搭建 -- 完成</li>
        <li class="task-list-item" task-offset="401"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" readonly="readonly" />&nbsp;菜单可配置 -- 完成</li>
        <li class="task-list-item" task-offset="419"><input type="checkbox" class="task-list-item-checkbox" checked="checked" disabled="disabled" readonly="readonly" />&nbsp;集成菜单简单配置 -- 完成</li>
      </ul>
      <h2><a href="#效果演示" id="效果演示">效果演示</a></h2>
      <p><img src="http://www.saharadeserttour.com/images/slider-2.jpg" alt="sahara" /></p>
      <h2><a href="#license" id="license">License</a></h2>
      <p>GPL</p>

    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        sidebar_list: []
      }
    }
  }
</script>

<style></style>
