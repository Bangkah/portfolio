import React from "react";
import { Container } from "react-bootstrap";
import SEO from "../SEO";

function TermsOfService() {
  return (
    <Container className="legal-page">
      <SEO
        title="Terms of Service | Muhammad Dhiyaul Atha"
        description="Syarat dan ketentuan penggunaan website portofolio Muhammad Dhiyaul Atha."
        keywords="terms of service, syarat ketentuan, portfolio"
        url="https://mdhiyaulatha.me/terms-of-service"
      />
      <h1>Syarat dan Ketentuan</h1>
      <p>Pembaruan terakhir: 25 Maret 2026</p>

      <h2>Penggunaan Website</h2>
      <p>
        Seluruh konten pada website ini ditujukan untuk informasi portofolio profesional. Pengguna
        dilarang menggunakan konten untuk tindakan melanggar hukum.
      </p>

      <h2>Hak Kekayaan Intelektual</h2>
      <p>
        Teks, desain, dan materi lain pada website ini dimiliki oleh pemilik situs kecuali
        disebutkan lain. Penggunaan ulang harus mendapatkan izin.
      </p>

      <h2>Penafian</h2>
      <p>
        Informasi disediakan sebagaimana adanya. Kami tidak menjamin seluruh konten bebas dari
        kesalahan teknis maupun perubahan sewaktu-waktu.
      </p>

      <h2>Batasan Tanggung Jawab</h2>
      <p>
        Pemilik situs tidak bertanggung jawab atas kerugian langsung maupun tidak langsung akibat
        penggunaan website ini.
      </p>

      <h2>Perubahan Ketentuan</h2>
      <p>
        Ketentuan dapat diperbarui sewaktu-waktu. Versi terbaru akan dipublikasikan pada halaman ini.
      </p>

      <h2>Kontak</h2>
      <p>
        Email: hi@mdhiyaulatha.me
      </p>
    </Container>
  );
}

export default TermsOfService;
