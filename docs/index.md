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
        <img src="./assets/avatar_github.png" alt="Back Image" class="flip-glow-ultimate-front" loading="eager" fetchpriority="high" width="190" height="190">
        <img src="./assets/avatar_purple.jpg" alt="Front Image" class="flip-glow-ultimate-back" loading="lazy" width="190" height="190">
      </div>
    </div>
  </div>
</div>


<style>
/* ====== 布局主容器 ====== */
.abies-header-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 64px;
  margin: 70px 0 16px;
  width: calc(100vw + 380px);
  margin-left: calc(50% - 50vw - 200px);
  margin-right: 0;
  flex-wrap: wrap;
  min-height: 320px;
  /* Safari flexbox 兼容性 */
  -webkit-box-align: start;
  -webkit-box-pack: center;
}

/* ====== 左侧文字区 ====== */
.abies-header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  max-width: 800px;
  flex: 1 1 320px;
  padding: 0;
  /* transform: translateX(-10px); */
}

.abies-header-title {
  font-size: 1.9rem;
  font-family: 'Inter', 'Montserrat', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 18px;
  color: #4a4a4a;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
}

/* abies 名字带边框效果 */
.abies-name-box {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 4px 14px;
  margin-left: 8px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px dashed #6b8e6b;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(107, 142, 107, 0.15);
  vertical-align: middle;
}

