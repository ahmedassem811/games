


import { Ui } from "./ui.module.js";

export class Details {

   constructor(id) {
      this.ui = new Ui();

      document.getElementById("closeBtn").addEventListener("click", () => {
        document.querySelector(".games").classList.remove("d-none");
        document.querySelector(".details").classList.add("d-none");
     });


      this.getDetails(id); 
   }


   async  getDetails(gameId) {
    const loading = document.querySelector('.loadingPage')
    loading.classList.remove('d-none')
    let gameResp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, 
    {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2d43fde7e7msh6985389f3330051p13c358jsnb0adc258b629',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    let gameDetails = await gameResp.json()
    this.ui.displayDetails(gameDetails)
    loading.classList.add("d-none");
}
}
