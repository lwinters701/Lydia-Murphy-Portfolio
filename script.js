// Project data — edit here to add, remove, or reorder projects.
const projects = [
  {
    title: "LUMA",
    subtitle: "Classroom Coding Robot",
    overview: "LUMA is Pitsco Education's coding robot for grades 4–6, paired with a web app where students write block or Python code, run it, and watch it move in real time. The app needed to work reliably on shared classroom devices with no installs, while staying approachable for first-time coders.",
    role: "Led UX/UI design as part of an agency team. Development was handled by a separate team.",
    tools: ["Figma"],
    tags: ["EdTech", "UX/UI Design"],
    images: ["images/projects/luma-1.jpg"],
    liveUrl: "https://luma.pitsco.com/",
    mat: "var(--blue)",
  },
  {
    title: "Sunnyland Farms",
    subtitle: "Pecans & Gourmet Gifts",
    overview: "Sunnyland Farms has grown and shipped Georgia pecans for over a hundred years. The site needed to handle a large, frequently changing catalog — raw and flavored pecans, baked goods, gift boxes, a loyalty program — while keeping checkout simple during high-volume holiday gifting season.",
    role: "Led UX/UI design and contributed to building out the site on BigCommerce, as part of an agency team.",
    tools: ["Figma", "BigCommerce"],
    tags: ["E-Commerce", "BigCommerce"],
    images: ["images/projects/sunnyland-1.jpg"],
    liveUrl: "https://www.sunnylandfarms.com/",
    mat: "var(--butter)",
  },
  {
    title: "Smokin' Keg",
    subtitle: "Cast Aluminum Grills",
    overview: "Smokin' Keg sells a single flagship product — a rugged, portable charcoal grill built in Kansas — so the site's job is to sell the story and specs of one object clearly, with a bold, outdoorsy tone that matches the brand.",
    role: "Led UX/UI design and front-end development on Shopify, as part of an agency team.",
    tools: ["Figma", "Shopify"],
    tags: ["E-Commerce", "Shopify"],
    images: ["images/projects/smokinkegs-1.jpg"],
    liveUrl: "https://smokinkegs.com/",
    mat: "var(--peach)",
  },
  {
    title: "KE&G",
    subtitle: "Heavy Civil Construction",
    overview: "KE&G builds infrastructure, utilities, mining, and commercial projects across Arizona, New Mexico, and Texas. The site needed to speak to two audiences at once — clients evaluating the company for large civil contracts, and skilled tradespeople considering a job — while showcasing real completed project work.",
    role: "Led UX/UI design on WordPress, as part of an agency team, with limited front-end involvement.",
    tools: ["Figma", "WordPress"],
    tags: ["Construction", "WordPress"],
    images: ["images/projects/kegtus-1.jpg", "images/projects/kegtus-2.jpg"],
    liveUrl: "https://www.kegtus.com/",
    mat: "var(--sage)",
  },
  {
    title: "MSG Payment Systems",
    subtitle: "Embedded Payments",
    overview: "MSG Payment Systems provides embedded payments and merchant services to software companies, developers, and merchants. The site needed to route three fairly different audiences to the right solution quickly, without burying them in fintech jargon.",
    role: "Led UX/UI design and development on WordPress (Elementor), as part of an agency team.",
    tools: ["Figma", "WordPress", "Elementor"],
    tags: ["Fintech", "WordPress"],
    images: ["images/projects/msgpay-1.jpg"],
    liveUrl: "https://msgpay.com/",
    mat: "var(--blush)",
  },
  {
    title: "Vintage Labs",
    subtitle: "Clinical-Grade Supplements",
    overview: "Vintage Labs sells practitioner-grade supplements formulated by physicians and pharmacists, positioned a step above typical consumer wellness brands. The site called for a calmer, more clinical visual language than a typical supplement storefront, while still converting well on Shopify.",
    role: "Led UX/UI design and front-end development on Shopify, as part of an agency team.",
    tools: ["Figma", "Shopify"],
    tags: ["E-Commerce", "Shopify"],
    images: ["images/projects/vintagelabs-1.jpg"],
    liveUrl: "https://vintagelabscollection.com/",
    mat: "var(--cream)",
  },
];

// ---------- Project grid ----------

const grid = document.getElementById("project-grid");

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-mat" style="--mat: ${p.mat}">
      <span class="project-flag">Agency</span>
      ${p.images.length > 1 ? `<span class="project-pages">1 / ${p.images.length}</span>` : ""}
      <img src="${p.images[0]}" alt="${p.title} website" width="1440" height="900" loading="lazy">
    </div>
    <div class="project-info">
      <div>
        <p class="project-tags">${p.tags.join(" · ")}</p>
        <h3></h3>
        <p class="project-sub"></p>
      </div>
      <button class="project-view" aria-label="View ${p.title} project">View</button>
    </div>`;
  card.querySelector("h3").textContent = p.title;
  card.querySelector(".project-sub").textContent = p.subtitle;
  card.addEventListener("click", () => openProject(i));
  grid.appendChild(card);
});

// ---------- Project pop-up ----------

const modal = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalNav = modal.querySelector(".modal-nav");
const modalCount = modal.querySelector(".modal-count");
let current = null;
let imageIndex = 0;

function showImage() {
  modalImg.src = current.images[imageIndex];
  modalImg.alt = `${current.title} website, screen ${imageIndex + 1}`;
  modalCount.textContent = `${imageIndex + 1} / ${current.images.length}`;
}

function openProject(i) {
  current = projects[i];
  imageIndex = 0;
  modal.querySelector(".modal-media").style.setProperty("--mat", current.mat);
  document.getElementById("modal-tags").textContent = current.tags.join(" · ");
  document.getElementById("modal-title").textContent = current.title;
  document.getElementById("modal-subtitle").textContent = current.subtitle;
  document.getElementById("modal-overview").textContent = current.overview;
  document.getElementById("modal-role").textContent = current.role;
  document.getElementById("modal-tools").textContent = current.tools.join(", ");
  document.getElementById("modal-live").href = current.liveUrl;
  modalNav.hidden = current.images.length < 2;
  showImage();
  modal.showModal();
}

function step(dir) {
  imageIndex = (imageIndex + dir + current.images.length) % current.images.length;
  showImage();
}

modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.querySelector(".modal-prev").addEventListener("click", () => step(-1));
modal.querySelector(".modal-next").addEventListener("click", () => step(1));

// Close when clicking the backdrop
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

modal.addEventListener("keydown", (e) => {
  if (current && current.images.length > 1) {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  }
});

// ---------- Mobile menu ----------

const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("mobile-menu");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.hidden = !open;
}

toggle.addEventListener("click", () => setMenu(menu.hidden));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

document.getElementById("year").textContent = new Date().getFullYear();
