import React, { useState } from 'react';
import Heading from '../../UI/Heading';  // Ensure this component is correctly imported hdbuhe
import MapboxMap from './GoogleMap';     // Ensure this component is correctly imported
import loadingGif from '../../assets/loader.gif';  // Ensure this file path is correct

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const response = await fetch('http://18.191.61.150:5001/', {  // Ensure this URL matches your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsSent(true);
        setFormData({ Name: '', Email: '', Subject: '', Message: '' }); // Clear the form
      } else {
        throw new Error(data.message || 'Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsLoading(false);
  };
  
  return (
    <div className="flex flex-wrap justify-center mt-10 border border-primary max-w-4xl mx-auto rounded-lg shadow-2xl p-6 bg-white">
      <div className="flex-1 max-w-md px-4">
        <Heading heading="Connect With Us" />
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mt-8">
            <TextInput label="Full Name" name="Name" value={formData.Name} onChange={handleChange} />
            <TextInput type="email" label="Email" name="Email" value={formData.Email} onChange={handleChange} />
            <TextInput label="Subject" name="Subject" value={formData.Subject} onChange={handleChange} />
            <TextArea label="Message" name="Message" value={formData.Message} onChange={handleChange} />

            {!isSent && <SubmitButton isLoading={isLoading} />}
            {isLoading && <img src={loadingGif} width={100} height={100} alt="Loading" />}
            {isSent && <p className='text-secondary'>Message sent successfully!</p>}
          </div>
        </form>
      </div>
      <div className="flex-1 px-4 hidden md:block">
        <MapboxMap />
      </div>
    </div>
  );
};

// Refactored input components for better readability and reusability
const TextInput = ({ label, name, value, onChange, type = 'text' }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
    />
  </div>
);

const TextArea = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      rows="4"
      className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
    />
  </div>
);

const SubmitButton = ({ isLoading }) => (
  <button type="submit" className="w-full text-white bg-secondary hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-lg px-4 py-2 transition-all duration-500 mt-4">
    {isLoading ? 'Sending...' : 'Send Message'}
  </button>
);

export default ContactUs;
