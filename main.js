const app = Vue.createApp({
    data() { //possibilité de mettre en ES6 data()
        return {
            product: "Seigneur des Anneaux : Le retour du Roi",
            description: "Le Seigneur des anneaux : Le Retour du Roi est un jeu vidéo de 2003 de type beat them all en vue à la troisième personne, développé par EA Redwood Shores et édité par Electronic Arts.",
            cover: './assets/images/lotrGC.png',
            url: 'https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Return_of_the_King_(video_game)',
            inStock: false,
            nombreJoueur:2,
            details: ['Pegi 12', 'Durée de vie : 20h', 'Rejouabilité : Bonne,', 'Online : Non'],
            plateformes : [
                {id:10, console:"GameCube"},
                {id:11, console:"PlayStaion 2"}
            ]
        }
    }
})
