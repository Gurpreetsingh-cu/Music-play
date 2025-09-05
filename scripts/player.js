let logo = document.querySelector(".brand-logo");
logo.addEventListener("click" , function(){
    window.location.href = "player.html";   
})

// let items_container = document.querySelector(".player-container")
// items_container.addEventListener("click" , function(){
//     window.location.href = "player.html"
// })

document.addEventListener("DOMContentLoaded", () => {
    const playerMain = document.querySelector(".player-main");

    if (!playerMain || !items || !Array.isArray(items)) return;
  
    let innerHTML = "";
    items.forEach(item => {
      innerHTML += `
        <div class="player-container">
          <img src="${item.image}" alt="${item.h1}" class="album-art">
          <h2 class="track-title">${item.h1}</h2>
          <p class="artist-name">${item.p}</p>
          <audio controls class="audio-player">
            <source src="${item.audio_player}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      `;
    });
  
    playerMain.innerHTML = innerHTML;
  });



  