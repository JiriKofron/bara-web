
// Declaring vue component with template, which is card of each person. It must be contained in a div, otherwise the same tags don't work and show

Vue.component('review-display', {
    props: ['review'],
    template: `<div class="carousel-cell">
  <img v-bind:src="review.img">
  <p class="review-name">{{review.name}}</p>
  <p class="review-text">{{review.content}}</p></div>`
  });
  
  //new object, el class binding the object to html id - see html
  // socialProofs are actualy the cards with data of each person. Id helps for looping  = it is a key for binding - see html
  // Each now person now can be added just to add the properities to data array, rather than wet the html
  var socialCard = new Vue({
    el: "#review-display",
    data: {
      reviews: [
      {id: 0, name: "Alice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare sapien non nisi ornare laoreet. Vivamus lectus justo, pulvinar et vulputate pulvinar, euismod ac augue. Ut auctor dui in aliquam porta.", img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" },
      {id: 1, name: "Marchel", content: "Second comment", img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" },
      {id: 2, name: "Philip", content: "Third comment", img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},
        {id: 3, name: "Patricia", content: "Fourth comment", img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }
      ]
    }
  });
  
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    adaptiveHeight: true,
    wrapAround: true
  });
