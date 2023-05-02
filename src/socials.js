import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const FacebookIcon = () => {
  return (
    <a href="https://www.facebook.com/ZZPJ.nl" target="_blank">
      <FaFacebook />
    </a>
  );
};

export const InstagramIcon = () => {
  return (
    <a href="https://www.instagram.com/zzpj.nl/" target="_blank">
      <FaInstagram />
    </a>
  );
};

export const LinkedInIcon = () => {
  return (
    <a href="https://www.linkedin.com/company/zzpj-nl/" target="_blank">
      <FaLinkedin />
    </a>
  );
};