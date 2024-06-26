AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Senior Games Engineer",
        cardImage: "assets/images/experience-page/HMS.jpg",
        place: "Half Moon Studios",
        time: "(Apr, 2023 - Current)",
        desp: "<li>Developing solutions to connect live stream user inputs into games to enable automated interaction.</li><li>Developing ground-breaking solutions of human-AI collaboration to improve efficiency in the development of game mechanics and content.</li><li>Re-imagining of quiz games' design and content pipeline.</li>",
    },
  {
    title: "Game Developer/System Analist",
      cardImage: "assets/images/experience-page/painfulSmileLogo.jpg",
    place: "Painful Smile",
    time: "(Sep, 2020 - Feb, 2023)",
    desp: "<li>Got a leadership role as a system analyst within 10 months.</li><li>Worked on over 10 game projects for different client demands with several teams.</li><li>Developed communication and leadership skills.</li>",
  },
    {
        title: "Game Developer",
        cardImage: "assets/images/experience-page/GenioGamesLogo.png",
    place: "Genio Games",
    time: "(Jun, 2017 - Oct, 2018)",
        desp: "<li>Worked developing new features for the company's main title </li><li>Developed as an experimental online multiplayer game called gen.io which used AWS for hosting and NodeJS for netcode.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
