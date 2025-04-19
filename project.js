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
      title: "Kedarnath Travel",
      image: "./src/png/kedarnath_webpge.png",
      overview: "A real-time analytics dashboard for tracking sales and inventory.",
      features: [
        "Real-time data visualization",
        "Inventory management system",
        "Sales forecasting with ML",
        "User permission controls",
        "Customizable reporting"
      ],
      technologies: ["🌐 React", "📊 D3.js", "🔥 Firebase", "🧠 TensorFlow.js"],
      challenges: "Implemented complex data visualization while maintaining performance. Created a responsive design that works across all device sizes.",
      outcome: "Increased business efficiency by 40% through actionable insights and automated inventory alerts."
    },
    // Add more projects as needed
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