<template>
  <div>
      <div style="width: 550px;min-height: 200px">
        <el-form label-width="160px" >
          <el-form-item label="病人姓名" style="width: 300px">
            <el-input v-model="formBuild.name"
                      placeholder="请输入内容"
                      maxlength="10"
                      show-word-limit></el-input>
          </el-form-item>

          <!-- <el-form-item>
            <span slot="label" class="emphasize">病理参数：</span>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="formBuild.intro">
            </el-input>
          </el-form-item> -->
          
          <el-form-item label="上传数据" style="width: 300px">
            
            <div style="align-items: center">
              <el-col>
                <el-row>
                  <el-upload
                      class="upload-demo"
                     
                      accept=".xlsx"  
                      :on-change="fileChange"
                      :auto-upload="false"	                  
	                    action=""             
                      multiple
                      :limit="1"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
                    <el-button size="small" type="primary" v-loading="loading">选择数据</el-button>
                  </el-upload>
                </el-row>
                <!-- <el-row v-show="progressView">
                  <el-progress :text-inside="true" :stroke-width="26" :percentage="p">
                    <span>上传进度</span>
                  </el-progress>
                </el-row> -->
                <el-row>
                   <el-button size="small" type="primary" @click="uploadHttp">立即上传</el-button>
                </el-row>
              </el-col>
            </div>
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
      },
      fileList: [],
      dialogreport: false,
    };
  },
  methods: {
      fileChange(file, fileList) {
        console.log(file.raw);
        this.fileList.push(file.raw) ;
        console.log(this.fileList);
      },
    closeDialog() {
      this.dialogreport = false;
    },
    async openPdf(){
      let that = this;

        await axios.get('http://'+'47.101.52.236:8095').then();

        console.log("好了");
        that.dialogreport=true;
    },
    handleExceed() {
      this.$message.warning(`只能上传一个数据`);
    },
    uploadHttp() {
       if (this.fileList.length === 0){
         console.log(this.fileList);
          this.$message.warning('请上传文件');
        } else {

           
            const formdata = new FormData();
            const file = this.fileList[0];
            formdata.append("file", file);
            formdata.append("fileName", file.name)
            axios({
              method: 'post',
              url: 'http://47.101.52.236:8096/uploadfile',
              data: formdata,
              withCredentials: false,
            }).then((res) => {
              console.log(res);
              console.log("文件上传成功")
            }).catch(error => {
                console.log(error)
              })

          
        }
      
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
