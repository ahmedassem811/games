import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Game {

    constructor(){
        this.getGames('mmorpg');

        document.querySelectorAll(".nav-item>a").forEach((link) => {
            link.addEventListener("click", (e) => {
               document.querySelector(".active").classList.remove("active");
               e.target.classList.add("active");
               let category = e.target.getAttribute("category")
               console.log(category)
               this.getGames(`${category}`);
            });
         });

        this.ui = new Ui();
    }

    async  getGames(categ) {
        const loading = document.querySelector('.loadingPage')
        loading.classList.remove('d-none')
        let gamesResp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`, 
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2d43fde7e7msh6985389f3330051p13c358jsnb0adc258b629',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        let gamesData = await gamesResp.json()
        this.ui.displayData(gamesData)
        this.startEvent();
        loading.classList.add("d-none");
    }


    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
     }


    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
           item.addEventListener("click", () => {
                console.log(item.dataset.id)
              const id = item.dataset.id;
              this.showDetails(id);
           });
        });
     }
  


}


