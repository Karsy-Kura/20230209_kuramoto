// service__card.
{
  Vue.component("card-template-service", {
    props: {
      imgsrc: {
        type: String,
      },
      topic: {
        type: String,
      },
      context: {
        type: String,
      }
    },
    template: `
      <div class="service__card">
        <img :src="imgsrc" class="service__card__img">
        <h2 class="service__card__topic">{{topic}}</h2>
        <p class="service__card__text">{{context}}</p>
      </div>
    `,
  });

  new Vue({
    el: "#service-content",
  });
}

// blog__card.
{
  Vue.component("card-template-blog", {
    props: {
      imgsrc: {
        type: String,
      },
      date: {
        type: Date,
      },
      topic: {
        type: String,
      },
    },
    template: `
      <div class="blog__card">
        <img :src="imgsrc" class="blog__card__img">
        <p class="blog__card__date">{{date}}</p>
        <h2 class="blog__card__topic">{{topic}}</h2>
      </div>
    `,
  });

  new Vue({
    el: "#blog-content",
  });
}