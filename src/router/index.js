import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
import pdfReader from "../components/pdfReader";
import updatePage from "../components/updatePage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[{
        path: 'pdfReader',
        name: 'pdfReader',
        component: pdfReader,
      },
        {
          path: 'updatePage',
          name: 'updatePage',
          component: updatePage,
        }]
    },
  ]
})
