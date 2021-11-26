<template>
  <div>
      <div style="width: 550px;height: 300px">
        <el-form label-width="160px" >
          <el-form-item label="病人姓名" style="width: 300px">
            <el-input v-model="formBuild.name"
                      placeholder="请输入内容"
                      maxlength="10"
                      show-word-limit></el-input>
          </el-form-item>
          <el-form-item>
            <span slot="label" class="emphasize">病理参数：</span>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="formBuild.intro">
            </el-input>
          </el-form-item>
          <el-form-item style="position: relative;margin: 0;padding: 0">
            <el-button type="primary"  @click="openPdf()" :loading="loading" style="position: absolute;left: 60px">
              {{ loading ? '提交中 ...' : '生成报告' }}
            </el-button>
          </el-form-item>
        </el-form>
      </div>

    <el-dialog title="病例报告" v-if="dialogreport" :visible.sync="dialogreport">
      <pdf-reader @close="closeDialog"></pdf-reader>
    </el-dialog>

  </div>
</template>

<script>


import axios from "axios";
import PdfReader from "./pdfReader";

export default {
  name: "updatePage",
  components: {PdfReader},
  data() {
    return {
      loading: false,
      formBuild: {              //课程基本属性
        name: '',
        intro: '',
        needVip: 0,
        perferId: null,      //个位为majorId，百位为preferId
        coursePicUrl:'',
      },
      imgNum: 1,              //图片属性
      imgSize: 2048000,
      Option: [],
      imgFile:{},
      imageUrl: '',
      images: [],
      dialogreport: false,
    };
  },
  methods: {
    closeDialog() {
      this.dialogreport = false;
    },
    async openPdf(){
      let that = this;


        await axios.get('http://'+'47.101.52.236:8095').then();


        console.log("好了");
        that.dialogreport=true;


    }
  },
}
</script>

<style scoped>

.headerbutton {
  cursor: pointer;
  position: relative;
  left: -140px;
  margin-top: 12px;
}


.emphasize {
  font-family: "Microsoft YaHei", "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", Arial, sans-serif;
  font-size: 13px;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

</style>
