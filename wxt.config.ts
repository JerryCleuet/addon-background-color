import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['scripting', 'activeTab'],
    host_permissions: [
      '<all_urls>',           // simplest option
      // or more restrictive:
      // 'https://*/*',
      // 'http://*/*',
    ],
  },
});
