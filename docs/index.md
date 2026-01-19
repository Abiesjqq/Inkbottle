---
title: Hi, visitor
hide:
  #   - navigation # 显示右
  #   - toc #显示左
  - footer
  - feedback
# comments: true
---

<!-- 加载 Inter 字体 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap" rel="stylesheet">

<!-- 预加载头像图片 -->
<link rel="preload" href="docs/assets/avatar_github.png" as="image" fetchpriority="high">
<!-- abies-header.html -->
<div class="abies-header-row">
  <!-- 左侧：文字内容 -->
  <div class="abies-header-text">
    <div class="abies-header-title">Hi, I'm <span class="abies-name-box"><span class="name-text">Abies</span><span class="corner-bl"></span><span class="corner-br"></span></span></div>
    <div class="abies-header-subtitle">
      <span class="abies-header-subtitle-inner">
        <span id="typewriter-text"></span><span class="typewriter-cursor">|</span>
      </span>
    </div>
  </div>
  <!-- 右侧：头像及光辉 -->
  <div class="abies-header-avatar">
    <div class="flip-glow-ultimate">
      <div class="flip-glow-ultimate-glow"></div>
      <div class="flip-glow-ultimate-imgs">
        <img src="./assets/images/avatar_github.png" alt="Back Image" class="flip-glow-ultimate-front" loading="eager" fetchpriority="high" width="190" height="190">
        <img src="./assets/images/avatar_purple.jpg" alt="Front Image" class="flip-glow-ultimate-back" loading="lazy" width="190" height="190">
      </div>
    </div>
  </div>
</div>

<style>
/* 仅首页：禁用左右悬停显示的 nav/toc */
.md-sidebar.md-sidebar--primary .md-sidebar__inner,
.md-sidebar.md-sidebar--secondary .md-sidebar__inner,
.md-sidebar.md-sidebar--primary:hover .md-sidebar__inner,
.md-sidebar.md-sidebar--secondary:hover .md-sidebar__inner,
.md-sidebar.md-sidebar--primary .md-sidebar__scrollwrap:hover .md-sidebar__inner,
.md-sidebar.md-sidebar--secondary .md-sidebar__scrollwrap:hover .md-sidebar__inner {
  opacity: 0 !important;
  transform: translateX(0) !important;
  pointer-events: none !important;
}
</style>

<!-- 打字机效果脚本 -->
<script>
  window.TYPEWRITER_PHRASES = [
    "Ah… you’ve stepped into the inkbottle! The ink clings to your soul, seeping into the quietest corners. Be still. Some stories prefer to be touched, not chased."
  ];
</script>

<br>


<link rel="stylesheet" href="/stylesheets/card_base.css" />
<link rel="stylesheet" href="/stylesheets/cards.css" />

<style>
  .card-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .card-slot .cards {
    width: clamp(180px, 24vw, 260px);
  }
</style>

<div class="card-row">
  <div class="card-slot" data-name="Writeups" data-img="/assets/card_images/writeups.png"></div>
  <div class="card-slot" data-name="RISC-V" data-img="/assets/card_images/riscv.png"></div>
  <div class="card-slot" data-name="QR Code" data-img="/assets/card_images/qrcode.png"></div>
</div>

<script src="/javascripts/card_tilt.js" defer></script>
