<template>
  <div>
    <v-main class="grey lighten-2 pt-0">
      <v-container>
        <v-row>
          <template v-for="(item, index) in сategorys">
            <v-col
              :key="index"
              class="mt-2"
              cols="12"
              style="text-align: center"
            >
              <strong> {{ item.title }}</strong>
            </v-col>

            <v-col
              v-for="item in addInformationAboutProdjects()"
              :key="`${item.id}${item}`"
              cols="6"
              md="2"
            >
              <v-sheet
                class="pa-2"
                style="text-align: center"
                max-height="100%"
              >
                <img :src="item.urlImage" alt="" class="adaptive-image" />
                <span>{{ item.dicription }}</span>
              </v-sheet>
              <v-btn
                width="100%"
                depressed
                color="primary"
                :href="item.linkPreview"
                class="mt-3"
                target="_blank"
                :disabled="item.disabledPreview"
              >
                Live Preview
              </v-btn>
              <v-btn
                width="100%"
                depressed
                color="error"
                class="mt-3"
                :href="item.linkGitHub"
                target="_blank"
                :disabled="item.disabledGitHub"
              >
                GitHub code
              </v-btn>
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
  name: "AboutMe",
  components: {},
  data() {
    return {
      сategorys: [
        {
          title: "Vue проекты",
        },
        // {
        //   title: "наработки",
        // },
        // {
        //   title: "наработки",
        // },
        // {
        //   title: "наработки с гита фото + ссылки",
        // },
      ],
    };
  },
  methods: {
    addInformationAboutProdjects() {
      return this.$store.state.informationAboutProdjects
        .informationAboutProdjects;
    },
  },
};
</script>

<style >
.adaptive-image {
  width: 100%;
  height: auto;
}
</style>