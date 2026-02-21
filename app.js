// To add a screenshot: drop the image in images/maps/ and set the path below.
// Example: image: "images/maps/my-map.jpg"
const MAPS = [
  {
    title: "Aegis Foundry",
    type: "SCP-RP",
    status: "",
    image: "",
  },
  {
    title: "Riptide Complex",
    type: "SCP-RP",
    status: "",
    image: "",
  },
  {
    title: "Vanguard Rift",
    type: "SCP-RP",
    status: "",
    image: "",
  },
  {
    title: "Polar Relay",
    type: "SCP-RP",
    status: "",
    image: "",
  },
  {
    title: "Kestrel Docks",
    type: "SCP-RP",
    status: "",
    image: "",
  },
  {
    title: "Hexline Facility",
    type: "SCP-RP",
    status: "",
    image: "",
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
    const thumbInner = map.image
      ? `<img src="${map.image}" alt="${map.title}" loading="lazy" />`
      : `<span class="map-thumb-label">${map.title.split(" ")[0]}</span>`;
    card.innerHTML = `
      <div class="map-thumb">${thumbInner}</div>
      <div class="map-info">
        <h3>${map.title}</h3>
        <div class="map-meta">
          <span>${map.type}</span>
          <span>${map.status}</span>
        </div>
      </div>
    `;
    // Open lightbox on click if there's an image
    if (map.image) {
      card.addEventListener("click", () => openLightbox(map.image, map.title));
    }
    mapGrid.appendChild(card);
  });
};

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

const openLightbox = (src, caption) => {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
};

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

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
