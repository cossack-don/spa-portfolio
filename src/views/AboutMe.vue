<template>
  <div class="about-me pa-5">
    <div class="about-me__wrapper-profile main-profile">
      <div class="main-profile__wrapper-photo main-avatar">
        Cделать имя проекта красным везде и красиво выровнять все посмотреть это
        JS и анг
        https://www.youtube.com/playlist?list=PLCMvV-acWe2DOE8ZBL2M5g2O70noa6A12
        <br />
        https://www.youtube.com/playlist?list=PLA0M1Bcd0w8x9TltCzZDhw0SatK1d10yy
        <br />
        https://www.youtube.com/playlist?list=PLmRNNqEA7JoOF9d6cMrhExfEUig-yE-gz
        <br />

        С soccak все проекты залил! <br />
        Сжать все фотографии Tiny Png <br />
        Сделать все логотипы для портфолио <br />
        Скачать все проекты себе на комп и SSD <br />
        Добавить проекты те, которых нет в гитхабе и продакшене <br />
        Загрузить все сертификаты фото <br />
        Не добавил с гитхаба сер-жур эту только часть
        https://github.com/SergeyZhur/sergeyzhur.github.io/tree/master/portfolio/Vue
        <br />
        https://github.com/cossack-don/fetch-form-fetch - залить и загрузить в
        портфолио ( от сюда https://yadi.sk/d/T1TPk5mlsWNx1w) <br />
        загружить все файлы что кидал в вк и мираж сервис <br />

        <!-- <img src="../assets/avatar.jpg" alt="" class="main-avatar__photo" /> -->
        <div class="main-avatar__photo"></div>
        <div class="main-avatar__contacts main-contacts">
          <!-- <ul class="main-contacts__list contacts-list">
            <li class="contacts-list__item">Контакты</li>
            <li class="contacts-list__item"><a href="#">link</a></li>
            <li class="contacts-list__item"><a href="#">link</a></li>
            <li class="contacts-list__item"><a href="#">link</a></li>
            <li class="contacts-list__item"><a href="#">link</a></li>
          </ul> -->

          <v-list class="main-contacts__list contacts-list" color="yellow">
            <v-list-item v-for="n in 3" :key="n">
              <v-list-item-icon>
                <v-icon>mdi-vuejs</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>контакты{{ n }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </div>

      <div class="main-profile__discription pa-2">
        Мне осталась одна забава: Пальцы в рот - и веселый свист. Прокатилась
        дурная слава, Что похабник я и скандалист. Ах! какая смешная потеря!
        Много в жизни смешных потерь. Стыдно мне, что я в бога верил. Горько
        мне, что не верю теперь. Золотые, далекие дали! Все сжигает житейская
        мреть. И похабничал я и скандалил Для того, чтобы ярче гореть. Дар поэта
        - ласкать и карябать, Роковая на нем печать. Розу белую с черною жабой Я
        хотел на земле повенчать. Пусть не сладились, пусть не сбылись Эти
        помыслы розовых дней. Но коль черти в душе гнездились - Значит, ангелы
        жили в ней. Вот за это веселие мути, Отправляясь с ней в край иной, Я
        <hr />
        хочу при последней минуте Попросить тех, кто будет со мной,- Чтоб за все
        за грехи мои тяжкие, За неверие в благодать Положили меня в русской
        рубашке Под иконами умирать.
      </div>
    </div>

    <div class="main-skills-wrapper">
      <h3 class="main-skills-wrapper__title">Skills</h3>
      <div class="main-skills">
        <v-list class="main-skills-list main-skills__frontend" color="yellow">
          <v-list-item v-for="n in 6" :key="n">
            <v-list-item-icon>
              <v-icon>mdi-vuejs</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ n }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list class="main-skills-list main-skills__backend" color="red">
          <v-list-item v-for="n in 6" :key="n">
            <v-list-item-icon>
              <v-icon>mdi-vuejs</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ n }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style >
/* ul */
ul {
  list-style-type: none;
}
.v-application ul {
  padding: 0;
}
/* end ul */

/* main-wrapper */
.about-me__wrapper-profile {
  /* border: solid red 1px; */
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
}
/* end main-wrapper */

.main-profile__wrapper-photo {
  flex-basis: 40%;
  margin: 15px;
  margin-top: 0;
}

.main-profile__discription {
  border: solid blue 2px;
  flex-basis: 55%;
}

.main-avatar__photo {
  background-size: 62%;
  background-position: 50% 26%;
  min-height: 450px;
  background-image: url(../assets/avatar.jpg);
  background-repeat: no-repeat;

  /* width: 100%;
  height: 250px; */
}
/* contacts */
.contacts-list {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Main skills */
.main-skills-wrapper__title {
  margin-top: 15px;
  text-align: center;
}

.main-skills {
  display: flex;
  margin-top: 15px;
}

.main-skills__frontend {
  flex-basis: 50%;
  background: pink;
  margin-right: -15px;
}

.main-skills__backend {
  flex-basis: 50%;
  background: wheat;
  margin-left: 15px;
}

/* skills UL LI */
.main-skills-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
/* adaptive */
@media (max-width: 680px) {
  .main-profile__wrapper-photo {
    flex-basis: 100%;
  }

  .main-profile__discription {
    flex-basis: 100%;
  }
  /* main-skills */
  .main-skills {
    flex-wrap: wrap;
  }

  .main-skills__backend {
    flex-basis: 100%;
    margin-top: 15px;
    margin-left: 0;
  }

  .main-skills__frontend {
    flex-basis: 100%;
  }
}
</style>