<template>
  <div class="home">
    ITEM-1

    <v-main class="grey lighten-2">
      <v-container>
        <v-row>
          <template v-for="(item, index) in сategorys">
            <v-col :key="index" class="mt-2" cols="12"
              ><h1>
                Проблема с сайтбаром,вверху остаетсявсе 2.разделить на секции
                вью проекты.наработки и тд в бар сделать home-/,vue-/vue роут и
                тд. а для /vue/:id - для карточек шаблон 3.блок о себе стек,где
                работаю
              </h1>
              <strong> {{ item.title }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${index}${j}`" cols="6" md="2">
              <v-sheet height="150"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
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
};
</script>
