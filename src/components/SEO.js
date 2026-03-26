import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Muhammad Dhiyaul Atha | Web Developer & Mahasiswa Teknik Informatika",
  description = "Portofolio resmi Muhammad Dhiyaul Atha, mahasiswa Teknik Informatika dan web developer. Berisi proyek, pengalaman, dan karya digital.",
  keywords = "Muhammad Dhiyaul Atha, web developer, Backend developer, teknik informatika, portfolio developer, Laravel developer, full stack developer, Atha",
  ogImage = "/og-img.svg",
  url = "https://mdhiyaulatha.me/",
  noIndex = false
}) {
  // Pastikan ogImage absolute agar tidak bergantung pada context router
  const absoluteOgImage = ogImage.startsWith("http")
    ? ogImage
    : `https://mdhiyaulatha.me${ogImage}`;

  const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
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
  noIndex: PropTypes.bool,
};

export default SEO;
