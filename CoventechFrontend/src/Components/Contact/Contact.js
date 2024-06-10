import React, { forwardRef, useState } from 'react';
import Heading from '../../UI/Heading';
import MapboxMap from './GoogleMap';
import loadinggif from '../../assets/loader.gif'; 

const ContactUs = () => {
  const[isSent , setisSent] = useState(false);
  const[isloading , setisloading] = useState(false);
  const [formData, setFormData] = useState({
      Name: '',
      Email: '',
      Subject: '',
      message: '',
    });
    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setisloading(true);
    
      try {
        const response = await fetch('https://co-ventech.com/', {  // Updated to local backend URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        console.log(formData);
    
        const data = await response.json();
        console.log("response:", data);
    
        if (response.ok) {
          console.log('Form submitted successfully');
          setisSent(true); // Set state to indicate the message is sent
          setisloading(false);
          setFormData({ Name: '', Subject: '', Email: '', message: '' });
        } else {
          console.error('Error submitting form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error.message);
      }
    };    
    
  return (
    <div className="flex items-center mt-10 border border-primary w-[90%] mx-auto rounded-lg shadow-2xl p-6 bg-white " id='Contact'>
      {/* First column with contact form */}
      <div className="max-w-md w-full mx-4">
      <Heading heading = "Connect With Us" />
      <form onSubmit={handleSubmit} >
        <div className="grid grid-cols-2 gap-4 mt-8">
          {/* First Name and Last Name */}
          <div className="col-span-2">
            <div className="flex space-x-4">
              <div className="w-full"> 
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name='Name'
                  value={formData.Name}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Email and Subject */}
          <div className='col-span-2'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='Email'
              value={formData.Email}
              required
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
            />
          </div>
          <div className='col-span-2'>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name='Subject'
              required
              value={formData.Subject}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
            />
          </div>

          {/* Message */}
          <div className="col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name='message'
              value={formData.message}
              required
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 block w-full border-none rounded-md bg-gray-100 focus:ring-opacity-50"
            ></textarea>
          </div>
          {!isSent && !isloading && <button type="submit" className="w-[100%] text-white bg-secondary hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-lg px-4 py-2 xsm:text-sm text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary transition-all duration-500 mt-4 ">Send Message</button>}
          {isloading && !isSent && <img src={loadinggif} width={100} height={100}/>}
          {isSent && <p className='text-secondary'>Message Sent successfully! </p>}
        </div>
        </form>
      </div>

      {/* Second column with map */}
      <div className="w-full mx-4 hidden md:block">
        {/* Replace the following div with your map component */}
        <MapboxMap />
      </div>
    </div>
  );
};

export default ContactUs;