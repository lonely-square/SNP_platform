<template>
  <div>
    <el-container style=" border: 1px solid #eee">

      <el-header><Header/></el-header>

      <el-container>

        <el-aside width="200px" style="background-color: #ecf5ff ">
          <el-menu :default-openeds="['1','2', '3']" >
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-edit"></i>
                <router-link :to="{name: 'updatePage'}">上传数据</router-link></template>
            </el-submenu>

<!--            <el-submenu index="2">-->
<!--              <template slot="title"><i class="el-icon-data-board"></i>-->
<!--                <router-link :to="{name:'commentClass'}">验证数据</router-link></template>-->
<!--            </el-submenu>-->

<!--            <el-submenu index="3">-->
<!--              <template slot="title"><i class="el-icon-guide"></i>-->
<!--                <router-link :to="{name:'pdfReader'}">生成报告</router-link></template>-->
<!--            </el-submenu>-->

          </el-menu>
        </el-aside>

        <el-main style="background-color: #e8f0f5">
          <div >
            <router-view></router-view>
          </div>


        </el-main>

      </el-container>

    </el-container>
  </div>
</template>

<script>
import Header from "./header";
export default {
  name: "home",

  components:{
    Header
  }
}
</script>

<style scoped>

a:hover {
  text-decoration: none;
  color: #ffd04b;
}

a {
  text-decoration: none;
  color: #99a9bf;
}
</style>
