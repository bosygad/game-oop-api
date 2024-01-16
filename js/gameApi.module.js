
import { gameUi } from "./ui.module.js";
import { detailsApi } from "./detailApi.module.js"

export class gameApi {
  constructor() {
    this.getCatApi("mmorpg");

    document.querySelectorAll(".nav-item a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-item .active").classList.remove("active");
        e.target.classList.add("active");
        let term = e.target.getAttribute('data-cat')
        this.getCatApi(term)

      });
    });

    this.ui = new gameUi();
  }
  async getCatApi(cat) {
    let load = document.querySelector('.loanding')
    load.classList.remove('d-none')
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '42d3be91a2mshab1c77513532212p13c850jsn9496de6da573',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
    let res = await url.json()
    this.ui.display(res);
    this.start()
    setInterval(() => {
      load.classList.add('d-none')

    }, 1500);
  }

  start() {
    var allCards = document.querySelectorAll('.card')
    allCards.forEach((item) => {
      item.addEventListener('click', () => {
        let x = item.dataset.id
        this.show(x)
      })
    })
  }


  show(idGame) {
    const details = new detailsApi(idGame);
    document.querySelector(".game").classList.add("d-none");
    document.querySelector(".detail").classList.remove("d-none");
   
  }
}

