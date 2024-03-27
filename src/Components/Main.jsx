import React from "react";
import img1 from "../images/png/cat_img.png";
import img2 from "../images/png/Thread_lining.png";
import img3 from "../images/png/Thread_lining2.png";
import img4 from "../images/png/led_design.png";
function Main() {
  return (
    <>
      <main className="black_bgc ">
        <section className="position-relative overflow-hidden">
          <div className="container">
            <div className="row align-items-center justify-content-between move">
              <div className="col-7">
                <p className="text-white fw_semibold fs_3xl ">
                  Cursus ligula habitant sed integer.
                </p>
                <div className="position-absolute elipse_div"></div>
                <img className="position-absolute Thread2" src={img3} alt="" />
                <p className="text-white fs_sm fw_normal mb-0">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis viverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus. At ut donec nec aliquet ipsum leo tellus amet lacus.
                  Varius mi urna blandit id magna tellus imperdiet tortor.
                  Volutpat nec vulputate diam tristique facilisi in turpis vel
                  elit.
                </p>
                <button
                  className="text-white fw_semibold fs_md btn_vallet3 mt-4"
                  href=""
                >
                  Learn More
                </button>
              </div>
              <div className="col-5 ">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>

          <img className="position-absolute thread_pos" src={img2} alt="" />
        </section>
        <section className="light_black position-relative p_122">
          <div className="container">
            <div className="row">
              <div className="col-6 ">
                <p className="text-white fs_3xl fw_semibold">How to Buy</p>
                <p className="text-white fs_sm fw_normal">
                  Urna, dictum volutpat augue tortor. Fermentum vulputate
                  convallis v iverra facilisis. Aliquam porttitor sem rhoncus
                  rhoncus, quis. Arcu, ut enim eget pellentesque neque. Nibh
                  pellentesque lobortis etiam sed. Cursus donec porttitor fames
                  tellus.
                </p>
                <div className="mt-5 d-flex align-items-center bg_extralight p-3 radius_46">
                  <div className="d-flex align-items-lg-center justify-content-center ellipse_1 fs_md">
                    1
                  </div>
                  <div>
                    <p className="text-white fs_md fw_semibold ps-2 mb-0">
                      Cras nunc libero ac
                    </p>
                    <p className="fw_normal fs_sm text-white mb-0 ps-2">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center bg_extralight p-3 radius_46">
                  <div className="d-flex align-items-lg-center justify-content-center ellipse_1 fs_md">
                    2
                  </div>
                  <div>
                    <p className="text-white fs_md fw_semibold ps-2 mb-0">
                      Cras nunc libero ac
                    </p>
                    <p className="fw_normal fs_sm text-white mb-0 ps-2">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </div>
                </div>
                <div className="mt-3 d-flex align-items-center bg_extralight p-3 radius_46">
                  <div className="d-flex align-items-lg-center justify-content-center ellipse_1 fs_md">
                    3
                  </div>
                  <div>
                    <p className="text-white fs_md fw_semibold ps-2 mb-0">
                      Cras nunc libero ac
                    </p>
                    <p className="fw_normal fs_sm text-white mb-0 ps-2">
                      Amet, integer et ultrices non viverra dolor dui
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="position-absolute end-0 top-0 p_122"
              src={img4}
              alt=""
            />
          </div>
        </section>
        <section>
          <div className="container mt-5 pt-5">
            <p className="text-white fs_3xl fw_semibold text-center mb-4">
              Tokenomics
            </p>
            <div className="row">
              <div className="col-4 ">
                <div className="card_1 ps-2">
                  <p className="text-white fs_md fw_normal mb-0 pt-3">
                    Liquidity
                  </p>
                  <div className="d-flex ">
                    <div>
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                    <div className="ps_108">
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 ">
                <div className="card_1 ps-2">
                  <p className="text-white fs_md fw_normal mb-0 pt-3">
                    Liquidity
                  </p>
                  <div className="d-flex ">
                    <div>
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                    <div className="ps_108">
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 ">
                <div className="card_1 ps-2">
                  <p className="text-white fs_md fw_normal mb-0 pt-3">
                    Liquidity
                  </p>
                  <div className="d-flex ">
                    <div>
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                    <div className="ps_108">
                      <p className="fw_normal fs_xsm text-white mt-3 mb-0">
                        When Buying
                      </p>
                      <p className="fw_semibold fs_lg clr_orange">3-5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
           
              <table className="w-100 mt-3 ">
                <tr className="">
                  <th className="text-white fs_sm fw_semibold  "></th>
                  <th className="text-white fs_sm fw_semibold  ">Token</th>
                  <th className="text-white fs_sm fw_semibold  ">Percentage</th>
                  <th className="text-white fs_sm fw_semibold  ">
                    Token prize
                  </th>
                  <th className="text-white fs_sm fw_semibold  ">
                    Token prize
                  </th>
                  <th className="text-white fs_sm fw_semibold  ">Amount</th>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
                <tr>
                  <td>Seddigq</td>
                  <td>100000</td>
                  <td>20%</td>
                  <td>58.3</td>
                  <td>12%</td>
                  <td>10% Monthly</td>
                </tr>
              </table>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-5 position-relative">
            <p className="text-center text-white fw_semibold fs_3xl ">
              Roadmap
            </p>
            <div className="line_map">
              <div className="w-50 position-relative end-0 pe-5">
                <div className="position-absolute circle1 circle"></div>
                <p className="text-white fs_xxl fw_semibold text-end">
                  Phase-1
                </p>
                <p className="fs_sm fw_normal text-white text-end ">
                  Massa pellentesque sagittis Aliquam sed in odio. Turpis
                  blandit at interdum Eget tempus nulla tempus arcu.
                </p>
              </div>
              <div className="w-50  position-relative start-50 ps-5 ">
                <div className="position-absolute circle2 circle"></div>
                <p className="text-white fs_xxl fw_semibold ">Phase-2</p>
                <p className="fs_sm fw_normal text-white  ">
                  Massa pellentesque sagittis Aliquam sed in odio. Turpis
                  blandit at interdum Eget tempus nulla tempus arcu.
                </p>
              </div>
              <div className="w-50 position-relative end-0 pe-5">
                <div className="position-absolute circle1 circle"></div>
                <p className="text-white fs_xxl fw_semibold text-end">
                  Phase-3
                </p>
                <p className="fs_sm fw_normal text-white text-end ">
                  Massa pellentesque sagittis Aliquam sed in odio. Turpis
                  blandit at interdum Eget tempus nulla tempus arcu.
                </p>
              </div>
              <div className="w-50  position-relative start-50 ps-5">
                <div className="position-absolute circle2 circle"></div>
                <p className="text-white fs_xxl fw_semibold ">Phase-4</p>
                <p className="fs_sm fw_normal text-white  ">
                  Massa pellentesque sagittis Aliquam sed in odio. Turpis
                  blandit at interdum Eget tempus nulla tempus arcu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
