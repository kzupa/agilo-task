import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight pt-5 border-t border-gray-100 bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-center px-4">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Agilo medusa store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;