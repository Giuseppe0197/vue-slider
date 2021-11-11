/* esercizio del carousel ma con vue js */

/* andiamo a collegare il vue all'html */

var carouselVue = new Vue ({

    el: "#container",

    data: {

        itemsClass: "items",

        thumbsClass: "thumbs",

        /* creiamo una variabile per connettere successivamente le immagini con i click */

        slidesActive: 0,

        /* creiamo l'array con gli oggetti necessari al riempimento delle immagini, titoli e paragrafi */

        slidesCar: [

            {
                image: "img/01.jpg",

                title: "Svezia",

                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."

            },

            {
                image: "img/02.jpg",

                title: "Svizzera",

                text: "Lorem ipsum."

            },

            {
                image: "img/03.jpg",

                title: "Gran Bretagna",

                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.."

            },

            {
                image: "img/04.jpg",

                title: "Germania",

                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."

            },

            {
                image: "img/05.jpg",

                title: "Paradise",

                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis."

            }

        ]

    },

    methods: {

        /* andiamo a creare una funzione per andare avanti con il click */

        nextCar: function(){

            if(this.slidesActive === this.slidesCar.length -1){

                this.slidesActive = 0;


            } else {

                this.slidesActive++

            }

        },

        /* andiamo a creare una funzione per tornare indietro con il click */

        prevCar: function(){

            if(this.slidesActive === 0){

                this.slidesActive = this.slidesCar.length -1;

            } else {

                this.slidesActive--;

            }

        }

    }

});