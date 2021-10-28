<template>
  <div>
  <pdf
    ref= "pdf"
    v-for="i in numPages"
    :key="i"
    :src="pdf1"
    :page="i"
  ></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  name: "pdfReader",
  components:{
    pdf
  },
  data(){
    return{
      pdf1: '/static/demo.pdf',
      currentPage: 0, // pdf文件页码
      numPages: 0, // pdf文件总页数
    }
  },

  methods: {
    // 计算pdf页码总数
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.pdf1)
      loadingTask.promise.then(pdf => {
        this.numPages = pdf.numPages
      })
    },
  },

  mounted() {
    let that = this;
    that.getNumPages();
  },
}
</script>

<style scoped>



</style>
