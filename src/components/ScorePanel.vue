<template>
  <div class="container__score">
    <div class="score__item">
      <h1>USER</h1>
      <h1>{{ counters.user }}</h1>
    </div>
    <div class="score__item">
      <h1>TIE</h1>
      <h1>{{ counters.tie }}</h1>
    </div>
    <div class="score__item">
      <h1>CPU</h1>
      <h1>{{ counters.cpu }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScorePanel",
  props: ["counters"],
});
</script>

<style lang="scss">
.container__score {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  padding: 50px 0;
}
.score__item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
