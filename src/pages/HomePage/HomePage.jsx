import React from 'react';
import './HomePage.scss';
import '../../styles/main.scss';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import mobileBg from '../../images/bg/main-section-bg-mobile.jpg';
import mainSectionBg from '../../images/bg/main-section.jpg';
import AddressSchool from '../../components/addressSchool/AddressSchool';
import MyButton from '../../components/UI/myButton/MyButton';
import Carousel from '../../components/UI/carousel/Carousel';

const HomePage = () => {
  return (
    <>
      <section className="section-main main-section">
        {/* * * * * COMPONENT Header * * * * */}
        <Header />
        {/* * main-section__bg * */}
        <div className="main-section__bg">
          <picture>
            <source media="(min-width: 576px)" srcSet={mainSectionBg} />
            <img src={mobileBg} alt="" />
          </picture>
        </div>
        {/* * main-section__container * */}
        <div className="main-section__container">
          <div className="main-section__slides slides">
            {/* * * * * Carousel * * * * */}
            <Carousel>
              <div className="slide">
                <h1 className="slide__title">Грант и контрактное обучение в зарубежных вузах</h1>
                <p className="slide__descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam reprehenderit libero dolor eaque tempora nesciunt! Eligendi,
                  alias rem neque perspiciatis enim, quisquam ab consequatur reprehenderit veritatis omnis cupiditate odit!
                </p>

                <div className="slide__button">
                  {/* * * * * COMPONENT My Button* * * * */}
                  <MyButton text={'Связаться с нами'} />
                </div>
              </div>
              <div className="slide">
                <h1 className="slide__title">Грант и контрактное обучение в зарубежных вузах</h1>
                <p className="slide__descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam reprehenderit libero dolor eaque tempora nesciunt! Eligendi,
                  alias rem neque perspiciatis enim, quisquam ab consequatur reprehenderit veritatis omnis cupiditate odit!
                </p>

                <div className="slide__button">
                  {/* * * * * COMPONENT My Button* * * * */}
                  <MyButton text={'Связаться с нами'} />
                </div>
              </div>
              <div className="slide">
                <h1 className="slide__title">Грант и контрактное обучение в зарубежных вузах</h1>
                <p className="slide__descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsam reprehenderit libero dolor eaque tempora nesciunt! Eligendi,
                  alias rem neque perspiciatis enim, quisquam ab consequatur reprehenderit veritatis omnis cupiditate odit!
                </p>

                <div className="slide__button">
                  {/* * * * * COMPONENT My Button* * * * */}
                  <MyButton text={'Связаться с нами'} />
                </div>
              </div>
            </Carousel>

            <div className="slides__dots dots-slides">
              <div className="dot">a</div>
              <div className="dot">b</div>
              <div className="dot">c</div>
            </div>
          </div>
          {/* * * * * COMPONENT Address School * * * * */}
          <AddressSchool />
        </div>
      </section>
      <main></main>
      <Footer />
    </>
  );
};

export default HomePage;
