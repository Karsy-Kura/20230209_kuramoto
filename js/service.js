// service__card.
{
  var componentCardService = {
    props: {
      imgsrc: {
        type: String,
      },
      topic: {
        type: String,
      },
      text: {
        type: String,
      }
    },
    template: `
      <div class="service__card">
        <img :src="imgsrc" class="service__card__img">
        <div class="service__card__context">
          <h2 class="service__card__topic">{{topic}}</h2>
          <p class="service__card__text">{{text}}</p>
        <div>
      </div>
    `,
  };

  new Vue({
    el: "#service-content",
    components : {
      "card-template-service" : componentCardService,
    }
  });
}