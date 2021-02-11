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
              v-for="item in addInformationAboutProdjectsDevelopments()"
              :key="`${item.id}${item}`"
              cols="6"
              md="2"
            >
              <v-sheet
                class="pa-2"
                max-height="100%"
                style="text-align: center"
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
                :disabled="item.disabled"
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
export default {
  data() {
    return {
      сategorys: [
        {
          title: "Наработки IT",
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
    addInformationAboutProdjectsDevelopments() {
      return this.$store.state.developmentsProdjects.developmentsProdjects;
    },
  },
};
</script>

<style>
</style>