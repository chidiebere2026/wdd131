// ===============================
// Temple Data Array
// ===============================
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome, Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 3810,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
  },
  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, Utah",
    dedicated: "1893, April, 6-24",
    area: 116000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
  }
];

// ===============================
// DOM Reference
// ===============================
const templesElement = document.querySelector("#temples");

// ===============================
// Display Temples Function
// ===============================
function displayTemples(templeList) {
  templesElement.innerHTML = "";

  templeList.forEach((temple) => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const image = document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    // Native lazy loading
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templesElement.appendChild(card);
  });
}

// ===============================
// Helper Function
// ===============================
function getYear(dedicatedDate) {
  return Number(dedicatedDate.split(",")[0]);
}

// ===============================
// Navigation Filtering
// ===============================
document.querySelector("#home").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => getYear(t.dedicated) < 1900));
});

document.querySelector("#new").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => getYear(t.dedicated) > 2000));
});

document.querySelector("#large").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area > 90000));
});

document.querySelector("#small").addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples.filter(t => t.area < 10000));
});

// ===============================
// Initial Page Load
// ===============================
displayTemples(temples);

// ===============================
// Footer Dates
// ===============================
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ===============================
// Hamburger Menu
// ===============================
const hamburgerBtn = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  hamburgerBtn.textContent = hamburgerBtn.textContent === "☰" ? "✖" : "☰";
});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector("#home").classList.add("active");