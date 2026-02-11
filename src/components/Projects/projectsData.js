// Data project untuk halaman Projects dan ProjectDetail
import muslimlifeImg from "../../Assets/Projects/muslimlife.png";
import akademikImg from "../../Assets/Projects/akademik.png";
import netinfoImg from "../../Assets/Projects/netinfo.png";
import absensiImg from "../../Assets/Projects/absensi.png";
import islamicblogImg from "../../Assets/Projects/islamicblog.png";
import mantapaiImg from "../../Assets/Projects/mantapai.png";
import gudangtugasImg from "../../Assets/Projects/gudangtugas.png";
import jekyllblogImg from "../../Assets/Projects/jekyllblog.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import yourstoryImg from "../../Assets/Projects/yourstory.png";

const projectsData = [
  {
    slug: "muslimlife",
    title: "Website Muslim Life",
    imgPath: muslimlifeImg,
    description: "Platform Islami lengkap dengan jadwal shalat, Al-Qur'an digital, dan doa harian. Dibangun dengan HTML, CSS, dan JavaScript untuk pengalaman pengguna yang intuitif.",
    detail: `<ul><li>Fitur: Jadwal shalat, Al-Qur'an digital, doa harian, dan artikel Islami.</li><li>Teknologi: HTML, CSS, JavaScript.</li><li>Tujuan: Memudahkan umat Muslim mengakses informasi ibadah harian.</li></ul>`,
  },
  {
    slug: "netinfo",
    title: "Netinfo",
    imgPath: netinfoImg,
    description: "netinfo is a fast, minimal, and reliable command-line utility to display your network and system information. Designed for troubleshooting, auditing, scripting, or simply checking your connection status, netinfo only shows verifiable and essential data.",
    detail: "<ul><li>Features: Public & local IP detection, ASN & ISP lookup, reverse DNS, network type estimation, VPN/proxy detection, and system information (OS, kernel, architecture, hostname, terminal, shell).</li><li>Technology: Python, Shell scripting.</li><li>Platform: Arch Linux (available on AUR).</li><li>Focus: Minimal output, verifiable data, and privacy-conscious reporting.</li><li>Version: 2.1.0 with professional English documentation and structured output.</li></ul>",
  },
  {
    slug: "akademik-kampus",
    title: "Aplikasi Akademik Kampus",
    imgPath: akademikImg,
    description: "Sistem informasi akademik berbasis web untuk manajemen data mahasiswa, dosen, kelas, dan prodi. Dibuat menggunakan PHP & MySQL untuk efisiensi administrasi kampus.",
    detail: `<ul><li>Fitur: Manajemen data mahasiswa, dosen, kelas, prodi, dan nilai.</li><li>Teknologi: PHP, MySQL.</li><li>Tujuan: Memudahkan administrasi kampus secara digital.</li></ul>`,
  },
  {
    slug: "absensi-karyawan",
    title: "Aplikasi Absensi Karyawan",
    imgPath: absensiImg,
    description: "Sistem absensi berbasis web dengan fitur QR Code, absensi manual, manajemen izin, dan laporan lengkap. Dibangun menggunakan Laravel 10 untuk perusahaan skala menengah.",
    detail: `<ul><li>Fitur: Absensi QR Code, absensi manual, izin, laporan.</li><li>Teknologi: Laravel 10.</li><li>Tujuan: Otomatisasi absensi dan pelaporan karyawan.</li></ul>`,
  },
  {
    slug: "blog-islam",
    title: "Aplikasi Blog Islam",
    imgPath: islamicblogImg,
    description: "Platform blogging Islami dengan CRUD konten dan API terintegrasi. Dirancang responsif agar pengguna dapat mengakses artikel dari perangkat apapun.",
    detail: `<ul><li>Fitur: CRUD artikel, API, responsif.</li><li>Teknologi: React, Node.js.</li><li>Tujuan: Media dakwah dan berbagi ilmu Islam.</li></ul>`,
  },
  {
    slug: "mantap-ai",
    title: "Mantap AI",
    imgPath: mantapaiImg,
    description: "Aplikasi web untuk menjalankan AI Assistant berbasis LLM lokal dan Ollama. Backend dibuat dengan Node.js & Express, menyediakan interaksi AI real-time.",
    detail: `<ul><li>Fitur: Chat AI, integrasi LLM lokal, real-time.</li><li>Teknologi: Node.js, Express, React.</li><li>Tujuan: Eksplorasi AI Assistant open source.</li></ul>`,
  },
  {
    slug: "gudang-tugas",
    title: "Gudang Tugas",
    imgPath: gudangtugasImg,
    description: "Situs web untuk menyimpan dan berbagi tugas kuliah secara terstruktur. Dibangun dengan PHP & MySQL untuk kemudahan pengelolaan dokumen akademik.",
    detail: `<ul><li>Fitur: Upload, download, dan berbagi tugas kuliah.</li><li>Teknologi: PHP, MySQL.</li><li>Tujuan: Kolaborasi dan dokumentasi tugas mahasiswa.</li></ul>`,
  },
  {
    slug: "jekyll-blog",
    title: "Blog Pribadi dengan Jekyll",
    imgPath: jekyllblogImg,
    description: "Blog statis dengan Jekyll dan GitHub Pages, menampilkan artikel teknologi dan dokumentasi proyek open source secara terorganisir.",
    detail: `<ul><li>Fitur: Blog statis, dokumentasi proyek.</li><li>Teknologi: Jekyll, GitHub Pages.</li><li>Tujuan: Berbagi pengetahuan dan dokumentasi open source.</li></ul>`,
  },
  {
    slug: "portfolio",
    title: "Website Portofolio",
    imgPath: portfolioImg,
    description: "Portofolio pribadi interaktif menggunakan React.js & Bootstrap, menampilkan proyek dan kemampuan teknis. Dideploy ke Vercel untuk akses global.",
    detail: `<ul><li>Fitur: Showcase project, responsif, modern UI.</li><li>Teknologi: React.js, Bootstrap, Vercel.</li><li>Tujuan: Personal branding dan presentasi karya.</li></ul>`,
  },
  {
    slug: "yourstory",
    title: "Your Story Portfolio",
    imgPath: yourstoryImg,
    description: "Website portofolio profesional untuk startup Your Story, sebuah platform kreatif untuk menulis dan membaca cerita.",
    detail: `<ul><li>Fitur: Portofolio startup, platform cerita.</li><li>Teknologi: React.js, Node.js.</li><li>Tujuan: Mendukung kreator menulis dan berbagi cerita.</li></ul>`,
  },
];

export default projectsData;
