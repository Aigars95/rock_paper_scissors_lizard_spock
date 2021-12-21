<template>
  <ScorePanel :counters="counters"></ScorePanel>

  <div class="result__panel">
    <h1>{{ winOrLoseMessage }}</h1>
  </div>

  <div class="game__container">
    <transition name="User__transition">
      <img
        class="image__weapon"
        v-show="showChoice"
        :src="userChoice"
        alt="user weapon"
      />
    </transition>

    <transition name="cpu__transition">
      <img
        v-show="showChoice"
        class="image__weapon image__cpu"
        :src="cpuChoice"
        alt="cpu weapon"
      />
    </transition>
  </div>

  <WeaponBar
    :weapons="weapons"
    :weaponDisable="weaponDisable"
    @chooseWeapon="chooseWeapon"
  ></WeaponBar>

  <button class="button--restart" @click="resetGame">reset game</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { weapons } from "@/data/gameData";
import ScorePanel from "@/components/ScorePanel.vue";
import WeaponBar from "@/components/WeaponBar.vue";

type countersTypes = {
  user: number;
  cpu: number;
  tie: number;
};

export default defineComponent({
  name: "GamePage",
  components: {
    ScorePanel,
    WeaponBar,
  },
  data: () => ({
    counters: {
      user: 0,
      cpu: 0,
      tie: 0,
    } as countersTypes,
    weapons: weapons,
    userChoice: weapons[0].image,
    cpuChoice: weapons[0].image,
    showChoice: true,
    weaponDisable: false,
    winOrLoseMessage: "Choose your weapon to start",
  }),

  watch: {
    showChoice() {
      setTimeout(() => {
        this.showChoice = true;
      }, 500);
    },
  },
  methods: {
    resetGame() {
      this.counters = { user: 0, cpu: 0, tie: 0 };
      this.userChoice = weapons[0].image;
      this.cpuChoice = weapons[0].image;
      this.winOrLoseMessage = "Choose your weapon to start";
    },
    chooseWeapon(num: number) {
      this.weaponDisable = true;
      this.showChoice = false;
      this.userChoice = weapons[0].image;
      this.cpuChoice = weapons[0].image;
      const rand = Math.floor(Math.random() * 5);
      const gameResult = weapons[num].name + weapons[rand].name;
      let messageResult = "";
      switch (gameResult) {
        case "RockLizard":
        case "RockScissors":
        case "LizardSpock":
        case "LizardPaper":
        case "SpockScissors":
        case "SpockRock":
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "PaperRock":
        case "PaperSpock":
          messageResult = "You won!!!";
          this.counters.user += 1;
          break;

        case "LizardRock":
        case "ScissorsRock":
        case "SpockLizard":
        case "PaperLizard":
        case "ScissorsSpock":
        case "RockSpock":
        case "PaperScissors":
        case "LizardScissors":
        case "RockPaper":
        case "SpockPaper":
          messageResult = "You lose...";
          this.counters.cpu += 1;
          break;

        case "RockRock":
        case "ScissorsScissors":
        case "SpockSpock":
        case "LizardLizard":
        case "PaperPaper":
          messageResult = "TIE";
          this.counters.tie += 1;
          break;
      }

      setTimeout(() => {
        this.userChoice = weapons[num].image;
        this.cpuChoice = weapons[rand].image;
        this.winOrLoseMessage = messageResult;
      }, 700);

      setTimeout(() => {
        this.weaponDisable = false;
      }, 1200);
    },
  },
});
</script>

<style lang="scss">
.result__panel {
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
}

.image__weapon {
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
}

h1 {
  color: #ff6d00;
}

.game__container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image__cpu {
  transform: scale(-1, 1);
}

.button--restart {
  position: absolute;
  bottom: 10px;
  left: 20px;
  padding: 5px 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  color: #ff6d00;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.User__transition-enter-active,
.User__transition-leave-active {
  transition: all 0.5s;
}

.User__transition-enter,
.User__transition-leave-to {
  transform: translate(-100px, -100px) rotate(-45deg);
}

.cpu__transition-enter-active,
.cpu__transition-leave-active {
  transition: all 0.5s;
}

.cpu__transition-enter,
.cpu__transition-leave-to {
  transform: scale(-1, 1) translate(-100px, -100px) rotate(-45deg);
}
</style>
