<template>
  <vue-web-otp ref="webOtp" @input="input = $event">
    <template #default="{ autocomplete }">
      <input
        v-model="input"
        :autocomplete="autocomplete"
        @keypress="keypress"
      />
    </template>
  </vue-web-otp>
</template>
<script lang="ts">
import VueWebOtp from "@/components/vue-web-otp";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: { VueWebOtp },
  data() {
    return {
      input: "",
    };
  },
  watch: {
    input(val: string) {
      console.log("Value of input changed:", val);
    },
  },
  methods: {
    keypress() {
      // aborting waiting signal if the user tried to enter code manually (Can be submission of a form instead)
      this.$refs.webOtp.abort();
    },
  },
});
</script>

<style lang="scss" scoped></style>
