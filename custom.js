<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    let modals = document.querySelectorAll(".modal");
    let closeButtons = document.querySelectorAll(".close");

    function openModal(modalId) {
      document.getElementById(modalId).style.display = "flex";
    }

    function closeModal(modalId) {
      document.getElementById(modalId).style.display = "none";
    }

    window.addEventListener("click", function (event) {
      modals.forEach((modal) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });

    closeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        let modal = this.closest(".modal");
        modal.style.display = "none";
      });
    });

    let buttons = document.querySelectorAll(".know-more-btn");
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        let modalId = this.getAttribute("data-modal");
        openModal(modalId);
      });
    });
  });
</script>

<script>
  const cursorInner = document.getElementById("cursor-inner");
  const cursorOuter = document.getElementById("cursor-outer");
  const links = document.querySelectorAll("a,label,button");

  document.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorInner.style.left = `${posX}px`;
    cursorInner.style.top = `${posY}px`;

    cursorOuter.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursorInner.classList.add("hover");
        cursorOuter.classList.add("hover");
      });
      link.addEventListener("mouseleave", () => {
        cursorInner.classList.remove("hover");
        cursorOuter.classList.remove("hover");
      });
    });
  });
</script>

<script>
  let isFullscreen = false;
  let currentZoom = 1;

  function toggleFullscreenImage() {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');

    isFullscreen = !isFullscreen;

    if (isFullscreen) {
      modal.classList.add('fullscreen-mode');
      modalImage.style.cursor = 'zoom-out';
      currentZoom = 1;
      updateImageZoom();
      enableImageDragScroll();
    } else {
      modal.classList.remove('fullscreen-mode');
      modalImage.style.cursor = 'zoom-in';
      modalImage.style.transform = 'scale(1)';
      disableImageDragScroll();
    }
  }

  function zoomImage(zoomChange) {
    if (zoomChange === 0) {
      currentZoom = 1;
    } else {
      currentZoom += zoomChange;
      if (currentZoom < 0.5) currentZoom = 0.5;
      if (currentZoom > 3) currentZoom = 3;
    }
    updateImageZoom();
  }

  function updateImageZoom() {
    const modalImage = document.getElementById('modalImage');
    modalImage.style.transform = `scale(${currentZoom})`;
  }

  let isDragging = false;
  let startX, startY, scrollLeft, scrollTop;

  function enableImageDragScroll() {
    const imageContainer = document.querySelector('.modal.fullscreen-mode .modal-image-container');
    if (!imageContainer) return;

    imageContainer.addEventListener('mousedown', startDrag);
    imageContainer.addEventListener('mousemove', dragImage);
    imageContainer.addEventListener('mouseup', endDrag);
    imageContainer.addEventListener('mouseleave', endDrag);
  }

  function disableImageDragScroll() {
    const imageContainer = document.querySelector('.modal-image-container');
    if (!imageContainer) return;

    imageContainer.removeEventListener('mousedown', startDrag);
    imageContainer.removeEventListener('mousemove', dragImage);
    imageContainer.removeEventListener('mouseup', endDrag);
    imageContainer.removeEventListener('mouseleave', endDrag);
  }

  function startDrag(e) {
    isDragging = true;
    startX = e.pageX - this.offsetLeft;
    startY = e.pageY - this.offsetTop;
    scrollLeft = this.scrollLeft;
    scrollTop = this.scrollTop;
    this.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function dragImage(e) {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    const walkX = (x - startX) * 1.5;
    const walkY = (y - startY) * 1.5;
    this.scrollLeft = scrollLeft - walkX;
    this.scrollTop = scrollTop - walkY;
  }

  function endDrag() {
    isDragging = false;
    this.style.cursor = 'grab';
  }

  function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    if (isFullscreen) toggleFullscreenImage();
  }
</script>
