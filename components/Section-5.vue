<template>
  <section class="section-5">
    <div class="container section-5__container">
      <h2 class="section-5__header">
        Вопросы и ответы
      </h2>
      <div class="section-5__column-container">
        <div class="section-5__column">
          <Accordion
            v-for="(item, index) in columnFirst"
            :key="index"
            :header-text="item.headerText"
            :main-text="item.mainText"
          />
        </div>
        <div class="section-5__column">
          <Accordion
            v-for="(item, index) in columnSecond"
            :key="index"
            :header-text="item.headerText"
            :main-text="item.mainText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section5',
  data () {
    return {
      columnFirst: [
        {
          headerText: 'С любой темой справитесь?',
          mainText: 'Коротко и честно — почти с любой. Если тема узкая и сложная, например, научная с обилием терминов и формул, могут возникнуть сложности. В остальном с вами будут работать люди, которым близка ваша тема и несколько первых постов потребуется на погружение. Мы работаем на результат. Если вам не устроит качество, то вернем деньги.'
        },
        {
          headerText: 'Кто готовит текст к публикации?',
          mainText: 'Роботы и люди. Весь процесс разделен на этапы. Первичной транскрибацией аудио занимается искуственный интеллект который полностью распознает текст из аудио, готовит тезисы и выделяет основные мысли. Затем к делу подключается редактор который и составляет текст заметки, оформляет его и подготавливает к публикации. Помимо этого помогает нашему алгоритму лучше научится распозновать аудиофайлы. И на финальном этапе шеф-редактор проводит финальную редактуру и вычитку текста перед тем как выслать его вам.'
        }
      ],
      columnSecond: [
        {
          headerText: 'Как сохранить индивидуальную стилистику текста?',
          mainText: 'Скорректируйте и перефразируйте сомнительные части готового текста поста под себя. Это придаст индивидуальность. Занимает 5–10 минут.'
        },
        {
          headerText: 'Сколько времени готовится пост?',
          mainText: 'Пост готовится от нескольких часов до 24х часов в зависимости от сложности материала и загрузки нашей команды.'
        },
        {
          headerText: 'Я могу прислать сразу несколько постов?',
          mainText: 'Конечно - запишите несколько голосовых сообщений и мы обработаем их как отдельные посты'
        }
      ]
    }
  }
}
</script>

<style>
.section-5 {
  width: 100%;
}
.section-5__header {
  font-size: 40px;
  line-height: 47px;
  color: #1C252B;
  padding-top: 164px;
  padding-bottom: 57px;
}
.section-5__column-container {
  width: 100%;
  display: flex;
  column-gap: 31px;
  padding-bottom: 245px;
}
.section-5__column {
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 19px;
}
@media screen and (max-width: 1172px) {
  .section-5__header {
    font-size: 20px;
    line-height: 23px;
    padding-top: 61px;
    padding-bottom: 20px;
  }
  .section-5__column-container {
    padding-bottom: 100px;
    flex-direction: column;
    row-gap: 17px;
  }
  .section-5__column {
    width: 100%;
    row-gap: 17px;
  }
}
</style>
