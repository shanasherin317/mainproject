import { useState } from 'react';
import { successToast } from '../../toastify';

const BuyNowForm = () => {
  successToast("Seize the moment, buy now!")
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      cardNumber: '',
      expDate: '',
      cvv: ''
    });
  };

  return (
    <div className="flex justify-center items-center h-auto bg-gray-100">
      <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4 md:w-1/2 lg:w-1/3">
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="email@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            placeholder="Address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            placeholder="City"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
            placeholder="State"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="zip">ZIP Code:</label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            className="form-input"
            placeholder="10001"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="form-input"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="expDate">Expiry Date:</label>
          <input
            type="text"
            name="expDate"
            id="expDate"
            value={formData.expDate}
            onChange={handleChange}
            className="form-input"
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#944E63] text-sm font-bold mb-2" htmlFor="cvv">CVV:</label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="form-input"
            placeholder="123"
            required
          />
        </div>
        <div className="">
          <button type="submit" className="bg-[#944E63] text-white font-bold py-2 px-4 rounded hover:bg-[#B47B84]">Buy Now</button>
        </div>
      </form>
    </div>
  );
};

export default BuyNowForm;
