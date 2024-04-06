// plugins/google-fonts.client.js
export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap",
      },
    ],
  });
});
