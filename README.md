# vue-web-otp

> Verify phone numbers on the vue web applications

## Overview

This library is a wrapper around WebOTP API for Vue web applications.
The WebOTP API lets your app receive specially-formatted messages bound to your app's domain.
From this,
you can programmatically obtain an OTP from an SMS message and verify a phone number for the user more easily.
Full WebOTP API documentation [Here](https://web.dev/web-otp/).

> There is a [**DEMO**](https://mrbilit.github.io/vue-web-otp/) available.

## Install and usage

> To use it inside a vue 2 project, checkout `vue-2` branch.

Install using npm

```
npm install --save vue-web-otp
```

or Yarn

```
yarn add vue-web-otp
```

Import component and use it!

```vue
<script setup lang="ts">
import { VueWebOtp } from 'vue-web-otp';
import { ref } from 'vue';

const webOtp = ref<InstanceType<typeof VueWebOtp> | null>(null);
</script>
```

Example of usage in App.vue or any other Vue component:

```html
<vue-web-otp ref="webOtp" @input="otpInput = $event">
  <template #default="{ autocomplete }">
    <input
      v-model="otpInput"
      :autocomplete="autocomplete"
    />
  </template>
</vue-web-otp>
```

Note that this setup waits for the formatted message to fill the input.
However, sometimes you may want to abort the listener (for example, if the user entered the code manually).
For this, you can call the `abort` method available on the component, like this:
```typescript
function stopWaiting() {
  webOtp?.abort();
}
```

## Project setup

```
yarn
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Preview production built project in browser

```
yarn preview
```

### Contributions

Feel free to fix bugs and suggest new features via PRs.