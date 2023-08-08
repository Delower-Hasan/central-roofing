import { useState } from "react";
export default function Faq1() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <section
        className="faq-area faq-bg"
        data-background="/assets/img/bg/faq_bg.jpg"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Our Faqs</span>
                <h2 className="title">Have Any Questions Answer?</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-10 order-0 order-xl-2">
              <div className="faq-img-wrap">
                <img
                  src="/assets/img/images/faq_img01.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".4s"
                />
                <img
                  src="/assets/img/images/faq_img02.jpg"
                  alt=""
                  className="wow fadeInRight"
                  data-wow-delay=".2s"
                />
                <div className="overlay-text wow fadeInUp" data-wow-delay=".6s">
                  <h2 className="title">FAQ</h2>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="faq-wrap">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(1)}
                    >
                      <button
                        className={
                          isActive.key == 1
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        What types of roofing services do you offer?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 1
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Central Roofing Systems provides a wide range of
                          roofing services, including roof installations,
                          repairs, replacements, and maintenance for both
                          residential and commercial properties. We specialize
                          in single ply roofing, modified roofing, built-up
                          roofing, metal roofing, vegetative roofing, and
                          specialty metal roofing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(2)}
                    >
                      <button
                        className={
                          isActive.key == 2
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        How experienced is your roofing team?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 2
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Our roofing team comprises highly skilled and
                          experienced professionals with a collective expertise
                          of over 50 years in the industry. They have
                          successfully handled numerous roofing projects of
                          varying complexities, ensuring each job is completed
                          with precision and attention to detail.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(3)}
                    >
                      <button
                        className={
                          isActive.key == 3
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        Are you licensed and insured?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 3
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, Central Roofing Systems is fully licensed and
                          insured. We prioritize the safety of our team,
                          clients, and property during every roofing project,
                          giving you peace of mind knowing you're working with a
                          reputable and responsible roofing company.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(4)}
                    >
                      <button
                        className={
                          isActive.key == 4
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        Do you offer free estimates?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 4
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Absolutely! We provide free estimates for all roofing
                          projects. Our team will assess your roofing needs,
                          discuss your requirements, and provide a detailed
                          estimate with no obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(5)}
                    >
                      <button
                        className={
                          isActive.key == 5
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        What materials do you use for roofing?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 5
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          At Central Roofing Systems, we prioritize quality
                          materials that ensure durable and long-lasting roofs.
                          We source our roofing products from reputable
                          manufacturers, offering a wide selection of materials,
                          styles, and colors to suit your preferences and
                          budget.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(6)}
                    >
                      <button
                        className={
                          isActive.key == 6
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        How do I know if my roof needs repair or replacement?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 6
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          If you notice signs of leaks, water stains, missing
                          shingles, or visible damage to your roof, it may be
                          time for repairs or a replacement. Our experts can
                          conduct a thorough inspection and advise you on the
                          best course of action to ensure your roof's integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(7)}
                    >
                      <button
                        className={
                          isActive.key == 7
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        Are you environmentally friendly?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 7
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, Central Roofing Systems is committed to
                          sustainability. We actively seek eco-friendly roofing
                          solutions and materials that reduce environmental
                          impact while providing energy-efficient and green
                          roofing options.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(8)}
                    >
                      <button
                        className={
                          isActive.key == 8
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        Can you handle emergency roofing repairs?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 8
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Absolutely! We understand that roofing emergencies can
                          happen at any time. Our team is available to address
                          urgent repair needs promptly and efficiently to
                          protect your property and belongings.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(9)}
                    >
                      <button
                        className={
                          isActive.key == 9
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        Do you offer warranties on your roofing services?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 9
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we stand behind the quality of our work and the
                          materials we use. Central Roofing Systems offers
                          warranties on our roofing services to provide you with
                          added protection and peace of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2
                      className="accordion-header"
                      onClick={() => handleToggle(10)}
                    >
                      <button
                        className={
                          isActive.key == 10
                            ? "accordion-button"
                            : "accordion-button collapsed "
                        }
                      >
                        How can I schedule a consultation or request roofing
                        services?
                      </button>
                    </h2>
                    <div
                      className={
                        isActive.key == 10
                          ? "accordion-collapse collapse  show"
                          : "accordion-collapse collapse "
                      }
                    >
                      <div className="accordion-body">
                        <p>
                          Scheduling a consultation or requesting our roofing
                          services is easy! Simply contact us via phone or
                          email, and our friendly team will be happy to assist
                          you. We'll discuss your roofing needs, answer any
                          questions you have, and guide you through the process.{" "}
                          <br /> <br />
                          Have a question that's not listed here? Feel free to
                          reach out to us, and we'll be glad to provide you with
                          the information you need. At Central Roofing Systems,
                          we are here to be your trusted roofing partner!{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
