import Link from "next/link";
// import project1 from "../../public/assets/img/project/new/new1.PNG";
// import project2 from "../../public/assets/img/project/new/new2.PNG";
// import project3 from "../../public/assets/img/project/new/new3.PNG";
// import project4 from "../../public/assets/img/project/new/new4.PNG";
// import project5 from "../../public/assets/img/project/new/new5.PNG";
// import project6 from "../../public/assets/img/project/new/new6.PNG";

export default function Project3() {
  return (
    <>
      <section className="project-area-three">
        <div
          className="project-bg-two"
          data-background="/assets/img/bg/area_bg03.jpg"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center white-title mb-60 tg-heading-subheading animation-style3">
                <span className="sub-title tg-element-title">Our Projects</span>
                <h2 className="title tg-element-title">Our Latest Projects</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="view-all-btn text-end mb-50">
                <Link href="/project" className="btn">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new1.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new2.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new3.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new4.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new5.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Link href="/project-details">
                    <img
                      style={{ objectFit: "cover" }}
                      src="/assets/img/project/new/new6.PNG"
                      height={417}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="project-content-two">
                  <span>Product Design</span>
                  <h2 className="title">
                    <Link href="/project-details">Web Application</Link>
                  </h2>
                  <Link href="/project-details" className="link-btn">
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="learn-more-btn text-center mt-25">
            <Link href="/project" className="btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
