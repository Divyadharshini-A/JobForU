import React, { useState } from 'react';

const Application = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setcity] = useState('');
  const [interviewDetails, setInterviewDetails] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation (optional)
    if (!firstName || !lastName || !email || !phoneNumber) {
      alert('Please fill out all required fields.');
      return;
    }

    // Submit form data (e.g., send to backend API)
    console.log('Submitted data:', {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      interviewDetails,
    });

    // Clear form after submission (optional)
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setcity('');
    setInterviewDetails('');

  };
  return (
    <div className="flex justify-center">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <h2 className="text-2xl font-bold">Job Application Form</h2>
      <p className="text-gray-600">Please fill out the form below to submit your job application!</p>
      <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
        <label htmlFor="firstName" className="col-span-full text-gray-700">
          First Name *
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          maxLength={50}
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
        />
      </div>
      <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
        <label htmlFor="lastName" className="col-span-full text-gray-700">
          Last Name *
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
        />
      </div>
      <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
        <label htmlFor="email" className="col-span-full text-gray-700">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
        />
      </div>
      <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
        <label htmlFor="phoneNumber" className="col-span-full text-gray-700">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
        />
      </div>
      <div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
        <label htmlFor="city" className="col-span-full text-gray-700">
          City *
        </label>
        <input type="text" id="city" name="pcity"
  value={city}
  defaultValue={"Web Developer"}
  onChange={(e) => setcity(e.target.value)}
  required
  className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 w-full"
/>
</div>
<div className="form-group grid grid-cols-1 lg:grid-cols-2 gap-4">
  <label htmlFor="interviewDetails" className="col-span-full text-gray-700">
    Preferred Interview Details *
  </label>
  <select
    id="interviewDetails"
    name="interviewDetails"
    value={interviewDetails}
    onChange={(e) => setInterviewDetails(e.target.value)}
    required
    className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
  >
    <option value="">Select Preferred Interview Mode</option>
    <option value="Video Call">Virtual Meet</option>
    <option value="In-person">In-person</option>
  </select>
</div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit Application
      </button>
    </form>
  </div>
  

  
  
  )
}

export default Application