<template>
  <div>

    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <slot>
        <div class="header-img">
          <img :src="shuSymbol" alt="图片缺失">
        </div>
      </slot>
      <el-menu-item index="1" class="length">
        <router-link to="/">工具栏
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      shuSymbol: require('@/assets/shu.jpeg'),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.length{
  width: 150px;
}
.header-img {
  float: left;
  width: 300px;
  height: 50px;
  margin: 0 20px 0 50px;
}

.header-img img {
  width: 80%;
  height: 80%;
}

a:hover {
  text-decoration: none;
  color: #ffd04b;
}

a {
  text-decoration: none;
  color: #99a9bf;
}

.header-img {
  float: left;
  width: 300px;
  height: 50px;
  margin: 0 20px 0 50px;
}

.header-img img {
  width: 50px;

}
</style>
