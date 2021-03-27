<template>
  <div class="textcen">
    <h1>Fn3</h1>
    <h4>{{ check(a1) }}</h4>
    <h4>{{ check(a2) }}</h4>
    <h4>{{ check(a3) }}</h4>
    <h4>{{ check(a4) }}</h4>
    <h4>{{ check(a5) }}</h4>
    <h4>{{ check(a6) }}</h4>
    <h4>{{ check(a7) }}</h4>
    <h4>{{ check(a8) }}</h4>
    <h4>{{ check(a9) }}</h4>
    <h4>{{ check(a10) }}</h4>
  </div>
</template>

<script>
export default {
  name: "Fn3",
  data() {
    return {
      a1: [], // null
      a2: [1], // 1
      a3: [1, 2, 3], // 2
      a4: [1, 1], // 1
      a5: [1, 2, 3, 4, 5, 6], // 5
      a6: [1, 5, 3, 2, 5, 10], // 5
      a7: [100, 5, 3, 2, 99], // 99 
      a8: [35, 5, 3, 2, 5, 100], // 35
      a9: [1, 5, 101, 2, 5, 10], // 10
      a10: [10, 10, 9], // 9
    };
  },
  // mounted() {
  //   // let arr = [1, 5, 3, 2, 5, 10];
  //   // let maxValue = arr[0];
  //   // let maxIndexes = [];
  //   // arr.forEach((val, index) => {
  //   //   if (maxValue === val) {
  //   //     maxIndexes.push(index);
  //   //   }
  //   //   if (maxValue < val) {
  //   //     maxValue = val;
  //   //     maxIndexes = [index];
  //   //   }
  //   // });
  //   // console.log("Max index :", maxIndexes);
  //   // console.log("Max value :", maxValue);
  // },
  methods: {
    check(value) {
      console.log(value);
      let maxValue = value[0];
      let maxIndex = [];
      value.forEach((val, index) => {
        if (maxValue === val) {
          maxIndex.push(index);
        }
        if (maxValue < val) {
          maxValue = val;
          maxIndex = [index];
        }
      });
      // console.log(maxIndex);
      return maxIndex;
    },
  },
};
</script>

<style scoped>
.textcen {
  text-align: center;
}
</style>
