// COMP1073 Assignment 3 — iTunes Search API
// Docs: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html
// No API key needed.

// Student info
const STUDENT_ID = "200652992";
const STUDENT_NAME = "Melika Kashef";

// API endpoint — searches the iTunes catalog for songs
const API_BASE = "https://itunes.apple.com/search";

// iTunes gives back a small 100x100 artwork URL by default.
// Swapping "100x100" for a bigger size in the URL gets a higher-res image.
function upscaleArtwork(url, size = 600) {
  return url.replace("100x100", `${size}x${size}`);
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
const modalAudio = document.getElementById("modal-audio");

document.addEventListener("DOMContentLoaded", () => {
  renderStudentInfo();
  searchTracks("lana del rey"); // default gallery on load

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
  searchTracks(query);
}

// Fetches tracks matching the query and renders them
async function searchTracks(query) {
  galleryStatus.textContent = `Searching for "${query}"…`;
  galleryGrid.innerHTML = "";

  const url = `${API_BASE}?term=${encodeURIComponent(query)}&media=music&entity=song&limit=24`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API responded with status ${response.status}`);

    const data = await response.json();
    const tracks = data.results || [];

    // skip results with no artwork — nothing to show
    const withArt = tracks.filter((track) => track.artworkUrl100);

    if (withArt.length === 0) {
      galleryStatus.textContent = `No results for "${query}". Try another search.`;
      return;
    }

    galleryStatus.textContent = `Showing ${withArt.length} tracks for "${query}"`;
    renderGallery(withArt);
  } catch (error) {
    console.error("Error fetching tracks:", error);
    galleryStatus.textContent = "";
    galleryGrid.innerHTML = `<p class="gallery-error">Something went wrong reaching the catalog. Please try again.</p>`;
  }
}

// Builds one card per track
function renderGallery(tracks) {
  galleryGrid.innerHTML = "";

  tracks.forEach((track) => {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";
    card.setAttribute("aria-label", `View details for ${track.trackName}`);

    const thumbUrl = upscaleArtwork(track.artworkUrl100, 400);

    card.innerHTML = `
      <div class="gallery-card__frame">
        <img src="${thumbUrl}" alt="${escapeHtml(track.trackName)}" loading="lazy" referrerpolicy="no-referrer" />
      </div>
      <div class="gallery-card__plate">
        <p class="gallery-card__title">${escapeHtml(track.trackName)}</p>
        <p class="gallery-card__meta">${escapeHtml(track.artistName)}</p>
      </div>
    `;

    card.addEventListener("click", () => openModal(track));
    galleryGrid.appendChild(card);
  });
}

// Fills in and opens the detail modal
function openModal(track) {
  modalImage.src = upscaleArtwork(track.artworkUrl100, 600);
  modalImage.alt = track.trackName;
  modalTitle.textContent = track.trackName;
  modalArtist.textContent = track.artistName;
  modalDate.textContent = track.releaseDate ? track.releaseDate.slice(0, 4) : "";
  modalMedium.textContent = [track.collectionName, track.primaryGenreName]
    .filter(Boolean)
    .join(" — ");

  // Some tracks don't have a preview clip available
  if (track.previewUrl) {
    modalAudio.src = track.previewUrl;
    modalAudio.style.display = "block";
  } else {
    modalAudio.removeAttribute("src");
    modalAudio.style.display = "none";
  }

  modalOverlay.classList.add("is-open");
}

function closeModal() {
  modalAudio.pause();
  modalOverlay.classList.remove("is-open");
}

// Prevents API text from being injected as raw HTML
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}