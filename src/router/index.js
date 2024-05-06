import Vue from 'vue';
import Router from 'vue-router';
import DirConfigList from '@/components/DirConfigList';
import EditConfig from '@/components/EditConfig';  // Assuming you have an EditConfig component

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dir-config-list',
      component: DirConfigList
    },
    {
      path: '/edit/:id',
      name: 'edit-config',
      component: EditConfig,
      props: true
    }
  ]
});