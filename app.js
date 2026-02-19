const MAPS = [
  {
    title: "Aegis Foundry",
    type: "Control",
    status: "Released",
  },
  {
    title: "Riptide Complex",
    type: "Payload",
    status: "Live Ops",
  },
  {
    title: "Vanguard Rift",
    type: "Arena",
    status: "Playtest",
  },
  {
    title: "Polar Relay",
    type: "CTF",
    status: "Released",
  },
  {
    title: "Kestrel Docks",
    type: "Siege",
    status: "Concept",
  },
  {
    title: "Hexline Facility",
    type: "Escort",
    status: "Production",
  },
];

const MARQUEE_ITEMS = [
  "Visleafing",
  "Lightmap Pass",
  "Prop Optimization",
  "Nav Flow",
  "Callouts",
  "Ambient FX",
  "Skybox Design",
  "Encounter Design",
  "Entity Logic",
  "Compile Pipeline",
];

const particleContainer = document.getElementById("particles");
const mapGrid = document.getElementById("map-grid");
const marquee = document.getElementById("marquee");

const createParticles = () => {
  const total = 40;
  for (let i = 0; i < total; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const seed1 = ((i * 17 + 31) % 97) / 97;
    const seed2 = ((i * 23 + 47) % 89) / 89;
    const seed3 = ((i * 13 + 59) % 83) / 83;
    const seed4 = ((i * 19 + 41) % 79) / 79;
    const angle = seed4 * Math.PI * 2;
    const distance = 100 + seed3 * 150;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    particle.style.left = `${seed1 * 100}%`;
    particle.style.top = `${seed2 * 100}%`;
    particle.style.setProperty("--dx", `${dx}px`);
    particle.style.setProperty("--dy", `${dy}px`);
    particle.style.setProperty("--duration", `${8 + seed3 * 12}s`);
    particle.style.setProperty("--delay", `${seed2 * 8}s`);

    particleContainer.appendChild(particle);
  }
};

const renderMaps = () => {
  MAPS.forEach((map) => {
    const card = document.createElement("article");
    card.className = "map-card";
    card.innerHTML = `
      <div class="map-thumb">${map.title.split(" ")[0]}</div>
      <div>
        <h3>${map.title}</h3>
        <p>${map.type} · ${map.status}</p>
      </div>
      <div class="map-meta">
        <span>${map.type}</span>
        <span>${map.status}</span>
      </div>
    `;
    mapGrid.appendChild(card);
  });
};

const renderMarquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  items.forEach((item) => {
    const span = document.createElement("span");
    span.className = "marquee-item";
    span.textContent = item;
    marquee.appendChild(span);
  });
};

const setYear = () => {
  const year = document.getElementById("year");
  year.textContent = new Date().getFullYear();
};

createParticles();
renderMaps();
renderMarquee();
setYear();
