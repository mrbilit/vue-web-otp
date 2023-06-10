<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { IVueWebOtpEmits } from "./VueWebOtp.interface";

const emits = defineEmits<IVueWebOtpEmits>();

const abortController = ref<AbortController | null>(null);
const abort = () => abortController.value?.abort();

onMounted(() => {
  if ("OTPCredential" in window) {
    const ac = new AbortController();
    abortController.value = ac;
    navigator.credentials
      .get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      } as never)
      .then((otp: (Credential & { code?: string }) | null) => {
        emits("input", otp?.code ?? "");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

onBeforeUnmount(() => {
  abort();
});
</script>

<template>
  <slot name="default" autocomplete="one-time-code" :abort="abort"></slot>
</template>

<style lang="scss" scoped></style>
