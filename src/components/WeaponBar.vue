<template>
  <div class="container__weapons">
    <h1>Chose weapon</h1>
    <button
      class="button--weapon"
      v-for="(weapon, index) in weapons"
      @click="this.$emit('chooseWeapon', index)"
      :key="weapon.name"
      :disabled="weaponDisable"
      :style="weaponDisable ? 'cursor: not-allowed' : 'cursor: pointer'"
    >
      <img class="image__icon" :src="weapon.icon" alt="" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeaponBar",
  props: ["weapons", "weaponDisable"],
});
</script>

<style lang="scss">
.container__weapons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  gap: 10px;
  background-color: rgba(0,0,0,0.5);
  padding: 10px 20px;
  border-radius: 10px;
  & h1{
    grid-column-start: span 5;
    text-align: center;

  }
}

.button--weapon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4cc9f0;
  border: none;

  &:hover {
    border: 3px solid #06789a;
  }
}

.image__icon {
  width: 110px;
  height: 110px;
  object-fit: cover;
}
</style>
