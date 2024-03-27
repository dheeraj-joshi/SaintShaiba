import React from "react";
import img1 from "../images/png/cat_img.png";
import Main from "./Main"
function Navbar() {
  return (
    <>
      <header className="bg_img1 overlay ">
        <div className="bgc_black">
          <nav className=" container  ">
            <div className="d-flex align-items-center justify-content-between">
              <p className="fw_normal fs_xxl text-white py-4 pb-0">
                Saint
                <span className="fw_normal fs_xxl clr_orange pb-0">Shiba</span>
              </p>
              <ul className="d-flex py-4 pb-0">
                <li className="pe-4 pb-0">
                  <a className="text-white fw_normal fs_sm" href="">
                    Home
                  </a>
                </li>
                <li className="pe-4 pb-0">
                  <a className="text-white fw_normal fs_sm" href="">
                    About
                  </a>
                </li>
                <li className="pe-4 pb-0">
                  <a className="text-white fw_normal fs_sm" href="">
                    Tokenomics
                  </a>
                </li>
                <li className="pe-4">
                  <a className="text-white fw_normal fs_sm" href="">
                    How To Buy
                  </a>
                </li>
                <li className="pe-4">
                  <a className="text-white fw_normal fs_sm" href="">
                    FAQs
                  </a>
                </li>
                <li className="pe-4 pb-0">
                  <a className="text-white fw_normal fs_sm btn_vallet" href="">
                    Connect Wallet
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between mt-5">
            <div className="col-6">
              <p className="fs_4xl fw_bold text-white">
                Accumsan ut orci vitae
              </p>
              <p className="fw_normal fs_md text-white mb-0 ">
                Velit eget sit nibh fringilla risus ullamcorper malesuada. Morbi
                nulla suscipit dolor, volutpat quam at urna donec rutrum. In
                vulputate congue arcu in et.
              </p>
              <button
                className="text-white fw_semibold fs_md btn_vallet2 mt-5"
                href=""
              >
                Connect Wallet
              </button>
            </div>
            <div className="col-5">
              <img className="w-100" src={img1} alt="" />
            </div>
          </div>
          <div className="header_div ">
            <p className="text-white fw_semibold fs_3xl ">
              Cursus ligula habitant sed integer.
            </p>
            <p className="text-white fs_sm fw_normal">
              Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
              viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
              Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
              etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
              aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id
              magna tellus imperdiet tortor. Volutpat nec vulputate diam
              tristique facilisi in turpis vel elit.
            </p>
            <p className="text-white fs_sm fw_normal">
              Urna, dictum volutpat augue tortor. Fermentum vulputate convallis
              viverra facilisis. Aliquam porttitor sem rhoncus rhoncus, quis.
              Arcu, ut enim eget pellentesque neque. Nibh pellentesque lobortis
              etiam sed. Cursus donec porttitor fames tellus. At ut donec nec
              aliquet ipsum leo tellus amet lacus. Varius mi urna blandit id
              magna tellus imperdiet tortor. Volutpat nec vulputate diam
              tristique facilisi in turpis vel elit.
            </p>
          
          </div>
        </div>
      </header>
      <Main/>
    </>
  );
}

export default Navbar;
