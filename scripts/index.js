let innerHTML = '';
let items_container = document.querySelector(".items-container");
items.forEach(item => {
    innerHTML += `
    <div class="item-container">

                 <div class="music-image">
                    <img src="${item.image}" alt="for a reason">
                </div>
               <div class="detail">
                <h1>${item.h1}</h1>
                <p>${item.p}</p>
               </div>
            </div>
            `
})

items_container.innerHTML = innerHTML;



