<template>
  <div class="container">
    <div class="container__logo">
<!--      <img-->
<!--        class="image__logo"-->
<!--        src="../assets/rockpaperscissorslizardspock_newthumb-removebg-preview.png"-->
<!--        alt=""-->
<!--      />-->
      <button @click="$router.push('/game')" class="button button--start">START</button>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}
.container__logo {
  max-width: 800px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/rockpaperscissorslizardspock_newthumb-removebg-preview.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image__logo {
  width: 100%;
}

.button {
  border: none;
  border-radius: 50%;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 16px;
  padding: 20px 20px;
  font-weight: 300;
  transition: 0.2s;
  cursor: pointer;
}

.button--start {
  color: #fff;
  background-color: #4cc9f0;

  &:hover{
    color: #fff;
    background-color: #4cc9f0;
    box-shadow: 10px 10px 100px 6px rgba(76, 201, 240 ,1);
  }
}
</style>
