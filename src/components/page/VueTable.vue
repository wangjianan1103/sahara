<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data: function(){
      const self = this;
      return {

      }
    },
    methods: {
      changePage(values) {
        this.information.pagination.per_page = values.perpage;
      },
      onSearch(searchQuery) {
        this.query = searchQuery;
      }
    },
    computed:{
      getData(){
        const self = this;
        return self.information.data.filter(function (d) {
          if(d.name.indexOf(self.query) > -1){
            return d;
          }
        })
      }
    },
    beforeMount(){
      if(process.env.NODE_ENV === 'development'){
        this.url = '/ms/table/source';
      }
    }
  }
</script>

<style></style>
