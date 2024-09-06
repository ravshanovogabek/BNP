import React from 'react';
import 'aos/dist/aos.css';
import "./header.css"


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-list aos-init aos-animate" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />Material Quality
          </h2>
          <img
            src="https://bnpfabrik.vercel.app/assets/mebel2-1EUD4VC_.png"
            alt="Mebel2"
            className="header-mebel2 aos-init aos-animate"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">
              A company that has been producing cotton fabrics for use worldwide for many years.
            </p>
            <button className="header-list-btn">Collection</button>
          </nav>
        </div>
      </div>

      <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Winter Collection</h2>
      <p className="header-text">Buxoro tabiiy mahsuloti</p>
      <ul className="header-navbar">
        {[
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/kvadrat-Cmu75VqI.jpg",
            alt: "Kvadratchalar",
            text: "Kvadratchalar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/ikat-CQZ-Qy2u.jpg",
            alt: "Ikat",
            text: "Ikat"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/davralar-J4ZKXgSr.jpg",
            alt: "Davralar",
            text: "Davralar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/geometriya-CSNEnk_7.jpg",
            alt: "Geometriya kok",
            text: "Geometriya kok"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/tropik-DwuQOop4.jpg",
            alt: "Tropik Barglar",
            text: "Tropik Barglar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/bambi-KdA38_2S.jpg",
            alt: "Bambi",
            text: "Bambi"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/vizant-BYxF_mM0.jpg",
            alt: "Vizantiya",
            text: "Vizantiya"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/kechki-bog-_qV9ES4-.jpg",
            alt: "Kechki Bog",
            text: "Kechki Bog"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/markiz-CtouN3PL.jpg",
            alt: "Pat Markiz",
            text: "Pat Markiz"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/logo15-ZjzY2vX3.jpg",
            alt: "Lavanda atirgullari",
            text: "Lavanda atirgullari"
          }
        ].map((item, index) => (
          <li className="header-item aos-init aos-animate" data-aos="fade-in" key={index}>
            <a href={item.href}>
              <img src={item.src} alt={item.alt} className="header-logo" />
              <p className="header-navbar-text">{item.text}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="container-1">
        <div className="header-list-kuz aos-init aos-animate" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />Material Quality
          </h2>
          <img
            src="https://bnpfabrik.vercel.app/assets/saplni3-4szaTxEe.png"
            alt="Mebel2"
            className="header-mebel2 aos-init aos-animate"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">
              A company that has been producing cotton fabrics for use worldwide for many years.
            </p>
            <button className="header-list-btn">Collection</button>
          </nav>
        </div>
      </div>

      <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Autumn Collection</h2>
      <p className="header-text">Buxoro tabiiy mahsuloti</p>
      <ul className="header-navbar">
        {[
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/safari-DrcxBVvc.jpg",
            alt: "Safari",
            text: "Safari"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg",
            alt: "Amerika",
            text: "Ko'prangli ametist"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/shivali-BZAnCCJl.jpg",
            alt: "Ranglar",
            text: "Shivali bezak"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/zumrad-CNsYuEZU.jpg",
            alt: "Fantaziya",
            text: "Zumrad"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/malxit-CQ6YjTi_.jpg",
            alt: "Terezsah",
            text: "Malaxit qutisi"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/bahor-hid-WBi-IA65.jpg",
            alt: "Sofiya",
            text: "Bahorning hidlari"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/Kuzgi-CbyWItoT.jpg",
            alt: "Boz",
            text: "Kuzgi barglar tushishi"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/moviy-shab-DsQR-jk1.jpg",
            alt: "Gulaboa",
            text: "Moviy Shabada"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/moviy-suv-DLTMaTXk.jpg",
            alt: "Tropik",
            text: "Moviy suv"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/plaid-BqAYr5-k.jpg",
            alt: "Gul",
            text: "Plaid"
          }
        ].map((item, index) => (
          <li className="header-item aos-init aos-animate" data-aos="fade-in" key={index}>
            <a href={item.href}>
              <img src={item.src} alt={item.alt} className="header-logo" />
              <p className="header-navbar-text">{item.text}</p>
            </a>
          </li>
        ))}
      </ul>

      <div className="container-2">
        <div className="header-list-yozgi aos-init aos-animate" data-aos="fade-up">
          <h2 className="header-list-titles">
            <span className="titles-span">100%</span> <br />Material Quality
          </h2>
          <img
            src="https://bnpfabrik.vercel.app/assets/spalni2-DPKPhgnK.png"
            alt="Mebel2"
            className="header-mebel2 aos-init aos-animate"
            data-aos="fade-down"
          />
          <nav className="header-list-nav">
            <h2 className="header-list-title">"Buxoro Tabiiy Mahsuloti"</h2>
            <p className="header-list-text">
              A company that has been producing cotton fabrics for use worldwide for many years.
            </p>
            <button className="header-list-btn">Collection</button>
          </nav>
        </div>
      </div>

      <h2 className="header-title aos-init aos-animate" data-aos="fade-in">Summer Collection</h2>
      <p className="header-text">Buxoro tabiiy mahsuloti</p>
      <ul className="header-navbar">
        {[
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/vintage-DBsnYrAb.jpg",
            alt: "Yozgi gullar",
            text: "Yozgi gullar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/ametist-CPTKVyOc.jpg",
            alt: "Tropik",
            text: "Jaguar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/fransuz-CKkLs_qZ.jpg",
            alt: "Ranglar",
            text: "Tropik barglar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/qoy-dolli-ic22Rpbk.jpg",
            alt: "Daraxtlar",
            text: "Yozgi daraxtlar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/alp-tog-uGTG4qjD.jpg",
            alt: "Ko'k",
            text: "Plaj"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/ilhomlantiruvchi-TBRZKPn0.jpg",
            alt: "Gullar",
            text: "Vino hidis"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/yashil-C_l_b14D.jpg",
            alt: "Tikanlar",
            text: "Kaktuslar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/makka-CLa72Pku.jpg",
            alt: "Gullar",
            text: "Gunafsha"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/Sakura-B5Tfvmwd.jpg",
            alt: "Gullar",
            text: "Kaktuslar"
          },
          {
            href: "/collection",
            src: "https://bnpfabrik.vercel.app/assets/Zaytun-CC6OlZne.jpg",
            alt: "Atirgul",
            text: "Moviy Atirgul"
          }
        ].map((item, index) => (
          <li className="header-item aos-init aos-animate" data-aos="fade-in" key={index}>
            <a href={item.href}>
              <img src={item.src} alt={item.alt} className="header-logo" />
              <p className="header-navbar-text">{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
