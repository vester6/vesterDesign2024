<template>
  <div class="video-container">
    <video autoplay muted width="100%" class="herovideo">
      <source src="assets/hero-front.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Set height to full viewport height */
  overflow: hidden; /* Hide any overflow content */
}

.herovideo {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%; /* Ensure video fills entire container */
}
</style>
