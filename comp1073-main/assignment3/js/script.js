// COMP1073 Assignment 3 — Art Institute of Chicago API
// Docs: https://api.artic.edu/docs/ (no API key needed)

// Student info
const STUDENT_ID = "200652992";
const STUDENT_NAME = "Melika Kashef";

// API endpoint + the fields we want back for each artwork
const API_BASE = "https://api.artic.edu/api/v1/artworks/search";
const FIELDS = "id,title,artist_display,date_display,medium_display,credit_line,image_id";

// Builds the image URL from an artwork's image_id
function buildImageUrl(imageId, width = 600) {
  return `https://www.artic.edu/iiif/2/${imageId}/full/${width},/0/default.jpg`;
}

// DOM references
const studentInfoEl = document.getElementById("student-info");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const galleryGrid = document.getElementById("gallery-grid");
const galleryStatus = document.getElementById("gallery-status"); 

const modalOverlay = document.getElementById("modal-overlay");
const modalClose = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalArtist = document.getElementById("modal-artist");
const modalDate = document.getElementById("modal-date");
const modalMedium = document.getElementById("modal-medium");
const modalCredit = document.getElementById("modal-credit");

document.addEventListener("DOMContentLoaded", () => {
  renderStudentInfo();
  searchArtworks("landscape"); // default gallery on load

  searchForm.addEventListener("submit", handleSearchSubmit);
  modalClose.addEventListener("click", closeModal);

  // close modal on outside click or Escape
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });
});

// Adds student ID + name to the page
function renderStudentInfo() {
  studentInfoEl.textContent = `Student ID: ${STUDENT_ID} — ${STUDENT_NAME}`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const query = searchInput.value.trim();
  if (query.length === 0) return;
  searchArtworks(query);
}

// Fetches artworks matching the query and renders them
async function searchArtworks(query) {
  galleryStatus.textContent = `Searching the collection for "${query}"…`;
  galleryGrid.innerHTML = "";

  const url = `${API_BASE}?q=${encodeURIComponent(query)}&fields=${FIELDS}&limit=24`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API responded with status ${response.status}`);

    const data = await response.json();
    const artworks = data.data || [];

    // skip results with no image — nothing to show
    const withImages = artworks.filter((art) => art.image_id);

    if (withImages.length === 0) {
      galleryStatus.textContent = `No illustrated results for "${query}". Try another search.`;
      return;
    }

    galleryStatus.textContent = `Showing ${withImages.length} works for "${query}"`;
    renderGallery(withImages);
  } catch (error) {
    console.error("Error fetching artworks:", error);
    galleryStatus.textContent = "";
    galleryGrid.innerHTML = `<p class="gallery-error">Something went wrong reaching the gallery. Please try again.</p>`;
  }
}

// Builds one card per artwork
function renderGallery(artworks) {
  galleryGrid.innerHTML = "";

  artworks.forEach((art) => {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";
    card.setAttribute("aria-label", `View details for ${art.title}`);

    const thumbUrl = buildImageUrl(art.image_id, 500);

    card.innerHTML = `
      <div class="gallery-card__frame">
        <img src="${thumbUrl}" alt="${escapeHtml(art.title)}" loading="lazy" referrerpolicy="no-referrer" />
      </div>
      <div class="gallery-card__plate">
        <p class="gallery-card__title">${escapeHtml(art.title)}</p>
        <p class="gallery-card__meta">${escapeHtml(art.date_display || "Date unknown")}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(art));
    galleryGrid.appendChild(card);
  });
}

// Fills in and opens the detail modal
function openModal(art) {
  modalImage.src = buildImageUrl(art.image_id, 900);
  modalImage.alt = art.title;
  modalTitle.textContent = art.title;
  modalArtist.textContent = art.artist_display || "Artist unknown";
  modalDate.textContent = art.date_display || "";
  modalMedium.textContent = art.medium_display || "";
  modalCredit.textContent = art.credit_line || "";

  modalOverlay.classList.add("is-open");
}

function closeModal() {
  modalOverlay.classList.remove("is-open");
}

// Prevents API text from being injected as raw HTML
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}