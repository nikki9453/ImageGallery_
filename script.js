
const GALLERY_DATA = [
  {
    id: 1,
    title: "Misty Alpine Peaks",
    category: "nature",
    caption: "Sunlight pierces through dense early morning clouds over jagged alpine ridges in the Dolomites.",
    location: "Dolomites, Italy",
    photographer: "Luca Bravo",
    thumbUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=85",
    alt: "Majestic sunlit mountain peaks towering through soft alpine morning fog"
  },
  {
    id: 2,
    title: "Kyoto Lantern Passage",
    category: "travel",
    caption: "Traditional wooden machiya houses glowing with vermilion lanterns in historical Gion at dusk.",
    location: "Kyoto, Japan",
    photographer: "Sorasak",
    thumbUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85",
    alt: "Narrow historical alley in Kyoto illuminated by glowing traditional Japanese lanterns"
  },
  {
    id: 3,
    title: "Modern Spiral Atrium",
    category: "architecture",
    caption: "Futuristic spiral architecture displaying elegant white curves and clean geometric shadows.",
    location: "Munich, Germany",
    photographer: "Philipp Katzenberger",
    thumbUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=85",
    alt: "Sleek contemporary spiral staircase and minimalist architecture looking upward"
  },
  {
    id: 4,
    title: "Majestic Arctic Fox",
    category: "wildlife",
    caption: "A pure white arctic fox braves the intense snow blizzard with alert, piercing amber eyes.",
    location: "Svalbard, Norway",
    photographer: "Jonatan Pie",
    thumbUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=85",
    alt: "Arctic fox with snow clinging to its thick white coat looking directly at the camera"
  },
  {
    id: 5,
    title: "Emerald Forest Cascades",
    category: "nature",
    caption: "Silky waterfalls flowing through moss-covered basalt boulders in a secluded rainforest canopy.",
    location: "Oregon, USA",
    photographer: "Dan Meyers",
    thumbUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1920&q=85",
    alt: "Lush green deep forest stream cascading gracefully over mossy river stones"
  },
  {
    id: 6,
    title: "Venetian Grand Canal",
    category: "travel",
    caption: "Historic palaces lining the water as classic wooden watercraft cruise during golden hour.",
    location: "Venice, Italy",
    photographer: "Federico Di Dio",
    thumbUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1920&q=85",
    alt: "Romantic panoramic view across the Grand Canal in Venice under warm sunset light"
  },
  {
    id: 7,
    title: "The Shard & London Bridge",
    category: "architecture",
    caption: "Dramatic glass skyscraper slicing into the twilight skyline beside the historic Thames river.",
    location: "London, United Kingdom",
    photographer: "Fred Mouniguet",
    thumbUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=85",
    alt: "Towering glass modern skyscraper reaching into the blue sky with reflected sunlight"
  },
  {
    id: 8,
    title: "King of the Serengeti",
    category: "wildlife",
    caption: "A mature male lion resting proudly on a sunbaked savannah outcrop overlooking the plains.",
    location: "Serengeti, Tanzania",
    photographer: "Geran de Klerk",
    thumbUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1920&q=85",
    alt: "Majestic male lion with a full mane resting peacefully in golden African sunlight"
  },
  {
    id: 9,
    title: "Northern Lights Horizon",
    category: "nature",
    caption: "Vibrant emerald green Aurora Borealis dancing across star-filled Arctic skies over a mirror lake.",
    location: "Tromsø, Norway",
    photographer: "Vincent Guth",
    thumbUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1920&q=85",
    alt: "Luminous green aurora borealis curling over frozen Scandinavian mountain landscapes"
  },
  {
    id: 10,
    title: "Santorini Cliffside Vista",
    category: "travel",
    caption: "Iconic whitewashed cubic houses and cobalt blue domes overlooking the Aegean caldera.",
    location: "Oia, Santorini, Greece",
    photographer: "Heidi Kaden",
    thumbUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=85",
    alt: "Famous white buildings and blue domed churches of Santorini overlooking the deep blue sea"
  },
  {
    id: 11,
    title: "Gothic Cathedral Ribbed Vaults",
    category: "architecture",
    caption: "Ornate soaring stone columns and stained glass windows reflecting centuries of craftsmanship.",
    location: "Barcelona, Spain",
    photographer: "Victor Malyushev",
    thumbUrl: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1920&q=85",
    alt: "Intricate gothic architectural vault ceiling with symmetrical stone arcs and ambient light"
  },
  {
    id: 12,
    title: "Curious Sea Turtle",
    category: "wildlife",
    caption: "A green sea turtle gracefully gliding over vibrant coral reef formations in turquoise waters.",
    location: "Great Barrier Reef, Australia",
    photographer: "Wexor Tmg",
    thumbUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=85",
    alt: "Close-up profile of an endangered green sea turtle swimming through crystal clear shallow water"
  },
  {
    id: 13,
    title: "Yosemite Valley Mist",
    category: "nature",
    caption: "Morning fog sweeping across the iconic granite cliffs of El Capitan and Half Dome.",
    location: "California, USA",
    photographer: "Bailey Zindel",
    thumbUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=85",
    alt: "Serene mountain valley with towering pines and granite peaks under morning light"
  },
  {
    id: 14,
    title: "Hot Air Balloons Over Cappadocia",
    category: "travel",
    caption: "Dozens of colorful hot air balloons floating over surreal fairy chimney rock valleys at dawn.",
    location: "Göreme, Turkey",
    photographer: "Yonatan Anugerah",
    thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
    alt: "Warm golden sunrise over sandy dunes and beaches with tranquil ocean waves"
  },
  {
    id: 15,
    title: "Brutalist Geometric Facade",
    category: "architecture",
    caption: "Rhythmic concrete balconies creating a mesmerizing pattern of light and deep shadow.",
    location: "Berlin, Germany",
    photographer: "Simone Hutsch",
    thumbUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=85",
    alt: "Modern architecture geometric patterns and bold shadows on building exterior"
  },
  {
    id: 16,
    title: "Hummingbird in Mid-Flight",
    category: "wildlife",
    caption: "Iridescent emerald feathers shining as wings beat invisibly beside vivid nectar blossoms.",
    location: "Monteverde, Costa Rica",
    photographer: "Boris Smokrovic",
    thumbUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
    fullUrl: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1920&q=85",
    alt: "Colorful bird perched delicately on tree branch with blurred nature background"
  }
];

