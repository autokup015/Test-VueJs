<template>
  <div class="container d-flex justify-center">
    <div class="d-flex justify-center mt-5 mb-5 justify-space-between bar">
      <h1 class="txt" @click="click('home')">Home</h1>
      <h1 class="txt" @click="click('pokemon')">Pokemon</h1>
      <h1 class="txt" @click="click('fn1')">Function 1</h1>
      <h1 class="txt" @click="click('fn2')">Function 2</h1>
      <h1 class="txt" @click="click('fn3')">Function 3</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Linkbar",
  methods: {
    click(value) {
      if (value == "home") {
        this.$router.push("/");
      }
      if (value == "pokemon") {
        this.$router.push("/Pokemon");
      }
      if (value == "fn1") {
        this.$router.push("/Function1");
      }
      if (value == "fn2") {
        this.$router.push("/Function2");
      }
      if (value == "fn3") {
        this.$router.push("/Function3");
      }
    },
  },
};
</script>

<style scoped>
.bar {
  width: 1000px;
}
.txt {
  cursor: pointer;
}
</style>
