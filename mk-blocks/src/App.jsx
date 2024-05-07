import Card from "./components/Card/Card";
import kadiPhoto from "./assets/profile_pics/mk.jpg";
import miraPhoto from "./assets/profile_pics/p1.jpg";
import leoPhoto from "./assets/profile_pics/p2.jpg";
import Header from "./components/Header/Header";
import Challenge from "./components/Challenges/Challenge";
function App() {
  return (
    <>
      <h1 className="mainHeading">React Compenents</h1>
      {/* <Card
        title="Mohamed KADI"
        description="Frontend Software engineer, MKweb CEO."
        image={kadiPhoto}
        button="Learn More"
      />
      <Card
        title="Mira Jaron"
        description="Backend Software engineer , Senior Developer."
        image={miraPhoto}
        button="Contact Devloper"
      />
      <Card
        title="Leo Malira"
        description="Devops engineer , MTA Boxes. Jinior Developer"
        image={leoPhoto}
        button="View Profile"
      /> */}

      <Challenge />
    </>
  );
}

export default App;
