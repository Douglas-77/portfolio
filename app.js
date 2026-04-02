const MAPS = [
  {
    title: "Ruins",
    type: "SCP-RP",
    status: "In Progress",
    images: ["https://i.imgur.com/jpVPZOR.png"],
  },
  {
    title: "Entrance Zone",
    type: "SCP-RP",
    status: "In Progress",
    images: ["https://i.imgur.com/GvHW8EE.png", "https://i.imgur.com/jFSEOZr.png"]
  },
  {
    title: "SCP-049",
    type: "SCP-RP",
    status: "4 hours",
    images: ["https://i.imgur.com/hXpXqps.png", "https://i.imgur.com/hF2opJn.jpeg"]
  },
  {
    title: "HCZ Entrance",
    type: "SCP-RP",
    status: "8 hours",
    images: ["https://i.imgur.com/9odNmCm.png", "https://i.imgur.com/aBhlM9C.png", "https://i.imgur.com/GFl6gfe.png", "https://i.imgur.com/hgWF6xW.jpeg"],
  },
  {
    title: "SCP-682",
    type: "SCP-RP",
    status: "7 hours",
    images: ["https://i.imgur.com/ZJX3u8b.png", "https://i.imgur.com/a65TCi0.png", "https://i.imgur.com/3PEd4Z2.jpeg"],
  },
  {
    title: "SCP-079",
    type: "SCP-RP",
    status: "2 hours",
    images: ["https://i.imgur.com/elDDLdQ.jpeg", "https://i.imgur.com/4xOdSTS.jpeg"],
  },
  {
    title: "Server Room",
    type: "SCP-RP",
    status: "14 hours",
    images: ["https://i.imgur.com/mx7V1pp.jpeg", "https://i.imgur.com/Q8WJ5Rg.png", "https://i.imgur.com/QeN0H2F.jpeg"],
  },
  {
    title: "LCZ",
    type: "SCP-RP",
    status: "10 hours",
    images: ["https://i.imgur.com/eA3VdyN.jpeg", "https://i.imgur.com/eHRy23U.jpeg", "https://i.imgur.com/tiEiS05.jpeg"],
  },
  {
    title: "SCP-457",
    type: "SCP-RP",
    status: "4 hours",
    images: ["https://i.imgur.com/Hrjrswd.png", "https://i.imgur.com/0SWgowD.jpeg"],
  },
  {
    title: "Ravine Bridge",
    type: "SCP-RP",
    status: "15 hours",
    images: ["https://i.imgur.com/xxKLZ3w.jpeg", "https://i.imgur.com/cqkLCgL.png", "https://i.imgur.com/0K7Wr7Z.jpeg"],
  },
  {
    title: "Medbay",
    type: "SCP-RP",
    status: "20+ hours",
    images: ["https://i.imgur.com/2nYfPOQ.jpeg", "https://i.imgur.com/YjBJcjV.jpeg"],
  },
  {
    title: "Lobby",
    type: "SCP-RP",
    status: "35 hours",
    images: ["https://i.imgur.com/DghwHiP.png", "https://i.imgur.com/L0eXH91.jpeg", "https://i.imgur.com/bHNCOHy.jpeg"],
  },
  {
    title: "HCZ Tunnel Templates",
    type: "SCP-RP",
    status: "90 hours",
    images: ["https://i.imgur.com/5Z1PPbo.png", "https://i.imgur.com/vImszr4.png", "https://i.imgur.com/JUQMwbT.jpeg"],
  },
  {
    title: "Command Room",
    type: "SCP-RP",
    status: "50 hours",
    images: ["https://i.imgur.com/98rf0yX.jpeg", "https://i.imgur.com/p0QGnCg.jpeg", "https://i.imgur.com/suvqxIK.png", "https://i.imgur.com/7wm9j4L.jpeg"],
  },
  {
    title: "D-Block v1.0",
    type: "SCP-RP",
    status: "50 hours",
    images: ["https://i.imgur.com/VO0r2ba.png", "https://i.imgur.com/sTZxJhU.jpeg", "https://i.imgur.com/QL6POzj.png", "https://i.imgur.com/9mxCFYD.jpeg"],
  },
  {
    title: "Mirror Storage",
    type: "SCP-RP",
    status: "25 hours",
    images: ["https://i.imgur.com/RUQUsvn.jpeg", "https://i.imgur.com/2LhLJCR.jpeg"],
  },
  {
    title: "Chaos Insurgency Base",
    type: "SCP-RP",
    status: "30 hours",
    images: ["https://i.imgur.com/EcBGjgz.jpeg", "https://i.imgur.com/dcdFIOP.png", "https://i.imgur.com/DXdLxXF.jpeg", "https://i.imgur.com/VKHnD4I.png", "https://i.imgur.com/OXEOUvp.jpeg"],
  },
  {
    title: "Server Farm",
    type: "SCP-RP",
    status: "40 hours",
    images: ["https://i.imgur.com/3IkRbZn.jpeg", "https://i.imgur.com/8bafWKr.jpeg", "https://i.imgur.com/jcmrllk.jpeg", "https://i.imgur.com/R7RVutZ.jpeg", "https://i.imgur.com/GJuDiB0.jpeg"],
  },
  {
    title: "Foundation Hall",
    type: "SCP-RP",
    status: "70 hours",
    images: ["https://i.imgur.com/ajJgRNV.png", "https://i.imgur.com/A7Vu9nw.png", "https://i.imgur.com/hWMEnBU.jpeg", "https://i.imgur.com/j1gr8P0.jpeg", "https://i.imgur.com/FJozcGn.png", "https://i.imgur.com/6FQ7mUH.png"],
  },
  {
    title: "Common Area",
    type: "SCP-RP",
    status: "N/A",
    images: ["https://i.imgur.com/sWzvaKa.png", "https://i.imgur.com/vqdtsOM.jpeg", "https://i.imgur.com/QJZQ9ob.jpeg"],
  },
];

