import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", flexDirection: "column", alignItems: "center" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Aktivitas <strong className="purple">Coding</strong> Saya
      </h1>
      <GitHubCalendar
        username="Bangkah"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      <div style={{ marginTop: 32, width: "100%", maxWidth: 600, textAlign: "center" }}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=Bangkah&show_icons=true&theme=radical"
          alt="GitHub Stats"
          style={{ width: "100%", maxWidth: 600, borderRadius: 16, marginBottom: 16 }}
          loading="lazy"
          decoding="async"
        />
        <img
          src="https://github-contributions-api.jogruber.de/v4/Bangkah?y=last"
          alt="GitHub Contributions"
          style={{ width: "100%", maxWidth: 600, borderRadius: 16 }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </Row>
  );
}

export default Github;
