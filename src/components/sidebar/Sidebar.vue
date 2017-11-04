<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li class="active"><a href="#">工作日adawdawd <span class="sr-only">(current)</span></a></li>
          <li><a href="#">星期一dadaddadaw</a></li>
          <li><a href="#">星期二adadawd</a></li>
          <li><a href="#">星期三adadawdawd</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
        <ul class="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  /*
   * Sidebar
   */
  @media (min-width: 768px) {
    .sidebar {
      width: 270px;
      position: fixed;
      top: 51px;
      bottom: 0;
      left: 0;
      z-index: 1000;
      display: block;
      padding: 20px;
      overflow-x: hidden;
      overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
      background-color: #f5f5f5;
      border-right: 1px solid #eee;
    }
  }


  .nav-sidebar > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
  }
  .nav-sidebar > .active > a,
  .nav-sidebar > .active > a:hover,
  .nav-sidebar > .active > a:focus {
    color: #fff;
    background-color: #428bca;
  }


</style>
