<template>
  <v-app id="inspire">


    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Портфолио Vue</v-toolbar-title>
    </v-app-bar>


    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Сергей Журавлёв</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template v-for="(item,index) in сategorys">
            <v-col
              :key="index"
              class="mt-2"
              cols="12"
            ><h1>Проблема с сайтбаром,вверху остаетсявсе
              2.разделить на секции вью проекты.наработки и тд в бар сделать home-/,vue-/vue роут и тд. а для /vue/:id - для карточек шаблон
              3.блок о себе
              стек,где работаю
            </h1>
              <strong> {{ item.title }}</strong>
            </v-col>

            <v-col
              v-for="j in 6"
              :key="`${index}${j}`"
              cols="6"
              md="2"
            >
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
         drawer: null,
                items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        сategorys:[
          {
            title:'Vue проекты',

          },
                    {
            title:'наработки',

          },
                    {
            title:'наработки',

          },
                    {
            title:'наработки с гита фото + ссылки',

          },
        ]
      }
    },
  }
</script>