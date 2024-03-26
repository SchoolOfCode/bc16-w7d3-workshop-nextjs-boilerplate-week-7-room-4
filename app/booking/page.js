export default function Page() {
  return (
    <>
      <div className="booking-title">
        <h2>Design Booking</h2>
      </div>
      <form>
        <p>Personal Information</p>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text"></input>
          <label htmlFor="postcode">Postcode</label>
          <input id="postcode" type="text"></input>
          <label htmlFor="house">House/Flat Number and Street Name</label>
          <input id="house" type="text"></input>
          <label htmlFor="city">City</label>
          <input id="city" type="text"></input>
        </div>
        <p>Contact Information</p>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input id="phoneNumber" type="text"></input>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="text"></input>
        </div>
        <button type="submit">Request Design Consultation</button>
      </form>
    </>
  );
}
