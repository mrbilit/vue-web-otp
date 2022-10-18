import VueWebOtp from "./components/vue-web-otp";

const components = {
  VueWebOtp,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;

export { default as VueWebOtp } from "./components/vue-web-otp";
