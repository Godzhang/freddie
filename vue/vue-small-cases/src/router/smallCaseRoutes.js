export default [
  {
    path: "buttonPermission",
    component: () =>
      import(
        /* webpackChunkName: "button-permission" */ "../components/ButtonPermission.vue"
      )
  }
];