// 2. Application State
const state = {
  currentCategory: "all",
  searchQuery: "",
  filteredList: [...GALLERY_DATA],
  activeLightboxIndex: -1 // Index within state.filteredList
};

// 3. DOM Element References
const elements = {
  galleryGrid: document.getElementById("gallery-grid"),
  searchInput: document.getElementById("search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  filterButtons: document.querySelectorAll(".filter-btn"),
  emptyState: document.getElementById("empty-state"),
  resetFilterBtn: document.getElementById("reset-filter-btn"),
  visibleCount: document.getElementById("visible-count"),
  
  // Category Count Badges
  countAll: document.getElementById("count-all"),
  countNature: document.getElementById("count-nature"),
  countTravel: document.getElementById("count-travel"),
  countArchitecture: document.getElementById("count-architecture"),
  countWildlife: document.getElementById("count-wildlife"),
  
  // Lightbox Elements
  lightboxModal: document.getElementById("lightbox-modal"),
  lightboxBackdrop: document.getElementById("lightbox-backdrop"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxLoader: document.getElementById("lightbox-loader"),
  lightboxError: document.getElementById("lightbox-error"),
  lightboxCounter: document.getElementById("lightbox-counter"),
  lightboxCategory: document.getElementById("lightbox-category"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxCaption: document.getElementById("lightbox-caption"),
  lightboxMeta: document.getElementById("lightbox-meta"),
  lightboxCloseBtn: document.getElementById("lightbox-close-btn"),
  lightboxPrevBtn: document.getElementById("lightbox-prev-btn"),
  lightboxNextBtn: document.getElementById("lightbox-next-btn")
};

// 4. Initialization
document.addEventListener("DOMContentLoaded", () => {
  updateCategoryPillCounts();
  applyFiltersAndRender();
  attachEventListeners();
});

// Calculate and populate the number of items per category
function updateCategoryPillCounts() {
  const counts = {
    all: GALLERY_DATA.length,
    nature: 0,
    travel: 0,
    architecture: 0,
    wildlife: 0
  };

  GALLERY_DATA.forEach(item => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    }
  });

  if (elements.countAll) elements.countAll.textContent = counts.all;
  if (elements.countNature) elements.countNature.textContent = counts.nature;
  if (elements.countTravel) elements.countTravel.textContent = counts.travel;
  if (elements.countArchitecture) elements.countArchitecture.textContent = counts.architecture;
  if (elements.countWildlife) elements.countWildlife.textContent = counts.wildlife;
}

// 5. Filter & Search Logic
function applyFiltersAndRender() {
  const query = state.searchQuery.trim().toLowerCase();
  const cat = state.currentCategory.toLowerCase();

  state.filteredList = GALLERY_DATA.filter(item => {
    // 1. Category check
    const matchesCategory = (cat === "all" || item.category.toLowerCase() === cat);
    
    // 2. Search check (title, caption, location, alt, or category)
    const matchesSearch = !query || (
      item.title.toLowerCase().includes(query) ||
      item.caption.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    return matchesCategory && matchesSearch;
  });

  renderGallery();
}

// 6. Render Gallery Grid
function renderGallery() {
  elements.galleryGrid.innerHTML = "";
  const total = state.filteredList.length;
  elements.visibleCount.textContent = total;

  if (total === 0) {
    elements.emptyState.hidden = false;
    elements.galleryGrid.setAttribute("aria-hidden", "true");
    return;
  }

  elements.emptyState.hidden = true;
  elements.galleryGrid.removeAttribute("aria-hidden");

  // Create cards
  const fragment = document.createDocumentFragment();

  state.filteredList.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "gallery-card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View ${item.title} in lightbox`);
    card.dataset.index = index;

    card.innerHTML = `
      <div class="card-image-wrap">
        <span class="card-category-badge">${escapeHtml(item.category)}</span>
        <img 
          src="${item.thumbUrl}" 
          alt="${escapeHtml(item.alt)}" 
          loading="lazy"
        />
        <div class="card-overlay-icon" aria-hidden="true">
          <div class="overlay-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </div>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-caption">${escapeHtml(item.caption)}</p>
        <div class="card-footer">
          <span class="card-location">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${escapeHtml(item.location)}
          </span>
          <span class="card-photographer">&copy; ${escapeHtml(item.photographer)}</span>
        </div>
      </div>
    `;

    // Graceful image fallback if thumbnail fails
    const imgElement = card.querySelector("img");
    imgElement.addEventListener("error", () => {
      const wrap = card.querySelector(".card-image-wrap");
      wrap.innerHTML = `
        <div class="image-error-fallback">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span>Preview Unavailable</span>
        </div>
      `;
    });

    // Click & Enter/Space listener for opening lightbox
    card.addEventListener("click", () => openLightbox(index));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    fragment.appendChild(card);
  });

  elements.galleryGrid.appendChild(fragment);
}

