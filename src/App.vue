<template>
  <v-app>
    <Header />
    <Linkbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Linkbar from "./components/Linkbar.vue";
export default {
  name: "App",

  components: { Header, Linkbar },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.main{
  width: auto;
  height: 100%;
}
</style>
