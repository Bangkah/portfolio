import { useEffect, useState } from "react";
import { Music2, Code2, Gamepad2, Headphones } from "lucide-react";

export default function PresenceWidget() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchPresence = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/presence");
        const data = await res.json();

        const normalized = (data.activities || [])
          .slice(0, 2)
          .map((a, idx) => {
            if (a.type === "spotify") {
              return {
                key: `spotify-${idx}`,
                title: a.title,
                subtitle: a.artist,
                image: a.image,
                type: "spotify",
                icon: "spotify",
                iconImage: a.iconImage || null
              };
            }

            if (a.type === "coding") {
              return {
                key: `coding-${idx}`,
                title: a.details || "Coding",
                subtitle: a.state || a.app,
                type: "coding",
                icon: "vscode",
                iconImage: a.iconImage || null
              };
            }

            return {
              key: `activity-${idx}`,
              title: a.name || "Playing a Game",
              subtitle: a.state || a.type,
              type: a.type || "unknown",
              icon: "gaming",
              iconImage: a.iconImage || null
            };
          });

        setActivities(normalized);
      } catch (error) {
        console.error("Failed to fetch presence:", error);
      }
    };

    fetchPresence();
    const interval = setInterval(fetchPresence, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!activities.length) return null;

  const getIcon = (iconType, className = "w-5 h-5") => {
    const icons = {
      spotify: <Music2 className={className} />,
      vscode: <Code2 className={className} />,
      gaming: <Gamepad2 className={className} />,
      default: <Headphones className={className} />
    };
    return icons[iconType] || icons.default;
  };

  const getTheme = (type) => {
    const themes = {
      spotify: {
        badgeBg: "bg-[#7bd88f]",
        badgeText: "text-[#111111]",
        accentBg: "bg-[#7bd88f]",
        text: "text-[#111111]"
      },
      coding: {
        badgeBg: "bg-[#4fc3f7]",
        badgeText: "text-[#111111]",
        accentBg: "bg-[#4fc3f7]",
        text: "text-[#111111]"
      },
      gaming: {
        badgeBg: "bg-[#ff5c58]",
        badgeText: "text-white",
        accentBg: "bg-[#ff5c58]",
        text: "text-[#111111]"
      },
      default: {
        badgeBg: "bg-[#ffcf33]",
        badgeText: "text-[#111111]",
        accentBg: "bg-[#ffcf33]",
        text: "text-[#111111]"
      }
    };
    return themes[type] || themes.default;
  };

  const getActivityLabel = (type) => {
    const labels = {
      spotify: "NOW PLAYING",
      coding: "CODING",
      gaming: "PLAYING",
      default: "ACTIVE"
    };
    return labels[type] || labels.default;
  };

  return (
    <div className="w-full">
      <div className="w-full space-y-3">
        {activities.map((act) => {
          const theme = getTheme(act.type);

          return (
            <div key={act.key} className="group relative">
              {/* Card Neo-Brutalist */}
              <div className="relative bg-white border-3 border-[#111111] shadow-[4px_4px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 rounded-sm overflow-hidden p-3">
                <div className="flex items-center gap-3">

                  {/* Icon/Image Box Neo-Brutalist */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 bg-[#f4f0e6] border-2 border-[#111111] shadow-[2px_2px_0px_#111111] overflow-hidden flex items-center justify-center">
                      {act.image ? (
                        <img
                          src={act.image}
                          alt={act.title}
                          className="w-full h-full object-cover"
                        />
                      ) : act.iconImage ? (
                        <div className="w-full h-full p-2 flex items-center justify-center">
                          <img
                            src={act.iconImage}
                            alt={act.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className={theme.text}>
                          {getIcon(act.icon, "w-7 h-7 stroke-[2.5]")}
                        </div>
                      )}
                    </div>

                    {/* Equalizer Indicator untuk Spotify */}
                    {act.type === "spotify" && (
                      <div className="absolute -bottom-1 -right-1 bg-[#111111] border border-[#111111] p-1 shadow-[1px_1px_0px_#ffcf33]">
                        <div className="flex items-end gap-0.5 h-2.5">
                          <div className="w-1 bg-[#ffcf33] animate-music-1"></div>
                          <div className="w-1 bg-[#7bd88f] animate-music-2"></div>
                          <div className="w-1 bg-[#ff5c58] animate-music-3"></div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Info */}
                  <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-1.5 mb-1">
                      <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-wider border-2 border-[#111111] shadow-[1.5px_1.5px_0px_#111111] ${theme.badgeBg} ${theme.badgeText}`}>
                        {getActivityLabel(act.type)}
                      </span>
                    </div>

                    <h3 className="text-[#111111] font-black text-sm truncate leading-snug">
                      {act.title}
                    </h3>
                    <p className="text-[#111111]/80 font-bold text-xs truncate">
                      {act.subtitle}
                    </p>
                  </div>

                  {/* Spotify Badge Kanan */}
                  {act.type === "spotify" && (
                    <div className="flex-shrink-0 bg-[#111111] p-1.5 border-2 border-[#111111] shadow-[2px_2px_0px_#7bd88f]">
                      <img src="Spotify.png" className="w-auto h-5 invert" alt="Spotify" />
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes music-1 {
          0%, 100% { height: 30%; }
          50% { height: 100%; }
        }
        @keyframes music-2 {
          0%, 100% { height: 70%; }
          50% { height: 30%; }
        }
        @keyframes music-3 {
          0%, 100% { height: 40%; }
          50% { height: 90%; }
        }
        
        .animate-music-1 { animation: music-1 0.5s ease-in-out infinite; }
        .animate-music-2 { animation: music-2 0.5s ease-in-out 0.15s infinite; }
        .animate-music-3 { animation: music-3 0.5s ease-in-out 0.3s infinite; }
      `}</style>
    </div>
  );
}