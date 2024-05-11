import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCheck,
  faChessQueen,
  faPersonSwimming,
  faPlus,
  faShoppingCart,
  faStar,
  faStarHalfStroke,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHandshake,
  faStar as starFrame,
} from "@fortawesome/free-regular-svg-icons";

import { data } from "./data.js";
import logo from "./images/logo.png";

const apartmentsData = data;

export default function App() {
  const [hide, setHide] = useState(false);
  const [apartments, setApartments] = useState(apartmentsData);

  function handleCloseButton() {
    setHide((h) => !h);
  }

  function handleAddNewAppart(apartment) {
    setApartments((apartments) => [...apartments, apartment]);
  }
  return (
    <>
      <Header hide={hide} onClosePopUp={handleCloseButton} />
      <Aside />
      <Main apartments={apartments} />
      <AddNewApartment
        hide={hide}
        onClosePopUp={handleCloseButton}
        onAddNewApartment={handleAddNewAppart}
      />
      <Footer />
    </>
  );
}

function Header({ onClosePopUp }) {
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
        <button onClick={onClosePopUp}>
          Add <FontAwesomeIcon icon={faPlus} />
        </button>
        <button onClick={() => setActive(!active)}>Logout</button>
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

function Main({ apartments }) {
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
      <Cards apartments={apartments} />
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

function Cards({ apartments }) {
  return (
    <article className="cards">
      {apartments.map((apartment) => (
        <Card apartment={apartment} key={apartment.id} />
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
            <li key={feature}>
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
          <span className="costal">
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

function AddNewApartment({ hide, onClosePopUp, onAddNewApartment }) {
  const [propertyName, setPropertyName] = useState("");
  const [propertImage, setPropertyImage] = useState("im4.jpg");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [isLuxury, setIsluxury] = useState(true);
  const [isStandard, setIsStandard] = useState(false);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isCoastal, setIsCoastal] = useState(false);

  const newApartment = {
    id: crypto.randomUUID(),
    title: propertyName,
    image: propertImage,
    features: ["feature 1", "feature 2", "feature 3"],
    description: propertyDescription,
    star: 0,
    price: propertyPrice,
    bestSeller: isBestSeller,
    royal: isLuxury,
    costal: isCoastal,
    standard: isStandard,
  };

  function handleAddApartmentSubmit(e) {
    e.preventDefault();
    if (
      !propertyName ||
      !propertImage ||
      !propertyPrice ||
      !propertyDescription
    )
      return;
    console.log(newApartment);
    onAddNewApartment(newApartment);
    onClosePopUp();
  }
  return (
    <div className={hide ? "add-appart-form show" : "add-appart-form hide"}>
      <form onSubmit={handleAddApartmentSubmit}>
        <fieldset>
          <legend>Property Name</legend>
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Property Image</legend>
          <input
            type="text"
            value={propertImage}
            onChange={(e) => setPropertyImage(e.target.value)}
            disabled
          />
        </fieldset>

        <fieldset>
          <legend>Property Price</legend>
          <input
            type="text"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Property Description</legend>
          <textarea
            value={propertyDescription}
            onChange={(e) => setPropertyDescription(e.target.value)}
          ></textarea>
        </fieldset>
        <div>
          <fieldset>
            <legend>Feature</legend>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value={isLuxury}
                  checked={isLuxury}
                  onChange={(e) => setIsluxury(e.target.checked)}
                />
                <label>Luxury</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={isStandard}
                  checked={isStandard}
                  onChange={(e) => setIsStandard(e.target.checked)}
                />
                <label>Standard</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={isBestSeller}
                  checked={isBestSeller}
                  onChange={(e) => setIsBestSeller(e.target.checked)}
                />
                <label>Best Seller</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value={isCoastal}
                  checked={isCoastal}
                  onChange={(e) => setIsCoastal(e.target.checked)}
                />
                <label>Costal</label>
              </li>
            </ul>
          </fieldset>
        </div>
        <br />
        <button>Add Apartment</button>
        <span onClick={onClosePopUp}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
      </form>
    </div>
  );
}
