<template>
    <div class="main-container">
    <header id="top-bar">
    <h1 id="name">Cody Koduah Osei</h1>
    <h3 id="qualities">
      Junior Full-Stack Developer | Team Player | Excellent Communicator | Experienced Problem
      Solver
    </h3>
    <nav id="top-links"></nav>
  </header>

  <div id="introduction">
    <div id="face-name-summary">
      <img id="headshot" src="../assets/IMG_1865 copy.jpg" alt="Headshot" />
      <h1>Welcome, I'm Cody Osei!</h1>
      <div id="summary">
        <p>
          A recent graduate of Tech Elevator's fullstack Java Web Application Development Bootcamp,
          with a background in social media strategy. I love being able to build things that create
          a connection among people and I'm eager to apply my strong technical and soft skills in a
          space that allows me to learn from the people around me.
        </p>
    </div>
    </div>
    <div id="cert-container">
      <img id="certificate" src="../assets/IMG_1839.jpg" alt="Tech Elevator Certificate" />
    </div>
  </div>
  <div id="icons">
    <a href="https://www.linkedin.com/in/cody-osei/" target="_blank" class="icon-link">
      
      <i class="fa-brands fa-linkedin" id="linkedIn"></i>
      
    </a>
    <a href="https://github.com/Cody-Ko" target="_blank" class="icon-link">
      
      <i class="fa-brands fa-square-github" id="github"></i>
      
    </a>
  </div>
  <div id="links">
    <h1 class="section-name">Projects</h1>
    <div id="work">
      <div id="card">
        <a href="https://github.com/Cody-Ko/Vending-Machine-Mini-Capstone" target="_blank">
          <img
            class="project-image"
            id="vending"
            src="../assets/adobestock_291698013_editorial_use_only-1170x640.jpeg"
            alt="Vending-Machine"
          />
        </a>
        <div id="description">
          <h3 id="title">Vending Machine Application</h3>
          <p>
            Collaborated with a partner to create and unit test an object oriented CLI vending
            machine application in Java. The application reads a csv file to display the slot
            location, name, price, and type of various stocked items and accepts user requests to
            add money and purchase items.
          </p>
        </div>
      </div>
      <div id="card">
        <a href="https://github.com/Cody-Ko/Money-Transfer-Capstone2" target="_blank">
          <img
            class="project-image"
            id="TEnmo"
            src="../assets/GettyImages-547133016-e1687501093568.jpg"
            alt="TEnmo-Project"
          />
        </a>

        <div id="description">
          <h3 id="title">"TEnmo" Money Transfer Application</h3>
          <p>
            Utilized Java/Spring PostgreSQL, and a model-view-controller pattern to pair program a
            RESTful API server and client-side application. The program acts as a money share
            application that stores information in a database and allows authenticated users to send
            and receive money transfers, as well as view their full transaction history.
          </p>
        </div>
      </div>
      <div id="card">
        <a href="https://github.com/Cody-Ko/Tech-Elevator-Final-Capstone" target="_blank">
          <img
            class="project-image"
            id="stellar"
            src="../assets/StellarDiscussions.png"
            alt="Final-Capstone"
          />
        </a>

        <div id="description">
          <h3 id="title">Final Capstone</h3>
          <p id="synopsis">
            Collaborated with a small team of developers to design and build a Vue-based, message
            board, web application that implements an MVC design pattern and a Restful API server,
            replicating various features seen on Reddit.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div id="skills-section">
    <h1 class="section-name">Skills</h1>

    <div id="skills">
  <SkillsCard/>
    </div>
  </div>
    </div>
</template>

<script>
import SkillsCard from './SkillsCard.vue'

export default {
  components: {
    SkillsCard
  }
}
</script>

<style scoped>


#top-bar {
  display: flex;
  flex-direction: column;
  background-color: rgb(25, 25, 103);
  height: 80px;
  /* width: 100%; */
  width: 100vw;
  align-items: center;
  justify-content: center;
  /* justify-content: start; */
  /* overflow: hidden; */
  overflow-wrap: break-word;
  position:fixed;
  z-index: 0;
  gap: 5px;
}

