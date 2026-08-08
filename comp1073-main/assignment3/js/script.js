
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
const studentInfoEl= document.getElementById("student-info");
const searchForm= document.getElementById("search-form");
const searchInput=document.getElementById("gallery-input");
const galleryGrid=document.getElementById("gallery-grid");
const galleryStatus= DocumentFragment.getElementById("gallery-status");

const modalOverlay= document.getElementById("modal-overlay");
const modalClose= document.getElementById("modal-close");
const modalImage= document.getElementById("modal-image");
const modalTitle=document.getElementById("modal-title");
const modalArtist=document.getElementById("modal-artist");
const modalDate=document.getElementById("modal-date");
const modalMedium=document.getElementById("modal-medium");
const modalCredit=document.getElementById("modal-credit");

document.addEventListener("DOMContentLoaded", ()=>{

    
})