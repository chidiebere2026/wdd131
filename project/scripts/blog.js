const posts = [
    {
    "category": "Mental Health, Wellness",
    "title": "Finding Light Again: Small Steps Out of Depression",
    "date": "10.05.2026",
    "image": "images/depression.jpg",
    "alt": "A depressed Lady",
    "text": "Depression can make even the smallest tasks feel overwhelming, but healing doesn’t have to happen all at once. Sometimes, the first step is simply getting out of bed, opening a window, or taking a few deep breaths. These small moments matter more than they seem.",
    "author": "Mary Johnson",
    "readingTime": "4 min read"
    
  },
  {
    "category": "Health, Wellness",
    "title": "Moving Forward: How Exercise Supports Mental Health",
    "date": "21.04.2026",
    "image": "images/exercise.jpg",
    "alt": "A person exercising in the park",
    "text": "When you’re struggling with your mental health, the idea of exercise can feel overwhelming—but movement doesn’t have to be intense to make a difference. Even small, gentle activities like a short walk, stretching, or dancing to your favorite song can help lift your mood and clear your mind.",
    "author": "Kevin Minchakpu",
    "readingTime": "4 min read"
  },
  {
    "category": "Wellness",
    "title": "Creating Healthy Daily Habits",
    "date": "15.04.2026",
    "image": "images/depressed.jpg",
    "alt": "Healthy habits",
    "text": "Healthy habits create structure and balance in everyday life, which can be especially beneficial for mental health. Start small by setting a consistent sleep schedule, eating nourishing meals, or dedicating a few minutes each day to mindfulness or journaling. These habits can provide a sense of stability and self-care.",
    "author": "Mary Johnson",
    "readingTime": "3 min read"
},
  {
    "category": "Mental Health",
    "title": "Understanding Anxiety and How to Manage It",
    "date": "01.04.2026",
    "image": "images/anxiety.jpg",
    "alt": "Anxiety awareness",
    "text": "Anxiety affects millions of people worldwide, but simple techniques can help manage it. Deep breathing exercises, grounding techniques, and mindfulness can provide relief during anxious moments. Remember, it’s okay to ask for help and seek support when needed.",
    "author": "Kevin Minchakpu",
    "readingTime": "5 min read",
},
  {
    "category": "Self Growth",
    "title": "The Importance of Self Care",
    "date": "18.03.2026",
    "image": "images/self-care.jpg",
    "alt": "Self care",
    "text": "Taking care of yourself is essential for maintaining good mental and emotional health. Self-care can be as simple as taking a relaxing bath, reading a book, or spending time in nature. Prioritizing self-care helps you recharge and build resilience against life’s challenges.",
    "author": "Mary Johnson",
    "readingTime": "4 min read",
     },
  {
    "category": "Wellness",
    "title": "Building a Positive Mindset",
    "date": "02.03.2026",
    "image": "images/mindset.jpg",
    "alt": "Positive mindset",
    "text": "A positive mindset helps you navigate life challenges with resilience and optimism. Practice gratitude, focus on your strengths, and surround yourself with supportive people. Remember, cultivating a positive mindset is a journey, and it’s okay to have setbacks along the way.",
    "author": "Kevin Minchakpu",
    "readingTime": "3 min read",
    
  }
];

const container = document.getElementById("blog-container");

posts.forEach((post, index) => {

  const reverseClass = index % 2 !== 0 ? "reverse" : "";

 const blogHTML = `
  <div class="blog-row ${reverseClass}">
    
    <div class="blog-image">
      <img src="${post.image}" alt="${post.alt}">
    </div>

    <div class="blog-content">
      <a href="#" class="category">${post.category}</a>
      <h3>${post.title}</h3>

      <!-- Meta Info -->
      <div class="meta">
        <span class="author">By ${post.author}</span>
        <span class="dot">•</span>
        <span class="date">${post.date}</span>
        <span class="dot">•</span>
        <span class="read-time">${post.readTime}</span>
      </div>

      <p>${post.text}</p>

    <a href="#" class="blog-btn">Read more</a>
      </div>
    </div>
  `;

  container.innerHTML += blogHTML;

});