import Link from "next/link";

export default function Banner2() {
  return (
    <>
      <section className="banner-area-two parallax">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-10 order-0 order-lg-2">
              <div className="banner-img-wrap ">
                {/* <img src="/assets/img/banner/banner1.jpg" alt="" /> */}

                <iframe
                  src="https://drive.google.com/file/d/1D05qy3hTOZR7H10nLyNb9A-5nn8BGVV3/preview"
                  width="100%"
                  height="300"
                  allow="autoplay"
                ></iframe>

                <div className="overly-text">
                  <h2 className="title">Roofing Services</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-content-two">
                <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                  Smart Solutions
                </span>
                <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                  Central Roofing Services and Consulting
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Invest in good roofing solutions. If you care about comfort
                  and are looking for protection for your home value
                </p>
                <Link
                  href="/project"
                  className="btn wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-shape-wrap">
          <ul className="list-wrap">
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape01.png"
                alt=""
                className="layer"
                data-depth="0.3"
              />
            </li>
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape02.png"
                alt=""
                className="layer"
                data-depth="0.3"
              />
            </li>
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape03.png"
                alt=""
                className="layer"
                data-depth="0.1"
              />
            </li>
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape04.png"
                alt=""
                className="layer"
                data-depth="0.2"
              />
            </li>
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape05.png"
                alt=""
                className="wow fadeInLeft"
                data-wow-delay=".4s"
              />
            </li>
            <li>
              <img src="/assets/img/banner/h3_banner_shape06.png" alt="" />
            </li>
            <li>
              <img
                src="/assets/img/banner/h3_banner_shape07.png"
                alt=""
                className="rotateme"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
