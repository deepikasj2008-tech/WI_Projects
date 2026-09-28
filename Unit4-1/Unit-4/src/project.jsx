import { useState } from "react";
import "./Project.css";

function Project() {

  const [form, setForm] = useState({
    username: "",
    name: "",
    aadhaarName: "",
    dob: "",
    gender: "",
    email: "",
    countryCode: "+91",
    mobile: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    temporaryAddress: "",
    city: "",
    state: "",
    pincode: "",
    nationality: "",
    occupation: "",
    hobbies: "",
    photo: null,
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setForm({
      ...form,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files[0]
          : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.username === "") {
      alert("Enter username");
      return;
    }

    if (form.name === "") {
      alert("Enter name");
      return;
    }

    if (form.aadhaarName === "") {
      alert("Enter Aadhaar name");
      return;
    }

    // Username and Aadhaar name validation
    if (
      form.username.trim().toLowerCase() !==
      form.aadhaarName.trim().toLowerCase()
    ) {
      alert("Invalid! Username and Aadhaar Name must be same.");
      return;
    }

    if (form.email === "") {
      alert("Enter email");
      return;
    }

    // Mobile number validation
    if (!/^[0-9]{10}$/.test(form.mobile)) {
      alert("Mobile number must contain exactly 10 digits");
      return;
    }

    // Password validation
    if (form.password.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    if (form.permanentAddress === "") {
      alert("Enter permanent address");
      return;
    }

    if (form.city === "") {
      alert("Enter city");
      return;
    }

    if (form.state === "") {
      alert("Enter state");
      return;
    }

    // Pincode validation
    if (!/^[0-9]{6}$/.test(form.pincode)) {
      alert("Pincode must contain 6 digits");
      return;
    }

    // Photo validation
    if (!form.photo) {
      alert("Please upload photo");
      return;
    }

    if (form.photo.size > 2 * 1024 * 1024) {
      alert("Photo size must be less than 2 MB");
      return;
    }

    if (!form.agree) {
      alert("Please accept the terms and conditions");
      return;
    }

    alert("Form submitted successfully!");
  };

  const handleReset = () => {
    setForm({
      username: "",
      name: "",
      aadhaarName: "",
      dob: "",
      gender: "",
      email: "",
      countryCode: "+91",
      mobile: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      temporaryAddress: "",
      city: "",
      state: "",
      pincode: "",
      nationality: "",
      occupation: "",
      hobbies: "",
      photo: null,
      agree: false
    });
  };

  return (
    <div className="page">

      <div className="form-box">

        <h1>Registration Form</h1>

        <p>
          Fields marked with <b>**</b> are mandatory
        </p>

        <form onSubmit={handleSubmit}>

          <label>1. Username **</label>
          <input
            id="username"
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          <label>2. Name **</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />

          <label>3. Aadhaar Name **</label>
          <input
            type="text"
            name="aadhaarName"
            value={form.aadhaarName}
            onChange={handleChange}
            placeholder="Enter Aadhaar name"
          />

          <label>4. Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={form.dob}
            onChange={handleChange}
          />

          <label>5. Gender</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <label>6. Email **</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />

          <label>7. Country Code **</label>
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
          >
            <option value="+91">+91 India</option>
            <option value="+1">+1 USA</option>
            <option value="+44">+44 UK</option>
          </select>

          <label>8. Mobile Number **</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            maxLength="10"
            placeholder="Enter 10 digit number"
          />

          <label>9. New Password **</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />

          <label>10. Confirm Password **</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />

          <label>11. Permanent Address **</label>
          <textarea
            name="permanentAddress"
            value={form.permanentAddress}
            onChange={handleChange}
            placeholder="Enter permanent address"
          />

          <label>12. Temporary Address</label>
          <textarea
            name="temporaryAddress"
            value={form.temporaryAddress}
            onChange={handleChange}
            placeholder="Enter temporary address"
          />

          <label>13. City **</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter city"
          />

          <label>14. State **</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="Enter state"
          />

          <label>15. Pincode **</label>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            maxLength="6"
            placeholder="Enter 6 digit pincode"
          />

          <label>16. Nationality</label>
          <input
            type="text"
            name="nationality"
            value={form.nationality}
            onChange={handleChange}
            placeholder="Enter nationality"
          />

          <label>17. Occupation</label>
          <input
            type="text"
            name="occupation"
            value={form.occupation}
            onChange={handleChange}
            placeholder="Enter occupation"
          />

          <label>18. Hobbies</label>
          <input
            type="text"
            name="hobbies"
            value={form.hobbies}
            onChange={handleChange}
            placeholder="Enter hobbies"
          />

          <label>19. Profile Photo **</label>
          <input
            type="file"
            name="photo"
            accept=".jpg,.jpeg,.png"
            onChange={handleChange}
          />

          <label className="check">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            20. I agree to the terms and conditions **
          </label>

          <div className="buttons">

            <button type="submit">
              Submit
            </button>

            <button
              type="button"
              className="reset"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Project;