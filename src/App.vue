<template>
  <div class="root">
    <div class="box">
      <vue-web-otp ref="webOtp" @input="input = $event">
        <template #default="{ autocomplete }">
          <input
            v-model="input"
            placeholder="Enter the received code here"
            :autocomplete="autocomplete"
            type="number"
            @keypress="keypress"
          />
        </template>
      </vue-web-otp>
      <p>
        Try sending a sms with below content while this page is open to test the
        functionality:
      </p>
      <div class="code">
        <code>
          Code: 123456
          <br />
          <br />
          @mrbilit.github.io #123456
        </code>
        <button class="copy" @click="copy" :disabled="copied">
          <span v-if="!copied" class="copy-container">
            <span class="copy-text">Copy</span>
            <svg viewBox="0 0 384 512" class="copy-icon">
              <path
                d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z"
              />
            </svg>
          </span>
          <span v-else class="copy-container">
            <span class="copied-text">Copied!</span>
          </span>
        </button>
      </div>
    </div>
  </div>
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
      copied: false,
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
    async copy() {
      await navigator.clipboard.writeText(
        "Code: 123456\n\n@mrbilit.github.io #123456"
      );
      this.copied = true;
      window.setTimeout(() => (this.copied = false), 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.root {
  margin-block: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  .box {
    max-width: 800px;
    width: 100%;
    margin-inline: auto;
    background-color: #f26844;
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      padding: 12px 20px;
      font-size: 1rem;
      border-width: calc(2 * 1px);
      border-style: solid;
      border-color: var(--accent);
      border-radius: calc(8 * 1px);
      text-align: center;
      outline: transparent;
      transition: border-color calc(var(--transition, 0.2) * 1s) ease;
      max-width: 500px;
      width: 100%;

      &:valid {
        --accent: hsla(100, 100%, 50%, 1);
      }

      &:invalid {
        --accent: hsla(10, 100%, 50%, 0.5);
      }

      &:placeholder-shown {
        --accent: hsl(0, 0%, 100%);
      }
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    .code {
      background-color: #e8f0fd;
      padding: 10px;
      border-radius: 8px;
      position: relative;
      .copy {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0.5rem;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          "Liberation Mono", "Courier New", monospace;
        font-size: 0.75rem;
        line-height: 1rem;
        --tw-text-opacity: 1;
        color: #40444d;
        font-weight: 600;
        text-transform: uppercase;
        background-color: transparent;
        cursor: pointer;
        &:disabled {
          cursor: auto;
        }
        border-color: transparent;
        .copy-container {
          display: flex;
          flex-direction: row;
          -webkit-box-align: center;
          align-items: center;
          line-height: 1;
          .copy-text {
            margin-right: 0.25rem;
          }
          .copied-text {
            color: green;
          }
          .copy-icon {
            width: 1rem;
            height: 1rem;
            fill: currentcolor;
          }
        }
      }
    }
    p {
      font-size: 1rem;
      font-family: "Segoe UI", system-ui, sans-serif;
      text-align: center;
    }
  }
}
</style>
