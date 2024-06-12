import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    month: '',
    day: '',
    year: '',
    gender: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    mobileNumber: '',
    phoneNumber: '',
    workNumber: '',
    company: '',
    course: '',
    comments: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-start">Registration Form</h1>
        <p className="text-center mb-6">Fill out the form carefully for registration</p>
        <form onSubmit={handleSubmit}>
          {/* Student Name Section */}
          <div className="bg-blue-50 p-4 rounded mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="firstName">Student Name</label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full px-3 py-2 border rounded"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="middleName"
                name="middleName"
                placeholder="Middle Name"
                className="w-full px-3 py-2 border rounded"
                value={formData.middleName}
                onChange={handleChange}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-3 py-2 border rounded"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Birth Date and Gender Section */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="month">Birth Date</label>
              <div className="flex space-x-2">
                <select
                  id="month"
                  name="month"
                  className="w-full px-3 py-2 border rounded"
                  value={formData.month}
                  onChange={handleChange}
                  required
                >
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  id="day"
                  name="day"
                  className="w-full px-3 py-2 border rounded"
                  value={formData.day}
                  onChange={handleChange}
                  required
                >
                  <option value="">Day</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  id="year"
                  name="year"
                  className="w-full px-3 py-2 border rounded"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Year</option>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={2024 - i}>{2024 - i}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="gender">Gender</label>
              <select
                id="gender"
                name="gender"
                className="w-full px-3 py-2 border rounded"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address1">Address</label>
            <input
              type="text"
              id="address1"
              name="address1"
              placeholder="Street Address"
              className="w-full px-3 py-2 border rounded mb-2"
              value={formData.address1}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="address2"
              name="address2"
              placeholder="Street Address Line 2"
              className="w-full px-3 py-2 border rounded mb-2"
              value={formData.address2}
              onChange={handleChange}
            />
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                className="w-full px-3 py-2 border rounded"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State / Province"
                className="w-full px-3 py-2 border rounded"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Postal / Zip Code"
              className="w-full px-3 py-2 border rounded"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Contact Information Section */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Student E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ex: myname@example.com"
              className="w-full px-3 py-2 border rounded mb-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex space-x-2 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="(000) 000-0000"
                className="w-full px-3 py-2 border rounded"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(000) 000-0000"
                className="w-full px-3 py-2 border rounded"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="workNumber">Work Number</label>
            <input
              type="tel"
              id="workNumber"
              name="workNumber"
              placeholder="(000) 000-0000"
              className="w-full px-3 py-2 border rounded"
              value={formData.workNumber}
              onChange={handleChange}
            />
          </div>

          {/* New Fields: Company, Course, Comments */}
          <div className="flex space-x-2 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="w-full px-3 py-2 border rounded"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2" htmlFor="course">Courses</label>
              <select
                id="course"
                name="course"
                className="w-full px-3 py-2 border rounded"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Please Select</option>
                <option value="Course 1">Course 1</option>
                <option value="Course 2">Course 2</option>
                <option value="Course 3">Course 3</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="comments">Additional Comments</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Enter any additional comments here"
              className="w-full px-3 py-2 border rounded"
              value={formData.comments}
              onChange={handleChange}
              rows={5}
            />
          </div>

          <button type="submit" className="w-[50%] ml-36 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
