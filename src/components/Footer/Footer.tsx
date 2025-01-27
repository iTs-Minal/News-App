

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-1xl">
          © {new Date().getFullYear()} News.app All rights reserved.
        </p>
        <p className="text-xs mt-4">
         Created by Minal Pudasainee
        </p>
      </div>
    </footer>
  );
};

export default Footer;

