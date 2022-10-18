declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "v-date-time-picker" {
  import { VueConstructor } from "vue/types/umd";
  const VueWebOtp: VueConstructor;
}