// 7. Lightbox Functionality
function openLightbox(index) {
  if (index < 0 || index >= state.filteredList.length) return;
  
  state.activeLightboxIndex = index;
  updateLightboxContent();

  // Show dialog modal
  if (typeof elements.lightboxModal.showModal === "function") {
    elements.lightboxModal.showModal();
  } else {
    elements.lightboxModal.setAttribute("open", "");
  }

  document.body.style.overflow = "hidden";
  elements.lightboxCloseBtn.focus();
}

function updateLightboxContent() {
  const item = state.filteredList[state.activeLightboxIndex];
  if (!item) return;

  const total = state.filteredList.length;

  // Show loading indicator
  elements.lightboxLoader.style.opacity = "1";
  elements.lightboxLoader.hidden = false;
  elements.lightboxError.hidden = true;
  elements.lightboxImg.style.opacity = "0";
  elements.lightboxImg.hidden = false;

  // Set Details
  elements.lightboxCounter.textContent = `${state.activeLightboxIndex + 1} of ${total}`;
  elements.lightboxCategory.textContent = item.category;
  elements.lightboxTitle.textContent = item.title;
  elements.lightboxCaption.textContent = item.caption;
  elements.lightboxMeta.textContent = `Location: ${item.location} • Photo by ${item.photographer}`;

  // Preload and switch image
  const highResImg = new Image();
  highResImg.src = item.fullUrl;

  highResImg.onload = () => {
    elements.lightboxImg.src = item.fullUrl;
    elements.lightboxImg.alt = item.alt;
    elements.lightboxLoader.style.opacity = "0";
    setTimeout(() => { elements.lightboxLoader.hidden = true; }, 200);
    elements.lightboxImg.style.opacity = "1";
  };

  highResImg.onerror = () => {
    // If fullUrl fails, fallback to thumbUrl
    if (highResImg.src !== item.thumbUrl) {
      highResImg.src = item.thumbUrl;
    } else {
      elements.lightboxLoader.hidden = true;
      elements.lightboxImg.hidden = true;
      elements.lightboxError.hidden = false;
    }
  };

  // Adjust next/previous button states or loops
  // We keep loop navigation enabled for a smooth slideshow experience
  elements.lightboxPrevBtn.setAttribute("aria-label", `Previous image: ${getWrappedTitle(-1)}`);
  elements.lightboxNextBtn.setAttribute("aria-label", `Next image: ${getWrappedTitle(1)}`);
}

