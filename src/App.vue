<template>

  <router-view />
</template>

<style lang="scss">

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("https://www.palazzovitturi.com/wp-content/uploads/christmas-venice-vitturi.jpg");
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
