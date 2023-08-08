export default function Appointment2() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const message = form.message.value;

    const data = {
      name,
      phone,
      location,
      message,
    };

    fetch("http://localhost:8000/api/bookAppointment/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((responseData) => {
        if (responseData.status === 200) {
          alert("Appointment booked successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <section className="appointment-area-two pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="appointment-inner-two tg-heading-subheading animation-style3"
                data-background="/assets/img/bg/appointment_bg.jpg"
              >
                <h2 className="title tg-element-title">
                  Book Your Appointment
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input type="text" placeholder="Phone" name="phone" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-grp">
                        <input
                          type="text"
                          placeholder="Location"
                          name="location"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="form-grp">
                        <textarea name="message" placeholder="Message" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <button type="submit" className="btn">
                      Book an Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
