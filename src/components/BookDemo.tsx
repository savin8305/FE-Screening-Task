import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles";
import CustomModal from "../utils/CustomMadal";
import About from "./About";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

interface Doctor {
  name: string;
  expertise: string;
  city: string;
}

const SignIn: FC<Props> = ({ setRoute, setOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [age, setAge] = useState("");
  const [company, setCompany] = useState("");
  const [chiefComplaints, setChiefComplaints] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [message, setMessage] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("");

  // Dummy data for 20 doctors
  const dummyDoctors: Doctor[] = Array.from({ length: 20 }, (_, index) => ({
    name: `Doctor ${index + 1}`,
    expertise: `Expertise ${index + 1}`,
    city: `City ${index + 1}`,
  }));

  useEffect(() => {
    // Fetch available doctors from the API
    // For demo purposes, you can use the dummyDoctors data
    setDoctors(dummyDoctors);
  }, []);

  // useState hooks for modal and route state with unique names
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoute, setModalRoute] = useState<string | null>(null);
  const [modalActiveItem, setModalActiveItem] = useState<number | null>(null);

  const handleOpenModal = (newRoute: string, newActiveItem: number) => {
    setModalRoute(newRoute);
    setModalActiveItem(newActiveItem);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalRoute(null);
    setModalActiveItem(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Your healthcare booking logic here
    console.log("Healthcare booking form submitted");
    console.log("Selected City:", selectedCity);
    console.log("Selected Expertise:", selectedExpertise);

    // 1. Check if age is less than 40
    if (parseInt(age, 10) < 40) {
      console.log(
        "Patient is less than 40 years old, no need to check for previous experience with physiotherapy"
      );
    } else {
      console.log(
        "Patient is 40 years old or older, check for previous experience with physiotherapy:",
        previousExperience
      );
    }

    // 2. Check if a city URL parameter is provided and override the selected city
    const urlParams = new URLSearchParams(window.location.search);
    const urlCity = urlParams.get("city");
    if (urlCity) {
      console.log(
        "City URL parameter found, overriding selected city:",
        urlCity
      );
      setSelectedCity(urlCity);
    }

    setOpen(false);
  };

  return (
    <div className="projects w-full max-w-md mx-auto p-4 mt-10 rounded-md">
      <h1 className="text-sm md:text-lg lg:text-xl font-bold mb-3 md:mb-4 text-center text-blue-600">
        Health Care Booking Demo
      </h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex space-x-2">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className={`${styles.input} flex-grow rounded-md border-b focus:outline-none focus:border-blue-500`}
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className={`${styles.input} flex-grow rounded-md border-b focus:outline-none focus:border-blue-500`}
          />
        </div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        />
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        />
        <input
          type="date"
          name="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          placeholder="Appointment Date"
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        />
        <div className="flex space-x-2">
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className={`${styles.input} flex-grow rounded-md border-b focus:outline-none focus:border-blue-500`}
          />
          <input
            type="text"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            className={`${styles.input} flex-grow rounded-md border-b focus:outline-none focus:border-blue-500`}
          />
        </div>
        <input
          type="text"
          name="chiefComplaints"
          value={chiefComplaints}
          onChange={(e) => setChiefComplaints(e.target.value)}
          placeholder="Chief Complaints"
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        />
        <input
          type="text"
          name="previousExperience"
          value={previousExperience}
          onChange={(e) => setPreviousExperience(e.target.value)}
          placeholder="Previous Experience with Physiotherapy"
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        />
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        >
          <option value="" disabled>
            Select City
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.city} value={doctor.city}>
              {doctor.city}
            </option>
          ))}
        </select>
        <select
          value={selectedExpertise}
          onChange={(e) => setSelectedExpertise(e.target.value)}
          className={`${styles.input} w-full rounded-md border-b focus:outline-none focus:border-blue-500`}
        >
          <option value="" disabled>
            Select Expertise
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.expertise} value={doctor.expertise}>
              {doctor.expertise}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className={`${styles.button} w-full bg-blue-600 text-white py-2 rounded-md transition duration-300 hover:bg-blue-700`}
        >
          Book Appointment
        </button>
      </form>
      {modalRoute === "About" && isModalOpen && (
        <CustomModal
          open={isModalOpen}
          setOpen={handleCloseModal}
          setRoute={setModalRoute}
          component={About}
        />
      )}
    </div>
  );
};

export default SignIn;
