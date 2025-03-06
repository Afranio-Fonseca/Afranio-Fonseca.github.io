AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
    {
        title: "Senior Games Engineer",
        cardImage: "assets/images/experience-page/HMS.jpg",
        place: "Half Moon Studios",
        time: "(Apr, 2023 - Current)",
        desp: "<li>Designed and implemented a level creator tool, enabling 10+ community members to contribute with custom content, enhancing player engagement.</li>" +
            "<li>Developed multiplayer solution that allows for rooms of up to 256 players to play and compete with cross-platform between web and mobile users.</li>" +
            "<li>Introduced solutions of human-AI collaboration to improve efficiency in the development of game mechanics and content.</li>",
    },
  {
    title: "Game Developer/System Analist",
      cardImage: "assets/images/experience-page/painfulSmileLogo.jpg",
    place: "Painful Smile",
      time: "(Sep, 2020 - Feb, 2023)",
      desp: "<li>Developed game-related tools and scripts to facilitate game development.</li>" +
          "<li>Earned promotion to leadership role within 10 months, overseeing a team of 8 developers and improving development efficiency.</li>" +
          "<li>Established specifications and coordinated production with software programmers.</li>" +
          "<li>Collaborated with upper management to drive strategy and implement new processes.</li>",
  },
    {
        title: "Game Developer",
        cardImage: "assets/images/experience-page/GenioGamesLogo.png",
    place: "Genio Games",
    time: "(Jun, 2017 - Oct, 2018)",
        desp: "<li>Developed 2D video games for PC and mobile platforms using Unity 3D.</li>" +
            "<li>Designed and implemented gameplay mechanics and interactive elements for multiple titles that sum up to 15+ million downloads.</li> " +
            "<li>Developed game-related tools and scripts to facilitate game development.</li>",
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
