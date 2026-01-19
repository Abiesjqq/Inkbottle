(() => {
  const hero = document.querySelector(".page-hero");
  if (!hero) return;
  const bg = hero.querySelector(".page-hero__bg");
  const flower = hero.querySelector(".page-hero__flower");
  if (!bg || !flower) return;

  const bgSpeed = 0;
  const flowerSpeed = -0.9;
  let ticking = false;

  const update = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    bg.style.setProperty("--hero-bg-offset", `${scrollY * bgSpeed}px`);
    flower.style.setProperty("--hero-flower-offset", `${scrollY * flowerSpeed}px`);

    const bgRect = bg.getBoundingClientRect();
    const flowerRect = flower.getBoundingClientRect();
    const clip = Math.max(
      0,
      Math.min(bgRect.height, Math.floor(flowerRect.bottom - bgRect.top))
    );
    bg.style.setProperty("--hero-bg-clip", `${clip}px`);
    const gap = Math.max(0, bgRect.height - clip);
    hero.style.setProperty("--hero-gap", `${gap}px`);
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    window.requestAnimationFrame(update);
    ticking = true;
  };

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
})();
