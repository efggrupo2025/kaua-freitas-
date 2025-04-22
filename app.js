const animes = [
    {
      title: "Solo Leveling",
      cover: "assets/capas/solo-leveling.jpg",
      episodes: 12
    },
    {
      title: "Naruto Shippuden",
      cover: "assets/capas/naruto.jpg",
      episodes: 500
    },
    {
      title: "Dragon Ball",
      cover: "assets/capas/dragon-ball.jpg",
      episodes: 153
    },
    {
      title: "Black Clover",
      cover: "assets/capas/black-clover.jpg",
      episodes: 170
    },
    {
      title: "Demon Slayer",
      cover: "assets/capas/demon-slayer.jpg",
      episodes: 55
    }
  ];
  
  const animeList = document.getElementById("anime-list");
  
  function renderAnimes(list) {
    animeList.innerHTML = "";
    list.forEach(anime => {
      const card = document.createElement("div");
      card.className = "anime-card";
      card.innerHTML = `
        <img src="${anime.cover}" alt="${anime.title}">
        <h3>${anime.title}</h3>
      `;
      card.onclick = () => {
        alert(`Exibindo ${anime.episodes} episódios de ${anime.title}...`);
      };
      animeList.appendChild(card);
    });
  }
  
  document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = animes.filter(anime =>
      anime.title.toLowerCase().includes(query)
    );
    renderAnimes(filtered);
  });
  
  function login() {
    const username = prompt("Usuário:");
    const password = prompt("Senha:");
    alert(`Bem-vindo, ${username}! (Simulação de login)`);
  }
  
  renderAnimes(animes);