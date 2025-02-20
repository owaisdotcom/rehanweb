"use client"; 
import { useState } from "react"; 
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary"; 

const ContactForm = () => {   
  const [formData, setFormData] = useState({     
    fullName: "",     
    email: "",     
    message: "",   
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");  

  const handleChange = (e) => {     
    setFormData({ ...formData, [e.target.name]: e.target.value });     
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change   
  };

  const validateFields = () => {     
    const newErrors = {};     
    if (!formData.fullName) newErrors.fullName = "Full Name is required";     
    if (!formData.email) newErrors.email = "Email is required";     
    if (!formData.message) newErrors.message = "Message is required";     
    return newErrors;   
  };

  const handleSubmit = async (e) => {     
    e.preventDefault();     
    const validationErrors = validateFields();     
    if (Object.keys(validationErrors).length > 0) {       
      setErrors(validationErrors);       
      return;     
    }

    setLoading(true);     
    setResponseMessage("");      

    try {       
      const response = await fetch("http://localhost:4000/submit-form", {         
        method: "POST",         
        headers: { "Content-Type": "application/json" },         
        body: JSON.stringify(formData),       
      });

      const result = await response.json();       
      if (response.ok) {         
        setResponseMessage("Your inquiry has been submitted successfully!");         
        setFormData({ fullName: "", email: "", message: "" });       
      } else {         
        setResponseMessage(result.message || "Submission failed. Please try again.");       
      }     
    } catch (error) {       
      setResponseMessage("An error occurred. Please try again later.");     
    } finally {       
      setLoading(false);     
    }   
  };

  const handleClickExampleInquiry = () => { 
    setFormData({
      fullName: "Ahmed Raza", 
      email: "ahmed.raza@example.com", 
      message: "I am interested in your premium leather gloves and jackets collection. Could you please provide details about the available sizes, colors, and pricing? Also, do you offer custom engraving or bulk discounts? Looking forward to your response.",
    });
  };

  return (
    <section>
      <div className="container pb-10">
        <form
          className="p-5 border dark:border-transparent dark:shadow-container"
          onSubmit={handleSubmit}
        >
          <h4 className="text-xl font-bold mb-4">Drop Your Inquiry</h4>
          <p className="text-sm text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>

          {responseMessage && (
            <div className="mb-4 text-green-600">{responseMessage}</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}

            <input
              name="email"
              type="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>

          <textarea
            name="message"
            placeholder="Message *"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 rounded w-full mt-4"
            rows="4"
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          <div className="mt-4 flex gap-4">
            <ButtonPrimary type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </ButtonPrimary>

            {/* Button to auto-fill form with example inquiry */}
            <button
              type="button"
              onClick={handleClickExampleInquiry}
              className="bg-yellow1 text-white px-3 py-1 rounded-lg hover:bg-yellow transition-all"
            >
              Example Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
