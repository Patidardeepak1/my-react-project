import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/intro";
import Skill from "./components/skills/skill";
import Works from "./components/works/works";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
function App() {
  return (
   
   <div className="App">
   <Navbar/>
   <Intro/>
   <Skill/>
   <Works/>
   <Contact/>
   <Footer/>
   </div>
 
  );
}

export default App;
