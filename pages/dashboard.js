import Layout from "@/components/layout/Layout";
import React from "react";

export default function dashboard({
  contactData,
  appointmentData,
  subscribeData,
}) {
  return (
    <>
      <Layout>
        <div style={{ textAlign: "center", margin: "100px 0" }}>
          <div style={{ marginBottom: "30px" }}>
            <h2>All Contactus Message</h2>
            {contactData.length > 0 ? (
              contactData?.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    border: "1px solid red",
                    width: "50%",
                    margin: "10px auto",
                  }}
                >
                  <p style={{ fontWeight: "600" }}>
                    First Name: <span>{item?.firstName}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Last Name: <span>{item?.lastName}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Email: <span>{item?.email}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Phone Number: <span>{item?.phoneNumber}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Subject: <span>{item?.subject}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Message: <span>{item?.message}</span>
                  </p>
                </div>
              ))
            ) : (
              <div>No ContactUs Message</div>
            )}
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h2>All Appointment</h2>
            {appointmentData.length > 0 ? (
              appointmentData?.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    border: "1px solid red",
                    width: "50%",
                    margin: "10px auto",
                  }}
                >
                  <p style={{ fontWeight: "600" }}>
                    Name: <span>{item?.name}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Phone: <span>{item?.phone}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Location: <span>{item?.location}</span>
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    Message: <span>{item?.message}</span>
                  </p>
                </div>
              ))
            ) : (
              <div>No Appointment Data</div>
            )}
          </div>

          <div>
            <h2>All Subscriber</h2>
            {subscribeData.length > 0 ? (
              subscribeData?.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    border: "1px solid red",
                    width: "50%",
                    margin: "10px auto",
                  }}
                >
                  <p style={{ fontWeight: "600" }}>
                    Email: <span>{item?.email}</span>
                  </p>
                </div>
              ))
            ) : (
              <div>No Subscriber</div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const contactRes = await fetch("http://localhost:8000/api/contactUs");
  const contactData = await contactRes.json();

  const appointmentRes = await fetch(
    "http://localhost:8000/api/bookAppointment"
  );
  const appointmentData = await appointmentRes.json();

  const subscribeRes = await fetch("http://localhost:8000/api/subscribe");
  const subscribeData = await subscribeRes.json();

  return {
    props: {
      contactData,
      appointmentData,
      subscribeData,
    },
  };
}
