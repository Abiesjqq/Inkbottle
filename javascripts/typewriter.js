(function () {
  const phrases = Array.isArray(window.TYPEWRITER_PHRASES)
    ? window.TYPEWRITER_PHRASES
    : [];

  if (!phrases.length) {
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typewriterElement = null;

  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;
  const startDelay = 500;

  function typeWriter() {
    if (!typewriterElement) {
      typewriterElement = document.getElementById("typewriter-text");
      if (!typewriterElement) {
        setTimeout(typeWriter, 100);
        return;
      }
    }

    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
      charIndex--;
      typewriterElement.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeWriter, startDelay);
      } else {
        setTimeout(typeWriter, deleteSpeed);
      }
    } else {
      charIndex++;
      typewriterElement.textContent = currentPhrase.substring(0, charIndex);

      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeWriter, pauseTime);
      } else {
        setTimeout(typeWriter, typeSpeed);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(typeWriter, startDelay);
    });
  } else {
    setTimeout(typeWriter, startDelay);
  }
})();
