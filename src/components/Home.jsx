// import hereoImage1 from "../assets/images/amazon-hereo-image.jpg";
import hereoImage1 from "../assets/images/amzon-heroe-image-4.jpg";
import "../styles/home.css";
import Product from "./product";

// images

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={hereoImage1} alt="" />
        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Succesful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="2"
            title="Kenwood kMix stands for Baking, Stylish kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={17.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/51GfU0kj5mL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81dcBdBw3+L._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="5"
            title="New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://Images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
