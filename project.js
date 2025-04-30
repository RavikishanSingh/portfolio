// Store all your project data in this object
const projectData = {
    "project1": {
      title: "YouTube Video Downloader",
      image: "./src/png/project1.png",
      overview: "The YouTube Video Downloader is a Python-based application that allows users to download videos in various resolutions and formats using the pytube library.",
      features: [
        "Download videos in different resolutions (720p, 1080p, 4K, audio-only)",
        "Fast and efficient multi-threaded downloading",
        "User-friendly GUI with Tkinter",
        "MP4 and MP3 format support",
        "Clipboard Auto-Paste for easy link detection"
      ],
      technologies: ["🖥️ Python", "🎞️ Pytube", "🖼️ Tkinter", "⚡ Threading"],
      challenges: "Overcame YouTube API restrictions by regularly updating the pytube library. Optimized download speed with multi-threading. Implemented robust error handling for invalid URLs and network issues.",
      outcome: "A simple yet powerful tool that makes YouTube video downloading seamless and efficient."
    },
    "project2": {
  "title": "Mico – Voice Assistant Using Python",
  "image": "./src/png/mico.jpeg",
  "overview": "Mico is an intelligent voice assistant developed in Python that executes voice-based commands to perform tasks like searching the web, playing music, telling the time, and opening applications. It showcases my skills in speech recognition, text-to-speech synthesis, and system automation using Python libraries.",
  "features": [
    "Speech recognition for real-time voice input",
    "Text-to-speech response system",
    "Web search and browser automation",
    "Time and date announcements",
    "Application launcher through voice commands"
  ],
  "technologies": ["🐍 Python", "🗣️ SpeechRecognition", "🔊 pyttsx3", "🌐 Webbrowser", "📁 OS module"],
  "challenges": "Ensured accurate speech recognition in noisy environments and managed multiple user inputs efficiently without lag.",
  "outcome": "Successfully built a lightweight, fully functional voice assistant that automates routine tasks and enhances productivity through voice interaction."
},
   "project3": {
  "title": "WhatsApp Bulk Messenger with UI Using Python",
  "image": "./src/png/bulk messanger.png",
  "overview": "A Python-based desktop tool that allows users to send WhatsApp messages in bulk through an intuitive user interface. It reads contact numbers and messages from an Excel file and sends them one by one using WhatsApp Web automation. Designed to streamline communication without violating WhatsApp's usage policies.",
  "features": [
    "Read phone numbers and messages from Excel",
    "Automated messaging via WhatsApp Web",
    "Simple and user-friendly interface",
    "Sequential message delivery to avoid detection",
    "No manual clicks after login"
  ],
  "technologies": ["🐍 Python", "📊 openpyxl", "💻 Tkinter", "🌐 Selenium", "🧾 Excel"],
  "challenges": "Ensured reliable browser automation without triggering WhatsApp security flags, and optimized message delays to avoid being flagged as spam.",
  "outcome": "Delivered a tool that simplifies WhatsApp outreach for businesses and individuals, saving time and reducing manual effort while maintaining user privacy."
},
"project4": {
  "title": "Snake Game in C with UI",
  "image": "./src/png/snake2.png",
  "overview": "A classic Snake game developed in C with a simple graphical user interface. The game features real-time movement, score tracking, food generation, and game-over conditions. It demonstrates logic building, user input handling, and terminal/graphic-based UI implementation in the C programming language.",
  "features": [
    "Classic snake movement and growth logic",
    "Real-time keyboard input handling",
    "Score tracking and display",
    "Food spawning at random positions",
    "Game-over condition and restart option"
  ],
  "technologies": ["💻 C Language", "🧱 Graphics.h (or SDL if used)", "⌨️ Console/GUI Input"],
  "challenges": "Managed real-time input without blocking the game loop and ensured smooth rendering of game objects within a constrained terminal or graphics window.",
  "outcome": "Created a fully playable and responsive Snake game in C, showcasing low-level logic implementation and interactive UI development."
},
   "project5": {
  "title": "QR Generator and Reader Using Python for Web",
  "image": "./src/png/QR.png",
  "overview": "A web-based application developed in Python to generate and read QR codes. The QR generator allows users to create QR codes for URLs, texts, and other data, while the QR reader can scan and decode QR codes using a webcam or uploaded images. This project showcases web development skills using Python, Flask, and relevant QR code libraries.",
  "features": [
    "QR Code generation for URLs, texts, and other data",
    "Real-time QR code scanning using webcam",
    "Decode QR codes from uploaded images",
    "Simple and intuitive user interface",
    "Instant QR code download option"
  ],
  "technologies": ["🐍 Python", "🌐 Flask", "⚡ QRCode", "📸 OpenCV", "🖼️ Pillow"],
  "challenges": "Ensured compatibility with various devices for scanning and decoding, and implemented efficient image processing for accurate QR code detection.",
  "outcome": "Created a functional web application that allows users to easily generate and scan QR codes for various uses, improving user experience with a seamless interface."
},
  };
  
  // Function to open modal with specific project data
  function openProjectModal(projectId) {
    // Get the project data
    const project = projectData[projectId];
    if (!project) return; 
    
    // Update modal content
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalImage").alt = project.title;
    
    // Update project overview
    const modalText = document.querySelector(".modal-text");
    
    // Clear existing content except title
    modalText.innerHTML = `<h2 id="modalTitle">${project.title}</h2>`;
    
    // Add overview
    modalText.innerHTML += `
      <strong>Project Overview</strong>
      <p>${project.overview}</p>
      
      <strong>Key Features</strong>
      <ul class="feature-list">
        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      
      <strong>Technologies Used</strong>
      <div class="tech-stack">
        ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
      </div>
      
      <strong>Challenges & Solutions</strong>
      <p>${project.challenges}</p>
      
      <strong>Project Outcome</strong>
      <p>${project.outcome}</p>
    `;
    
    // Show the modal
    document.getElementById("projectModal").style.display = "flex";
  }
  
  // Close modal function
  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    // Reset fullscreen mode if active
    document.getElementById("projectModal").classList.remove("fullscreen-mode");
  }
  
  // Toggle fullscreen image mode
  function toggleFullscreenImage() {
    const modal = document.getElementById("projectModal");
    modal.classList.toggle("fullscreen-mode");
  }
  
  // Image zoom functionality
  let currentZoom = 1;
  function zoomImage(change) {
    const img = document.getElementById("modalImage");
    
    if (change === 0) {
      // Reset to 100%
      currentZoom = 1;
    } else {
      // Adjust zoom
      currentZoom += change;
      // Limit zoom range (20% to 300%)
      currentZoom = Math.max(0.2, Math.min(3, currentZoom));
    }
    
    img.style.transform = `scale(${currentZoom})`;
  }