import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faChessQueen,
  faPersonSwimming,
  faShoppingCart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHandshake,
  faStar as starFrame,
} from "@fortawesome/free-regular-svg-icons";

import { data } from "./data.js";
import logo from "./images/logo.png";

const apartmentsData = data;

export default function App() {
  return (
    <>
      <Header />
      <Aside />
      <Main />
      <AddNewApartment />
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
      <img src={`/images/apartment/${apartment.image}`} alt={apartment.title} />
      <div className="card-body">
        <h3>{apartment.title}</h3>
        <ul>
          {apartment.features.map((feature) => (
            <li>
              <FontAwesomeIcon icon={faCheck} /> {feature}
            </li>
          ))}
        </ul>
        <p>{apartment.description}</p>
        <div className="stars">
          <Rating star={apartment.star} /> {apartment.star}/5
        </div>
        <button>Book Now</button>

        <span className="price">{apartment.price}$</span>
        {apartment.royal && (
          <span className="queen">
            <FontAwesomeIcon icon={faChessQueen} />
          </span>
        )}
        {apartment.bestSeller && (
          <span className="best-seller">
            <FontAwesomeIcon icon={faHandshake} /> Best Seller
          </span>
        )}
        {apartment.costal && (
          <span class="costal">
            <FontAwesomeIcon icon={faPersonSwimming} /> Costal
          </span>
        )}
      </div>
    </div>
  );
}

function Rating({ star }) {
  let stars;
  switch (Number(star)) {
    case 1:
      stars = (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
        </>
      );
      break;
    case 2:
      stars = (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
        </>
      );
      break;
    case 3:
      stars = (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
        </>
      );
      break;
    case 4:
      stars = (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={starFrame} />
        </>
      );
      break;
    case 5:
      stars = (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
      break;
    default:
      stars = (
        <>
          <FontAwesomeIcon icon={faStarHalfStroke} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
          <FontAwesomeIcon icon={starFrame} />
        </>
      );
  }

  return stars;
}

function Footer() {
  return (
    <footer>
      <div>2024 - @Copyright - Mkweb</div>
    </footer>
  );
}

function AddNewApartment() {
  function handleAddApartmentSubmit(e) {
    e.preventDefault();
    alert("It's Added!");
  }
  return (
    <form className="add-appart-form" onSubmit={handleAddApartmentSubmit}>
      <fieldset>
        <legend>Property Name</legend>
        <input type="text" />
      </fieldset>

      <fieldset>
        <legend>Property Description</legend>
        <input type="text" />
      </fieldset>

      <fieldset>
        <legend>Property Image</legend>
        <input type="text" />
      </fieldset>

      <fieldset>
        <legend>Property Price</legend>
        <input type="text" />
      </fieldset>

      <div>
        <fieldset>
          <legend>Feature</legend>
          <ul>
            <li>
              <input type="checkbox" />
              <label>Royal bed</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Queen Bed</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>King Bed</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Twin Bed</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Double Bed</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Free Wifi</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Air-conditioner</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Swimming pool</label>
            </li>
            <li>
              <input type="checkbox" />
              <label>Tv</label>
            </li>
          </ul>
        </fieldset>
      </div>
      <br />
      <button>Add Apartment</button>
      <button>x</button>
    </form>
  );
}
