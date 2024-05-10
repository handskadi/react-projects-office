import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faChessQueen,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./images/logo.png";
import appartImage from "./images/apartment/im1.jpg";

const data = [
  {
    id: 1,
    title: "Apartment El Houda",
    image: "im1.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 3,
    price: 89,
    bestSeller: true,
    royal: true,
    costal: false,
  },
  {
    id: 2,
    title: "Apartment Tamanarte",
    image: "im2.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 3,
    price: 67,
    bestSeller: false,
    royal: true,
    costal: false,
  },
  {
    id: 3,
    title: "Apartment Safi",
    image: "im3.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 3,
    price: 82,
    bestSeller: true,
    royal: true,
    costal: false,
  },
  {
    id: 4,
    title: "Apartment Marrakech",
    image: "im4.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 3,
    price: 98,
    bestSeller: true,
    royal: false,
    costal: false,
  },
  {
    id: 5,
    title: "Apartment Standard",
    image: "im5.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 0,
    price: 75,
    bestSeller: false,
    royal: false,
    costal: false,
  },
  {
    id: 6,
    title: "Apartment Agadir",
    image: "im6.jpg",
    features: ["Twin Beds", "Air-conditioner", "Free Wifi"],
    description:
      "Doloracere neque asperiores quisquam illum distinctio doloremque quae dolorum, possimus totam!",
    star: 0,
    price: 75,
    bestSeller: false,
    royal: true,
    costal: true,
  },
];

const apartmentsData = data;

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer />
    </>
  );
}

function Header() {
  const [active, setActive] = useState(true);
  return (
    <header>
      <a href="/home">
        <h1>Aliya Luxury Aparatment</h1>
        <img src={logo} alt="Aliya Luxury Aparatment" />
      </a>
      <NavBar />
      <div>
        <button>
          <span
            className={active ? "notifation-avtive" : "notifation-deactive"}
          >
            <FontAwesomeIcon icon={faBell} />
          </span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button onClick={() => setActive(!active)}>Login</button>
      </div>
    </header>
  );
}

function Aside() {
  return (
    <aside>
      <ul>
        <li>Apartments</li>
        <li>Calendar</li>
        <li>Check-In</li>
        <li>Check-Out</li>
        <li>Pick-up</li>
      </ul>
    </aside>
  );
}

function Main() {
  return (
    <main>
      <article>
        <h2>Alya Luxury Apartments - Agadir</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          temporibus ipsam, at, qui quisquam illum ea voluptatem labore facilis
          recusandae repellendus laborum porro quia voluptas fuga totam a, culpa
          magnam.
        </p>
      </article>
      <Cards />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div>2024 - @Copyright - Mkweb</div>
    </footer>
  );
}

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function Cards() {
  return (
    <article className="cards">
      {apartmentsData.map((apartment) => (
        <Card apartment={apartment} />
      ))}
    </article>
  );
}

function Card({ apartment }) {
  return (
    <div className="single-card">
      <img src={appartImage} alt="Card" />
      <div className="card-body">
        <h3>{apartment.title}</h3>
        <ul>
          {apartment.features.map((feature) => (
            <li>
              <FontAwesomeIcon icon={faCheck} /> {feature}
            </li>
          ))}
        </ul>
        <p>
          Doloracere neque asperiores quisquam illum distinctio doloremque quae
          dolorum, possimus totam!
        </p>
        <div className="stars">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
        <button>Learn More</button>
        <span className="price">79$</span>
        <span className="queen">
          <FontAwesomeIcon icon={faChessQueen} />
        </span>
        <span className="best-seller">
          <i className="fa-regular fa-handshake"></i> Best Seller
        </span>
      </div>
    </div>
  );
}
export default App;
