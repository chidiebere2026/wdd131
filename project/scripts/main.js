// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); 
  navMenu.classList.toggle("active");  
});

// Articles Cards 

// Get stored cards or initialize default cards
let cardsData = JSON.parse(localStorage.getItem('cardsData')) || [
 {
  image: "images/sunrise-hope.jpg",
  category: "Mental Health, Wellness",
  date: "2032-08-10",
  title: "Finding Light Again: Small Steps Out of Depression",
  text: "Recovery doesn’t happen overnight. It begins with small, consistent steps—getting out of bed, reaching out, and choosing hope even on difficult days.",
  authorName: "Dr. Maya Collins",
  authorRole: "Clinical Psychologist",
  authorImage: "images/maya.jpg"
},
{
  image: "images/journal.jpg",
  category: "Self-Care, Growth",
  date: "2032-08-12",
  title: "Journaling Through the Darkness: Writing as Healing",
  text: "Putting your thoughts on paper can help you process emotions, identify patterns, and create space for clarity and self-understanding.",
  authorName: "Liam Carter",
  authorRole: "Wellness Coach",
  authorImage: "images/liam.jpg"
},
{
  image: "images/nature-walk.jpg",
  category: "Lifestyle, Mental Health",
  date: "2032-08-15",
  title: "Nature Therapy: How the Outdoors Can Lift Your Mood",
  text: "Spending time outside, even for a few minutes, can reduce stress, improve mood, and reconnect you with a sense of calm and balance.",
  authorName: "Ava Green",
  authorRole: "Mindfulness Trainer",
  authorImage: "images/ava.jpg"
},
{
  image: "images/support-group.jpg",
  category: "Community, Support",
  date: "2032-08-18",
  title: "You’re Not Alone: The Power of Support Systems",
  text: "Opening up to others can feel difficult, but connection is one of the most powerful tools in overcoming depression.",
  authorName: "Daniel Brooks",
  authorRole: "Mental Health Advocate",
  authorImage: "images/daniel.jpg"
},
{
  image: "images/meditation.jpg",
  category: "Mindfulness, Healing",
  date: "2032-08-20",
  title: "Quieting the Mind: Meditation for Emotional Balance",
  text: "Practicing mindfulness and meditation can help you stay present, reduce negative thoughts, and build emotional resilience over time.",
  authorName: "Sophia Lee",
  authorRole: "Meditation Instructor",
  authorImage: "images/sophia.jpg"
},
{
  image: "images/fitness.jpg",
  category: "Health, Wellness",
  date: "2032-08-22",
  title: "Moving Forward: How Exercise Supports Mental Health",
  text: "Physical activity releases endorphins, boosts energy, and can be a powerful ally in improving mood and reducing symptoms of depression.",
  authorName: "Ethan Walker",
  authorRole: "Fitness Therapist",
  authorImage: "images/ethan.jpg"
},
{
  image: "images/therapy-session.jpg",
  category: "Mental Health, Recovery",
  date: "2032-08-25",
  title: "Speaking Up: How Therapy Can Help You Heal",
  text: "Talking to a professional provides a safe space to explore your thoughts, understand your emotions, and develop healthy coping strategies.",
  authorName: "Dr. Elena Morris",
  authorRole: "Licensed Therapist",
  authorImage: "images/elena.jpg"
},
{
  image: "images/self-care.jpg",
  category: "Wellness, Self-Care",
  date: "2032-08-28",
  title: "Rebuilding Yourself: Daily Habits to Fight Depression",
  text: "Simple routines like proper sleep, balanced meals, and mindful breaks can gradually rebuild your strength and improve your mental well-being.",
  authorName: "James Carter",
  authorRole: "Wellness Consultant",
  authorImage: "images/james.jpg"
}
];

// Function to save cards to localStorage
function saveCards() {
    localStorage.setItem('cardsData', JSON.stringify(cardsData));
}

// Function to render cards dynamically
function loadCards() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = '';
    cardsData.forEach(card => {
        const cardHTML = `
        <div class="card">
            <img src="${card.image}" alt="${card.title}" loading="lazy">
            <div class="card-content">
                <div class="card-meta">${card.category} — ${new Date(card.date).toLocaleDateString()}</div>
                <div class="card-title">${card.title}</div>
                <div class="card-text">${card.text}</div>
                <div class="card-author">
                    <img src="${card.authorImage}" alt="${card.authorName}" loading="lazy">
                    <span>${card.authorName} — ${card.authorRole}</span>
                </div>
            </div>
        </div>`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Handle form submission
document.getElementById('cardForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const newCard = {
        title: form.title.value,
        category: form.category.value,
        date: form.date.value,
        text: form.text.value,
        authorName: form.authorName.value,
        authorRole: form.authorRole.value,
        image: form.image.value,
        authorImage: form.authorImage.value
    };
    // Conditional check: ensure title is not empty
    if(newCard.title.trim() === "") {
        alert("Title cannot be empty.");
        return;
    }
    cardsData.push(newCard);
    saveCards();
    loadCards();
    form.reset();
});

// Load cards and footer info on page load
window.addEventListener('DOMContentLoaded', () => {
    loadCards();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});


// Dynamic Copyright Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified Date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;