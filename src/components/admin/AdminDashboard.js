import React, { useState, useEffect } from "react";

function getData(key, fallback) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}
function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function AdminDashboard() {
  const [tab, setTab] = useState("projects");
  const [projects, setProjects] = useState(() => getData("projects", []));
  const [newProject, setNewProject] = useState({ title: "", description: "", imgPath: "" });
  const [projectFile, setProjectFile] = useState(null);

  const [certificates, setCertificates] = useState(() => getData("certificates", []));
  const [newCertificate, setNewCertificate] = useState({ file: "" });
  const [certificateFile, setCertificateFile] = useState(null);

  useEffect(() => { setData("projects", projects); }, [projects]);
  useEffect(() => { setData("certificates", certificates); }, [certificates]);

  function handleAddProject(e) {
    e.preventDefault();
    if (!newProject.title) return;
    if (projectFile) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        setProjects(prev => [...prev, { ...newProject, imgPath: ev.target.result, id: Date.now() }]);
      };
      reader.readAsDataURL(projectFile);
      setNewProject({ title: "", description: "", imgPath: "" });
      setProjectFile(null);
    } else if (newProject.imgPath) {
      setProjects([...projects, { ...newProject, id: Date.now() }]);
      setNewProject({ title: "", description: "", imgPath: "" });
    }
  }
  function handleDeleteProject(id) {
    setProjects(projects.filter(p => p.id !== id));
  }

  function handleAddCertificate(e) {
    e.preventDefault();
    if (certificateFile) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        setCertificates(prev => [...prev, { file: ev.target.result, id: Date.now() }]);
      };
      reader.readAsDataURL(certificateFile);
      setNewCertificate({ file: "" });
      setCertificateFile(null);
    } else if (newCertificate.file) {
      setCertificates([...certificates, { ...newCertificate, id: Date.now() }]);
      setNewCertificate({ file: "" });
    }
  }
  function handleDeleteCertificate(id) {
    setCertificates(certificates.filter(c => c.id !== id));
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", background: "#181028", borderRadius: 12, boxShadow: "0 2px 16px #0002", padding: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ color: "#fff", margin: 0 }}>Admin Dashboard</h2>
        <button style={{ background: "#e11d48", color: "#fff", border: 0, borderRadius: 6, padding: "8px 18px", fontWeight: 600, cursor: "pointer" }} onClick={() => { localStorage.removeItem("isAdmin"); window.location.reload(); }}>Logout</button>
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        <button onClick={() => setTab("projects")}
          style={{ background: tab === "projects" ? "#623686" : "#222034", color: "#fff", border: 0, borderRadius: 6, padding: "8px 24px", fontWeight: 600, cursor: "pointer" }}>
          Projects
        </button>
        <button onClick={() => setTab("certificates")}
          style={{ background: tab === "certificates" ? "#623686" : "#222034", color: "#fff", border: 0, borderRadius: 6, padding: "8px 24px", fontWeight: 600, cursor: "pointer" }}>
          Sertifikat
        </button>
      </div>
      {tab === "projects" && (
        <div>
          <h3 style={{ color: "#fff", marginBottom: 16 }}>Projects</h3>
          <form onSubmit={handleAddProject} style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <input style={{ flex: 1, minWidth: 180, padding: 8, borderRadius: 6, border: "1px solid #444", background: "#222034", color: "#fff" }}
              placeholder="Judul project" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} />
            <input style={{ flex: 2, minWidth: 220, padding: 8, borderRadius: 6, border: "1px solid #444", background: "#222034", color: "#fff" }}
              placeholder="Deskripsi" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
            <input style={{ flex: 2, minWidth: 220, padding: 8, borderRadius: 6, border: "1px solid #444", background: "#222034", color: "#fff" }}
              placeholder="URL gambar (opsional)" value={newProject.imgPath} onChange={e => setNewProject({ ...newProject, imgPath: e.target.value })} />
            <input type="file" accept="image/*" style={{ flex: 2, minWidth: 180, color: "#fff" }} onChange={e => setProjectFile(e.target.files[0])} />
            <button type="submit" style={{ background: "#623686", color: "#fff", border: 0, borderRadius: 6, padding: "8px 18px", fontWeight: 600, cursor: "pointer" }}>Tambah</button>
          </form>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {projects.map(p => (
              <div key={p.id} style={{ background: "#222034", borderRadius: 10, padding: 16, color: "#fff", boxShadow: "0 2px 8px #0002", position: "relative" }}>
                <img src={p.imgPath} alt={p.title} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 10, background: "#181028" }} />
                <div style={{ fontWeight: 700, fontSize: 18 }}>{p.title}</div>
                <div style={{ fontSize: 14, margin: "8px 0 0 0" }}>{p.description}</div>
                <button onClick={() => handleDeleteProject(p.id)} style={{ position: "absolute", top: 10, right: 10, background: "#e11d48", color: "#fff", border: 0, borderRadius: 6, padding: "4px 10px", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Hapus</button>
              </div>
            ))}
            {projects.length === 0 && <div style={{ color: "#aaa", gridColumn: "1/-1" }}>Belum ada project.</div>}
          </div>
        </div>
      )}
      {tab === "certificates" && (
        <div>
          <h3 style={{ color: "#fff", marginBottom: 16 }}>Sertifikat</h3>
          <form onSubmit={handleAddCertificate} style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
            <input style={{ flex: 2, minWidth: 220, padding: 8, borderRadius: 6, border: "1px solid #444", background: "#222034", color: "#fff" }}
              placeholder="URL gambar sertifikat (opsional)" value={newCertificate.file} onChange={e => setNewCertificate({ ...newCertificate, file: e.target.value })} />
            <input type="file" accept="image/*" style={{ flex: 2, minWidth: 180, color: "#fff" }} onChange={e => setCertificateFile(e.target.files[0])} />
            <button type="submit" style={{ background: "#623686", color: "#fff", border: 0, borderRadius: 6, padding: "8px 18px", fontWeight: 600, cursor: "pointer" }}>Tambah</button>
          </form>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {certificates.map((c, idx) => (
              <div key={c.id} style={{ background: "#222034", borderRadius: 10, padding: 12, textAlign: "center", boxShadow: "0 2px 8px #0002", position: "relative" }}>
                <img src={c.file} alt={`certificate-${idx}`} style={{ width: "100%", height: 180, objectFit: "contain", borderRadius: 8, background: "#181028" }} />
                <button onClick={() => handleDeleteCertificate(c.id)} style={{ position: "absolute", top: 10, right: 10, background: "#e11d48", color: "#fff", border: 0, borderRadius: 6, padding: "4px 10px", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Hapus</button>
              </div>
            ))}
            {certificates.length === 0 && <div style={{ color: "#aaa", gridColumn: "1/-1" }}>Belum ada sertifikat.</div>}
          </div>
        </div>
      )}
    </div>
  );
}
