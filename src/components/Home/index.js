import React from 'react';
import Product from '../Product';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="Home image"
      />

      <div className="home_row">
        <Product
          id="123456789"
          title="Código Limpo: Habilidades Práticas do Agile Software"
          price={96.62}
          rating={5}
          image="https://m.media-amazon.com/images/I/41SH-SvWPxL._SX260_.jpg"
        />
        <Product
          id="123456789"
          title="MacBook Air 13 Apple Intel Core i5 8GB RAM 512GB SSD Cinza-Espacial"
          price={9999.00}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456789"
          title="Console PlayStation 5"
          price={4999.00}
          rating={5}
          image="https://p2.trrsf.com/image/fget/cf/600/400/images.terra.com/2020/06/12/112868809pa5.jpg"
        />
        <Product
          id="123456789"
          title="IPhone XR"
          price={2999.97}
          rating={4}
          image="https://images-americanas.b2w.io/produtos/01/00/img/134347/9/134347923_1GG.jpg"
        />
        <Product
          id="123456789"
          title="The Hobbit - Capa dura"
          price={41.32}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/5115VsJpk3L._SX319_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456789"
          title="SmartTV Samsung 64 polegadas FULL HD"
          price={2754.99}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/africa-pt-n5300-series-ua43n5300akxke-frontblack-227242394?$720_576_PNG$"
        />
      </div>

    </div>
  )
}

export default Home;