/* 四角小方块装饰 */
.abies-name-box::before,
.abies-name-box::after,
.abies-name-box .corner-bl,
.abies-name-box .corner-br {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.abies-name-box::before {
  top: -3px;
  left: -3px;
}

.abies-name-box::after {
  top: -3px;
  right: -3px;
}

.abies-name-box .corner-bl {
  position: absolute;
  bottom: -3px;
  left: -3px;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.abies-name-box .corner-br {
  position: absolute;
  bottom: -3px;
  right: -3px;
  width: 6px;
  height: 6px;
  background: #6b8e6b;
  border-radius: 1.5px;
}

.abies-name-box .name-text {
  font-weight: 800;
  color: #2d3436;
  font-size: 1em;
  line-height: 1.2;
}

/* 深色模式适配 */
[data-md-color-scheme="slate"] .abies-name-box {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  border-color: #68d391;
  box-shadow: 0 2px 8px rgba(104, 211, 145, 0.2);
}

[data-md-color-scheme="slate"] .abies-name-box::before,
[data-md-color-scheme="slate"] .abies-name-box::after,
[data-md-color-scheme="slate"] .abies-name-box .corner-bl,
[data-md-color-scheme="slate"] .abies-name-box .corner-br {
  background: #68d391;
}

[data-md-color-scheme="slate"] .abies-name-box .name-text {
  color: #f7fafc;
}

.abies-header-subtitle {
  font-size: 1.4rem;
  font-weight: bold;
  color: #6D6D6D;
  position: relative;
  margin-bottom: 22px;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  white-space: normal; /* 允许文本换行 */
}

.abies-header-subtitle-inner {
  color: #6D6D6D;
  position: relative;
  display: block;
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  width: 100%;
  min-width: 280px; /* 防止打字时宽度跳动 */
}

/* 打字机光标样式 */
.typewriter-cursor {
  display: inline-block;
  color: #518FC1;
  font-weight: 300;
  animation: blink 1s steps(1, end) infinite;
  margin-left: 2px;
  /* 跨浏览器优化 */
  -webkit-animation: blink 1s steps(1, end) infinite;
  will-change: opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@-webkit-keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

/* 添加深色模式的文字颜色适配 */
[data-md-color-scheme="slate"] .abies-header-subtitle {
  color: #757575;
}

[data-md-color-scheme="slate"] .abies-header-subtitle-inner {
  color: #b0b0b0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

[data-md-color-scheme="slate"] .abies-header-motto {
  color: #d0d0d0;
}

.abies-header-motto {
  /* font-family: 'LXGW WenKai', sans-serif; */
  font-size: 1.2rem;
  color: #757575;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 22px;
  opacity: 0.92;
}

.abies-header-btns {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

/* Safari 按钮兼容性修复 */
.abies-header-btns .md-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  flex-shrink: 0;
  -webkit-appearance: none;
  -webkit-user-select: none;
}

.abies-header-btns .md-button .twemoji {
  display: inline-flex;
  align-items: center;
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
}

.abies-header-btns .md-button .twemoji svg {
  width: 100%;
  height: 100%;
}


/* ====== 右侧头像区 ====== */
.abies-header-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 190px;
  flex: 0 0 190px;
  transform: translateX(10px);
}

.flip-glow-ultimate {
  position: relative;
  width: 190px;
  height: 190px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 彩虹渐变动画 - 完全复刻VitePress效果 */
@keyframes rainbow {
  0% { --rainbow-prev: #009ff7; --rainbow-next: #c76dd1; }
  1.25% { --rainbow-prev: #009dfa; --rainbow-next: #cf69c9; }
  2.5% { --rainbow-prev: #009bfc; --rainbow-next: #d566c2; }
  3.75% { --rainbow-prev: #0098fd; --rainbow-next: #dc63ba; }
  5% { --rainbow-prev: #0096fd; --rainbow-next: #e160b3; }
  6.25% { --rainbow-prev: #0093fd; --rainbow-next: #e65eab; }
  7.5% { --rainbow-prev: #2e90fc; --rainbow-next: #e95ca2; }
  8.75% { --rainbow-prev: #4d8dfa; --rainbow-next: #ed5a9a; }
  10% { --rainbow-prev: #638af8; --rainbow-next: #ef5992; }
  11.25% { --rainbow-prev: #7587f5; --rainbow-next: #f15989; }
  12.5% { --rainbow-prev: #8583f1; --rainbow-next: #f25981; }
  13.75% { --rainbow-prev: #9280ed; --rainbow-next: #f25a79; }
  15% { --rainbow-prev: #9f7ce9; --rainbow-next: #f25c71; }
  16.25% { --rainbow-prev: #aa78e3; --rainbow-next: #f15e69; }
  17.5% { --rainbow-prev: #b574dd; --rainbow-next: #ef6061; }
  18.75% { --rainbow-prev: #be71d7; --rainbow-next: #ed635a; }
  20% { --rainbow-prev: #c76dd1; --rainbow-next: #eb6552; }
  21.25% { --rainbow-prev: #cf69c9; --rainbow-next: #e8694b; }
  22.5% { --rainbow-prev: #d566c2; --rainbow-next: #e46c44; }
  23.75% { --rainbow-prev: #dc63ba; --rainbow-next: #e06f3d; }
  25% { --rainbow-prev: #e160b3; --rainbow-next: #db7336; }
  26.25% { --rainbow-prev: #e65eab; --rainbow-next: #d77630; }
  27.5% { --rainbow-prev: #e95ca2; --rainbow-next: #d17a2a; }
  28.75% { --rainbow-prev: #ed5a9a; --rainbow-next: #cc7d24; }
  30% { --rainbow-prev: #ef5992; --rainbow-next: #c6811e; }
  31.25% { --rainbow-prev: #f15989; --rainbow-next: #bf8418; }
  32.5% { --rainbow-prev: #f25981; --rainbow-next: #b98713; }
  33.75% { --rainbow-prev: #f25a79; --rainbow-next: #b28a0f; }
  35% { --rainbow-prev: #f25c71; --rainbow-next: #ab8d0c; }
  36.25% { --rainbow-prev: #f15e69; --rainbow-next: #a3900b; }
  37.5% { --rainbow-prev: #ef6061; --rainbow-next: #9c920d; }
  38.75% { --rainbow-prev: #ed635a; --rainbow-next: #949510; }
  40% { --rainbow-prev: #eb6552; --rainbow-next: #8b9715; }
  41.25% { --rainbow-prev: #e8694b; --rainbow-next: #83991b; }
  42.5% { --rainbow-prev: #e46c44; --rainbow-next: #7a9b21; }
  43.75% { --rainbow-prev: #e06f3d; --rainbow-next: #719d27; }
  45% { --rainbow-prev: #db7336; --rainbow-next: #679e2e; }
  46.25% { --rainbow-prev: #d77630; --rainbow-next: #5da035; }
  47.5% { --rainbow-prev: #d17a2a; --rainbow-next: #51a13c; }
  48.75% { --rainbow-prev: #cc7d24; --rainbow-next: #44a244; }
  50% { --rainbow-prev: #c6811e; --rainbow-next: #34a44b; }
  51.25% { --rainbow-prev: #bf8418; --rainbow-next: #1ba553; }
  52.5% { --rainbow-prev: #b98713; --rainbow-next: #00a65b; }
  53.75% { --rainbow-prev: #b28a0f; --rainbow-next: #00a663; }
  55% { --rainbow-prev: #ab8d0c; --rainbow-next: #00a76c; }
  56.25% { --rainbow-prev: #a3900b; --rainbow-next: #00a874; }
  57.5% { --rainbow-prev: #9c920d; --rainbow-next: #00a87d; }
  58.75% { --rainbow-prev: #949510; --rainbow-next: #00a985; }
  60% { --rainbow-prev: #8b9715; --rainbow-next: #00a98e; }
  61.25% { --rainbow-prev: #83991b; --rainbow-next: #00a996; }
  62.5% { --rainbow-prev: #7a9b21; --rainbow-next: #00a99f; }
  63.75% { --rainbow-prev: #719d27; --rainbow-next: #00a9a7; }
  65% { --rainbow-prev: #679e2e; --rainbow-next: #00a9b0; }
  66.25% { --rainbow-prev: #5da035; --rainbow-next: #00a9b8; }
  67.5% { --rainbow-prev: #51a13c; --rainbow-next: #00a9c0; }
  68.75% { --rainbow-prev: #44a244; --rainbow-next: #00a8c7; }
  70% { --rainbow-prev: #34a44b; --rainbow-next: #00a8cf; }
  71.25% { --rainbow-prev: #1ba553; --rainbow-next: #00a7d5; }
  72.5% { --rainbow-prev: #00a65b; --rainbow-next: #00a6dc; }
  73.75% { --rainbow-prev: #00a663; --rainbow-next: #00a6e2; }
  75% { --rainbow-prev: #00a76c; --rainbow-next: #00a4e7; }
  76.25% { --rainbow-prev: #00a874; --rainbow-next: #00a3ec; }
  77.5% { --rainbow-prev: #00a87d; --rainbow-next: #00a2f1; }
  78.75% { --rainbow-prev: #00a985; --rainbow-next: #00a0f4; }
  80% { --rainbow-prev: #00a98e; --rainbow-next: #009ff7; }
  81.25% { --rainbow-prev: #00a996; --rainbow-next: #009dfa; }
  82.5% { --rainbow-prev: #00a99f; --rainbow-next: #009bfc; }
  83.75% { --rainbow-prev: #00a9a7; --rainbow-next: #0098fd; }
  85% { --rainbow-prev: #00a9b0; --rainbow-next: #0096fd; }
  86.25% { --rainbow-prev: #00a9b8; --rainbow-next: #0093fd; }
  87.5% { --rainbow-prev: #00a9c0; --rainbow-next: #2e90fc; }
  88.75% { --rainbow-prev: #00a8c7; --rainbow-next: #4d8dfa; }
  90% { --rainbow-prev: #00a8cf; --rainbow-next: #638af8; }
  91.25% { --rainbow-prev: #00a7d5; --rainbow-next: #7587f5; }
  92.5% { --rainbow-prev: #00a6dc; --rainbow-next: #8583f1; }
  93.75% { --rainbow-prev: #00a6e2; --rainbow-next: #9280ed; }
  95% { --rainbow-prev: #00a4e7; --rainbow-next: #9f7ce9; }
  96.25% { --rainbow-prev: #00a3ec; --rainbow-next: #aa78e3; }
  97.5% { --rainbow-prev: #00a2f1; --rainbow-next: #b574dd; }
  98.75% { --rainbow-prev: #00a0f4; --rainbow-next: #be71d7; }
  100% { --rainbow-prev: #009ff7; --rainbow-next: #c76dd1; }
}

.flip-glow-ultimate-glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 170px; height: 170px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  --rainbow-prev: #009ff7;
  --rainbow-next: #c76dd1;
  background: linear-gradient(-45deg, var(--rainbow-prev) 30%, var(--rainbow-next));
  filter: blur(46px);
  -webkit-filter: blur(46px);
  opacity: 0.85;
  animation: rainbow 8s linear infinite;
  will-change: filter, opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* 深色模式调整 */
[data-md-color-scheme="slate"] .flip-glow-ultimate-glow {
  opacity: 0.7;
}

.flip-glow-ultimate-imgs {
  position: relative;
  width: 190px;
  height: 190px;
  perspective: 1200px;
  z-index: 2;
}
.flip-glow-ultimate-imgs img {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 8px 24px rgba(14, 30, 37, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.2);
  backface-visibility: hidden;
  transition: transform 1.2s cubic-bezier(.4,2,.6,1), box-shadow 0.3s ease;
  background: #fff;
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-back {
  z-index: 1;
  transform: rotateY(0deg);
}
.flip-glow-ultimate-imgs img.flip-glow-ultimate-front {
  z-index: 0;
  transform: rotateY(180deg);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-back {
  transform: rotateY(180deg);
  z-index: 2;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}
.flip-glow-ultimate-imgs:hover img.flip-glow-ultimate-front {
  transform: rotateY(0deg);
  z-index: 3;
  box-shadow: 0 12px 32px rgba(14, 30, 37, 0.25);
}

/* ====== 响应式布局 ====== */
@media (max-width: 1100px) {
  .abies-header-row {
    gap: 32px;
  }
  .abies-header-title {
    font-size: 2.2rem;
  }
  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 190px;
    height: 190px;
  }
  .flip-glow-ultimate-glow {
    width: 170px;
    height: 170px;
  }
}
@media (max-width: 700px) {
  .abies-header-row {
    flex-direction: column-reverse;
    gap: 0px;
    min-height: unset;
    margin: 12px 0 12px 0;
  }
  .abies-header-text {
    align-items: center;
    text-align: center;
    max-width: 98vw;
    margin-top: -10px;
  }
  .abies-header-avatar {
    margin-bottom: 0px;
  }
  .abies-header-title {
    margin-bottom: 12px;
  }
  .abies-header-subtitle {
    margin-bottom: 16px;
  }
  .abies-header-motto {
    margin-bottom: 16px;
  }

  .flip-glow-ultimate,
  .flip-glow-ultimate-imgs {
    width: 190px;
    height: 190px;
  }
  .flip-glow-ultimate-glow {
    width: 170px;
    height: 170px;
  }
}
/* 添加一个额外的样式类，可以直接应用到元素上 */
.dark-visible-text {
  color: #ffffff !important;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5) !important;
}

/* 移动端样式 */
.mobile-motto {
  display: none;
  text-align: center;
  padding: 15px 0;
  margin: 5px 0;
}

.mobile-motto h1 {
  font-size: 1.8rem;
  color: #757575;
  /* font-family: 'LXGW WenKai', 'Segoe UI', 'PingFang SC', Arial, sans-serif; */
  font-weight: 500;
  margin: 0;
}

@media (max-width: 700px) {
  /* 隐藏原有头部 */
  .abies-header-row {
    display: none !important;
  }

  /* 显示移动端标语 */
  .mobile-motto {
    display: block;
  }
}

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
(function() {
  const phrases = [
    "Ah… you’ve stepped inside.aaa aaaaa aaaa, aaaa aaaa aaaa aa aa, aaaa aaaa aaa aaa aaa aaa a, aaa aaaa aaa.",
    "The ink clings to your soul like a second breath",
    "It seeps into the quiet places you never guarded,",
    "stains them gently, patiently.",
    "Be still.",
    "Some stories prefer to be touched, not chased."
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typewriterElement = null;
  
  const typeSpeed = 110;
  const deleteSpeed = 20;
  const pauseTime = 2000;
  const startDelay = 500;
  
  function typeWriter() {
    if (!typewriterElement) {
      typewriterElement = document.getElementById('typewriter-text');
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
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(typeWriter, startDelay);
    });
  } else {
    setTimeout(typeWriter, startDelay);
  }
})();
</script>
