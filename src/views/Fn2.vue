<template>
  <div class="txtcen">
    <h3>{{ moment(data).format("DD/MM/YYYY h:mm:ss") }}</h3>
    <h3>{{ moment(data).format("LL") }}</h3>
    <!-- <h3>{{ moment(data).format("MMMM Do YYYY, h:mm:ss a") }}</h3>
    <p>{{ moment(data).format("MMMM Do YYYY, h:mm:ss a") }}</p> -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Fn2",
  data() {
    return {
      data: "2020-08-10T14:54:52+07:00",
    };
  },
  mounted() {
    console.log(moment().format("LLL"));
  },
};
</script>

<style scoped>
.txtcen {
  text-align: center;
}
</style>
