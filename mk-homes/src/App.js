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
  faSignOut,
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
        <button onClick={() => setActive(!active)}>
          <FontAwesomeIcon icon={faSignOut} />
        </button>
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
  const [propertImage, setPropertyImage] = useState(null); //"im4.jpg"
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [isLuxury, setIsluxury] = useState(true);
  const [isStandard, setIsStandard] = useState(false);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isCoastal, setIsCoastal] = useState(false);
  const [step, setStep] = useState(1);

  const [kingBed, setKingBed] = useState(false);
  const [twinBed, setTwinBed] = useState(false);
  const [royalBed, setRoyalBed] = useState(false);
  const [queenBed, setQueenBed] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [swimingPool, setSwimingPool] = useState(false);
  const [freeWifi, setFreeWifi] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [parking, setParking] = useState(false);
  const [tv, setTV] = useState(false);

  function nextHandler() {
    if (step < 3) setStep((s) => s + 1);
  }

  function previousHandler() {
    if (step > 1) setStep((s) => s - 1);
  }

  const selectedAmeties = {
    kingBed,
    twinBed,
    royalBed,
    queenBed,
    airConditioner,
    swimingPool,
    freeWifi,
    balcony,
    tv,
  };
  const amenitiesText = {
    kingBed: "King Bed",
    twinBed: "Twin Bed",
    royalBed: "Royal Bed",
    queenBed: "Queen Bed",
    airConditioner: "Air Conditioner",
    swimingPool: "Swimming Pool",
    freeWifi: "Free Wifi",
    balcony: "Balcony",
    tv: "Tv",
  };

  const newApartment = {
    id: crypto.randomUUID(),
    title: propertyName,
    image: propertImage,
    features: Object.entries(selectedAmeties)
      .filter(([key, value]) => value)
      .map(([key]) => amenitiesText[key]),
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
    setPropertyName("");
    setPropertyImage("im4.jpg");
    setPropertyPrice("");
    setPropertyDescription("");
    setIsluxury(true);
    setIsStandard(false);
    setIsBestSeller(false);
    setIsCoastal(false);
    setStep(1);
  }

  return (
    <div className={hide ? "add-appart-form show" : "add-appart-form hide"}>
      <form onSubmit={handleAddApartmentSubmit}>
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        {step === 1 ? (
          <>
            <div className="errors">
              <ul>
                {!propertyName && <li>Property Name can not be empty!</li>}
                {!propertyDescription && (
                  <li>Property Description can not be empty!</li>
                )}
                {isLuxury || isStandard || isBestSeller || isCoastal ? (
                  ""
                ) : (
                  <li>At least one feature should be checked!</li>
                )}
              </ul>
            </div>
            <fieldset>
              <legend>Property Name</legend>
              <input
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
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
          </>
        ) : step === 2 ? (
          <>
            <div className="errors">
              <ul>
                {!isLuxury && <li>At least one Amenty should be checked!</li>}
              </ul>
            </div>
            <fieldset>
              <legend>Amenties</legend>
              <ul>
                <li>
                  <input
                    type="checkbox"
                    value={kingBed}
                    checked={kingBed}
                    onChange={(e) => setKingBed(e.target.checked)}
                  />
                  <label>King Beds</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={twinBed}
                    checked={twinBed}
                    onChange={(e) => setTwinBed(e.target.checked)}
                  />
                  <label>Twin Beds</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={royalBed}
                    checked={royalBed}
                    onChange={(e) => setRoyalBed(e.target.checked)}
                  />
                  <label>Royal Bed</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={queenBed}
                    checked={queenBed}
                    onChange={(e) => setQueenBed(e.target.checked)}
                  />
                  <label>Queen Bed</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={airConditioner}
                    checked={airConditioner}
                    onChange={(e) => setAirConditioner(e.target.checked)}
                  />
                  <label>Air-conditioner</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={swimingPool}
                    checked={swimingPool}
                    onChange={(e) => setSwimingPool(e.target.checked)}
                  />
                  <label>Swimming pool</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={freeWifi}
                    checked={freeWifi}
                    onChange={(e) => setFreeWifi(e.target.checked)}
                  />
                  <label>Free Wifi</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={balcony}
                    checked={balcony}
                    onChange={(e) => setBalcony(e.target.checked)}
                  />
                  <label> Balcony</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={parking}
                    checked={parking}
                    onChange={(e) => setParking(e.target.checked)}
                  />
                  <label>Parking</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    value={tv}
                    checked={tv}
                    onChange={(e) => setTV(e.target.checked)}
                  />
                  <label>Tv</label>
                </li>
              </ul>
            </fieldset>
          </>
        ) : (
          <>
            <div className="errors">
              <ul>
                {!propertImage && <li>Image can not be empty!</li>}
                {!propertyPrice && <li>Price can not be empty!</li>}
              </ul>
            </div>
            <fieldset>
              <legend>Property Image</legend>
              {/* <input
                type="text"
                value={propertImage}
                onChange={(e) => setPropertyImage(e.target.value)}
                disabled
              /> */}
              <input
                type="file"
                accept="image/*"
                className="image-upload"
                onChange={(e) => setPropertyImage(e.target.files[0])}
              />

              {propertImage && (
                <img
                  src={URL.createObjectURL(propertImage)}
                  alt="Preview"
                  style={{ maxWidth: "100%" }}
                />
              )}
            </fieldset>

            <fieldset>
              <legend>Property Price</legend>
              <input
                type="text"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
              />
            </fieldset>
          </>
        )}
        <br />
        <button
          className={
            step === 3 &&
            propertyName &&
            propertyDescription &&
            propertyPrice &&
            (isLuxury || isStandard || isBestSeller || isCoastal)
              ? "active-button"
              : "inactive-button"
          }
        >
          Add Apartment
        </button>

        <span onClick={onClosePopUp} className="close-button">
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
        <span
          className={step === 3 ? "next-prev-inactive" : "next-prev"}
          onClick={nextHandler}
        >
          Next
        </span>
        <span
          className={step === 1 ? "next-prev-inactive" : "next-prev"}
          onClick={previousHandler}
        >
          Previous
        </span>
      </form>
    </div>
  );
}
