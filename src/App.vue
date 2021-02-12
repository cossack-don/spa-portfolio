<template>
  <v-app id="inspire">
    <v-app-bar app color="">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Портфолио Vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon :to="home">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Сергей Журавлев</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main><router-view></router-view> </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "DefaultLayout",

  // components: {
  //
  //     HelloWorld,
  //
  // },

  data() {
    return {
      home: "/",
      drawer: null,
      items: [
        { title: "Обо мне", icon: "mdi-information-outline", to: "/" },
        { title: "Vue проекты", icon: "mdi-vuejs", to: "/vue-prodjects" },
        {
          title: "Наработки",
          icon: "mdi-animation-outline",
          to: "/developments",
        },
        { title: "Сертификаты", icon: "mdi-palette", to: "/salmagundi" },
      ],
      сategorys: [
        {
          title: "Vue проекты",
        },
        {
          title: "наработки",
        },
        {
          title: "наработки",
        },
        {
          title: "наработки с гита фото + ссылки",
        },
      ],
    };
  },
}; // export default
</script>