function getWrappedTitle(offset) {
  const total = state.filteredList.length;
  if (total === 0) return "";
  const targetIdx = (state.activeLightboxIndex + offset + total) % total;
  return state.filteredList[targetIdx].title;
}

function navigateLightbox(direction) {
  const total = state.filteredList.length;
  if (total <= 1) return;

  state.activeLightboxIndex = (state.activeLightboxIndex + direction + total) % total;
  updateLightboxContent();
}

function closeLightbox() {
  if (elements.lightboxModal.open) {
    elements.lightboxModal.close();
  }
  document.body.style.overflow = "";
  
  // Return focus to active item in grid if available
  const activeCard = document.querySelector(`.gallery-card[data-index="${state.activeLightboxIndex}"]`);
  if (activeCard) {
    activeCard.focus();
  }
}

// 8. Event Listeners
function attachEventListeners() {
  // Category Filter Buttons
  elements.filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      elements.filterButtons.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      state.currentCategory = button.dataset.category;
      applyFiltersAndRender();
    });
  });

  // Search Input (Real-time debounced feel)
  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    elements.clearSearchBtn.hidden = !state.searchQuery;
    applyFiltersAndRender();
  });

  // Clear Search
  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.clearSearchBtn.hidden = true;
    elements.searchInput.focus();
    applyFiltersAndRender();
  });

  // Reset Filters from Empty State
  elements.resetFilterBtn.addEventListener("click", () => {
    state.searchQuery = "";
    state.currentCategory = "all";
    elements.searchInput.value = "";
    elements.clearSearchBtn.hidden = true;
    
    elements.filterButtons.forEach(b => {
      const isAll = b.dataset.category === "all";
      b.classList.toggle("active", isAll);
      b.setAttribute("aria-pressed", isAll ? "true" : "false");
    });

    applyFiltersAndRender();
    elements.searchInput.focus();
  });

  // Lightbox Close Button
  elements.lightboxCloseBtn.addEventListener("click", closeLightbox);

  // Lightbox Navigation Buttons
  elements.lightboxPrevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(-1);
  });

  elements.lightboxNextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateLightbox(1);
  });

  // Backdrop click closing lightbox:
  // Close when user clicks anywhere in lightbox except the actual image or controls
  elements.lightboxModal.addEventListener("click", (e) => {
    // If click was on the stage or backdrop, but NOT on img or buttons
    const isImage = e.target.closest("#lightbox-img");
    const isNavBtn = e.target.closest(".lightbox-btn");
    const isDetails = e.target.closest("#lightbox-details");

    if (!isImage && !isNavBtn && !isDetails) {
      closeLightbox();
    }
  });

  // Native <dialog> cancel event (Esc key)
  elements.lightboxModal.addEventListener("cancel", (e) => {
    e.preventDefault();
    closeLightbox();
  });

  // Keyboard navigation for lightbox
  window.addEventListener("keydown", (e) => {
    if (!elements.lightboxModal.open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      navigateLightbox(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      navigateLightbox(1);
    }
  });
}

// Utility: HTML Escaping
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
