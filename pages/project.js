import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Project() {
  return (
    <>
      <Layout breadcrumbTitle="Projects">
        <section className="inner-project-area pt-115 pb-90">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Our Projects</span>
                  <h2 className="title">Our Latest Projects</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <Link href="/project-details">
                        <img
                          height={400}
                          style={{ objectFit: "cover" }}
                          src="/assets/img/project/new/red/red1.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">
                        {/* <Link href="/project-details">Web Application</Link> */}
                        Project 1
                      </h2>
                      {/* <Link href="/project-details" className="link-btn"> */}
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                      {/* </Link> */}
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#bluemodal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      {/* <Link href="/project-details"> */}
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/blue/blue1.jpg"
                        alt=""
                      />
                      {/* </Link> */}
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">Project 2</h2>
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#brownmodal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/new3.PNG"
                        alt=""
                      />
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">Project 3</h2>
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#blackmodal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/black/black1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">Project 4</h2>
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#greenmodal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/green/green1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">Project 5</h2>
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <button
                  type="button"
                  class="border-0 bg-transparent"
                  data-bs-toggle="modal"
                  data-bs-target="#orangemodal"
                >
                  <div className="project-item-two">
                    <div className="project-thumb-two">
                      <img
                        height={400}
                        style={{ objectFit: "cover" }}
                        src="/assets/img/project/new/orange/org1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="project-content-two">
                      <span>Product Design</span>
                      <h2 className="title">Project 6</h2>
                      <div className="link-btn">
                        <i className="fas fa-arrow-right" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* red modal */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleInterval"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/red/red1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/red/red2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red3.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red4.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red5.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red6.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red7.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red8.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red9.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src="/assets/img/project/new/red/red10.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blue modal */}
        <div
          class="modal fade"
          id="bluemodal"
          tabindex="-1"
          aria-labelledby="bluemodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleIntervalblue"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/blue/blue1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/blue/blue2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIntervalblue"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIntervalblue"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* brown modal */}
        <div
          class="modal fade"
          id="brownmodal"
          tabindex="-1"
          aria-labelledby="brownmodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleIntervalbrown"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/brown/brown1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/brown/brown2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img
                        src="/assets/img/project/new/brown/brown3.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>

                    <div class="carousel-item" data-bs-interval="5000">
                      <img
                        src="/assets/img/project/new/brown/brown5.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                      <img
                        src="/assets/img/project/new/brown/brown6.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="7000">
                      <img
                        src="/assets/img/project/new/brown/brown7.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="8000">
                      <img
                        src="/assets/img/project/new/brown/brown8.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="9000">
                      <img
                        src="/assets/img/project/new/brown/brown9.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/brown/brown10.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIntervalbrown"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIntervalbrown"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* black modal */}
        <div
          class="modal fade"
          id="blackmodal"
          tabindex="-1"
          aria-labelledby="blackmodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleIntervalblack"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/black/black1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/black/black2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img
                        src="/assets/img/project/new/black/black3.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>

                    <div class="carousel-item" data-bs-interval="4000">
                      <img
                        src="/assets/img/project/new/black/black4.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIntervalblack"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIntervalblack"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* green modal */}
        <div
          class="modal fade"
          id="greenmodal"
          tabindex="-1"
          aria-labelledby="greenmodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleIntervalgreen"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/green/green1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/green/green2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img
                        src="/assets/img/project/new/green/green3.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>

                    <div class="carousel-item" data-bs-interval="4000">
                      <img
                        src="/assets/img/project/new/green/green4.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                      <img
                        src="/assets/img/project/new/green/green5.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIntervalgreen"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIntervalgreen"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* orange modal */}
        <div
          class="modal fade"
          id="orangemodal"
          tabindex="-1"
          aria-labelledby="orangemodalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog  modal-lg">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <div class="modal-body p-0">
                <div
                  id="carouselExampleIntervalorange"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                      <img
                        src="/assets/img/project/new/orange/org1.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img
                        src="/assets/img/project/new/orange/org2.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                      <img
                        src="/assets/img/project/new/orange/org3.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>

                    <div class="carousel-item" data-bs-interval="4000">
                      <img
                        src="/assets/img/project/new/orange/org4.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                      <img
                        src="/assets/img/project/new/orange/org5.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="6000">
                      <img
                        src="/assets/img/project/new/orange/org6.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="7000">
                      <img
                        src="/assets/img/project/new/orange/org7.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="8000">
                      <img
                        src="/assets/img/project/new/orange/org8.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item" data-bs-interval="9000">
                      <img
                        src="/assets/img/project/new/orange/org9.jpg"
                        class="d-block w-100"
                        height={450}
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIntervalorange"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIntervalorange"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
