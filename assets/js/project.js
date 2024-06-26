AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
    {
        title: "Word Quiz Live",
        cardImage: "assets/images/project-page/WQL.png",
        description: "Live Stream gaming channel for word games.",
        tagimg: "https://www.tiktok.com/@wordquizlive/live",
        Previewlink: "https://www.tiktok.com/@wordquizlive/live",
        Githublink: "",
    },
    {
        title: "Ultra Foodmess 2",
        cardImage: "assets/images/project-page/UF2.jpg",
        description: "A Party Game with 2D physics and a food theme.",
        tagimg: "https://store.steampowered.com/app/2392000/Ultra_Foodmess_2/",
        Previewlink: "https://store.steampowered.com/app/2392000/Ultra_Foodmess_2/",
        Githublink: "",
    },
    {
        title: "IIN",
        cardImage: "assets/images/project-page/IIN.jpg",
        description: "Platformer puzzle game where you have to movee a box to a destination in each level.",
        tagimg: "https://store.steampowered.com/app/795110/IIN/",
        Previewlink: "https://store.steampowered.com/app/795110/IIN/",
        Githublink: "",
    },
    {
        title: "Goroons",
        cardImage: "assets/images/project-page/Goroons.jpeg",
        description: "Platformer puzzle game with 4 character that can morph to obtain different abilities to traverse a level.",
        tagimg: "https://store.steampowered.com/app/853590/Goroons/",
        Previewlink: "https://store.steampowered.com/app/853590/Goroons/",
        Githublink: "",
    },
    {
        title: "Genio Quiz",
        cardImage: "assets/images/project-page/GenioQuiz.png",
        description: "Series of puzzle games with twists on how to answer the questions presented.",
        tagimg: "https://play.google.com/store/apps/developer?id=Andr%C3%A9+Birnfeld&hl=pt_BR&gl=US",
        Previewlink: "https://play.google.com/store/apps/developer?id=Andr%C3%A9+Birnfeld&hl=pt_BR&gl=US",
        Githublink: "",
    },
    {
        title: "Gen.io",
        cardImage: "assets/images/project-page/GenDotIO.jpg",
        description: "An online third-person shooter game with rock paper scissors elements to weapons published for Android. The game is no longer available.",
        tagimg: "https://www.youtube.com/watch?v=FA_MU0mTLaM",
        Previewlink: "https://www.youtube.com/watch?v=FA_MU0mTLaM",
        Githublink: "",
    },
];

// function for rendering project cards data
const showCards = () => {
    let output = "";
    projects.forEach(({ title, cardImage, description, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="${Previewlink}">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                <a> ${description}</a>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
