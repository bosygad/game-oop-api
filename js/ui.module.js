export class gameUi{
  
 display(array) {

    var box = '';
    for (var i = 0; i < array.length; i++) {
    box += ` <div class="col-md-3 my-2 p-3"  >
     <div data-id="${array[i].id}" class="card h-100 rounded-3 ">
    
       <img src="${array[i].thumbnail}" class="card-img-top p-3 pb-0 " alt="..." class="w-100">
       <div class="card-body">
         <div class="title d-flex justify-content-between">
         <h5><small class="card-title">${array[i].title}</small></h5>
         <button class="btn btn-primary p-1">free</button>
   
         </div>
         <p class="card-text text-center">${array[i].short_description.split(' ').slice(0, 8).join(' ').concat(``) }</p>
       </div>
       <div class="card-footer ">
         <small class="d-flex justify-content-between"><span>${array[i].genre}</span><span>${array[i].platform
         }</span></small>
       </div>
     </div>
   </div>`
    }
    Row.innerHTML = box
 
 }


displayDetails(array){
      let box ='';
     
       
        box += `  
        
        <div class ="d-flex justify-content-between ">
        <div class="col-md-4">
        <img src="${array.thumbnail}" alt="..." class="w-100 mt-2">
        </div>
      <div class="col-md-8 ps-5">
        <h2> Title : ${array.title} </h2>
        <p class="">Category : <span class=" p-1 text-bg-info rounded"> ${array.genre}</span></p>
        <p class="">Platform : <span class=" p-1 text-bg-info rounded"> ${array.platform}</span></p>
        <p class="">Status : <span class=" p-1 text-bg-info rounded"> ${array.status}</span></p>
    
        <p class="small">${array.description}</p>
        <a class="btn border-warning bg-transparent py-2 px-4 mt-2"  target="_blank" href="${array.game_url}">show game</a>
      </div></div>
    `
    
      
      detailsRow.innerHTML = box
      
     }
    

}
