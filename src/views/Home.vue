<template>
  <div class="container-main">
    <div class="container-logo img-fluid animate__animated">
      <img src="../assets/logo.svg" class="logo p-2 animate__animated" />
    </div>
    <div class="container-text animate__animated">
      <h1 class="animate__animated">
        Hola, mi nombre es Jesús España Sandoval,
      </h1>
      <p class="animate__animated">
        o también conocido como El Krecksito, aspiro ser programador me gusta
        mucho el tema, y sueño con algún día tener una gran empresa. Tengo
        algunas habilidades en HTML y JavaScript con un poco de Python, no
        ofresco trabajos a nivel profesional, pero algo sencillo, como esto, a y
        por sierto tengo 11 años.
        <router-link to="/contact" class="contact badge"
          >Contactame</router-link
        >
      </p>
    </div>
  </div>
  <div class="container-skills animate__animated">
    <h2 class="text-skills animate__animated">Se usar:</h2>
    <div class="skills p-1 animate__animated">
      <a href="https://vuejs.org/"
        ><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" class="vue animate__animated"
      /></a>
      <a href="https://vitejs.dev/"
        ><img src="https://vitejs.dev/logo.svg" class="vite animate__animated"
      /></a>
      <a href="https://nodejs.org/es/"
        ><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" class="node animate__animated"
      /></a>
    </div>
  </div>
</template>

<style scoped>
p {
  font-weight: 600;
}

h1 {
  font-weight: bolder;
}

h2 {
  font-weight: bold;
}

.logo {
  width: 45vmin;
  float: right;
  animation-name: slideInDown;
  animation-delay: 1.5s;
}

.container-text {
  width: 50%;
  margin: 12vmin 14vmin 0;
  animation-name: slideInLeft;
  animation-delay: 0.5s;
}

.container-text h1 {
  display: inline;
}

.container-text p {
  display: inline;
}

.container-skills {
  width: 98.97vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-delay: 1s;
  animation-name: slideInLeft;
}

.skills {
  margin: 0;
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
  display: flex;
  flex-direction: row;
  margin-bottom: 1vmax;
}

.contact {
  text-decoration: none;
  color: whitesmoke;
  background: linear-gradient(
    to right bottom,
    #0021f9,
    #281efa,
    #3a1afc,
    #4915fd,
    #550efe,
    #620afe,
    #6d05ff,
    #7700ff,
    #8400ff,
    #9000ff,
    #9b00ff,
    #a600ff
  );
}

.skills a {
  background-color: transparent;
  transition: border 0.2s;
}

.skills a:hover {
  border-radius: 10px;
  border: 1vmin solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right bottom,
    #00ff57,
    #00e9cd,
    #00c7ff,
    #0094ff,
    #9900ff
  );
}

.skills img {
  width: 12vmax;
  margin: 5vmin;
}

@media screen and (max-width: 767px) {
  .container-text {
    margin: 0;
    width: 75%;
    text-align: center;
  }

  .container-text h1 {
    display: block;
  }

  .container-text p {
    display: block;
  }

  .logo {
    float: none;
    width: 70vmin;
    animation-name: slideInLeft;
    animation-delay: 1s;
  }

  .container-main {
    width: 98.95vw;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 10vmax;
  }

  a {
    display: block;
    margin-top: 5vmin;
  }

  .skills {
    flex-direction: column;
  }
}
</style>
