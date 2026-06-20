// ============================================
// DATA ARCHITECTURE - Course Database
// ============================================

const coursesData = [
  {
    id: 1,
    title: "Ajoneuvoalan ammattitutkinto",
    categories: ["Tekniikan alat", "Jatkuva haku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/09/Luksia-ajoneuvoalan-ammattitutkinto-980x480.jpg",
    link: "https://www.luksia.fi/toiminta/ajoneuvoalan-ammattitutkinto-tyonjohdon-osaamisala-ja-korjaamopalveluiden-osaamisala/",
    alt: "Ajoneuvoalan ammattitutkinto - mekaanikon työskentelyä",
  },
  {
    id: 2,
    title: "Ajoneuvoalan perustutkinto",
    categories: ["Jatkuva haku", "Tekniikan alat", "Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/07/WEB_Ajoneuvoasentaja_03-2022_JLe_Z7J0291-980x653.jpg",
    link: "https://www.luksia.fi/toiminta/autoalan-perustutkinto-ajoneuvoasentaja/",
    alt: "Ajoneuvoalan perustutkinto",
  },
  {
    id: 3,
    title: "Animoinnin ja liikegrafiikan tuotanto | osatutkinto",
    categories: ["Jatkuva haku", "Palvelualat", "Yhteishaku"],
    imageUrl: "https://www.luksia.fi/wp-content/uploads/2024/04/Media-ala.jpg",
    link: "https://www.luksia.fi/toiminta/media-alan-valivuosiopinnot-animoinnin-ja-liikegrafiikan-tuotanto/",
    alt: "Animoinnin ja liikegrafiikan tuotanto",
  },
  {
    id: 4,
    title: "Annosruokien valmistus | osatutkinto",
    categories: ["Jatkuva haku", "Palvelualat", "Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2025/01/lohiannos-980x480.webp",
    link: "https://www.luksia.fi/toiminta/annosruokien-valmistus-osatutkinto/",
    alt: "Annosruokien valmistus",
  },
  {
    id: 5,
    title: "Hius- ja kauneudenhoitoalan erikoisammattitutkinto",
    categories: [
      "Jatkuva haku",
      "Kauppa, hallinto ja oikeustiede",
      "Yhteishaku",
    ],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/09/Hius-ja-kauneudenhoitoalan-perustutkinto-Luksia-980x480.jpg",
    link: "https://www.luksia.fi/toiminta/hius-ja-kauneudenhoitoalan-perustutkinto-parturi-kampaaja-ja-kosmetiikkaneuvoja/",
    alt: "Parturi leikkaa asiakkaan hiuksia",
  },
  {
    id: 6,
    title: "Eläintenhoidon ammattitutkinto",
    categories: ["Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/09/Elaintenhoito.jpg",
    link: "https://www.luksia.fi/toiminta/elaintenhoidon-ammattitutkinto/",
    alt: "Eläintenhoidon",
  },
  {
    id: 7,
    title: "Auktorisoidun matkailuoppaan koulutus | osatutkinto",
    categories: ["Terveys- ja hyvinvointialat", "Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/11/Matka-asiantuntija_paakuva_web-980x479.jpg",
    link: "https://www.luksia.fi/toiminta/auktorisoidun-matkailuoppaan-koulutus-osatutkinto/",
    alt: "Auktorisoidun matkailuoppaan koulutus",
  },
  {
    id: 8,
    title: "Hiusala tutuksi",
    categories: ["Kauppa, hallinto ja oikeustiede", "Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/11/WEB_Parturi_03-2022_JLe_Z7J0946-980x653.jpg",
    link: "https://www.luksia.fi/toiminta/hiusala-tutuksi/",
    alt: "Hiusala tutuksi",
  },
  {
    id: 9,
    title: "Taideteollisuusalan perustutkinto",
    categories: ["Humanistiset ja taidealat", "Jatkuva haku", "Yhteishaku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/06/WEB_Puusepanala_03-2022_SMa_K9A9481-980x654.jpg",
    link: "https://www.luksia.fi/toiminta/taideteollisuusalan-perustutkinto-puusepanala-artesaani/",
    alt: "Liikemies tietokoneen ääressä",
  },
  {
    id: 10,
    title: "Lyhytkoulutukset",
    categories: ["Lyhytkoulutukset"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/11/Luksian-koulututarjonta-400x284.jpg",
    link: "https://www.luksia.fi/toiminta/lyhytkoulutukset/",
    alt: "Tulkki työssään",
  },
  {
    id: 11,
    title: "Media-alan ja kuvallisen ilmaisun perustutkinto",
    categories: ["Humanistiset ja taidealat", "Yhteishaku"],
    imageUrl: "https://www.luksia.fi/wp-content/uploads/2024/04/Media-ala.jpg",
    link: "https://www.luksia.fi/toiminta/media-alan-ja-kuvallisen-ilmaisun-perustutkinto-mediapalvelujen-toteuttaja/",
    alt: "Tulkki työssään",
  },
  {
    id: 12,
    title: "Hoiva-avustaja | osatutkinto",
    categories: ["Terveys- ja hyvinvointialat", "Yhteishaku", "Jatkuva haku"],
    imageUrl:
      "https://www.luksia.fi/wp-content/uploads/2023/09/Hoiva-avustaja-vanha-ja-nuori-ihminen-980x480.jpg",
    link: "https://www.luksia.fi/toiminta/hoiva-avustaja/",
    alt: "Tulkki työssään",
  },
];

// ============================================
// FILTER CATEGORIES CONFIGURATION
// ============================================

const filterCategories = [
  { id: "all", label: "Kaikki" },
  { id: "Humanistiset ja taidealat", label: "Humanistiset ja taidealat" },
  {
    id: "Kauppa, hallinto ja oikeustiede",
    label: "Kauppa, hallinto ja oikeustiede",
  },
  { id: "Jatkuva haku", label: "Jatkuva haku" },
  { id: "Yhteishaku", label: "Yhteishaku" },
  { id: "Tekniikan alat", label: "Tekniikan alat" },
  { id: "Terveys- ja hyvinvointialat", label: "Terveys- ja hyvinvointialat" },
  { id: "Lyhytkoulutukset", label: "Lyhytkoulutukset" },
];

// ============================================
// STATE MANAGEMENT
// ============================================

let activeFilter = "all";

// ============================================
// DOM ELEMENTS
// ============================================

const filterContainer = document.getElementById("filter-buttons");
const coursesGrid = document.getElementById("courses-grid");

// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Renders filter buttons dynamically based on filterCategories array
 */
function renderFilterButtons() {
  if (!filterContainer) return;

  filterContainer.innerHTML = "";

  filterCategories.forEach((category, index) => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.textContent = category.label;
    button.setAttribute("data-category", category.id);
    button.setAttribute(
      "aria-pressed",
      category.id === activeFilter ? "true" : "false",
    );
    button.setAttribute("tabindex", "0");

    // Set active class for the first button (Kaikki)
    if (category.id === activeFilter) {
      button.classList.add("active");
    }

    // Add click event listener
    button.addEventListener("click", () => handleFilterClick(category.id));

    // Add keyboard support (Enter and Space)
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleFilterClick(category.id);
      }
    });

    filterContainer.appendChild(button);
  });
}

/**
 * Renders course cards based on filtered data
 * @param {string} filterCategory - Category to filter by ("all" shows everything)
 */
function renderCourseCards(filterCategory = "all") {
  if (!coursesGrid) return;

  // Filter courses based on selected category
  // Course must have at least one matching category
  const filteredCourses =
    filterCategory === "all"
      ? coursesData
      : coursesData.filter((course) =>
          course.categories.includes(filterCategory),
        );

  // Clear existing cards
  coursesGrid.innerHTML = "";

  // If no courses found, show message
  if (filteredCourses.length === 0) {
    coursesGrid.innerHTML = `
      <div class="no-results">
        <p>Valitettavasti yhtään koulutusta ei löytynyt tästä kategoriasta.</p>
      </div>
    `;
    return;
  }

  // Render course cards
  filteredCourses.forEach((course) => {
    const card = document.createElement("a");
    card.className = "course-card";
    card.href = course.link;
    card.setAttribute(
      "aria-label",
      `${course.title} - ${course.categories.join(", ")}`,
    );
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
      <div class="course-card-image">
        <img src="${course.imageUrl}" alt="${course.alt}" loading="lazy" />
      </div>
      <div class="course-card-content">
        <h3 class="course-card-title">${course.title}</h3>
      </div>
    `;

    coursesGrid.appendChild(card);
  });
}

/**
 * Handles filter button click events
 * @param {string} categoryId - ID of the selected category
 */
function handleFilterClick(categoryId) {
  // Update active filter
  activeFilter = categoryId;

  // Update button states
  const allButtons = filterContainer.querySelectorAll(".filter-btn");
  allButtons.forEach((btn) => {
    const isActive = btn.getAttribute("data-category") === categoryId;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  // Re-render course cards with filter
  renderCourseCards(categoryId);
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the course search functionality
 */
function initCourseSearch() {
  renderFilterButtons();
  renderCourseCards(activeFilter);
}

// Wait for DOM to be fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCourseSearch);
} else {
  initCourseSearch();
}
