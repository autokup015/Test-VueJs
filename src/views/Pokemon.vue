<template>
  <div class="main">
    <h1 class="text-xl-center">Pokemon page fache API</h1>
    <div class="detail">
      <div class="card" v-for="(item, index) in data" :key="index">
        <!-- <img :src="img(item.url)" width="200" height="200" /> -->
        <img src="" width="200" height="200" />
        <p>Link => {{ test(item.url) }}</p>
        <p class="txt">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pokemon",
  data() {
    return {
      data: null,
    };
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=104").then((result) => {
      this.data = result.data.results;
    });
  },
  methods: {
    async test(value) {
      let a = value;
      const gg = await axios.get(a).then((re) => {
        return re.data.sprites.front_default;
      });
      // console.log("Get link : ", gg);
      return gg;
    },
  },
};
</script>

<style scoped>
.main {
  text-align: center;
}
.detail {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 250px;
  text-align: center;
}
.txt {
  background-color: rgb(42, 42, 42);
  width: auto;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  border-radius: 10px;
}
</style>
