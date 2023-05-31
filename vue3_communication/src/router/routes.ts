/*
所有路由配置的数组
*/

export default [
  

  /* --------------------------------------- */
  {
    path: '/props_pre',
    component: () => import('@/views/01_props/PropsTest.vue'),
  },
  {
    path: '/event_pre',
    component: () => import('@/views/02_custom-event/EventTest.vue'),
  },
  {
    path: '/bus_pre',
    component: () => import('@/views/03_event-bus/EventBusTest.vue'),
  },
  {
    path: '/model_pre',
    component: () => import('@/views/04_v-model/ModelTest.vue'),
  },
  {
    path: '/attrs-listeners_pre',
    component: () => import('@/views/05_attrs-listeners/AttrsListenersTest.vue'),
  },
  {
    path: '/ref-parent_pre',
    component: () => import('@/views/06_ref-children-parent/RefChildrenParentTest.vue'),
  },
  {
    path: '/provide-inject_pre',
    component: () => import('@/views/07_provide-inject/ProvideInjectTest.vue'),
  },
  {
    path: '/vuex_pre',
    component: () => import('@/views/08_pinia/index.vue'),
  },
   {
    path: '/slot_pre',
    component: () => import('@/views/09_slot/SlotTest.vue'),
  },
]
