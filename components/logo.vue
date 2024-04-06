<template>
  <div class="logo">
    <div class="blurry-edge"></div>
    <div class="logo-text">vester.design</div>
  </div>
</template>

<style scoped>
.logo {
  position: sticky;
  top: 25px;
  display: flex;
  width: 26vh;
  padding: 15px;
  z-index: 99;
  background-color: rgba(
    230,
    230,
    230,
    0.3
  ); /* Adjust the background color to a semi-transparent dark color */
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  font-size: 18pt;
  font-weight: 700;
  border-radius: 2px; /* Optional: adds rounded corners */
}

.blurry-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px); /* Apply a blur effect */
  -webkit-backdrop-filter: blur(20px); /* For Safari compatibility */
  border-radius: 2px; /* Optional: adds rounded corners */
  z-index: -1;
}

.logo-text {
  position: relative;
  z-index: 1;
}

/* Additional styles to create a more uniform blurry edge */
.blurry-edge::before {
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: inherit;
  border-radius: inherit;
  backdrop-filter: inherit;
  -webkit-backdrop-filter: inherit;
  z-index: -1;
}
</style>