const MARQUEE_ITEMS = [
  "Hint/Skip",
  "func_detail",
  "Map Protection",
  "Displacements",
  "Map Logic",
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
    const hasImages = map.images && map.images.length > 0;
    const thumbInner = hasImages
      ? `<img src="${map.images[map.images.length - 1]}" alt="${map.title}" loading="lazy" />`
      : `<span class="map-thumb-label">COMING SOON</span>`;
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
    // Open lightbox on click if there are images
    if (hasImages) {
      card.addEventListener("click", () => openLightbox(map.images, map.title, 0));
    }
    mapGrid.appendChild(card);
  });
};

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxThumbnails = document.getElementById("lightbox-thumbnails");
let currentImages = [];
let currentIndex = 0;
let currentTitle = "";

const openLightbox = (images, title, index = 0) => {
  currentImages = [...images].reverse();
  currentTitle = title;
  currentIndex = index;
  renderThumbnails();
  updateLightboxImage();
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
};

const renderThumbnails = () => {
  lightboxThumbnails.innerHTML = "";
  if (currentImages.length <= 1) return;
  
  currentImages.forEach((imgSrc, idx) => {
    const thumb = document.createElement("img");
    thumb.src = imgSrc;
    thumb.className = "lightbox-thumb";
    if (idx === currentIndex) thumb.classList.add("active");
    thumb.addEventListener("click", () => {
      currentIndex = idx;
      updateLightboxImage();
      updateThumbnailActive();
    });
    lightboxThumbnails.appendChild(thumb);
  });
};

const updateThumbnailActive = () => {
  const thumbs = lightboxThumbnails.querySelectorAll(".lightbox-thumb");
  thumbs.forEach((thumb, idx) => {
    thumb.classList.toggle("active", idx === currentIndex);
  });
};

const updateLightboxImage = () => {
  lightboxImg.src = currentImages[currentIndex];
  lightboxImg.alt = currentTitle;
  const caption = currentImages.length > 1 
    ? `${currentTitle} (${currentIndex + 1}/${currentImages.length})`
    : currentTitle;
  lightboxCaption.textContent = caption;
  updateThumbnailActive();
};

const nextImage = () => {
  if (currentImages.length > 1) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  }
};

const prevImage = () => {
  if (currentImages.length > 1) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  }
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
  if (!lightbox.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

const renderMarquee = () => {
  // Duplicate items 6 times for seamless infinite scroll
  const items = Array(6).fill(MARQUEE_ITEMS).flat();
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
