<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from './NewPizza.vue';
export default {
    data() {
        return {
            name:"LGQ",
            getMenuItems:[]
        }
    },
    components:{
        'app-new-pizza':NewPizza
    },
    methods: {
        deleteData(){

        }
    },
    // beforeRouteEnter (to, from, next) {

    //     //异步的
    //     next(vm=>{
    //        console.log(vm);
    //     })
    // }
    // beforeRouteLeave (to, from, next) {
    //     // ...
    // }
}
</script>