import { gameUi } from "./ui.module.js";

export class detailsApi{
  constructor(id){
   this.ui = new gameUi()
 document.getElementById('btnClose').addEventListener('click',function(){
        document.querySelector('.game').classList.remove('d-none')
        document.querySelector('.detail').classList.add('d-none')
   })
   this.getIdApi(id)
  }

     
    async  getIdApi(id){
      let load = document.querySelector('.loanding')
      load.classList.remove('d-none')
        const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '42d3be91a2mshab1c77513532212p13c850jsn9496de6da573',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                };
        let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        let res = await url.json()

        this.ui.displayDetails(res)
        setInterval(() => {
              load.classList.add('d-none')
            }, 1500);
    
      }
    
}
