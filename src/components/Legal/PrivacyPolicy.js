import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../SEO";

function PrivacyPolicy() {
  return (
    <Container className="legal-page">
      <SEO
        title="Privacy Policy | Muhammad Dhiyaul Atha"
        description="Kebijakan privasi website portofolio Muhammad Dhiyaul Atha terkait analitik, cookie, dan iklan pihak ketiga termasuk Google AdSense."
        keywords="privacy policy, kebijakan privasi, adsense, cookie, portfolio"
        url="https://mdhiyaulatha.me/privacy-policy"
      />
      <h1>Kebijakan Privasi</h1>
      <p>Pembaruan terakhir: 25 Maret 2026</p>
      <p>
        Website ini menggunakan layanan analitik dan iklan pihak ketiga untuk memahami performa
        konten serta menampilkan iklan yang relevan.
      </p>

      <h2>Data yang Dikumpulkan</h2>
      <p>
        Kami dapat mengumpulkan data non-pribadi seperti jenis perangkat, browser, halaman yang
        dikunjungi, serta estimasi lokasi berdasarkan IP untuk keperluan statistik dan keamanan.
      </p>

      <h2>Cookie dan Iklan</h2>
      <p>
        Google AdSense dapat menggunakan cookie untuk menayangkan iklan yang dipersonalisasi.
        Pengguna dapat mengelola preferensi iklan melalui pengaturan akun Google masing-masing.
      </p>

      <h2>Tautan Eksternal</h2>
      <p>
        Website ini dapat memuat tautan ke situs eksternal. Kebijakan privasi pada situs tersebut
        berada di luar kendali kami.
      </p>

      <h2>Hak Pengguna</h2>
      <p>
        Pengguna dapat menonaktifkan cookie melalui browser. Anda juga dapat menghubungi kami untuk
        pertanyaan terkait privasi.
      </p>

      <h2>Kontak</h2>
      <p>
        Email: hi@mdhiyaulatha.me
      </p>
    </Container>
  );
}

export default PrivacyPolicy;