#qualities {
  /* padding: 3px 2% 0px 2%;
  text-align: center; */
  color: white;
  font-size:large;
  margin:0;


}

.section-name {
  text-align: center;
  margin-bottom: 25px;
  color: black;
}

#name {
  color: white;
  /* height: 20%; */
  font-size:x-large;
  margin: 0;
}

#top-links {
  display: flex;
  text-align: center;
}

#introduction {
  display: flex;
  grid-area: intro;
  color: black;
  /* margin-top: 8%; */
  padding-top: 8%;
  flex-wrap: wrap;
  padding-left: 3%;
  padding-right: 3%;
}

#face-name-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-bottom: 35px;
}

#headshot {
  width: 20%;
  margin-left: 5%;
}

#summary {
  width: 430px;
  text-align: center;
}

#cert-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-width: 300px;
}

#certificate {
  width: 45%;
  min-width: 400px;
}

#links {
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  grid-area: links;
  color: black;
  height: 30%;
  padding-top: 2%;
  background-color: rgb(239, 234, 234);
  /* width: 100vw; */
}

#icons {
  display: flex;
  justify-content: space-around;
  /* padding-bottom: 3%; */
}

.icon-link {
  padding: 0%;
}

.icon-link:hover {
  background-color: transparent;
}

#github,
#linkedIn {
  font-size: 300%;
  color: black;
}

#work {
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  height: 100%;
  flex-wrap: wrap;
  padding-bottom: 10px;
}

#card {
  /* border: 10px solid rgb(25, 25, 103); */
  width: 30%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 10px;
  /* margin: 5px; */
}

#description {
  /* min-height: 100%;
  min-width: 100%; */
  text-align: center;
  padding-bottom: 10%;
}

.project-image {
  width: 100%;
  /* border-bottom: 10px solid rgb(25, 25, 103); */
}

#skills-section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* width: 100vw; */
  height: 100vh;
  /* overflow: none; */
  /* padding: 25px; */
  /* max-height: 100vh; */
  background-color: rgb(239, 234, 234);
  padding-top: 2%;
  min-height: calc(100vh - 88px);
  /* Calculate height to fill remaining viewport */
  /* use a set width and then switch to a percentage for lower screen size */
}

#skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
}

@media (max-width: 1024px) and (min-width: 864px) {
  #top-bar {
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 25, 103);
    grid-area: topBar;
    height: 10%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    overflow-wrap: break-word;
    position: relative;
  }
  #introduction {
    display: flex;
    flex-direction: column;
    grid-area: intro;
    color: black;
    align-items: center;
    width: 100%;
  }
  #face-name-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5%;
  }

  #summary {
    width: 100%;
  }

  #cert-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-area: links;
    color: black;
    height: 100vh;
  }

  #work {
    display: flex;
    align-items: center;
  }
  #card {
    width: 40%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  #description {
    
    text-align: center;
    padding-bottom: 10%;
  }

  .project-image {
    width: 100%;
  }
  #skills-section {
    height: 100vh;
    padding-top: 2%;
  }

  #skills {
    width: 80%;
  }
}

@media (max-width: 863px) {
  #top-bar {
    display: flex;
    flex-direction: column;
    background-color: rgb(25, 25, 103);
    grid-area: topBar;
    height: 10%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    overflow-wrap: break-word;
    position: relative;
  }
  #introduction {
    display: flex;
    flex-direction: column;
    grid-area: intro;
    color: black;
    align-items: center;
    width: 100vw;
  }
  #face-name-summary {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding-top: 5%;
  }

  #summary {
    width: 80%;
  }

  #cert-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #links {
    display: flex;
    align-items: center;
    justify-content: space-around;
    grid-area: links;
    color: black;
  }
  #work {
    margin-bottom: 2%;
  }
  #card {
    width: 60%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin-bottom: 5px;
    height: 30%;
  }

  #description {
    
    text-align: center;
    padding-bottom: 10%;
  }

  .project-image {
    width: 100%;
  }

  #skills-section {
    padding-top: 2%;
  }
  #skills {
    width: 80%;
  }
}
@media (max-width: 450px) {
  #skills-section {
    padding-top: 10%;
  }

  #skills {
    width: 90%;
  }
}
</style>