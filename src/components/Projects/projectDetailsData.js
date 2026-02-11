// Data detail project, lebih spesifik dan lengkap
import muslimlifeImg from "../../Assets/Projects/muslimlife.png";
import akademikImg from "../../Assets/Projects/akademik.png";
import netinfoImg from "../../Assets/Projects/netinfo.png"
import absensiImg from "../../Assets/Projects/absensi.png";
import islamicblogImg from "../../Assets/Projects/islamicblog.png";
import mantapaiImg from "../../Assets/Projects/mantapai.png";
import gudangtugasImg from "../../Assets/Projects/gudangtugas.png";
import jekyllblogImg from "../../Assets/Projects/jekyllblog.png";
import portfolioImg from "../../Assets/Projects/portfolio.png";
import yourstoryImg from "../../Assets/Projects/yourstory.png";

const projectDetailsData = {
  muslimlife: {
    title: "Website Muslim Life",
    hero: muslimlifeImg,
    description: "Platform Islami lengkap dengan jadwal shalat, Al-Qur'an digital, dan doa harian. Dibangun dengan HTML, CSS, dan JavaScript untuk pengalaman pengguna yang intuitif.",
    features: [
      "Jadwal shalat harian seluruh Indonesia",
      "Al-Qur'an digital dengan terjemahan",
      "Kumpulan doa harian dan artikel Islami",
      "UI/UX ramah mobile dan desktop"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    motivation: "Membantu umat Muslim mengakses informasi ibadah harian secara mudah dan modern.",
    challenges: "Membuat jadwal shalat dinamis dan integrasi API Al-Qur'an.",
    ghLink: "https://github.com/Bangkah/muslimlife",
    demoLink: "https://muslimlife.vercel.app/"
  },
  "akademik-kampus": {
    title: "Aplikasi Akademik Kampus",
    hero: akademikImg,
    description: "Sistem informasi akademik berbasis web untuk manajemen data mahasiswa, dosen, kelas, dan prodi. Dibuat menggunakan PHP & MySQL untuk efisiensi administrasi kampus.",
    features: [
      "Manajemen data mahasiswa, dosen, kelas, prodi, dan nilai",
      "Dashboard admin dan laporan akademik",
      "Akses multi-user (admin, dosen, mahasiswa)",
      "Cetak transkrip dan rekap nilai"
    ],
    technologies: ["PHP", "MySQL", "Bootstrap"],
    motivation: "Digitalisasi administrasi kampus agar lebih efisien dan transparan.",
    challenges: "Membuat sistem multi-user dan validasi data akademik.",
  },
  "netinfo": {
    title: "netinfo",
    hero: netinfoImg,
    description: "netinfo is a minimal command-line utility for Linux that displays network and system information in a clean and predictable way. The main goal of this tool is to only show information that can be verified, without guessing or misleading output.",
    features: [
      "Show public and local IP addresses",
      "Detect ASN and organization/ISP",
      "Reverse DNS lookup",
      "Estimate network type (Mobile/Fiber/DSL/Wireless/ISP",
      "Display system info: OS, kernel, architecture, hostname, terminal, shell",
      "Detect VPN/proxy status (if available)"
    ],
    technologies: ["Python", "Shell", "Arch Linux", "AUR Packaging"],
    motivation: "I built netinfo to create a fast, reliable, and minimal network diagnostic tool that focuses only on verifiable data. Many existing tools provide excessive or unverified information, so I wanted a clean and trustworthy CLI utility suitable for troubleshooting, scripting, and system auditing.",
    challenges: "One of the main challenges was ensuring accuracy and reliability of network data across different environments, while keeping the output minimal and fast. Packaging and distributing the tool through AUR also required learning Arch packaging standards, dependency management, and maintaining compatibility with different system configurations.",
  },
  "absensi-karyawan": {
    title: "Aplikasi Absensi Karyawan",
    hero: absensiImg,
    description: "Sistem absensi berbasis web dengan fitur QR Code, absensi manual, manajemen izin, dan laporan lengkap. Dibangun menggunakan Laravel 10 untuk perusahaan skala menengah.",
    features: [
      "Absensi QR Code dan manual",
      "Manajemen izin dan cuti",
      "Laporan absensi dan rekap kehadiran",
      "Notifikasi email otomatis"
    ],
    technologies: ["Laravel 10", "PHP", "MySQL"],
    motivation: "Otomatisasi absensi dan pelaporan karyawan di perusahaan.",
    challenges: "Integrasi QR Code dan sistem notifikasi otomatis.",
  },
  "blog-islam": {
    title: "Aplikasi Blog Islam",
    hero: islamicblogImg,
    description: "Platform blogging Islami dengan CRUD konten dan API terintegrasi. Dirancang responsif agar pengguna dapat mengakses artikel dari perangkat apapun.",
    features: [
      "CRUD artikel dan kategori",
      "API publik untuk integrasi konten",
      "Desain responsif mobile/desktop",
      "Manajemen user dan komentar"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    motivation: "Media dakwah dan berbagi ilmu Islam secara digital.",
    challenges: "Membuat API publik dan sistem komentar yang aman.",
  },
  "mantap-ai": {
    title: "Mantap AI",
    hero: mantapaiImg,
    description: "Aplikasi web untuk menjalankan AI Assistant berbasis LLM lokal dan Ollama. Backend dibuat dengan Node.js & Express, menyediakan interaksi AI real-time.",
    features: [
      "Chat AI real-time dengan LLM lokal",
      "Integrasi Ollama dan API eksternal",
      "UI modern dan responsif",
      "History chat dan export hasil"
    ],
    technologies: ["Node.js", "Express", "React", "Ollama"],
    motivation: "Eksplorasi AI Assistant open source untuk kebutuhan lokal.",
    challenges: "Integrasi LLM lokal dan pengelolaan history chat secara efisien.",
  },
  "gudang-tugas": {
    title: "Gudang Tugas",
    hero: gudangtugasImg,
    description: "Situs web untuk menyimpan dan berbagi tugas kuliah secara terstruktur. Dibangun dengan PHP & MySQL untuk kemudahan pengelolaan dokumen akademik.",
    features: [
      "Upload, download, dan berbagi tugas kuliah",
      "Kategori dan pencarian tugas",
      "Akses multi-user (mahasiswa/dosen)",
      "Manajemen file dan keamanan data"
    ],
    technologies: ["PHP", "MySQL", "Bootstrap"],
    motivation: "Kolaborasi dan dokumentasi tugas mahasiswa secara digital.",
    challenges: "Pengelolaan file dan keamanan akses data.",
  },
  "jekyll-blog": {
    title: "Blog Pribadi dengan Jekyll",
    hero: jekyllblogImg,
    description: "Blog statis dengan Jekyll dan GitHub Pages, menampilkan artikel teknologi dan dokumentasi proyek open source secara terorganisir.",
    features: [
      "Blog statis dan dokumentasi proyek",
      "Integrasi GitHub Pages",
      "Desain minimalis dan navigasi mudah",
      "SEO friendly dan fast loading"
    ],
    technologies: ["Jekyll", "GitHub Pages", "Markdown"],
    motivation: "Berbagi pengetahuan dan dokumentasi open source.",
    challenges: "Optimasi SEO dan deployment otomatis ke GitHub Pages.",
  },
  "portfolio": {
    title: "Website Portofolio",
    hero: portfolioImg,
    description: "Portofolio pribadi interaktif menggunakan React.js & Bootstrap, menampilkan proyek dan kemampuan teknis. Dideploy ke Vercel untuk akses global.",
    features: [
      "Showcase project dan skills",
      "Desain responsif dan modern UI",
      "Integrasi SEO dan PWA",
      "Deploy otomatis ke Vercel"
    ],
    technologies: ["React.js", "Bootstrap", "Vercel"],
    motivation: "Personal branding dan presentasi karya secara online.",
    challenges: "Optimasi SEO dan performa untuk akses global.",
  },
  "yourstory": {
    title: "Your Story Portfolio",
    hero: yourstoryImg,
    description: "Website portofolio profesional untuk startup Your Story, sebuah platform kreatif untuk menulis dan membaca cerita.",
    features: [
      "Portofolio startup dan platform cerita",
      "Manajemen user dan karya",
      "UI kreatif dan mobile friendly",
      "Integrasi backend Node.js"
    ],
    technologies: ["React.js", "Node.js", "Express"],
    motivation: "Mendukung kreator menulis dan berbagi cerita secara profesional.",
    challenges: "Desain UI kreatif dan integrasi backend yang scalable.",
  },
};

export default projectDetailsData;
