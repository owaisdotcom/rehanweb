


const WhatsAppFloatingButton = () => {
  const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number

  return (
    <a
    href={`https://wa.me/${phoneNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 md:bottom-3 md:right-4 bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110 hover:bg-green-600 z-medium"
  >
    <i className="icofont-whatsapp text-3xl md:text-4xl"></i>
  
    {/* Fading Effect */}
    <span className="whatsapp-blink"></span>
  </a>
  
  
  );
};

export default WhatsAppFloatingButton;
