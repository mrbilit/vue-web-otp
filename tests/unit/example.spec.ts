import { shallowMount } from "@vue/test-utils";
import VueWebOtp from "@/components/vue-web-otp";

describe("VueWebOtp.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "";
    const wrapper = shallowMount(VueWebOtp, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
