import React from 'react';
import { STORE_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 pb-28 md:pb-10">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-white text-xl font-bold mb-2">{STORE_INFO.name}</h3>
            <p className="mb-1">{STORE_INFO.address}</p>
            <p>Tel: {STORE_INFO.phoneFormatted}</p>
          </div>
          <div>
            <a 
              href={STORE_INFO.blogUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-gray-600 px-4 py-2 rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              공식 블로그 방문하기
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;