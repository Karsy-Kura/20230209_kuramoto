// blog__card.
{
  var componentCardBlog = {
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
  };

  new Vue({
    el: "#blog-content",
    components: {
      "card-template-blog" : componentCardBlog,
    }
  });
}