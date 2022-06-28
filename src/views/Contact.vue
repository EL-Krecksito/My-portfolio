<template>
  <div class="container-contact animate__animated animate__slideInLeft">
    <h1>Contacteme!</h1>
    <div class="contact p-3">
      <h2>Gmail:</h2>
      <p>elplayer424@gmail.com</p>
      <h2>Número tetefonico:</h2>
      <p>302 3459480</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: bold;
}

.container-contact {
  display: flex;
  flex-direction: column;
  margin-top: 14vmin;
  align-items: center;
  justify-content: center;
  width: 100vw;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2vmin solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right top,
    #1f00ff,
    #6f00ff,
    #9b00ff,
    #be00ff,
    #dc00ff
  );
  max-width: 80%;
}

.contact h2 {
  display: inline;
  font-weight: 700;
}

.contact p {
  display: inline;
  font-weight: 600;
}
</style>
