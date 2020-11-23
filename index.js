const app = new Vue ({
  el: '#nav-container',
  data: {
    isHidden: true
  },
  methods: {
    clicked: function() {
      this.isHidden = !this.isHidden;
    }
  }
})


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
  const socialCard = new Vue({
    el: "#review-display",
    data: {
      reviews: [
      {id: 0, name: "Alice", content: "Docela často si vzpomenu na věci, které mi Bára řekla a že pro tu dobu pro mě bylo klíčové mít v ní tu oporu. Chci říct, že je moc fajn to, co dělá. Vlastně i ona byla tím, kdo mi dodal nějaké odhodlání, ze kterého jsem mohla čerpat.", img:"./icons/png/Bussiness-woman.png"},
      {id: 1, name: "Michal", content: "Nikdy jsem na terapii nebyl. Po těžkém rozchodu jsem se rozhodl ji vyzkoušet a už po prvním sezení s Bárou jsem byl nadšený. Teď už věřím, že můžu být v životě šťastný.", img:"./icons/png/Bussiness-man.png" },
      {id: 2, name: "Václav", content: "Terapie mi neuvěřitelným způsobem vylepšila život. Naučil jsem se zvládat obtížné životní situace, prožívat emoce a hlavně začal sám sebe respektovat. Jít na terapii bylo jedno z nejlepších rozhodnutí mého života a Báry si neskutečně vážím za její přístup, který by podle mě nemohl být lepší.", img:"./icons/png/Bussiness-man-2.png"}
      
      ]
    }
  });
  
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( elem, {
    // options
    adaptiveHeight: true,
    wrapAround: true
  });
