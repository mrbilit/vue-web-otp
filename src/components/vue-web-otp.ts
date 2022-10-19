import Vue, { VNode } from "vue";

export default Vue.extend({
  name: "VueWebOtp",
  /**
   * @slot default
   * @binding {string} autocomplete for the cross-browser compatibility
   */
  render(): VNode {
    return this.$scopedSlots.default?.({
      autocomplete: "one-time-code",
    }) as never;
  },
  /**
   * Will be ignored, just to document slot correctly
   */
  template: "<slot></slot>",
  data() {
    return {
      abortController: null as AbortController | null,
    };
  },
  methods: {
    abort() {
      this.abortController?.abort();
    },
  },
  mounted() {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      this.abortController = ac;
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        } as never)
        .then((otp: (Credential & { code?: string }) | null) => {
          this.$emit("input", otp?.code || "");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  beforeDestroy() {
    this.abort();
  },
});
