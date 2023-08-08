import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const phoneNumber = form.phoneNumber.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    };

    fetch("http://localhost:8000/api/contactUs/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((responsedata) => {
        if (responsedata.status === 200) {
          alert("Thanks for your message");
          router.push("/");
        }
      });
  };
  return (
    <>
      <Layout breadcrumbTitle="Contact Us">
        <section className="contact-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div
                  className="contact-form-wrap"
                  data-background="/assets/img/images/contact_form_bg.jpg"
                >
                  <h2 className="title">Contact With Us</h2>
                  <p>
                    Send us a message and we' ll respond as soon as possible
                  </p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="firstName"
                            type="text"
                            placeholder="First Name*"
                            name="firstName"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name*"
                            name="lastName"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="email"
                            type="email"
                            placeholder="Email Address*"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number*"
                            name="phoneNumber"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-grp">
                      <input
                        id="subject"
                        type="text"
                        placeholder="Subject"
                        name="subject"
                      />
                    </div>
                    <div className="form-grp">
                      <textarea
                        id="message"
                        placeholder="Your Message here"
                        name="message"
                        required
                      />
                    </div>
                    <button className="btn" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-6 col-lg-10">
                <div className="contact-info-wrap">
                  <h2 className="title">Need Any Help?</h2>
                  <p>
                    Call us or message and we' ll respond as soon as possible
                  </p>
                  <ul className="list-wrap">
                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-phone-alt" />
                        </div>
                        <div className="content">
                          <Link href="tel:0242867618">+(233) 24 286 7618</Link>
                          <Link href="tel:0242227018">+(233) 24 222 7018 </Link>
                          <Link href="tel:0277440550">+(233) 27 744 0550</Link>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="contact-info-item">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <p>
                            Accra Cape Highway Factory Breku Akotsi-Winneba
                            <br />
                            GPS Address: CG-0069-872 <br />
                            Showroom: Kasoa -- Ofaakor <br />
                            Showroom: Takoradi -- K. Junctuon
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* contact-map */}
                <div id="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                    height={570}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                {/* contact-map-end */}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
