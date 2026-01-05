import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Muhammad Dhiyaul Atha | Web Developer & Mahasiswa Teknik Informatika",
  description = "Portofolio resmi Muhammad Dhiyaul Atha, mahasiswa Teknik Informatika dan web developer. Berisi proyek, pengalaman, dan karya digital.",
  keywords = "Muhammad Dhiyaul Atha, web developer, teknik informatika, portfolio developer, react developer, frontend developer",
  ogImage = "/og-image.svg",
  url = "https://mdhiyaulatha.me/"
}) {
  // Pastikan ogImage absolute agar tidak bergantung pada context router
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `https://mdhiyaulatha.me${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}


SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
