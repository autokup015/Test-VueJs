<template>
  <div class="d-flex justify-center">
    <div v-for="(item, index) in result" :key="index">
      <div style="width: 300px;">
        <p>Name : {{ item.name }}</p>
        <v-spacer></v-spacer>
        <p>Weight : {{ item.weight }}</p>
      </div>
    </div>
    <h1>All weight : {{ allWeight }}</h1>
  </div>
</template>

<script>
import json from "@/data/exam-data.json";

export default {
  name: "Fn1",
  data() {
    return {
      data: json,
      result: [],
      allWeight: "",
    };
  },
  mounted() {
    for (let index = 0; index < this.data.length; index++) {
      const ele = this.data[index];
      if (ele.is_editable_price == false) {
        this.result.push(ele);
      }
    }
    var sum = this.result.reduce((acc, item) => acc + item.weight, 0);
    this.allWeight = sum;
  },
};
</script>

<style scoped></style>
