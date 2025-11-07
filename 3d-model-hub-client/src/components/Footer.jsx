import React from 'react';

const Footer = () => (
  <footer className="footer p-10 bg-base-300 text-base-content mt-16">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 8-3-3-3 3"/><path d="m11 2-2 2-2-2"/><path d="m21 16 3 3-3 3"/><path d="m11 22 2-2 2 2"/><path d="m8 2-3 3 3 3"/><path d="M2 11h6"/><path d="M2 11v2H2"/><path d="m8 22 3-3-3-3"/><path d="M14 11h6"/><path d="M22 11v2h-6"/><path d="m11.1 6.1 2.8 2.8"/><path d="m6.1 11.1 2.8 2.8"/><path d="m11.1 17.9 2.8-2.8"/><path d="m17.9 11.1-2.8-2.8"/></svg>
      <p className="text-lg font-bold">3D Model Hub</p>
      <p>Providing high-quality 3D assets since 2025.</p>
    </div> 
    <div>
      <span className="footer-title">Services</span> 
      <a className="link link-hover">Upload Models</a>
      <a className="link link-hover">Browse Models</a>
      <a className="link link-hover">Marketplace</a>
      <a className="link link-hover">Community</a>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
    </div> 
    <div>
      <span className="footer-title">Legal</span> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
    </div>
  </footer>
);

export default Footer;