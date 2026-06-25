# SOURCE CODE

## archetypes/default.md
```md
+++
date = '{{ .Date }}'
draft = true
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++

```
---

## assets/css/main.css
```css
@import "tailwindcss";

@source "../layouts/**/*.html";
@source "../content/**/*.md";

@theme {
  --font-sans: "Lexend", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;
}

@layer base {

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #0a0a0f;
    color: #e6edf3;
    font-family: var(--font-sans);
    transition: background-color 0.25s ease, color 0.25s ease;
    overflow-x: hidden;
  }

  html.light body {
    background-color: #f6f8fa;
    color: #1f2328;
  }

  ::selection {
    background-color: #238636;
    color: #ffffff;
  }

  :focus-visible {
    outline: 2px solid #238636;
    outline-offset: 2px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(48, 54, 61, 0.8);
    border-radius: 99px;
  }

  html.light ::-webkit-scrollbar-thumb {
    background: rgba(208, 215, 222, 0.8);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8b949e;
  }
}

@layer components {

  /* Layout */
  .container-content {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section {
    @apply py-24 sm:py-32;
  }

  /* Scroll progress */
  #scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 0%;
    z-index: 9999;
    background: linear-gradient(90deg, #238636, #3fb950, #79c0ff);
    transition: width 0.1s linear;
    pointer-events: none;
  }

  /* Nav */
  .nav-scrolled {
    background: rgba(10, 10, 15, 0.85);
    border-color: rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  html.light .nav-scrolled {
    background: rgba(246, 248, 250, 0.88);
    border-color: rgba(208, 215, 222, 0.5);
  }

  .nav-active {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }

  html.light .nav-active {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.6);
  }

  /* Hero backgrounds */
  .hero-bg-dark {
    background:
      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(35, 134, 54, 0.12) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(31, 111, 235, 0.08) 0%, transparent 50%),
      #0a0a0f;
  }

  html.light .hero-bg-dark {
    background:
      radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26, 127, 55, 0.07) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(9, 105, 218, 0.05) 0%, transparent 50%),
      #f6f8fa;
  }

  .hero-grid {
    background-image:
      linear-gradient(rgba(56, 139, 253, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(56, 139, 253, 0.025) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%);
  }

  html.light .hero-grid {
    background-image:
      linear-gradient(rgba(9, 105, 218, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(9, 105, 218, 0.04) 1px, transparent 1px);
  }

  .scroll-line {
    background: rgba(110, 118, 129, 0.2);
  }

  .scroll-line::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, transparent, #3fb950, transparent);
    animation: scroll-line-move 2s ease-in-out infinite;
  }

  @keyframes scroll-line-move {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(300%);
    }
  }

  /* Labels & Badges */
  .section-label {
    @apply inline-flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full border;
    color: #3fb950;
    border-color: rgba(35, 134, 54, 0.3);
    background-color: rgba(35, 134, 54, 0.08);
  }

  html.light .section-label {
    color: #1a7f37;
    border-color: rgba(26, 127, 55, 0.3);
    background-color: rgba(26, 127, 55, 0.08);
  }

  .section-title {
    @apply mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight;
    color: #e6edf3;
  }

  html.light .section-title {
    color: #1f2328;
  }

  .section-subtitle {
    @apply mt-4 leading-relaxed text-lg;
    color: #8b949e;
  }

  html.light .section-subtitle {
    color: #57606a;
  }

  /* Buttons */
  .btn-primary {
    @apply inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all duration-200 focus-visible:outline-none relative overflow-hidden;
    background: linear-gradient(135deg, #238636, #1a7f37);
    box-shadow: 0 0 20px rgba(35, 134, 54, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .btn-primary::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .btn-primary:hover::before {
    opacity: 1;
  }

  .btn-primary:hover {
    box-shadow: 0 0 32px rgba(35, 134, 54, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }

  .btn-primary:active {
    transform: translateY(0);
    box-shadow: 0 0 16px rgba(35, 134, 54, 0.3);
  }

  .btn-outline {
    @apply inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none relative overflow-hidden;
    border-color: rgba(48, 54, 61, 0.8);
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(12px);
  }

  .btn-outline:hover {
    border-color: rgba(139, 148, 158, 0.5);
    background: rgba(33, 38, 45, 0.7);
    transform: translateY(-1px);
  }

  .btn-outline:active {
    transform: translateY(0);
  }

  html.light .btn-outline {
    border-color: rgba(208, 215, 222, 0.9);
    color: #1f2328;
    background: rgba(255, 255, 255, 0.6);
  }

  html.light .btn-outline:hover {
    border-color: rgba(140, 149, 159, 0.7);
    background: rgba(246, 248, 250, 0.9);
  }

  .btn-secondary {
    @apply inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none;
    background: rgba(33, 38, 45, 0.6);
    color: #e6edf3;
    border: 1px solid rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(12px);
  }

  .btn-secondary:hover {
    background: rgba(48, 54, 61, 0.8);
    transform: translateY(-1px);
  }

  html.light .btn-secondary {
    background: rgba(246, 248, 250, 0.6);
    color: #1f2328;
    border-color: rgba(208, 215, 222, 0.5);
  }

  html.light .btn-secondary:hover {
    background: rgba(234, 238, 242, 0.9);
  }

  .btn-ghost {
    @apply inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200;
    color: #8b949e;
  }

  .btn-ghost:hover {
    background: rgba(22, 27, 34, 0.6);
    color: #e6edf3;
  }

  html.light .btn-ghost:hover {
    background: rgba(234, 238, 242, 0.6);
    color: #1f2328;
  }

  /* Cards */
  .glass-card {
    @apply rounded-2xl border relative overflow-hidden;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  html.light .glass-card {
    border-color: rgba(208, 215, 222, 0.6);
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04);
  }

  .glass-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }

  html.light .glass-card::before {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, transparent 60%);
  }

  .card {
    @apply rounded-2xl border;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.6);
  }

  html.light .card {
    border-color: rgba(208, 215, 222, 0.6);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }

  .card-interactive {
    @apply rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(12px);
  }

  .card-interactive::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(56, 139, 253, 0.04), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .card-interactive:hover {
    border-color: rgba(56, 139, 253, 0.35);
    box-shadow: 0 0 0 1px rgba(56, 139, 253, 0.15), 0 8px 32px rgba(56, 139, 253, 0.08);
    transform: translateY(-3px);
  }

  .card-interactive:hover::before {
    opacity: 1;
  }

  .card-interactive:active {
    transform: translateY(-1px);
  }

  html.light .card-interactive {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }

  html.light .card-interactive:hover {
    border-color: rgba(9, 105, 218, 0.3);
    box-shadow: 0 0 0 1px rgba(9, 105, 218, 0.15), 0 8px 32px rgba(9, 105, 218, 0.07);
  }

  /* Badges */
  .badge-purple {
    @apply inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium;
    border-color: rgba(61, 36, 117, 0.5);
    background: rgba(45, 28, 92, 0.35);
    color: #a371f7;
    backdrop-filter: blur(8px);
  }

  html.light .badge-purple {
    border-color: rgba(130, 80, 223, 0.25);
    background: rgba(251, 239, 255, 0.85);
    color: #6639ba;
  }

  .badge-blue {
    @apply inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium;
    border-color: rgba(17, 88, 199, 0.5);
    background: rgba(12, 45, 107, 0.35);
    color: #388bfd;
    backdrop-filter: blur(8px);
  }

  html.light .badge-blue {
    border-color: rgba(9, 105, 218, 0.25);
    background: rgba(221, 244, 255, 0.85);
    color: #0550ae;
  }

  .badge-green {
    @apply inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium;
    border-color: rgba(35, 134, 54, 0.5);
    background: rgba(15, 45, 26, 0.35);
    color: #3fb950;
    backdrop-filter: blur(8px);
  }

  html.light .badge-green {
    border-color: rgba(26, 127, 55, 0.25);
    background: rgba(218, 251, 225, 0.85);
    color: #116329;
  }

  .badge-orange {
    @apply inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium;
    border-color: rgba(155, 79, 18, 0.5);
    background: rgba(45, 26, 10, 0.35);
    color: #f0883e;
    backdrop-filter: blur(8px);
  }

  html.light .badge-orange {
    border-color: rgba(188, 76, 0, 0.25);
    background: rgba(255, 241, 229, 0.85);
    color: #953800;
  }

  /* Tags */
  .tag {
    @apply rounded-full border px-3 py-1 font-mono text-xs transition-all duration-200;
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(22, 27, 34, 0.4);
    color: #6e7681;
    backdrop-filter: blur(8px);
  }

  .tag:hover {
    border-color: rgba(139, 148, 158, 0.4);
    color: #8b949e;
    background: rgba(33, 38, 45, 0.5);
  }

  html.light .tag {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(246, 248, 250, 0.7);
    color: #57606a;
  }

  html.light .tag:hover {
    border-color: rgba(140, 149, 159, 0.5);
    color: #424a53;
  }

  /* Text gradients */
  .text-gradient-green {
    background: linear-gradient(135deg, #3fb950 0%, #238636 50%, #1a7f37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  html.light .text-gradient-green {
    background: linear-gradient(135deg, #1a7f37 0%, #116329 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-gradient-blue {
    background: linear-gradient(135deg, #79c0ff 0%, #388bfd 50%, #1f6feb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glows */
  .glow-green {
    box-shadow: 0 0 40px rgba(35, 134, 54, 0.15);
  }

  .glow-blue {
    box-shadow: 0 0 40px rgba(31, 111, 235, 0.15);
  }

  /* Theme tokens */
  .theme-bg-primary {
    background-color: #0a0a0f;
  }

  html.light .theme-bg-primary {
    background-color: #f6f8fa;
  }

  .theme-bg-surface {
    background-color: rgba(22, 27, 34, 0.6);
  }

  html.light .theme-bg-surface {
    background-color: rgba(246, 248, 250, 0.7);
  }

  .theme-bg-overlay {
    background-color: rgba(33, 38, 45, 0.6);
  }

  html.light .theme-bg-overlay {
    background-color: rgba(234, 238, 242, 0.7);
  }

  .theme-border {
    border-color: rgba(48, 54, 61, 0.6);
  }

  html.light .theme-border {
    border-color: rgba(208, 215, 222, 0.7);
  }

  .theme-border-muted {
    border-color: rgba(33, 38, 45, 0.6);
  }

  html.light .theme-border-muted {
    border-color: rgba(234, 238, 242, 0.7);
  }

  .theme-text-primary {
    color: #e6edf3;
  }

  html.light .theme-text-primary {
    color: #1f2328;
  }

  .theme-text-secondary {
    color: #8b949e;
  }

  html.light .theme-text-secondary {
    color: #57606a;
  }

  .theme-text-muted {
    color: #6e7681;
  }

  html.light .theme-text-muted {
    color: #8c959f;
  }

  /* Prose */
  .prose-zed {
    @apply leading-relaxed;
    color: #8b949e;
  }

  html.light .prose-zed {
    color: #57606a;
  }

  .prose-zed h2 {
    @apply mt-10 text-2xl font-bold tracking-tight;
    color: #e6edf3;
  }

  html.light .prose-zed h2 {
    color: #1f2328;
  }

  .prose-zed h3 {
    @apply mt-8 text-xl font-semibold;
    color: #e6edf3;
  }

  html.light .prose-zed h3 {
    color: #1f2328;
  }

  .prose-zed p {
    @apply mt-4;
  }

  .prose-zed a {
    @apply underline underline-offset-2 transition-colors;
    color: #388bfd;
  }

  .prose-zed a:hover {
    color: #79c0ff;
  }

  html.light .prose-zed a {
    color: #0969da;
  }

  html.light .prose-zed a:hover {
    color: #0550ae;
  }

  .prose-zed ul {
    @apply mt-4 list-disc pl-6 space-y-2;
  }

  .prose-zed ol {
    @apply mt-4 list-decimal pl-6 space-y-2;
  }

  .prose-zed code {
    @apply rounded-lg px-1.5 py-0.5 font-mono text-sm border;
    background: rgba(22, 27, 34, 0.6);
    color: #f0883e;
    border-color: rgba(48, 54, 61, 0.6);
  }

  html.light .prose-zed code {
    background: rgba(246, 248, 250, 0.9);
    color: #953800;
    border-color: rgba(208, 215, 222, 0.7);
  }

  .prose-zed pre {
    @apply mt-4 overflow-x-auto rounded-2xl border p-6;
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(13, 17, 23, 0.9);
    backdrop-filter: blur(12px);
  }

  html.light .prose-zed pre {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(246, 248, 250, 0.95);
  }

  .prose-zed pre code {
    @apply border-0 bg-transparent p-0;
    color: #e6edf3;
  }

  html.light .prose-zed pre code {
    color: #1f2328;
  }

  .prose-zed blockquote {
    @apply mt-4 border-l-4 pl-4 italic rounded-r-lg py-2;
    border-color: #238636;
    color: #6e7681;
    background: rgba(35, 134, 54, 0.05);
  }

  html.light .prose-zed blockquote {
    border-color: #1a7f37;
    color: #57606a;
    background: rgba(26, 127, 55, 0.05);
  }

  .prose-zed img {
    @apply mt-6 rounded-2xl border;
    border-color: rgba(48, 54, 61, 0.6);
  }

  html.light .prose-zed img {
    border-color: rgba(208, 215, 222, 0.7);
  }

  .prose-zed table {
    @apply mt-6 w-full text-sm border-collapse;
  }

  .prose-zed th {
    @apply text-left px-4 py-3 font-semibold border-b;
    color: #e6edf3;
    border-color: rgba(48, 54, 61, 0.6);
  }

  html.light .prose-zed th {
    color: #1f2328;
    border-color: rgba(208, 215, 222, 0.7);
  }

  .prose-zed td {
    @apply px-4 py-3 border-b;
    color: #8b949e;
    border-color: rgba(33, 38, 45, 0.6);
  }

  html.light .prose-zed td {
    color: #57606a;
    border-color: rgba(234, 238, 242, 0.7);
  }

  /* Form inputs */
  .input {
    @apply w-full rounded-xl border px-4 py-3 text-sm transition-all duration-200 focus:outline-none;
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(13, 17, 23, 0.5);
    color: #e6edf3;
    backdrop-filter: blur(12px);
  }

  .input::placeholder {
    color: #6e7681;
  }

  .input:focus {
    border-color: rgba(56, 139, 253, 0.5);
    background: rgba(13, 17, 23, 0.7);
    box-shadow: 0 0 0 3px rgba(56, 139, 253, 0.12);
  }

  html.light .input {
    border-color: rgba(208, 215, 222, 0.9);
    background: rgba(255, 255, 255, 0.85);
    color: #1f2328;
  }

  html.light .input::placeholder {
    color: #8c959f;
  }

  html.light .input:focus {
    border-color: rgba(9, 105, 218, 0.5);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }

  .label {
    @apply block text-sm font-medium mb-2;
    color: #e6edf3;
  }

  html.light .label {
    color: #1f2328;
  }

  /* Noise texture */
  .noise-bg {
    position: relative;
  }

  .noise-bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.35;
  }

  /* Animations */
  @keyframes float {

    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }

    33% {
      transform: translateY(-18px) rotate(0.8deg);
    }

    66% {
      transform: translateY(-9px) rotate(-0.8deg);
    }
  }

  @keyframes pulse-glow {

    0%,
    100% {
      opacity: 0.15;
      transform: scale(1);
    }

    50% {
      opacity: 0.22;
      transform: scale(1.04);
    }
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes reveal-up {
    from {
      opacity: 0;
      transform: translateY(28px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes reveal-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .animate-float {
    animation: float 8s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float 10s ease-in-out infinite 2s;
  }

  .animate-pulse-glow {
    animation: pulse-glow 4s ease-in-out infinite;
  }

  .animate-pulse-glow-delayed {
    animation: pulse-glow 5s ease-in-out infinite 1.5s;
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 6s ease infinite;
  }

  .animate-reveal-up {
    opacity: 0;
    animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  .animate-reveal-fade {
    opacity: 0;
    animation: reveal-fade 1s ease forwards;
  }

  /* Scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .reveal-delay-1 {
    transition-delay: 0.08s;
  }

  .reveal-delay-2 {
    transition-delay: 0.16s;
  }

  .reveal-delay-3 {
    transition-delay: 0.24s;
  }

  .reveal-delay-4 {
    transition-delay: 0.32s;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {

    .animate-float,
    .animate-float-delayed,
    .animate-pulse-glow,
    .animate-pulse-glow-delayed,
    .animate-gradient,
    .animate-reveal-up,
    .animate-reveal-fade {
      animation: none;
      opacity: 1;
      transform: none;
    }

    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  /* Logo wrapper — handles dark/light favicon visibility */
  .nav-logo-wrap {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    transition: box-shadow 0.2s;
    background: rgba(35, 134, 54, 0.12);
    border: 1px solid rgba(35, 134, 54, 0.2);
  }

  html.light .nav-logo-wrap {
    background: rgba(35, 134, 54, 0.08);
    border-color: rgba(35, 134, 54, 0.15);
  }

  .nav-logo-wrap:hover {
    box-shadow: 0 0 14px rgba(35, 134, 54, 0.3);
  }

  .nav-logo-img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    /* Favicon umumnya gelap — invert di dark mode agar terlihat */
    filter: brightness(0) invert(1);
    transition: filter 0.25s;
  }

  html.light .nav-logo-img {
    /* Di light mode kembalikan ke warna asli favicon */
    filter: none;
  }

  /* Nav link states */
  .nav-link {
    color: #8b949e;
    transition: color 0.15s, background-color 0.15s;
  }

  .nav-link:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }

  html.light .nav-link {
    color: #57606a;
  }

  html.light .nav-link:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }

  .nav-link-active {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }

  html.light .nav-link-active {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }

  /* Nav icon button */
  .nav-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    color: #8b949e;
    background: transparent;
    cursor: pointer;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s;
  }

  .nav-icon-btn:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
    border-color: rgba(139, 148, 158, 0.4);
  }

  html.light .nav-icon-btn {
    border-color: rgba(208, 215, 222, 0.7);
    color: #57606a;
  }

  html.light .nav-icon-btn:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
    border-color: rgba(140, 149, 159, 0.5);
  }

  /* Nav scrolled state */
  .nav-scrolled {
    background: rgba(10, 10, 15, 0.88);
    border-color: rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }

  html.light .nav-scrolled {
    background: rgba(246, 248, 250, 0.92);
    border-color: rgba(208, 215, 222, 0.6);
  }

  /* Mobile menu */
  .mobile-menu {
    background: rgba(10, 10, 15, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: rgba(48, 54, 61, 0.5);
  }

  html.light .mobile-menu {
    background: rgba(246, 248, 250, 0.97);
    border-color: rgba(208, 215, 222, 0.6);
  }

  /* Social buttons */
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    color: #6e7681;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s;
  }

  .social-btn:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
    border-color: rgba(139, 148, 158, 0.4);
  }

  html.light .social-btn {
    border-color: rgba(208, 215, 222, 0.7);
    color: #8c959f;
  }

  html.light .social-btn:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
    border-color: rgba(140, 149, 159, 0.5);
  }

  /* Footer */
  .footer-heading {
    font-size: 0.8125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #e6edf3;
  }

  html.light .footer-heading {
    color: #1f2328;
  }

  .footer-link {
    display: block;
    font-size: 0.875rem;
    color: #8b949e;
    transition: color 0.15s;
  }

  .footer-link:hover {
    color: #e6edf3;
  }

  html.light .footer-link {
    color: #57606a;
  }

  html.light .footer-link:hover {
    color: #1f2328;
  }

  /* Filter buttons (projects page) */
  .filter-btn {
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    padding: 6px 16px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8b949e;
    background: transparent;
    cursor: pointer;
    transition: all 0.15s;
  }

  .filter-btn:hover {
    border-color: rgba(139, 148, 158, 0.5);
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.5);
  }

  html.light .filter-btn {
    border-color: rgba(208, 215, 222, 0.8);
    color: #57606a;
  }

  html.light .filter-btn:hover {
    border-color: rgba(140, 149, 159, 0.6);
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }

  .filter-btn-active {
    border-radius: 8px;
    border: 1px solid rgba(35, 134, 54, 0.5);
    padding: 6px 16px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #3fb950;
    background: rgba(35, 134, 54, 0.1);
    cursor: pointer;
    transition: all 0.15s;
  }

  html.light .filter-btn-active {
    border-color: rgba(26, 127, 55, 0.4);
    color: #1a7f37;
    background: rgba(26, 127, 55, 0.08);
  }

  /* Card placeholder (no thumbnail) */
  .project-placeholder {
    background: rgba(22, 27, 34, 0.8);
  }

  html.light .project-placeholder {
    background: rgba(234, 238, 242, 0.8);
  }

  .project-placeholder-text {
    color: rgba(48, 54, 61, 0.8);
  }

  html.light .project-placeholder-text {
    color: rgba(140, 149, 159, 0.7);
  }
}

```
---

## assets/js/main.js
```js
(function () {
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    syncIcons();
    updateScrollbarTheme(theme);
  }

  function updateScrollbarTheme(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "light" ? "#fafafa" : "#0a0a0f");
    }
  }

  function syncIcons() {
    var isLight = document.documentElement.classList.contains("light");
    document.querySelectorAll("[data-icon-moon]").forEach(function (el) {
      el.classList.toggle("hidden", isLight);
    });
    document.querySelectorAll("[data-icon-sun]").forEach(function (el) {
      el.classList.toggle("hidden", !isLight);
    });
  }

  window.toggleTheme = function () {
    var isLight = document.documentElement.classList.contains("light");
    var next = isLight ? "dark" : "light";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    applyTheme(next);
  };

  document.addEventListener("DOMContentLoaded", function () {
    syncIcons();
  });
})();

// Smooth scroll untuk anchor links
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (href === "#") return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Scroll progress bar
(function () {
  var bar = document.getElementById("scroll-progress");
  if (!bar) return;
  function updateProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
})();

// Counter animation dengan IntersectionObserver
(function () {
  var counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.target, 10);
        var duration = 1800;
        var startTime = null;
        var startVal = 0;

        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(startVal + (target - startVal) * ease).toLocaleString(
            "id-ID"
          );
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target.toLocaleString("id-ID");
          }
        }

        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });
})();

// Reveal on scroll
(function () {
  var reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
  );

  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });
})();

// Parallax blob pada mouse move — hanya desktop
(function () {
  if (window.matchMedia("(hover: none)").matches) return;

  var ticking = false;
  var mouseX = 0;
  var mouseY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!ticking) {
      requestAnimationFrame(function () {
        var blobs = document.querySelectorAll(".animate-pulse-glow, .animate-pulse-glow-delayed");
        var x = (mouseX / window.innerWidth - 0.5) * 18;
        var y = (mouseY / window.innerHeight - 0.5) * 18;
        blobs.forEach(function (blob, i) {
          var factor = i % 2 === 0 ? 1 : -0.5;
          blob.style.transform = "translate(" + x * factor + "px, " + y * factor + "px)";
        });
        ticking = false;
      });
      ticking = true;
    }
  });
})();

// Alpine.js contact form
document.addEventListener("alpine:init", function () {
  Alpine.data("contactForm", function (pocketbaseUrl) {
    return {
      form: { name: "", email: "", need_type: "", message: "" },
      status: "idle",
      errors: {},

      validate: function () {
        this.errors = {};
        if (!this.form.name || this.form.name.trim().length < 2) {
          this.errors.name = "Nama minimal 2 karakter";
        }
        if (!this.form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
          this.errors.email = "Alamat email tidak valid";
        }
        if (!this.form.need_type) {
          this.errors.need_type = "Pilih salah satu kebutuhan";
        }
        if (!this.form.message || this.form.message.trim().length < 10) {
          this.errors.message = "Pesan minimal 10 karakter";
        }
        return Object.keys(this.errors).length === 0;
      },

      submit: async function () {
        if (!this.validate()) return;
        this.status = "loading";
        try {
          var res = await fetch(pocketbaseUrl + "/api/collections/contact_submissions/records", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: this.form.name.trim(),
              email: this.form.email.trim().toLowerCase(),
              need_type: this.form.need_type,
              message: this.form.message.trim(),
            }),
          });
          if (res.ok) {
            this.status = "success";
          } else {
            this.status = "error";
          }
        } catch (e) {
          this.status = "error";
        }
      },

      reset: function () {
        this.form = { name: "", email: "", need_type: "", message: "" };
        this.status = "idle";
        this.errors = {};
      },
    };
  });
});

```
---

## content/about/_index.md
```md
---
title: "Tentang ZEDLABS"
description: "Studio teknologi yang fokus pada hasil nyata, bukan sekadar deliverable."
---

ZEDLABS berdiri dari frustrasi yang sederhana: terlalu banyak proyek teknologi yang selesai secara teknis, namun gagal secara bisnis. Kami membangun studio ini dengan satu prinsip utama — teknologi hanya relevan jika berdampak nyata.

Sejak 2020, kami telah membantu puluhan bisnis dari berbagai industri membangun produk digital yang tidak hanya berjalan dengan baik, tetapi juga tumbuh bersama bisnis mereka.

Kami tidak percaya pada solusi generik. Setiap klien mendapatkan pendekatan yang disesuaikan dengan konteks bisnis, skala tim, dan tujuan jangka panjang mereka.

```
---

## content/blog/arsitektur-go-untuk-startup.md
```md
---
title: "Kenapa Kami Memilih Go untuk Semua Backend Klien"
description: "Bukan karena hype, bukan karena tren. Ada alasan teknis dan bisnis yang sangat konkret di balik keputusan ini."
date: 2025-10-22
category: "Engineering"
tags: ["Go", "Backend", "Arsitektur", "Performance"]
featured: false
---

Setiap kali kami mempresentasikan stack teknologi ke klien baru, pertanyaan yang hampir selalu muncul adalah: kenapa Go, bukan Node.js atau Python?

Jawabannya tidak sesederhana "Go lebih cepat." Konteks bisnis sama pentingnya dengan konteks teknis.

## Konteks: Kami Membangun untuk Bertahan Lama

Sebagian besar klien ZEDLABS adalah bisnis yang ingin produk digitalnya bertahan dan berkembang selama bertahun-tahun — bukan startup yang akan pivot setiap kuartal. Ini mengubah cara kami mengevaluasi teknologi.

Kriteria kami bukan hanya "seberapa cepat kita bisa mulai" tapi juga "seberapa mudah ini di-maintain dua tahun ke depan oleh tim yang mungkin berbeda."

## Alasan Teknis

### Type Safety Tanpa Overhead Runtime

Go adalah statically typed language yang dikompilasi. Dibandingkan Python atau Node.js, kesalahan tipe terdeteksi saat compile time, bukan saat production. Untuk tim kecil tanpa QA engineer dedicated, ini adalah safety net yang sangat berharga.

### Concurrency Model yang Elegan

Goroutines memungkinkan concurrency yang efisien dengan memory footprint yang rendah. Satu server Go bisa menangani puluhan ribu koneksi concurrent dengan RAM yang jauh lebih sedikit dibanding Node.js atau Java.

### Binary Deployment

Go menghasilkan single binary yang bisa langsung dijalankan di target OS tanpa runtime dependency. Tidak ada node_modules, tidak ada virtual environment, tidak ada JVM. Docker image yang dihasilkan bisa sekecil 15MB.

### Standard Library yang Kuat

HTTP server, JSON encoding, cryptography, testing — semuanya ada di standard library Go. Dependency eksternal yang lebih sedikit berarti attack surface yang lebih kecil dan upgrade path yang lebih mudah.

## Alasan Bisnis

### Talent Pool yang Lebih Focused

Developer Go di Indonesia memang lebih sedikit dibanding Node.js, tapi mereka cenderung lebih senior dan lebih serius tentang engineering quality. Untuk klien yang akan merekrut tim internal setelah MVP, ini adalah keuntungan jangka panjang.

### Operational Cost yang Lebih Rendah

Dengan memory usage yang lebih efisien, server yang sama bisa melayani traffic lebih tinggi. Klien kami rata-rata menghemat 40-60% biaya infrastruktur dibanding implementasi Node.js sebelumnya.

## Pengecualian

Kami tidak dogmatis soal Go. Ada situasi di mana kami memilih teknologi lain:

- **Scripting dan data processing**: Python
- **Frontend yang butuh SSR kompleks**: Next.js
- **Prototipe cepat dengan tim non-teknis**: Supabase atau PocketBase tanpa custom layer

Go adalah default kami, bukan satu-satunya pilihan.

```
---

## content/blog/digital-transformation-umkm.md
```md
---
title: "Transformasi Digital UMKM: Pelajaran dari 3 Tahun di Lapangan"
description: "Kami sudah membantu puluhan UMKM bertransformasi digital. Ini yang benar-benar berhasil, dan ini yang hampir selalu gagal."
date: 2025-09-15
category: "Bisnis"
tags: ["UMKM", "Digital Transformation", "Indonesia", "Case Study"]
featured: false
---

Tiga tahun terakhir kami banyak bekerja dengan bisnis skala menengah di Indonesia — dari distributor sembako di Surabaya hingga jaringan klinik kecantikan di Jabodetabek. Polanya mulai terlihat jelas: ada yang berhasil, ada yang tidak, dan perbedaannya jarang soal teknologi.

## Yang Hampir Selalu Gagal

### Digitalisasi Tanpa Perubahan Proses

Bisnis yang mengotomasi proses yang rusak hanya akan menghasilkan kekacauan yang lebih cepat. Kami pernah diminta membangun sistem manajemen stok untuk klien yang ternyata tidak memiliki standar penomoran SKU yang konsisten. Sistem selesai dibangun, tapi tidak pernah digunakan karena data awalnya tidak bisa dimigrasikan.

Pelajaran: audit proses bisnis sebelum audit teknologi.

### Ekspektasi ROI yang Tidak Realistis

"Kami ingin balik modal dalam 3 bulan." Ini adalah tanda bahaya. Transformasi digital adalah investasi jangka menengah — hasilnya biasanya baru terasa signifikan di bulan ke-6 hingga ke-18.

### Ketergantungan Total pada Vendor

Klien yang menyerahkan seluruh sistem kepada vendor tanpa memahami cara kerjanya adalah klien yang rentan. Ketika vendor hilang atau menaikkan harga, mereka tidak punya leverage apapun.

## Yang Berhasil

### Mulai dari Satu Pain Point yang Nyata

Klien terbaik kami selalu datang dengan masalah yang sangat spesifik: "Kami kehilangan 3 jam sehari untuk rekap laporan penjualan secara manual." Dari pain point itu, kami bangun solusi minimal yang langsung terasa dampaknya.

### Libatkan Tim Internal Sejak Awal

Sistem yang dibeli tanpa keterlibatan pengguna akhir hampir pasti akan diabaikan. Klien yang melibatkan staf operasional mereka dalam proses development menghasilkan adoption rate yang jauh lebih tinggi.

### Ukur yang Bisa Diukur

Sebelum mulai, tentukan metrik keberhasilan yang konkret. Bukan "efisiensi meningkat" tapi "waktu pemrosesan order berkurang dari 2 jam menjadi 15 menit." Tanpa baseline yang jelas, tidak ada cara untuk tahu apakah transformasi berhasil.

## Framework yang Kami Gunakan

Untuk setiap klien UMKM baru, kami selalu memulai dengan tiga pertanyaan:

1. Apa satu proses yang paling menyita waktu tim Anda saat ini?
2. Jika proses itu hilang besok, apa yang akan berubah dalam bisnis Anda?
3. Siapa di tim Anda yang akan menjadi champion dari sistem baru ini?

Jawaban dari tiga pertanyaan itu menentukan 80% dari roadmap transformasi digital mereka.

```
---

## content/blog/hugo-vs-next-untuk-company-profile.md
```md
---
title: "Hugo vs Next.js untuk Company Profile: Analisis Jujur"
description: "Kami sudah membangun company profile dengan keduanya. Berikut perbandingan yang tidak bias — termasuk kapan masing-masing adalah pilihan yang salah."
date: 2025-08-30
category: "Tutorial"
tags: ["Hugo", "Next.js", "Web Development", "JAMstack"]
featured: false
---

Pertanyaan ini muncul hampir setiap bulan dari klien yang ingin membangun company profile atau landing page bisnis mereka. Jawabannya bergantung pada beberapa faktor yang sering diabaikan.

## Benchmark yang Kami Lakukan

Kami membangun halaman yang identik — 6 section, blog dengan 50 artikel, contact form — menggunakan keduanya dan mengukur hasilnya di environment production yang sama.

| Metrik | Hugo | Next.js |
|---|---|---|
| Build time (50 artikel) | 800ms | 42 detik |
| Lighthouse Performance | 99 | 91 |
| Bundle size (JS) | 12KB | 187KB |
| Time to First Byte | 18ms | 110ms |
| Cold start (Vercel) | Tidak ada | 800ms-2 detik |

Angka-angka ini bukan hasil rekayasa. Hugo menang telak di semua metrik performa.

## Tapi Performa Bukan Satu-satunya Faktor

### Kapan Next.js Masuk Akal

Next.js layak dipilih jika:

- Tim Anda sudah familiar dengan React dan tidak ingin belajar Go template
- Company profile Anda butuh komponen interaktif yang kompleks
- Ada kebutuhan untuk mengambil data real-time dari berbagai API
- Anda berencana menggabungkan static pages dengan halaman yang butuh server-side rendering dinamis

### Kapan Hugo Adalah Pilihan Tepat

Hugo adalah pilihan yang lebih baik jika:

- Konten dikelola melalui Markdown atau CMS headless
- Tim konten (bukan developer) yang akan update blog secara rutin
- Performa dan SEO adalah prioritas utama
- Deployment harus murah dan sederhana

## Yang Sering Diabaikan: Developer Experience

Hugo menggunakan Go HTML template yang memiliki learning curve lebih curam dibanding JSX. Untuk tim yang mayoritas frontend React, ini adalah hambatan nyata.

Sebaliknya, Next.js datang dengan ekosistem npm yang besar — tapi ini juga berarti `node_modules` yang besar, dependency conflicts, dan breaking changes yang lebih sering.

## Rekomendasi Kami

Untuk company profile dan blog yang tidak membutuhkan interaktivitas tinggi: **Hugo**.

Untuk platform yang akan berkembang menjadi lebih dari sekadar company profile — dengan dashboard, user login, atau fitur SaaS terintegrasi: **Next.js**.

Jangan pilih berdasarkan tren. Pilih berdasarkan kebutuhan nyata tim dan bisnis Anda.

```
---

## content/blog/membangun-saas-di-atas-pocketbase.md
```md
---
title: "Membangun SaaS MVP di Atas PocketBase dalam 2 Minggu"
description: "PocketBase bukan sekadar backend alternatif — ia adalah senjata rahasia untuk tim kecil yang ingin bergerak cepat tanpa mengorbankan kualitas arsitektur."
date: 2025-11-10
category: "Engineering"
tags: ["PocketBase", "Go", "SaaS", "Backend"]
featured: true
---

Ketika klien datang dengan permintaan MVP dalam dua minggu dan budget terbatas, pilihan stack teknologi bisa menjadi penentu keberhasilan atau kegagalan proyek.

Kami sudah mencoba berbagai kombinasi — Supabase, Firebase, custom REST API dengan Go — tapi untuk skala tertentu, PocketBase memberikan sweet spot yang sulit ditandingi.

## Apa itu PocketBase

PocketBase adalah backend-as-a-service yang berjalan sebagai single binary. Ia menyediakan database SQLite embedded, realtime subscriptions, file storage, autentikasi, dan admin UI — semuanya dalam satu executable berukuran sekitar 30MB.

Untuk tim yang terbiasa mengelola Supabase instance atau Firebase project, ini terdengar terlalu sederhana. Tapi kesederhanaan itulah yang membuat PocketBase sangat powerful untuk use case tertentu.

## Arsitektur yang Kami Gunakan

Untuk proyek SaaS klien kami — platform manajemen inventori untuk jaringan retail kecil-menengah — kami memilih stack berikut:

- **PocketBase** sebagai backend utama (API, auth, database, file storage)
- **Next.js** untuk frontend aplikasi
- **Hugo** untuk landing page dan dokumentasi
- **Cloudflare** untuk CDN dan DNS
- **Caddy** sebagai reverse proxy

Seluruh infrastruktur berjalan di satu VPS dengan 2 vCPU dan 4GB RAM. Biaya operasional bulanan di bawah Rp 200 ribu.

## Yang Membuat PocketBase Berbeda

### Extend dengan Go

PocketBase bisa di-extend menggunakan Go. Artinya kita bisa menambahkan custom business logic, middleware, atau integrasi pihak ketiga langsung di level backend — bukan di layer tambahan yang terpisah.

```go
app.OnRecordBeforeCreateRequest("orders").Add(func(e *core.RecordCreateEvent) error {
    stock := e.Record.GetInt("quantity")
    if stock <= 0 {
        return apis.NewBadRequestError("Stok tidak tersedia", nil)
    }
    return nil
})
```

### Realtime Out of the Box

Setiap collection di PocketBase otomatis memiliki realtime subscription via SSE. Tidak perlu setup WebSocket server terpisah, tidak perlu Redis pub/sub — cukup subscribe dari frontend.

```js
pb.collection("orders").subscribe("*", function (e) {
  console.log(e.action, e.record);
});
```

### Migrasi Database Terotomasi

PocketBase menyimpan schema changes sebagai migration files yang bisa di-commit ke Git. Ini memastikan konsistensi antara environment development, staging, dan production.

## Hasilnya

MVP selesai dalam 11 hari kerja. Klien langsung bisa onboarding pengguna pertama mereka di hari ke-12. Tiga bulan setelah launch, platform ini melayani 47 outlet dengan lebih dari 200 pengguna aktif — masih di VPS yang sama, tanpa satu pun downtime yang tidak terencana.

## Kapan Tidak Menggunakan PocketBase

PocketBase bukan untuk semua use case. Hindari jika:

- Data Anda melebihi kemampuan SQLite (multi-terabyte, write-heavy concurrent)
- Tim Anda membutuhkan database relasional yang kompleks dengan banyak joins
- Regulasi mengharuskan database enterprise tertentu

Untuk kebanyakan MVP dan aplikasi bisnis skala menengah, PocketBase adalah pilihan yang underrated dan underutilized.

```
---

## content/contact/_index.md
```md
---
title: "Kontak"
description: "Hubungi ZEDLABS untuk konsultasi, kolaborasi, atau pertanyaan seputar proyek Anda."
---

```
---

## content/_index.md
```md
---
title: "ZEDLABS — Innovate Beyond Limits"
description: "IT Consulting, Web & Mobile Development, dan SaaS solutions untuk bisnis yang ingin tumbuh lebih cepat."

hero:
  headline: "Kami Bangun"
  headline_accent: "Sistem yang Tumbuh"
  subheadline: "Partner teknologi untuk startup dan enterprise Indonesia. Dari arsitektur backend hingga produk yang siap scale — kami kerjakan dengan standar engineering kelas dunia."
  cta_primary:
    label: "Mulai Konsultasi"
    url: "/contact"
  cta_secondary:
    label: "Lihat Proyek Kami"
    url: "/projects"

about:
  label: "Tentang Kami"
  title: "Bukan sekadar vendor, tapi partner teknis Anda"
  body: "ZEDLABS didirikan oleh engineers yang pernah membangun sistem untuk ratusan ribu pengguna. Kami tahu perbedaan antara kode yang selesai dan kode yang bertahan."
  differentiators:
    - icon: "⚡"
      title: "Engineering-first, bukan sales-first"
      desc: "Setiap keputusan teknis diambil berdasarkan kebutuhan bisnis nyata, bukan untuk menambah billing."
    - icon: "🔭"
      title: "Visibilitas penuh sepanjang proyek"
      desc: "Tidak ada blackbox. Anda tahu apa yang dikerjakan, kapan selesai, dan kenapa keputusan tersebut diambil."
    - icon: "🏗️"
      title: "Arsitektur yang bisa tumbuh"
      desc: "Sistem yang kami bangun dirancang untuk 10x traffic sejak hari pertama, bukan di-refactor setelah chaos."

services:
  label: "Layanan"
  title: "Apa yang kami kerjakan"
  subtitle: "Tiga area keahlian utama, dijalankan dengan standar engineering yang tidak kami kompromikan."
  items:
    - icon: "🧠"
      title: "IT Consulting"
      desc: "Audit sistem, technology roadmap, dan advisory untuk tim engineering Anda."
      badge: "Advisory"
      badge_color: "purple"
      url: "/services/it-consulting"
    - icon: "🌐"
      title: "Web & SaaS Development"
      desc: "Dari landing page berkecepatan tinggi hingga platform SaaS multi-tenant yang kompleks."
      badge: "Development"
      badge_color: "blue"
      url: "/services/web-development"
    - icon: "📱"
      title: "Mobile Development"
      desc: "Aplikasi Flutter cross-platform dengan performa native dan codebase yang efisien."
      badge: "Mobile"
      badge_color: "green"
      url: "/services/mobile-development"

cta:
  title: "Siap membangun sesuatu yang bermakna?"
  subtitle: "Konsultasi pertama gratis. Tidak ada kewajiban, tidak ada sales pitch — hanya diskusi teknis yang jujur."
  primary:
    label: "Mulai Konsultasi Gratis"
    url: "/contact"
  secondary:
    label: "Pelajari Layanan Kami"
    url: "/services"
---

```
---

## content/products/zedanalytics.md
```md
---
title: "ZedAnalytics"
description: "Analytics ringan untuk website dan aplikasi — tanpa cookie banner, tanpa melanggar privasi pengguna, tanpa memberatkan performa halaman Anda."
category: "Analytics"
features:
  - "Script tracking di bawah 2KB — tidak mempengaruhi Lighthouse score"
  - "Tidak menggunakan cookie — tidak perlu banner consent"
  - "Dashboard real-time dengan data yang mudah dipahami"
  - "Funnel analysis dan conversion tracking"
  - "Custom events untuk tracking interaksi spesifik"
  - "Heatmap dan session recording"
  - "Data 100% milik Anda — bisa di-export kapanpun"
  - "Self-hostable untuk kontrol penuh"
screenshots: []
---

ZedAnalytics adalah alternatif privacy-first untuk Google Analytics. Dibangun untuk developer dan bisnis yang peduli pada performa dan privasi pengguna, tanpa harus mengorbankan insights yang berguna.

Berbeda dari solusi analytics lain yang membutuhkan consent banner karena menggunakan third-party cookies, ZedAnalytics menggunakan pendekatan cookieless yang tetap akurat dan tidak melanggar regulasi GDPR atau UU PDP Indonesia.

```
---

## content/products/zedforms.md
```md
---
title: "ZedForms"
description: "Form builder dengan logika kondisional, integrasi webhook, dan analytics bawaan. Alternatif Typeform untuk bisnis yang butuh kontrol penuh atas data mereka."
category: "SaaS Tool"
features:
  - "Drag-and-drop form builder dengan 20+ tipe field"
  - "Logika kondisional untuk pengalaman yang dipersonalisasi"
  - "Webhook ke Slack, WhatsApp, email, atau sistem custom"
  - "Analytics respons dengan visualisasi real-time"
  - "Export ke CSV, Excel, atau Google Sheets"
  - "Custom domain dan branding"
  - "GDPR-compliant dengan data hosting di Indonesia"
  - "API penuh untuk integrasi ke sistem yang sudah ada"
screenshots: []
---

ZedForms lahir dari kebutuhan klien yang ingin form yang lebih dari sekadar Google Forms — tapi tidak mau membayar mahal untuk Typeform dan tidak mau datanya disimpan di server luar negeri.

Dibangun di atas stack Go dan PocketBase, ZedForms berjalan sepenuhnya di infrastruktur Indonesia dan bisa di-self-host untuk klien enterprise yang memiliki kebutuhan compliance khusus.

```
---

## content/projects/aplikasi-mobile-logistik.md
```md
---
title: "Aplikasi Mobile untuk Manajemen Armada Logistik"
description: "Aplikasi Flutter cross-platform untuk manajemen armada pengiriman — tracking real-time, proof of delivery digital, dan dashboard analytics untuk dispatcher."
date: 2025-02-10
category: "Mobile"
is_public: true
client_name: "Confidential"
thumbnail: ""
problem: "Perusahaan logistik dengan 80+ armada masih menggunakan WhatsApp untuk koordinasi pengiriman. Tidak ada visibility real-time, bukti pengiriman mudah hilang, dan dispute dengan klien sulit diselesaikan."
solution: "Aplikasi mobile untuk driver dengan GPS tracking dan digital POD, serta web dashboard untuk dispatcher dengan monitoring armada real-time dan laporan performa otomatis."
result: "Dispute pengiriman turun 90% berkat bukti digital yang timestamped. Efisiensi rute meningkat 25% dengan optimasi berbasis data historis. Onboarding driver baru dari 1 minggu menjadi 1 hari."
tech_stack: ["Flutter", "Go", "PostgreSQL", "Google Maps API", "Firebase FCM", "Docker"]
---

## Tantangan Utama: Konektivitas

Driver sering beroperasi di area dengan sinyal tidak stabil. Aplikasi harus bisa bekerja offline dan melakukan sinkronisasi otomatis saat koneksi kembali — tanpa data hilang atau duplikasi.

Kami mengimplementasikan offline-first architecture menggunakan SQLite lokal di device, dengan conflict resolution yang deterministik saat sync ke server.

## Digital Proof of Delivery

Fitur POD digital mencakup foto barang, tanda tangan digital penerima, dan geolocation timestamp yang tidak bisa dimanipulasi. Data ini disimpan di server dengan integritas yang terjamin dan bisa diakses kapanpun untuk dispute resolution.

```
---

## content/projects/platform-inventori-retail.md
```md
---
title: "Platform Manajemen Inventori untuk Jaringan Retail"
description: "Sistem terpusat yang menghubungkan 47 outlet retail dengan manajemen stok real-time, laporan otomatis, dan integrasi kasir."
date: 2025-08-01
category: "Web"
is_public: true
client_name: "RetailPlus (nama disamarkan)"
thumbnail: ""
problem: "Klien mengelola 47 outlet dengan sistem stok yang tersebar — sebagian pakai spreadsheet, sebagian pakai software kasir yang berbeda-beda. Rekap stok harian membutuhkan 3-4 jam kerja manual setiap hari."
solution: "Platform terpusat berbasis web dengan sinkronisasi stok real-time antar outlet, dashboard analytics, dan API yang terhubung ke berbagai sistem kasir yang sudah ada."
result: "Waktu rekap stok turun dari 3 jam menjadi 8 menit. ROI terasa dalam 3 bulan pertama. Sistem kini melayani 200+ pengguna aktif tanpa downtime berarti."
tech_stack: ["Go", "PocketBase", "React", "Tailwind CSS", "Cloudflare", "Caddy"]
---

## Latar Belakang

Klien adalah jaringan retail yang bergerak di segmen kebutuhan rumah tangga. Dengan 47 outlet yang tersebar di 3 kota, mereka menghadapi tantangan klasik bisnis yang tumbuh cepat tanpa infrastruktur digital yang memadai.

## Tantangan Teknis

Setiap outlet menggunakan sistem kasir yang berbeda — ada yang pakai software lokal lama, ada yang pakai tablet dengan aplikasi cloud, ada yang masih manual. Menyatukan data dari semua sumber ini adalah tantangan utama.

Kami membangun layer abstraksi yang memungkinkan setiap jenis sumber data terhubung ke platform pusat tanpa harus mengganti sistem yang sudah ada di outlet.

## Arsitektur

Backend dibangun di atas PocketBase yang di-extend dengan Go untuk business logic kustom — validasi stok, kalkulasi HPP, dan trigger notifikasi otomatis. Frontend menggunakan React dengan update real-time via SSE.

Seluruh sistem berjalan di satu VPS dengan biaya operasional di bawah Rp 300 ribu per bulan.

```
---

## content/projects/saas-manajemen-klinik.md
```md
---
title: "SaaS Manajemen Klinik Kecantikan"
description: "Platform multi-tenant untuk jaringan klinik kecantikan — dari penjadwalan pasien, rekam medis digital, hingga manajemen stok produk perawatan."
date: 2025-06-15
category: "SaaS"
is_public: true
client_name: "Confidential"
thumbnail: ""
problem: "Jaringan klinik dengan 12 cabang tidak memiliki sistem terpusat. Data pasien tidak bisa diakses antar cabang, stok produk sering tidak akurat, dan laporan bulanan dibuat manual dari berbagai sumber."
solution: "SaaS multi-tenant yang memungkinkan setiap cabang beroperasi secara independen namun terhubung ke dashboard pusat untuk monitoring dan pelaporan konsolidasi."
result: "Waktu administrasi per kunjungan pasien berkurang 65%. No-show rate turun 40% berkat reminder otomatis. Laporan konsolidasi yang sebelumnya memakan 2 hari kini tersedia real-time."
tech_stack: ["Go", "PostgreSQL", "Next.js", "Tailwind CSS", "Stripe", "Docker", "Cloudflare"]
---

## Tantangan Multi-tenancy

Membangun SaaS untuk industri kesehatan membutuhkan perhatian ekstra pada isolasi data antar tenant. Kami menggunakan row-level security di PostgreSQL untuk memastikan data setiap klinik benar-benar terisolasi, bahkan dari perspektif query yang tidak sengaja.

## Fitur Utama

Sistem penjadwalan dengan manajemen slot yang cerdas, rekam medis digital dengan riwayat lengkap per pasien, manajemen stok produk dengan alert otomatis, dan billing terintegrasi dengan berbagai metode pembayaran.

## Onboarding yang Terstandarisasi

Salah satu investasi terbesar kami di proyek ini adalah onboarding flow. Klinik baru bisa fully operational dalam 30 menit — mulai dari setup profil, konfigurasi jadwal dokter, hingga import data pasien dari sistem lama.

```
---

## content/projects/website-perusahaan-manufaktur.md
```md
---
title: "Website Korporat untuk Perusahaan Manufaktur"
description: "Redesign total website perusahaan manufaktur dengan 30 tahun sejarah — dari desain lama yang tidak mobile-friendly menjadi platform modern dengan Lighthouse score 99."
date: 2025-04-20
category: "Web"
is_public: true
client_name: "PT Karya Industri (nama disamarkan)"
thumbnail: ""
problem: "Website lama dibangun tahun 2015, tidak responsif di mobile, Lighthouse score di bawah 40, dan tidak bisa diupdate oleh tim internal tanpa bantuan developer."
solution: "Redesign menggunakan Hugo dengan CMS headless, sehingga tim marketing bisa update konten tanpa menyentuh kode. Optimasi performa di setiap layer."
result: "Lighthouse score naik dari 38 menjadi 99. Organic traffic meningkat 3x dalam 4 bulan pertama. Tim marketing bisa publish artikel blog secara mandiri."
tech_stack: ["Hugo", "Tailwind CSS", "Cloudflare Pages", "Decap CMS"]
---

## Pendekatan Kami

Proyek ini bukan sekadar redesign visual. Kami mulai dengan audit menyeluruh terhadap performa, SEO, dan aksesibilitas website lama — mengidentifikasi lebih dari 60 issue yang perlu ditangani.

Keputusan terpenting adalah pemilihan Hugo sebagai static site generator. Dengan ribuan halaman produk dan artikel, build time yang cepat dan output yang benar-benar statis adalah keharusan.

## Integrasi CMS Headless

Tim marketing klien tidak memiliki background teknis. Kami mengintegrasikan Decap CMS yang memberikan antarmuka editing visual langsung terhubung ke repository Git — tanpa server CMS tambahan yang perlu di-maintain.

```
---

## content/services/it-consulting.md
```md
---
title: "IT Consulting"
description: "Audit teknologi, roadmap digital, dan rekomendasi stack yang tepat untuk skala bisnis Anda."
badge: "Consulting"
badge_color: "purple"
icon: "brain"
weight: 1
---

## Apa yang kami lakukan

Banyak bisnis menghadapi masalah yang sama: sistem yang tidak scalable, stack yang salah pilih, atau roadmap yang tidak realistis. Kami masuk untuk memberikan perspektif teknis yang jujur dan actionable.

## Layanan konsultasi kami

**Technology Audit** — Evaluasi menyeluruh terhadap arsitektur, codebase, infrastruktur, dan proses engineering yang sedang berjalan.

**Digital Roadmap** — Peta jalan transformasi digital yang realistis, diprioritaskan berdasarkan dampak bisnis dan kapasitas tim.

**Stack Advisory** — Rekomendasi teknologi yang tepat berdasarkan kebutuhan saat ini dan proyeksi pertumbuhan, bukan tren semata.

**CTO-as-a-Service** — Kepemimpinan teknis paruh waktu untuk startup atau perusahaan yang belum memiliki CTO tetap.

## Untuk siapa

- Startup yang ingin memastikan fondasi teknis sebelum scaling
- Perusahaan yang sedang mengalami bottleneck teknis
- Tim non-teknis yang ingin memahami pilihan teknologi mereka
- Bisnis yang ingin melakukan migrasi sistem lama

## Proses kerja

1. Discovery call — memahami konteks bisnis dan masalah teknis
2. Audit & assessment — evaluasi kondisi saat ini
3. Laporan & rekomendasi — dokumen yang konkret dan actionable
4. Sesi presentasi — walkthrough hasil dan diskusi prioritas
5. Pendampingan opsional — support implementasi rekomendasi

```
---

## content/services/mobile-development.md
```md
---
title: "Web & Mobile Development"
description: "Dari landing page hingga aplikasi kompleks. Produk yang performant, scalable, dan maintainable."
badge: "Development"
badge_color: "blue"
icon: "globe"
weight: 2
---

## Apa yang kami bangun

Kami membangun produk digital yang dimaksudkan untuk tumbuh. Bukan prototype yang perlu dibuang ulang saat traffic naik, bukan codebase yang tidak ada yang bisa maintain setelah 6 bulan.

## Spesialisasi

**Web Application** — SPA, SSR, atau static site tergantung kebutuhan. Stack utama: Go, Hugo, React, Next.js.

**Mobile Application** — Cross-platform dengan Flutter untuk efisiensi, atau native jika performa kritis.

**API & Backend** — REST atau GraphQL API yang well-documented, dibangun di atas arsitektur yang tepat untuk skala.

**Landing Page & Company Profile** — Dioptimasi untuk konversi dan SEO, bukan sekadar tampil bagus.

## Standar yang kami jaga

- Lighthouse score 90+ untuk semua produk web
- Test coverage minimal untuk logika bisnis kritis
- Dokumentasi teknis sebagai bagian dari deliverable
- Code review dan handover yang proper

## Timeline umum

| Jenis Proyek | Estimasi |
|---|---|
| Landing page | 1–2 minggu |
| Company profile | 2–3 minggu |
| Web app MVP | 4–6 minggu |
| Mobile app MVP | 6–10 minggu |
| Platform kompleks | Diskusi scope |

```
---

## content/services/web-development.md
```md
---
title: "SaaS Development"
description: "Kami rancang dan bangun produk SaaS dari nol — arsitektur, UI, billing, hingga go-to-market."
badge: "SaaS"
badge_color: "green"
icon: "package"
weight: 3
---

## Membangun SaaS yang benar

SaaS bukan sekadar web app yang dibayar bulanan. Ada puluhan keputusan arsitektur yang harus benar sejak awal — multi-tenancy, billing, onboarding, observability. Salah di awal, biayanya mahal di kemudian hari.

## Yang kami tangani

**Arsitektur & Infrastruktur** — Multi-tenant database design, autentikasi, authorization, dan infrastruktur yang bisa scale.

**Billing & Subscription** — Integrasi Stripe atau Midtrans, manajemen plan, trial, dan upgrade/downgrade flow.

**Onboarding Flow** — User onboarding yang memastikan activation rate tinggi sejak hari pertama.

**Admin Dashboard** — Internal tools untuk tim Anda mengelola user, subscription, dan data.

**Analytics & Observability** — Error tracking, performance monitoring, dan product analytics bawaan.

## Pendekatan kami

Kami tidak langsung membangun semua fitur. Kami mulai dari core loop — fitur paling kritis yang membuat user mendapatkan value pertama mereka. Setelah itu iterasi berdasarkan data.

## Deliverable

- Source code dengan dokumentasi teknis
- Deployment ke infrastruktur pilihan Anda
- Runbook untuk operasional
- Sesi handover ke tim internal

```
---

## data/partners.json
```json
[
  {
    "name": "Go"
  },
  {
    "name": "Hugo"
  },
  {
    "name": "PocketBase"
  },
  {
    "name": "React"
  },
  {
    "name": "Next.js"
  },
  {
    "name": "Flutter"
  },
  {
    "name": "Tailwind CSS"
  },
  {
    "name": "PostgreSQL"
  },
  {
    "name": "SQLite"
  },
  {
    "name": "Docker"
  },
  {
    "name": "Cloudflare"
  },
  {
    "name": "Caddy"
  }
]

```
---

## data/stats.json
```json
[
  {
    "label": "Klien Puas",
    "value": 47,
    "suffix": "+"
  },
  {
    "label": "Proyek Selesai",
    "value": 120,
    "suffix": "+"
  },
  {
    "label": "Tahun Pengalaman",
    "value": 5,
    "suffix": "+"
  },
  {
    "label": "Uptime SaaS",
    "value": 99,
    "suffix": ".9%"
  }
]

```
---

## data/team.json
```json
[
  {
    "name": "Yahya Zulfikri",
    "role": "Founder & Lead Engineer",
    "avatar": "",
    "bio": "10 tahun membangun produk digital dari skala startup hingga enterprise. Sebelum mendirikan ZEDLABS, pernah menjadi lead engineer di dua startup fintech Indonesia yang berhasil scale ke lebih dari 500 ribu pengguna. Fokus pada arsitektur sistem terdistribusi dan engineering culture yang sustainable.",
    "skills": [
      "Go",
      "PostgreSQL",
      "Docker",
      "System Design",
      "Engineering Leadership"
    ],
    "linkedin": "https://linkedin.com/in/zulfikriyahya",
    "github": "https://github.com/zulfikriyahya"
  },
  {
    "name": "Evan Azhar Hartana",
    "role": "UI/UX & Frontend Lead",
    "avatar": "",
    "bio": "Desainer dan frontend engineer dengan latar belakang psikologi kognitif. Percaya bahwa antarmuka yang baik dimulai dari pemahaman mendalam tentang perilaku pengguna, bukan sekadar estetika. Telah mendesain lebih dari 40 produk digital di berbagai industri.",
    "skills": [
      "Figma",
      "React",
      "Next.js",
      "Tailwind CSS",
      "User Research"
    ],
    "linkedin": "https://linkedin.com/in/evanazhr",
    "github": "https://github.com/evanazhr"
  },
  {
    "name": "Abdul Rohman",
    "role": "Backend & DevOps Engineer",
    "avatar": "",
    "bio": "Infrastructure engineer dengan obsesi terhadap reliability, observability, dan otomasi. Berpengalaman mengelola infrastruktur yang melayani jutaan request per hari. Jika sesuatu bisa di-automate, akan di-automate — tidak ada pengecualian.",
    "skills": [
      "Go",
      "Kubernetes",
      "Cloudflare",
      "PostgreSQL",
      "Observability"
    ],
    "linkedin": "https://linkedin.com/in/rohmanis",
    "github": "https://github.com/rohmanis"
  }
]

```
---

## data/testimonials.json
```json
[
  {
    "name": "Andi Prasetyo",
    "role": "CTO",
    "company": "TechCorp Indonesia",
    "avatar": "",
    "content": "ZEDLABS berhasil membangun platform kami dalam waktu 6 minggu. Kualitas kode dan komunikasinya sangat profesional.",
    "rating": 5
  },
  {
    "name": "Sarah Wijaya",
    "role": "Product Manager",
    "company": "Startup Fintech X",
    "avatar": "",
    "content": "Tim yang sangat responsif dan paham kebutuhan bisnis. Mereka tidak hanya coding, tapi benar-benar memahami masalah yang ingin kami selesaikan.",
    "rating": 5
  },
  {
    "name": "Budi Santoso",
    "role": "CEO",
    "company": "RetailPlus",
    "avatar": "",
    "content": "Investasi terbaik yang pernah kami lakukan. ROI dari sistem yang ZEDLABS bangun terasa dalam 3 bulan pertama.",
    "rating": 5
  }
]

```
---

## hugo.toml
```toml
baseURL = "https://zedlabs.id"
defaultContentLanguage = "id"
title = "ZEDLABS — Innovate Beyond Limits"

[languages]
  [languages.id]
    locale = "id"
    weight = 1

[params]
  description = "IT Consulting, Web & Mobile Development, dan SaaS solutions untuk bisnis yang ingin tumbuh lebih cepat."
  tagline = "Innovate Beyond Limits"
  email = "hello@zedlabs.id"
  whatsapp = "+62895351856267"
  github = "https://github.com/ZEDLABS-TEKNOLOGI-INDONESIA"
  linkedin = "https://www.linkedin.com/company/99119962"
  pocketbase_url = "https://api.zedlabs.id"

[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true

[markup.highlight]
  style = "github-dark"
  lineNos = true

[taxonomies]
  category = "categories"
  tag = "tags"

[pagination]
  pagerSize = 9

[menu]
  [[menu.main]]
    name = "Layanan"
    url = "/services"
    weight = 1
  [[menu.main]]
    name = "Produk"
    url = "/products"
    weight = 2
  [[menu.main]]
    name = "Proyek"
    url = "/projects"
    weight = 3
  [[menu.main]]
    name = "Blog"
    url = "/blog"
    weight = 4
  [[menu.main]]
    name = "Tentang"
    url = "/about"
    weight = 5
  [[menu.main]]
    name = "Kontak"
    url = "/contact"
    weight = 6

```
---

## layouts/404.html
```html
{{ define "main" }}
<div class="min-h-screen flex items-center justify-center">
  <div class="container-content text-center">
    <div class="max-w-xl mx-auto">
      <p class="font-mono text-7xl font-bold text-gradient-green">404</p>
      <h1 class="section-title mt-6">Halaman tidak ditemukan</h1>
      <p class="section-subtitle">
        Sepertinya halaman yang Anda cari sudah dipindahkan, dihapus, atau tidak pernah ada.
      </p>
      <div class="flex flex-wrap justify-center gap-4 mt-10">
        <a href="/" class="btn-primary">Kembali ke Beranda</a>
        <a href="/contact" class="btn-outline">Hubungi Kami</a>
      </div>
    </div>
  </div>
</div>
{{ end }}

```
---

## layouts/about/single.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-3xl">
      <span class="section-label">Tentang</span>
      <h1 class="section-title">Kami membangun sistem, bukan sekadar kode</h1>
      <p class="section-subtitle">
        ZEDLABS adalah tim engineers dan designers yang terobsesi dengan kualitas, keandalan, dan dampak nyata dari
        setiap baris kode yang kami tulis.
      </p>
    </div>

    {{ with .Content }}
    <div class="prose-zed mt-12 max-w-3xl">{{ . }}</div>
    {{ end }}

    {{ with site.Data.team }}
    <div class="mt-24">
      <div class="mb-16">
        <span class="section-label">Tim</span>
        <h2 class="section-title">Orang-orang di balik ZEDLABS</h2>
      </div>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {{ range . }}
        <div class="glass-card p-7">
          {{ if .avatar }}
          <img src="{{ .avatar }}" alt="{{ .name }}"
            class="mb-5 h-16 w-16 rounded-full border-2 theme-border object-cover" />
          {{ else }}
          <div
            class="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 theme-border theme-bg-overlay font-mono text-xl font-bold theme-text-secondary">
            {{ substr .name 0 1 }}
          </div>
          {{ end }}
          <h3 class="font-semibold theme-text-primary text-base">{{ .name }}</h3>
          <p class="mt-1 text-sm theme-text-secondary">{{ .role }}</p>
          {{ with .bio }}
          <p class="mt-4 text-sm theme-text-muted leading-relaxed">{{ . }}</p>
          {{ end }}
          {{ with .skills }}
          <div class="mt-5 flex flex-wrap gap-1.5">
            {{ range . }}
            <span class="tag">{{ . }}</span>
            {{ end }}
          </div>
          {{ end }}
          {{ if or .linkedin .github }}
          <div class="mt-5 flex gap-3 pt-5 border-t theme-border">
            {{ with .linkedin }}
            <a href="{{ . }}" target="_blank" rel="noopener noreferrer"
              class="theme-text-muted hover:theme-text-primary transition-colors" aria-label="LinkedIn">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {{ end }}
            {{ with .github }}
            <a href="{{ . }}" target="_blank" rel="noopener noreferrer"
              class="theme-text-muted hover:theme-text-primary transition-colors" aria-label="GitHub">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            {{ end }}
          </div>
          {{ end }}
        </div>
        {{ end }}
      </div>
    </div>
    {{ end }}

    {{ with site.Data.partners }}
    <div class="mt-24 border-t theme-border pt-20">
      <p class="text-xs font-mono uppercase tracking-widest theme-text-muted mb-10">Teknologi yang kami kuasai</p>
      <div class="flex flex-wrap gap-3">
        {{ range . }}
        <span class="tag text-sm px-4 py-2">{{ .name }}</span>
        {{ end }}
      </div>
    </div>
    {{ end }}

  </div>
</div>
{{ end }}

```
---

## layouts/blog/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Blog</span>
      <h1 class="section-title">Tulisan & Pemikiran</h1>
      <p class="section-subtitle">
        Insight tentang teknologi, arsitektur sistem, dan pengembangan produk digital.
      </p>
    </div>

    {{ $featured := where .Pages "Params.featured" true }}
    {{ $rest := where .Pages "Params.featured" "ne" true }}

    {{ with $featured }}
    <div class="mt-16">
      {{ range first 1 . }}
      <a href="{{ .Permalink }}" class="card-interactive group block overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-2">
          {{ with .Params.thumbnail }}
          <div class="aspect-video overflow-hidden project-placeholder lg:aspect-auto">
            <img src="{{ . }}" alt="{{ $.Title }}"
              class="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" />
          </div>
          {{ else }}
          <div class="hidden aspect-video items-center justify-center project-placeholder lg:flex">
            <span class="font-mono text-4xl font-bold project-placeholder-text">{{ substr .Title 0 1 }}</span>
          </div>
          {{ end }}
          <div class="p-8 lg:p-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge-green">Featured</span>
              {{ with .Params.category }}
              <span class="badge-blue">{{ . }}</span>
              {{ end }}
            </div>
            <h2
              class="text-2xl font-bold theme-text-primary leading-tight tracking-tight group-hover:text-[#388bfd] transition-colors">
              {{ .Title }}
            </h2>
            {{ with .Description }}
            <p class="mt-3 theme-text-secondary leading-relaxed">{{ . }}</p>
            {{ end }}
            <p class="mt-6 text-xs font-mono theme-text-muted">
              {{ .Date.Format "2 January 2006" }} &middot; {{ .ReadingTime }} min read
            </p>
          </div>
        </div>
      </a>
      {{ end }}
    </div>
    {{ end }}

    {{ with $rest }}
    <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range . }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col p-6">
        {{ with .Params.category }}
        <span class="badge-blue self-start mb-4">{{ . }}</span>
        {{ end }}
        <h2 class="font-semibold theme-text-primary leading-snug group-hover:text-[#388bfd] transition-colors flex-1">
          {{ .Title }}
        </h2>
        {{ with .Description }}
        <p class="mt-2 text-sm theme-text-secondary leading-relaxed line-clamp-2">{{ . }}</p>
        {{ end }}
        <p class="mt-5 pt-4 border-t theme-border text-xs font-mono theme-text-muted">
          {{ .Date.Format "2 January 2006" }} &middot; {{ .ReadingTime }} min read
        </p>
      </a>
      {{ end }}
    </div>
    {{ end }}

    {{ template "_internal/pagination.html" . }}

  </div>
</div>
{{ end }}

```
---

## layouts/blog/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          {{ with .Params.category }}
          <a href="/blog" class="badge-blue">{{ . }}</a>
          {{ end }}
          {{ range .Params.tags }}
          <span class="tag">{{ . }}</span>
          {{ end }}
        </div>

        <h1 class="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#e6edf3]">
          {{ .Title }}
        </h1>

        {{ with .Description }}
        <p class="mt-5 text-lg text-[#8b949e] leading-relaxed">{{ . }}</p>
        {{ end }}

        <div class="mt-8 flex items-center justify-between border-t border-b border-[#21262d] py-4">
          <div class="flex items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-full bg-[#21262d] font-mono text-sm font-bold text-[#8b949e] border border-[#30363d]">
              Z
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">ZEDLABS</p>
              <p class="text-xs text-[#6e7681]">
                <time datetime="{{ .Date.Format " 2006-01-02" }}">{{ .Date.Format "2 January 2006" }}</time>
              </p>
            </div>
          </div>
          <span class="text-xs font-mono text-[#6e7681]">{{ .ReadingTime }} min read</span>
        </div>
      </header>

      {{ with .Params.thumbnail }}
      <div class="mb-12 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      <div class="prose-zed">
        {{ .Content }}
      </div>

      <footer class="mt-16 pt-10 border-t border-[#21262d]">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p class="text-xs font-mono text-[#6e7681] mb-2">Tags</p>
            <div class="flex flex-wrap gap-2">
              {{ range .Params.tags }}
              <span class="tag">{{ . }}</span>
              {{ end }}
            </div>
          </div>
          <a href="/blog" class="btn-outline text-sm">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Semua Tulisan
          </a>
        </div>
      </footer>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/contact/single.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">

      <!-- Left: Info -->
      <div>
        <span class="section-label">Kontak</span>
        <h1 class="section-title">Mari Bicara</h1>
        <p class="section-subtitle">
          Ceritakan kebutuhan Anda. Kami akan merespons dalam 1x24 jam di hari kerja.
        </p>

        <div class="mt-12 space-y-6">
          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">Email</p>
              <a href="mailto:{{ .Site.Params.email }}"
                class="text-sm text-[#8b949e] hover:text-[#388bfd] transition-colors">
                {{ .Site.Params.email }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">WhatsApp</p>
              <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank" rel="noopener noreferrer"
                class="text-sm text-[#8b949e] hover:text-[#388bfd] transition-colors">
                {{ .Site.Params.whatsapp }}
              </a>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]">
              <svg class="h-4 w-4 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p class="text-sm font-medium text-[#e6edf3]">Jam Respons</p>
              <p class="text-sm text-[#8b949e]">Senin – Jumat, 09.00 – 18.00 WIB</p>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div class="mt-12" x-data="{ open: null }">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-6">FAQ</p>
          <div class="space-y-3">

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 0 ? open = null : open = 0"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Berapa lama proses konsultasi awal?
                <svg :class="open === 0 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 0" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  Sesi konsultasi pertama biasanya 30–60 menit via video call. Kami akan memahami kebutuhan Anda sebelum
                  membuat proposal.
                </p>
              </div>
            </div>

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 1 ? open = null : open = 1"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Apakah konsultasi pertama gratis?
                <svg :class="open === 1 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 1" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  Ya. Konsultasi awal sepenuhnya gratis tanpa kewajiban apapun.
                </p>
              </div>
            </div>

            <div class="border border-[#30363d] rounded-lg overflow-hidden">
              <button @click="open === 2 ? open = null : open = 2"
                class="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[#e6edf3] hover:bg-[#161b22] transition-colors">
                Berapa lama estimasi pengerjaan proyek?
                <svg :class="open === 2 ? 'rotate-180' : ''"
                  class="h-4 w-4 shrink-0 text-[#6e7681] transition-transform duration-200 ml-4" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div x-show="open === 2" class="border-t border-[#21262d] px-5 py-4">
                <p class="text-sm text-[#8b949e] leading-relaxed">
                  MVP sederhana bisa selesai 4–6 minggu. Proyek kompleks kami diskusikan scope dan timeline bersama
                  sebelum kontrak.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div>
        <div class="card p-8" x-data="contactForm('{{ .Site.Params.pocketbase_url }}')">
          <h2 class="text-lg font-semibold text-[#e6edf3] mb-6">Kirim Pesan</h2>

          <!-- Success -->
          <div x-show="status === 'success'" x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
            class="rounded-lg border border-[#238636]/30 bg-[#0f2d1a] p-6 text-center">
            <div
              class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#238636]/10 border border-[#238636]/30">
              <svg class="h-6 w-6 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-semibold text-[#e6edf3]">Pesan Terkirim</h3>
            <p class="mt-2 text-sm text-[#8b949e]">Kami akan menghubungi Anda dalam 1x24 jam.</p>
            <button @click="reset()" class="btn-outline mt-6 text-sm">
              Kirim Pesan Lain
            </button>
          </div>

          <!-- Error banner -->
          <div x-show="status === 'error'" x-transition
            class="mb-6 rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3">
            <p class="text-sm text-red-400">
              Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.
            </p>
          </div>

          <!-- Form -->
          <form x-show="status !== 'success'" @submit.prevent="submit()" class="space-y-5">
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label class="label" for="name">Nama</label>
                <input id="name" type="text" x-model="form.name" placeholder="Budi Santoso" autocomplete="name"
                  :class="errors.name ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''" class="input" />
                <p x-show="errors.name" x-text="errors.name" class="mt-1.5 text-xs text-red-400"></p>
              </div>
              <div>
                <label class="label" for="email">Email</label>
                <input id="email" type="email" x-model="form.email" placeholder="budi@perusahaan.com"
                  autocomplete="email"
                  :class="errors.email ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''" class="input" />
                <p x-show="errors.email" x-text="errors.email" class="mt-1.5 text-xs text-red-400"></p>
              </div>
            </div>

            <div>
              <label class="label" for="need_type">Kebutuhan</label>
              <div class="relative">
                <select id="need_type" x-model="form.need_type"
                  :class="errors.need_type ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''"
                  class="input appearance-none pr-10">
                  <option value="" disabled selected>Pilih kebutuhan Anda</option>
                  <option value="IT Consulting">IT Consulting</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="SaaS Development">SaaS Development</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                <svg class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6e7681]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p x-show="errors.need_type" x-text="errors.need_type" class="mt-1.5 text-xs text-red-400"></p>
            </div>

            <div>
              <label class="label" for="message">Pesan</label>
              <textarea id="message" x-model="form.message" rows="5"
                placeholder="Ceritakan kebutuhan, konteks bisnis, atau pertanyaan Anda..."
                :class="errors.message ? 'border-red-700 focus:border-red-500 focus:ring-red-500' : ''"
                class="input resize-none"></textarea>
              <div class="mt-1.5 flex items-center justify-between">
                <p x-show="errors.message" x-text="errors.message" class="text-xs text-red-400"></p>
                <p class="ml-auto text-xs font-mono text-[#6e7681]" x-text="form.message.length + ' karakter'"></p>
              </div>
            </div>

            <button type="submit" :disabled="status === 'loading'"
              :class="status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''"
              class="btn-primary w-full justify-center py-3">
              <span x-show="status !== 'loading'">Kirim Pesan</span>
              <span x-show="status === 'loading'" class="flex items-center gap-2">
                <svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                Mengirim...
              </span>
            </button>

            <p class="text-center text-xs text-[#6e7681]">
              Atau langsung via
              <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank" rel="noopener noreferrer"
                class="text-[#388bfd] hover:underline">WhatsApp</a>
            </p>
          </form>
        </div>
      </div>

    </div>
  </div>
</div>
{{ end }}

```
---

## layouts/_default/baseof.html
```html
<!DOCTYPE html>
<html lang="{{ .Site.Language.Locale }}" class="scroll-smooth">

<head>
  {{ partial "head.html" . }}
</head>

<body class="font-sans antialiased theme-bg-primary theme-text-primary">

  <div id="scroll-progress" aria-hidden="true"></div>

  {{ partial "nav.html" . }}

  <main id="main-content">
    {{ block "main" . }}{{ end }}
  </main>

  {{ partial "footer.html" . }}

  <script src="/js/main.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

</body>

</html>

```
---

## layouts/_default/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">
    <h1 class="section-title">{{ .Title }}</h1>
    {{ with .Content }}
    <div class="prose-zed mt-6 max-w-2xl">{{ . }}</div>
    {{ end }}

    {{ if .Pages }}
    <ul class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range .Pages }}
      <li>
        <a href="{{ .Permalink }}" class="card-interactive block p-6 h-full">
          <h2 class="font-semibold text-[#e6edf3]">{{ .Title }}</h2>
          {{ with .Description }}
          <p class="mt-2 text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
          {{ end }}
          <p class="mt-4 text-xs font-mono text-[#6e7681]">
            {{ .Date.Format "2 Jan 2006" }}
          </p>
        </a>
      </li>
      {{ end }}
    </ul>
    {{ end }}
  </div>
</div>
{{ end }}

```
---

## layouts/_default/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-10">
        {{ with .Params.category }}
        <span class="badge-blue mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title mt-3">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle max-w-2xl">{{ . }}</p>
        {{ end }}
        <div class="mt-6 flex items-center gap-4 text-xs font-mono text-[#6e7681]">
          <time datetime="{{ .Date.Format " 2006-01-02" }}">{{ .Date.Format "2 January 2006" }}</time>
          {{ if .ReadingTime }}
          <span>{{ .ReadingTime }} min read</span>
          {{ end }}
        </div>
      </header>

      <div class="prose-zed">
        {{ .Content }}
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/index.html
```html
{{ define "main" }}
{{ partial "sections/hero.html" . }}
{{ partial "sections/about.html" . }}
{{ partial "sections/stats.html" . }}
{{ partial "sections/services.html" . }}
{{ partial "sections/testimonials.html" . }}
{{ partial "sections/cta.html" . }}
{{ end }}

```
---

## layouts/partials/footer.html
```html
<footer class="border-t theme-border theme-bg-primary">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

    <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

      <div class="md:col-span-1">
        <a href="/" class="flex items-center gap-2.5 mb-5 group" aria-label="ZEDLABS">
          <div class="nav-logo-wrap">
            <img src="/favicon.ico" alt="ZEDLABS" class="nav-logo-img" width="28" height="28" />
          </div>
          <span class="font-bold theme-text-primary">ZED<span class="text-gradient-green">LABS</span></span>
        </a>
        <p class="text-sm theme-text-secondary leading-relaxed">
          {{ .Site.Params.description }}
        </p>
        <div class="flex gap-2 mt-6">
          <a href="{{ .Site.Params.github }}" target="_blank" rel="noopener noreferrer" class="social-btn"
            aria-label="GitHub">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="{{ .Site.Params.linkedin }}" target="_blank" rel="noopener noreferrer" class="social-btn"
            aria-label="LinkedIn">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank" rel="noopener noreferrer"
            class="social-btn" aria-label="WhatsApp">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="footer-heading">Navigasi</h4>
        <ul class="space-y-2">
          {{ range .Site.Menus.main }}
          <li>
            <a href="{{ .URL }}" class="footer-link">{{ .Name }}</a>
          </li>
          {{ end }}
        </ul>
      </div>

      <div>
        <h4 class="footer-heading">Perusahaan</h4>
        <ul class="space-y-2">
          <li><a href="/about" class="footer-link">Tentang Kami</a></li>
          <li><a href="/blog" class="footer-link">Blog</a></li>
          <li><a href="/projects" class="footer-link">Proyek</a></li>
          <li><a href="/contact" class="footer-link">Kontak</a></li>
        </ul>
      </div>

      <div>
        <h4 class="footer-heading">Kontak</h4>
        <ul class="space-y-2">
          <li>
            <a href="mailto:{{ .Site.Params.email }}" class="footer-link">
              {{ .Site.Params.email }}
            </a>
          </li>
          <li>
            <a href="https://wa.me/{{ .Site.Params.whatsapp }}" target="_blank" rel="noopener noreferrer"
              class="footer-link">
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

    </div>

    <div class="mt-12 pt-8 border-t theme-border flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-xs theme-text-muted">
        &copy; {{ now.Year }} ZEDLABS. All rights reserved.
      </p>
      <p class="text-xs theme-text-muted font-mono">
        Built with Hugo
      </p>
    </div>

  </div>
</footer>

```
---

## layouts/partials/head.html
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />
<meta name="theme-color" content="#0a0a0f" />

<title>
  {{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }} &middot; {{ .Site.Title }}{{ end }}
</title>

<link rel="canonical" href="{{ .Permalink }}" />

<meta property="og:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}" />
<meta property="og:description"
  content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />
<meta property="og:type" content="{{ if .IsPage }}article{{ else }}website{{ end }}" />
<meta property="og:url" content="{{ .Permalink }}" />
<meta property="og:site_name" content="{{ .Site.Title }}" />
{{ with .Params.thumbnail }}
<meta property="og:image" content="{{ . | absURL }}" />
{{ else }}
<meta property="og:image" content="{{ " og-default.png" | absURL }}" />
{{ end }}

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{{ if .IsHome }}{{ .Site.Title }}{{ else }}{{ .Title }}{{ end }}" />
<meta name="twitter:description"
  content="{{ with .Description }}{{ . }}{{ else }}{{ .Site.Params.description }}{{ end }}" />

{{ if .IsPage }}
<meta property="article:published_time" content="{{ .Date.Format " 2006-01-02T15:04:05Z07:00" }}" />
{{ with .Params.tags }}{{ range . }}
<meta property="article:tag" content="{{ . }}" />
{{ end }}{{ end }}
{{ end }}

<link rel="icon" type="image/x-icon" href="/favicon.ico" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet" />

<link rel="stylesheet" href="/css/main.css" />

<script>
  (function () {
    try {
      var saved = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (saved === "light" || (!saved && !prefersDark)) {
        document.documentElement.classList.add("light");
      } else {
        document.documentElement.classList.remove("light");
      }
    } catch (e) { }
  })();
</script>

```
---

## layouts/partials/nav.html
```html
<header x-data="{ open: false, scrolled: false }"
  x-init="window.addEventListener('scroll', () => { scrolled = window.scrollY > 20 })"
  :class="scrolled ? 'nav-scrolled' : 'border-transparent bg-transparent'"
  class="fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300">

  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">

      <a href="/" class="flex items-center gap-2.5 group" aria-label="ZEDLABS — Beranda">
        <div class="nav-logo-wrap">
          <img src="/favicon.ico" alt="ZEDLABS" class="nav-logo-img" width="28" height="28" />
        </div>
        <span class="font-bold tracking-tight text-base theme-text-primary">
          ZED<span class="text-gradient-green">LABS</span>
        </span>
      </a>

      <nav class="hidden items-center gap-0.5 md:flex" aria-label="Navigasi utama">
        {{ $currentPage := . }}
        {{ range .Site.Menus.main }}
        {{ $isActive := or ($currentPage.IsMenuCurrent "main" .) ($currentPage.HasMenuCurrent "main" .) }}
        <a href="{{ .URL }}"
          class="relative rounded-lg px-3 py-2 text-sm transition-all duration-150 {{ if $isActive }}nav-link-active{{ else }}nav-link{{ end }}">
          {{ .Name }}
          {{ if $isActive }}
          <span class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            style="background:#3fb950;"></span>
          {{ end }}
        </a>
        {{ end }}
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <button onclick="toggleTheme()" class="nav-icon-btn" aria-label="Ganti tema">
          <svg data-icon-moon class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg data-icon-sun class="h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>

        <a href="/contact" class="btn-primary text-sm">
          Mulai Konsultasi
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <button @click="open = !open" :aria-expanded="open.toString()" class="nav-icon-btn md:hidden"
        aria-label="Buka menu">
        <svg x-show="!open" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg x-show="open" x-cloak class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

    </div>
  </div>

  <div x-show="open" x-cloak x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0"
    x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0"
    x-transition:leave-end="opacity-0 -translate-y-2" class="mobile-menu border-t md:hidden" aria-label="Menu mobile">
    <div class="space-y-0.5 px-4 py-3">
      {{ range .Site.Menus.main }}
      <a href="{{ .URL }}" @click="open = false" class="nav-link flex items-center rounded-lg px-3 py-2.5 text-sm">
        {{ .Name }}
      </a>
      {{ end }}
      <div class="border-t theme-border mt-3 pt-3 flex items-center gap-3">
        <button onclick="toggleTheme()" class="nav-icon-btn" aria-label="Ganti tema">
          <svg data-icon-moon class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <svg data-icon-sun class="h-4 w-4 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
        <a href="/contact" class="btn-primary flex-1 justify-center text-sm">
          Mulai Konsultasi
        </a>
      </div>
    </div>
  </div>
</header>

```
---

## layouts/partials/sections/about.html
```html
{{ $about := .Params.about }}

<section class="section border-t theme-border relative overflow-hidden">

  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full"
      style="background: radial-gradient(circle, rgba(31,111,235,0.05) 0%, transparent 70%);"></div>
  </div>

  <div class="container-content relative">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <div class="reveal">
        <span class="section-label">{{ $about.label }}</span>
        <h2 class="section-title">{{ $about.title }}</h2>
        <p class="section-subtitle">{{ $about.body }}</p>
        <a href="/about" class="btn-outline mt-10 inline-flex">
          Selengkapnya tentang kami
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-1 gap-4">
        {{ range $i, $d := $about.differentiators }}
        <div class="glass-card p-6 flex gap-4 items-start reveal reveal-delay-{{ add $i 1 }}">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border theme-border theme-bg-overlay">
            <span class="text-lg">{{ $d.icon }}</span>
          </div>
          <div>
            <h3 class="font-semibold theme-text-primary text-sm">{{ $d.title }}</h3>
            <p class="theme-text-secondary text-sm mt-1 leading-relaxed">{{ $d.desc }}</p>
          </div>
        </div>
        {{ end }}
      </div>

    </div>
  </div>
</section>

```
---

## layouts/partials/sections/cta.html
```html
{{ $cta := .Params.cta }}

<section class="section border-t theme-border">
  <div class="container-content">
    <div class="relative rounded-3xl border overflow-hidden p-12 sm:p-20 text-center"
      style="border-color: rgba(35,134,54,0.2); background: rgba(22,27,34,0.4); backdrop-filter: blur(20px);">

      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full animate-pulse-glow"
          style="background: radial-gradient(ellipse, rgba(35,134,54,0.15) 0%, transparent 70%);"></div>
        <div class="absolute inset-0"
          style="background: linear-gradient(135deg, rgba(35,134,54,0.05) 0%, transparent 50%, rgba(31,111,235,0.05) 100%);">
        </div>
      </div>

      <div class="relative reveal">
        <span class="section-label">Mulai Sekarang</span>
        <h2 class="section-title mt-4">{{ $cta.title }}</h2>
        <p class="section-subtitle max-w-xl mx-auto">{{ $cta.subtitle }}</p>

        <div class="flex flex-wrap justify-center gap-4 mt-12">
          <a href="{{ $cta.primary.url }}" class="btn-primary px-10 py-4 text-base">
            {{ $cta.primary.label }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="{{ $cta.secondary.url }}" class="btn-outline px-10 py-4 text-base">
            {{ $cta.secondary.label }}
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

```
---

## layouts/partials/sections/hero.html
```html
{{ $hero := .Params.hero }}

<section class="relative min-h-screen flex items-center overflow-hidden noise-bg">

  <div class="absolute inset-0 hero-bg-dark">
  </div>

  <div class="absolute inset-0 hero-bg-light hidden">
  </div>

  <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div class="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full animate-pulse-glow"
      style="background: radial-gradient(circle, rgba(35,134,54,0.15) 0%, transparent 70%);"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-pulse-glow-delayed"
      style="background: radial-gradient(circle, rgba(31,111,235,0.10) 0%, transparent 70%);"></div>
  </div>

  <div class="absolute inset-0 pointer-events-none hero-grid" aria-hidden="true"></div>

  <div class="relative container-content section pt-32 pb-20">
    <div class="max-w-5xl">

      <div class="animate-reveal-up" style="animation-delay: 0s;">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
          style="border-color: rgba(35,134,54,0.3); background: rgba(35,134,54,0.08); backdrop-filter: blur(12px);">
          <span class="w-1.5 h-1.5 rounded-full animate-pulse" style="background: #3fb950;"></span>
          <span class="text-xs font-mono" style="color: #3fb950;">Open for projects — 2026</span>
        </div>
      </div>

      <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight animate-reveal-up"
        style="animation-delay: 0.1s;">
        <span class="theme-text-primary block">{{ $hero.headline }}</span>
        <span class="text-gradient-green animate-gradient block mt-2">{{ $hero.headline_accent }}</span>
      </h1>

      <p class="mt-8 text-lg sm:text-xl max-w-2xl leading-relaxed theme-text-secondary animate-reveal-up"
        style="animation-delay: 0.2s;">
        {{ $hero.subheadline }}
      </p>

      <div class="flex flex-wrap gap-4 mt-12 animate-reveal-up" style="animation-delay: 0.3s;">
        <a href="{{ $hero.cta_primary.url }}" class="btn-primary px-8 py-4 text-base">
          {{ $hero.cta_primary.label }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="{{ $hero.cta_secondary.url }}" class="btn-outline px-8 py-4 text-base">
          {{ $hero.cta_secondary.label }}
        </a>
      </div>

      <div class="mt-16 animate-reveal-up" style="animation-delay: 0.4s;">
        <p class="text-xs font-mono theme-text-muted mb-4 uppercase tracking-widest">Tech Stack</p>
        <div class="flex flex-wrap gap-2">
          {{ range slice "Go" "Hugo" "PocketBase" "PostgreSQL" "React" "Flutter" "Tailwind" "Docker" "Cloudflare" }}
          <span class="tag">{{ . }}</span>
          {{ end }}
        </div>
      </div>

    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-reveal-fade"
    style="animation-delay: 1s;" aria-hidden="true">
    <span class="text-xs font-mono theme-text-muted">scroll</span>
    <div class="w-px h-10 relative overflow-hidden scroll-line">
    </div>
  </div>

</section>

```
---

## layouts/partials/sections/services.html
```html
{{ $s := .Params.services }}

<section class="section border-t theme-border relative overflow-hidden">

  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full"
      style="background: radial-gradient(ellipse, rgba(35,134,54,0.06) 0%, transparent 70%);"></div>
  </div>

  <div class="container-content relative">

    <div class="text-center max-w-2xl mx-auto mb-20 reveal">
      <span class="section-label">{{ $s.label }}</span>
      <h2 class="section-title">{{ $s.title }}</h2>
      <p class="section-subtitle">{{ $s.subtitle }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {{ range $i, $item := $s.items }}
      <a href="{{ $item.url }}"
        class="card-interactive p-7 flex flex-col gap-5 group reveal reveal-delay-{{ add $i 1 }}">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border theme-border theme-bg-overlay">
          <span class="text-2xl">{{ $item.icon }}</span>
        </div>
        <div>
          <span class="badge-{{ $item.badge_color }}">{{ $item.badge }}</span>
          <h3 class="text-lg font-semibold theme-text-primary mt-3">{{ $item.title }}</h3>
          <p class="theme-text-secondary text-sm mt-2 leading-relaxed">{{ $item.desc }}</p>
        </div>
        <div
          class="mt-auto pt-5 border-t theme-border flex items-center text-sm theme-text-secondary group-hover:text-[#388bfd] transition-colors duration-200">
          Pelajari lebih lanjut
          <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
      {{ end }}
    </div>

    <div class="text-center mt-14">
      <a href="/services" class="btn-secondary">
        Lihat Semua Layanan
      </a>
    </div>

  </div>
</section>

```
---

## layouts/partials/sections/stats.html
```html
<section class="border-t theme-border relative overflow-hidden">

  <div class="absolute inset-0 pointer-events-none"
    style="background: linear-gradient(135deg, rgba(35,134,54,0.03) 0%, transparent 50%, rgba(31,111,235,0.03) 100%);">
  </div>

  <div class="container-content py-20 relative">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {{ range site.Data.stats }}
      <div class="text-center reveal">
        <div class="text-4xl sm:text-5xl font-bold font-mono theme-text-primary">
          <span data-counter data-target="{{ .value }}">0</span>{{ .suffix }}
        </div>
        <p class="text-sm theme-text-secondary mt-3">{{ .label }}</p>
      </div>
      {{ end }}
    </div>
  </div>
</section>

```
---

## layouts/partials/sections/testimonials.html
```html
<section class="section border-t theme-border relative overflow-hidden">

  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full"
      style="background: radial-gradient(circle, rgba(163,113,247,0.05) 0%, transparent 70%);"></div>
  </div>

  <div class="container-content relative">

    <div class="text-center max-w-2xl mx-auto mb-20 reveal">
      <span class="section-label">Testimoni</span>
      <h2 class="section-title">Yang klien katakan</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {{ range $i, $t := site.Data.testimonials }}
      <div class="glass-card p-7 flex flex-col gap-5 reveal reveal-delay-{{ add $i 1 }}">
        <div class="flex gap-1">
          {{ range seq $t.rating }}
          <svg class="w-4 h-4" fill="currentColor" style="color: #f0883e;" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {{ end }}
        </div>
        <p class="text-sm theme-text-secondary leading-relaxed flex-1">
          "{{ $t.content }}"
        </p>
        <div class="flex items-center gap-3 pt-5 border-t theme-border">
          <div
            class="w-10 h-10 rounded-full theme-bg-overlay border theme-border flex items-center justify-center text-sm font-mono font-bold theme-text-secondary">
            {{ substr $t.name 0 1 }}
          </div>
          <div>
            <p class="text-sm font-semibold theme-text-primary">{{ $t.name }}</p>
            <p class="text-xs theme-text-muted">{{ $t.role }} · {{ $t.company }}</p>
          </div>
        </div>
      </div>
      {{ end }}
    </div>

  </div>
</section>

```
---

## layouts/products/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Produk</span>
      <h1 class="section-title">Produk yang Kami Bangun</h1>
      <p class="section-subtitle">
        SaaS tools dan solusi siap pakai yang lahir dari pengalaman membangun ratusan proyek.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {{ range .Pages }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col overflow-hidden">
        {{ with index .Params.screenshots 0 }}
        <div class="aspect-video overflow-hidden project-placeholder">
          <img src="{{ . }}" alt="{{ $.Title }}"
            class="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
        </div>
        {{ else }}
        <div class="flex aspect-video items-center justify-center project-placeholder">
          <span class="font-mono text-3xl font-bold project-placeholder-text">{{ substr .Title 0 1 }}</span>
        </div>
        {{ end }}
        <div class="flex flex-1 flex-col p-6">
          {{ with .Params.category }}
          <span class="badge-purple self-start mb-3">{{ . }}</span>
          {{ end }}
          <h2 class="font-semibold theme-text-primary leading-snug group-hover:text-[#388bfd] transition-colors">
            {{ .Title }}
          </h2>
          {{ with .Description }}
          <p class="mt-2 text-sm theme-text-secondary leading-relaxed flex-1">{{ . }}</p>
          {{ end }}
        </div>
      </a>
      {{ end }}
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/products/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">

    <div class="max-w-4xl mx-auto">

      <header class="mb-12">
        {{ with .Params.category }}
        <span class="badge-purple mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle text-lg">{{ . }}</p>
        {{ end }}
      </header>

      {{ with index .Params.screenshots 0 }}
      <div class="mb-16 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      {{ with .Params.features }}
      <div class="mb-16">
        <h2 class="text-xl font-bold text-[#e6edf3] mb-6">Fitur Utama</h2>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {{ range . }}
          <li class="flex items-start gap-3 rounded-lg border border-[#30363d] bg-[#161b22] p-4">
            <svg class="mt-0.5 h-4 w-4 shrink-0 text-[#238636]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm text-[#8b949e]">{{ . }}</span>
          </li>
          {{ end }}
        </ul>
      </div>
      {{ end }}

      {{ with .Content }}
      <div class="prose-zed mb-16">{{ . }}</div>
      {{ end }}

      <div class="rounded-xl border border-[#238636]/30 bg-[#0f2d1a] p-8 text-center">
        <h2 class="text-xl font-bold text-[#e6edf3]">Tertarik menggunakan produk ini?</h2>
        <p class="mt-2 text-[#8b949e]">Hubungi kami untuk demo atau informasi lebih lanjut.</p>
        <a href="/contact" class="btn-primary mt-6">
          Minta Demo
        </a>
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/projects/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Portofolio</span>
      <h1 class="section-title">Proyek yang Kami Bangun</h1>
      <p class="section-subtitle">
        Dari startup hingga enterprise. Setiap proyek adalah bukti nyata dari pendekatan kami.
      </p>
    </div>

    <div x-data="{
        active: 'Semua',
        categories: ['Semua', 'Web', 'Mobile', 'SaaS', 'Consulting']
      }" class="mt-16">
      <div class="flex flex-wrap gap-2 mb-10">
        <template x-for="cat in categories" :key="cat">
          <button @click="active = cat" :class="active === cat
              ? 'filter-btn-active'
              : 'filter-btn'" x-text="cat">
          </button>
        </template>
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {{ range .Pages }}
        {{ if .Params.is_public | default true }}
        <a href="{{ .Permalink }}" x-show="active === 'Semua' || active === '{{ .Params.category }}'"
          x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 scale-95"
          x-transition:enter-end="opacity-100 scale-100" class="card-interactive group flex flex-col overflow-hidden">
          {{ with .Params.thumbnail }}
          <div class="aspect-video overflow-hidden project-placeholder">
            <img src="{{ . }}" alt="{{ $.Title }}"
              class="h-full w-full object-cover opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105" />
          </div>
          {{ else }}
          <div class="flex aspect-video items-center justify-center project-placeholder">
            <span class="font-mono text-3xl font-bold project-placeholder-text">{{ substr .Title 0 1 }}</span>
          </div>
          {{ end }}
          <div class="flex flex-1 flex-col p-6">
            {{ with .Params.category }}
            <span class="badge-blue self-start mb-3">{{ . }}</span>
            {{ end }}
            <h2 class="font-semibold theme-text-primary leading-snug group-hover:text-[#388bfd] transition-colors">
              {{ .Title }}
            </h2>
            {{ with .Description }}
            <p class="mt-2 text-sm theme-text-secondary leading-relaxed flex-1">{{ . }}</p>
            {{ end }}
            {{ with .Params.tech_stack }}
            <div class="mt-5 flex flex-wrap gap-1.5 pt-4 border-t theme-border">
              {{ range first 4 . }}
              <span class="tag">{{ . }}</span>
              {{ end }}
            </div>
            {{ end }}
          </div>
        </a>
        {{ end }}
        {{ end }}
      </div>
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/projects/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">

    <div class="max-w-4xl mx-auto">

      <header class="mb-12">
        <div class="flex flex-wrap items-center gap-3 mb-6">
          {{ with .Params.category }}
          <span class="badge-blue">{{ . }}</span>
          {{ end }}
          {{ with .Params.client_name }}
          <span class="text-xs font-mono text-[#6e7681]">{{ . }}</span>
          {{ end }}
        </div>
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-[#e6edf3]">
          {{ .Title }}
        </h1>
        {{ with .Description }}
        <p class="mt-5 text-lg text-[#8b949e] leading-relaxed">{{ . }}</p>
        {{ end }}
      </header>

      {{ with .Params.thumbnail }}
      <div class="mb-16 overflow-hidden rounded-xl border border-[#30363d]">
        <img src="{{ . }}" alt="{{ $.Title }}" class="w-full object-cover" />
      </div>
      {{ end }}

      {{ if or .Params.problem .Params.solution .Params.result }}
      <div class="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {{ with .Params.problem }}
        <div class="card p-6">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-3">Problem</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
        {{ with .Params.solution }}
        <div class="card p-6">
          <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-3">Solution</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
        {{ with .Params.result }}
        <div class="card p-6 border-[#238636]">
          <p class="text-xs font-mono uppercase tracking-widest text-[#238636] mb-3">Result</p>
          <p class="text-sm text-[#8b949e] leading-relaxed">{{ . }}</p>
        </div>
        {{ end }}
      </div>
      {{ end }}

      {{ with .Content }}
      <div class="prose-zed mb-16">{{ . }}</div>
      {{ end }}

      {{ with .Params.tech_stack }}
      <div class="mb-16">
        <p class="text-xs font-mono uppercase tracking-widest text-[#6e7681] mb-4">Tech Stack</p>
        <div class="flex flex-wrap gap-2">
          {{ range . }}
          <span class="tag">{{ . }}</span>
          {{ end }}
        </div>
      </div>
      {{ end }}

      <footer class="flex items-center justify-between border-t border-[#21262d] pt-10">
        <a href="/projects" class="btn-outline text-sm">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Semua Proyek
        </a>
        {{ with .Params.github_url }}
        <a href="{{ . }}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-sm">
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Lihat di GitHub
        </a>
        {{ end }}
      </footer>

    </div>
  </div>
</article>
{{ end }}

```
---

## layouts/services/list.html
```html
{{ define "main" }}
<div class="pt-32 section">
  <div class="container-content">

    <div class="max-w-2xl">
      <span class="section-label">Layanan</span>
      <h1 class="section-title">Yang Kami Kerjakan</h1>
      <p class="section-subtitle">
        Tiga area keahlian utama kami, dijalankan dengan standar engineering yang ketat.
      </p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
      {{ range .Pages }}
      <a href="{{ .Permalink }}" class="card-interactive group flex flex-col p-6">
        {{ with .Params.icon }}
        <span class="text-3xl mb-4">{{ . }}</span>
        {{ end }}
        {{ with .Params.badge }}
        <span class="badge-blue self-start mb-3">{{ . }}</span>
        {{ end }}
        <h2 class="text-lg font-semibold theme-text-primary group-hover:text-[#388bfd] transition-colors">
          {{ .Title }}
        </h2>
        {{ with .Description }}
        <p class="mt-2 text-sm theme-text-secondary leading-relaxed flex-1">{{ . }}</p>
        {{ end }}
        <div
          class="mt-6 flex items-center gap-1 pt-4 border-t theme-border text-sm theme-text-secondary group-hover:text-[#388bfd] transition-colors">
          Pelajari lebih lanjut
          <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </a>
      {{ end }}
    </div>

  </div>
</div>
{{ end }}

```
---

## layouts/services/single.html
```html
{{ define "main" }}
<article class="pt-32 section">
  <div class="container-content">
    <div class="max-w-3xl mx-auto">

      <header class="mb-12">
        {{ with .Params.badge }}
        <span class="badge-{{ $.Params.badge_color | default " blue" }} mb-4">{{ . }}</span>
        {{ end }}
        <h1 class="section-title">{{ .Title }}</h1>
        {{ with .Description }}
        <p class="section-subtitle text-lg">{{ . }}</p>
        {{ end }}
      </header>

      {{ with .Content }}
      <div class="prose-zed">{{ . }}</div>
      {{ end }}

      <div class="mt-16 rounded-xl border border-[#238636]/30 bg-[#0f2d1a] p-8">
        <h2 class="text-xl font-bold text-[#e6edf3]">Tertarik dengan layanan ini?</h2>
        <p class="mt-2 text-[#8b949e]">Konsultasikan kebutuhan Anda. Kami siap membantu dalam 1x24 jam.</p>
        <div class="mt-6 flex flex-wrap gap-4">
          <a href="/contact" class="btn-primary">Mulai Konsultasi</a>
          <a href="/projects" class="btn-outline">Lihat Case Study</a>
        </div>
      </div>

    </div>
  </div>
</article>
{{ end }}

```
---

## .nvmrc
```text
20

```
---

## package.json
```json
{
  "name": "zedlabs-web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "concurrently \"tailwindcss -i ./assets/css/main.css -o ./static/css/main.css --watch\" \"hugo server --disableFastRender\"",
    "build": "tailwindcss -i ./assets/css/main.css -o ./static/css/main.css --minify && cp ./assets/js/main.js ./static/js/main.js && hugo --minify",
    "clean": "rm -rf public resources"
  },
  "devDependencies": {
    "@tailwindcss/cli": "latest",
    "concurrently": "^10.0.3",
    "tailwindcss": "latest"
  }
}

```
---

## pnpm-workspace.yaml
```yaml
allowBuilds:
  '@parcel/watcher': true

```
---

## static/css/main.css
```css
/*! tailwindcss v4.3.1 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: "Lexend", system-ui, sans-serif;
    --font-mono: "JetBrains Mono", "Fira Code", monospace;
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-red-950: oklch(25.8% 0.092 26.042);
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --text-7xl: 4.5rem;
    --text-7xl--line-height: 1;
    --text-8xl: 6rem;
    --text-8xl--line-height: 1;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-tight: -0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-md: 12px;
    --blur-3xl: 64px;
    --aspect-video: 16 / 9;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .visible {
    visibility: visible;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: 0;
  }
  .top-0 {
    top: 0;
  }
  .top-1 {
    top: var(--spacing);
  }
  .top-1\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-1\/4 {
    top: calc(1 / 4 * 100%);
  }
  .right-0 {
    right: 0;
  }
  .right-1 {
    right: var(--spacing);
  }
  .right-1\/4 {
    right: calc(1 / 4 * 100%);
  }
  .right-3 {
    right: calc(var(--spacing) * 3);
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-1 {
    bottom: var(--spacing);
  }
  .bottom-1\/4 {
    bottom: calc(1 / 4 * 100%);
  }
  .bottom-8 {
    bottom: calc(var(--spacing) * 8);
  }
  .left-0 {
    left: 0;
  }
  .left-1 {
    left: var(--spacing);
  }
  .left-1\/2 {
    left: calc(1 / 2 * 100%);
  }
  .left-1\/4 {
    left: calc(1 / 4 * 100%);
  }
  .z-50 {
    z-index: 50;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-0\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-1\.5 {
    margin-top: calc(var(--spacing) * 1.5);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-5 {
    margin-top: calc(var(--spacing) * 5);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mt-10 {
    margin-top: calc(var(--spacing) * 10);
  }
  .mt-12 {
    margin-top: calc(var(--spacing) * 12);
  }
  .mt-14 {
    margin-top: calc(var(--spacing) * 14);
  }
  .mt-16 {
    margin-top: calc(var(--spacing) * 16);
  }
  .mt-20 {
    margin-top: calc(var(--spacing) * 20);
  }
  .mt-24 {
    margin-top: calc(var(--spacing) * 24);
  }
  .mt-auto {
    margin-top: auto;
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-10 {
    margin-bottom: calc(var(--spacing) * 10);
  }
  .mb-12 {
    margin-bottom: calc(var(--spacing) * 12);
  }
  .mb-16 {
    margin-bottom: calc(var(--spacing) * 16);
  }
  .mb-20 {
    margin-bottom: calc(var(--spacing) * 20);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-auto {
    margin-left: auto;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .table {
    display: table;
  }
  .aspect-video {
    aspect-ratio: var(--aspect-video);
  }
  .h-1 {
    height: var(--spacing);
  }
  .h-1\.5 {
    height: calc(var(--spacing) * 1.5);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-96 {
    height: calc(var(--spacing) * 96);
  }
  .h-\[400px\] {
    height: 400px;
  }
  .h-\[500px\] {
    height: 500px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1 {
    width: var(--spacing);
  }
  .w-1\.5 {
    width: calc(var(--spacing) * 1.5);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-20 {
    width: calc(var(--spacing) * 20);
  }
  .w-96 {
    width: calc(var(--spacing) * 96);
  }
  .w-\[400px\] {
    width: 400px;
  }
  .w-\[500px\] {
    width: 500px;
  }
  .w-\[600px\] {
    width: 600px;
  }
  .w-full {
    width: 100%;
  }
  .w-px {
    width: 1px;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-4xl {
    max-width: var(--container-4xl);
  }
  .max-w-5xl {
    max-width: var(--container-5xl);
  }
  .max-w-6xl {
    max-width: var(--container-6xl);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .-translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-1\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: 0;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * 2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-95 {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-100 {
    --tw-scale-x: 100%;
    --tw-scale-y: 100%;
    --tw-scale-z: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .list-decimal {
    list-style-type: decimal;
  }
  .list-disc {
    list-style-type: disc;
  }
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-0 {
    gap: 0;
  }
  .gap-0\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .gap-16 {
    gap: calc(var(--spacing) * 16);
  }
  .gap-20 {
    gap: calc(var(--spacing) * 20);
  }
  .space-y-0 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: 0;
      margin-block-end: 0;
    }
  }
  .space-y-0\.5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 0.5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 0.5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--spacing) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-5 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .self-start {
    align-self: flex-start;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .scroll-smooth {
    scroll-behavior: smooth;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-3xl {
    border-radius: var(--radius-3xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-r-lg {
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .border-\[\#21262d\] {
    border-color: #21262d;
  }
  .border-\[\#30363d\] {
    border-color: #30363d;
  }
  .border-\[\#238636\] {
    border-color: #238636;
  }
  .border-\[\#238636\]\/30 {
    border-color: color-mix(in oklab, #238636 30%, transparent);
  }
  .border-red-700 {
    border-color: var(--color-red-700);
  }
  .border-red-900 {
    border-color: var(--color-red-900);
  }
  .border-red-900\/50 {
    border-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-red-900) 50%, transparent);
    }
  }
  .border-transparent {
    border-color: transparent;
  }
  .bg-\[\#0f2d1a\] {
    background-color: #0f2d1a;
  }
  .bg-\[\#161b22\] {
    background-color: #161b22;
  }
  .bg-\[\#21262d\] {
    background-color: #21262d;
  }
  .bg-\[\#238636\]\/10 {
    background-color: color-mix(in oklab, #238636 10%, transparent);
  }
  .bg-red-950 {
    background-color: var(--color-red-950);
  }
  .bg-red-950\/30 {
    background-color: color-mix(in srgb, oklch(25.8% 0.092 26.042) 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-950) 30%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .via-transparent {
    --tw-gradient-via: transparent;
    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-via-stops);
  }
  .to-transparent {
    --tw-gradient-to: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .object-cover {
    object-fit: cover;
  }
  .p-0 {
    padding: 0;
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-7 {
    padding: calc(var(--spacing) * 7);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .px-1 {
    padding-inline: var(--spacing);
  }
  .px-1\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .py-0 {
    padding-block: 0;
  }
  .py-0\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .py-24 {
    padding-block: calc(var(--spacing) * 24);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-5 {
    padding-top: calc(var(--spacing) * 5);
  }
  .pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-20 {
    padding-top: calc(var(--spacing) * 20);
  }
  .pt-32 {
    padding-top: calc(var(--spacing) * 32);
  }
  .pr-10 {
    padding-right: calc(var(--spacing) * 10);
  }
  .pb-20 {
    padding-bottom: calc(var(--spacing) * 20);
  }
  .pl-4 {
    padding-left: calc(var(--spacing) * 4);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-7xl {
    font-size: var(--text-7xl);
    line-height: var(--tw-leading, var(--text-7xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-\[\#6e7681\] {
    color: #6e7681;
  }
  .text-\[\#8b949e\] {
    color: #8b949e;
  }
  .text-\[\#388bfd\] {
    color: #388bfd;
  }
  .text-\[\#238636\] {
    color: #238636;
  }
  .text-\[\#e6edf3\] {
    color: #e6edf3;
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-white {
    color: var(--color-white);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-5 {
    opacity: 5%;
  }
  .opacity-10 {
    opacity: 10%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .blur-3xl {
    --tw-blur: blur(var(--blur-3xl));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .group-hover\:translate-x-1 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-translate-x: var(--spacing);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .group-hover\:scale-105 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-scale-x: 105%;
        --tw-scale-y: 105%;
        --tw-scale-z: 105%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }
    }
  }
  .group-hover\:text-\[\#388bfd\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #388bfd;
      }
    }
  }
  .group-hover\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .hover\:bg-\[\#161b22\] {
    &:hover {
      @media (hover: hover) {
        background-color: #161b22;
      }
    }
  }
  .hover\:text-\[\#388bfd\] {
    &:hover {
      @media (hover: hover) {
        color: #388bfd;
      }
    }
  }
  .hover\:underline {
    &:hover {
      @media (hover: hover) {
        text-decoration-line: underline;
      }
    }
  }
  .focus\:border-red-500 {
    &:focus {
      border-color: var(--color-red-500);
    }
  }
  .focus\:ring-red-500 {
    &:focus {
      --tw-ring-color: var(--color-red-500);
    }
  }
  .focus-visible\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .sm\:grid-cols-2 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .sm\:grid-cols-3 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .sm\:flex-row {
    @media (width >= 40rem) {
      flex-direction: row;
    }
  }
  .sm\:items-center {
    @media (width >= 40rem) {
      align-items: center;
    }
  }
  .sm\:p-20 {
    @media (width >= 40rem) {
      padding: calc(var(--spacing) * 20);
    }
  }
  .sm\:px-6 {
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
  }
  .sm\:text-4xl {
    @media (width >= 40rem) {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
  }
  .sm\:text-5xl {
    @media (width >= 40rem) {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
  }
  .sm\:text-6xl {
    @media (width >= 40rem) {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
  }
  .sm\:text-xl {
    @media (width >= 40rem) {
      font-size: var(--text-xl);
      line-height: var(--tw-leading, var(--text-xl--line-height));
    }
  }
  .md\:col-span-1 {
    @media (width >= 48rem) {
      grid-column: span 1 / span 1;
    }
  }
  .md\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\:hidden {
    @media (width >= 48rem) {
      display: none;
    }
  }
  .md\:grid-cols-3 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .md\:grid-cols-4 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .lg\:flex {
    @media (width >= 64rem) {
      display: flex;
    }
  }
  .lg\:aspect-auto {
    @media (width >= 64rem) {
      aspect-ratio: auto;
    }
  }
  .lg\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .lg\:grid-cols-3 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .lg\:grid-cols-4 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .lg\:p-10 {
    @media (width >= 64rem) {
      padding: calc(var(--spacing) * 10);
    }
  }
  .lg\:px-8 {
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  .lg\:text-5xl {
    @media (width >= 64rem) {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
  }
  .lg\:text-7xl {
    @media (width >= 64rem) {
      font-size: var(--text-7xl);
      line-height: var(--tw-leading, var(--text-7xl--line-height));
    }
  }
  .xl\:text-8xl {
    @media (width >= 80rem) {
      font-size: var(--text-8xl);
      line-height: var(--tw-leading, var(--text-8xl--line-height));
    }
  }
}
@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: #0a0a0f;
    color: #e6edf3;
    font-family: var(--font-sans);
    transition: background-color 0.25s ease, color 0.25s ease;
    overflow-x: hidden;
  }
  html.light body {
    background-color: #f6f8fa;
    color: #1f2328;
  }
  ::selection {
    background-color: #238636;
    color: #ffffff;
  }
  :focus-visible {
    outline: 2px solid #238636;
    outline-offset: 2px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(48, 54, 61, 0.8);
    border-radius: 99px;
  }
  html.light ::-webkit-scrollbar-thumb {
    background: rgba(208, 215, 222, 0.8);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #8b949e;
  }
}
@layer components {
  .container-content {
    margin-inline: auto;
    max-width: var(--container-6xl);
    padding-inline: calc(var(--spacing) * 4);
    @media (width >= 40rem) {
      padding-inline: calc(var(--spacing) * 6);
    }
    @media (width >= 64rem) {
      padding-inline: calc(var(--spacing) * 8);
    }
  }
  .section {
    padding-block: calc(var(--spacing) * 24);
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 32);
    }
  }
  #scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    width: 0%;
    z-index: 9999;
    background: linear-gradient(90deg, #238636, #3fb950, #79c0ff);
    transition: width 0.1s linear;
    pointer-events: none;
  }
  .nav-scrolled {
    background: rgba(10, 10, 15, 0.85);
    border-color: rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  html.light .nav-scrolled {
    background: rgba(246, 248, 250, 0.88);
    border-color: rgba(208, 215, 222, 0.5);
  }
  .nav-active {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }
  html.light .nav-active {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.6);
  }
  .hero-bg-dark {
    background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(35, 134, 54, 0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(31, 111, 235, 0.08) 0%, transparent 50%), #0a0a0f;
  }
  html.light .hero-bg-dark {
    background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26, 127, 55, 0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(9, 105, 218, 0.05) 0%, transparent 50%), #f6f8fa;
  }
  .hero-grid {
    background-image: linear-gradient(rgba(56, 139, 253, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 139, 253, 0.025) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%);
  }
  html.light .hero-grid {
    background-image: linear-gradient(rgba(9, 105, 218, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 105, 218, 0.04) 1px, transparent 1px);
  }
  .scroll-line {
    background: rgba(110, 118, 129, 0.2);
  }
  .scroll-line::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to bottom, transparent, #3fb950, transparent);
    animation: scroll-line-move 2s ease-in-out infinite;
  }
  @keyframes scroll-line-move {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(300%);
    }
  }
  .section-label {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 3);
    padding-block: var(--spacing);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    color: #3fb950;
    border-color: rgba(35, 134, 54, 0.3);
    background-color: rgba(35, 134, 54, 0.08);
  }
  html.light .section-label {
    color: #1a7f37;
    border-color: rgba(26, 127, 55, 0.3);
    background-color: rgba(26, 127, 55, 0.08);
  }
  .section-title {
    margin-top: calc(var(--spacing) * 4);
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
    @media (width >= 40rem) {
      font-size: var(--text-4xl);
      line-height: var(--tw-leading, var(--text-4xl--line-height));
    }
    @media (width >= 64rem) {
      font-size: var(--text-5xl);
      line-height: var(--tw-leading, var(--text-5xl--line-height));
    }
    color: #e6edf3;
  }
  html.light .section-title {
    color: #1f2328;
  }
  .section-subtitle {
    margin-top: calc(var(--spacing) * 4);
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
    color: #8b949e;
  }
  html.light .section-subtitle {
    color: #57606a;
  }
  .btn-primary {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    overflow: hidden;
    border-radius: var(--radius-xl);
    padding-inline: calc(var(--spacing) * 6);
    padding-block: calc(var(--spacing) * 3);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: var(--color-white);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    background: linear-gradient(135deg, #238636, #1a7f37);
    box-shadow: 0 0 20px rgba(35, 134, 54, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  .btn-primary::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), transparent);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .btn-primary:hover::before {
    opacity: 1;
  }
  .btn-primary:hover {
    box-shadow: 0 0 32px rgba(35, 134, 54, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transform: translateY(-1px);
  }
  .btn-primary:active {
    transform: translateY(0);
    box-shadow: 0 0 16px rgba(35, 134, 54, 0.3);
  }
  .btn-outline {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    overflow: hidden;
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 6);
    padding-block: calc(var(--spacing) * 3);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    border-color: rgba(48, 54, 61, 0.8);
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(12px);
  }
  .btn-outline:hover {
    border-color: rgba(139, 148, 158, 0.5);
    background: rgba(33, 38, 45, 0.7);
    transform: translateY(-1px);
  }
  .btn-outline:active {
    transform: translateY(0);
  }
  html.light .btn-outline {
    border-color: rgba(208, 215, 222, 0.9);
    color: #1f2328;
    background: rgba(255, 255, 255, 0.6);
  }
  html.light .btn-outline:hover {
    border-color: rgba(140, 149, 159, 0.7);
    background: rgba(246, 248, 250, 0.9);
  }
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-xl);
    padding-inline: calc(var(--spacing) * 6);
    padding-block: calc(var(--spacing) * 3);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
    background: rgba(33, 38, 45, 0.6);
    color: #e6edf3;
    border: 1px solid rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(12px);
  }
  .btn-secondary:hover {
    background: rgba(48, 54, 61, 0.8);
    transform: translateY(-1px);
  }
  html.light .btn-secondary {
    background: rgba(246, 248, 250, 0.6);
    color: #1f2328;
    border-color: rgba(208, 215, 222, 0.5);
  }
  html.light .btn-secondary:hover {
    background: rgba(234, 238, 242, 0.9);
  }
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing) * 2);
    border-radius: var(--radius-xl);
    padding-inline: calc(var(--spacing) * 6);
    padding-block: calc(var(--spacing) * 3);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    color: #8b949e;
  }
  .btn-ghost:hover {
    background: rgba(22, 27, 34, 0.6);
    color: #e6edf3;
  }
  html.light .btn-ghost:hover {
    background: rgba(234, 238, 242, 0.6);
    color: #1f2328;
  }
  .glass-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-2xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  html.light .glass-card {
    border-color: rgba(208, 215, 222, 0.6);
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.04);
  }
  .glass-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, transparent 60%);
    pointer-events: none;
  }
  html.light .glass-card::before {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, transparent 60%);
  }
  .card {
    border-radius: var(--radius-2xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.6);
  }
  html.light .card {
    border-color: rgba(208, 215, 222, 0.6);
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }
  .card-interactive {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: var(--radius-2xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 300ms;
    transition-duration: 300ms;
    border-color: rgba(48, 54, 61, 0.5);
    background: rgba(22, 27, 34, 0.4);
    backdrop-filter: blur(12px);
  }
  .card-interactive::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(56, 139, 253, 0.04), transparent);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
  .card-interactive:hover {
    border-color: rgba(56, 139, 253, 0.35);
    box-shadow: 0 0 0 1px rgba(56, 139, 253, 0.15), 0 8px 32px rgba(56, 139, 253, 0.08);
    transform: translateY(-3px);
  }
  .card-interactive:hover::before {
    opacity: 1;
  }
  .card-interactive:active {
    transform: translateY(-1px);
  }
  html.light .card-interactive {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }
  html.light .card-interactive:hover {
    border-color: rgba(9, 105, 218, 0.3);
    box-shadow: 0 0 0 1px rgba(9, 105, 218, 0.15), 0 8px 32px rgba(9, 105, 218, 0.07);
  }
  .badge-purple {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: rgba(61, 36, 117, 0.5);
    background: rgba(45, 28, 92, 0.35);
    color: #a371f7;
    backdrop-filter: blur(8px);
  }
  html.light .badge-purple {
    border-color: rgba(130, 80, 223, 0.25);
    background: rgba(251, 239, 255, 0.85);
    color: #6639ba;
  }
  .badge-blue {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: rgba(17, 88, 199, 0.5);
    background: rgba(12, 45, 107, 0.35);
    color: #388bfd;
    backdrop-filter: blur(8px);
  }
  html.light .badge-blue {
    border-color: rgba(9, 105, 218, 0.25);
    background: rgba(221, 244, 255, 0.85);
    color: #0550ae;
  }
  .badge-green {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: rgba(35, 134, 54, 0.5);
    background: rgba(15, 45, 26, 0.35);
    color: #3fb950;
    backdrop-filter: blur(8px);
  }
  html.light .badge-green {
    border-color: rgba(26, 127, 55, 0.25);
    background: rgba(218, 251, 225, 0.85);
    color: #116329;
  }
  .badge-orange {
    display: inline-flex;
    align-items: center;
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 2.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    border-color: rgba(155, 79, 18, 0.5);
    background: rgba(45, 26, 10, 0.35);
    color: #f0883e;
    backdrop-filter: blur(8px);
  }
  html.light .badge-orange {
    border-color: rgba(188, 76, 0, 0.25);
    background: rgba(255, 241, 229, 0.85);
    color: #953800;
  }
  .tag {
    border-radius: calc(infinity * 1px);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 3);
    padding-block: var(--spacing);
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(22, 27, 34, 0.4);
    color: #6e7681;
    backdrop-filter: blur(8px);
  }
  .tag:hover {
    border-color: rgba(139, 148, 158, 0.4);
    color: #8b949e;
    background: rgba(33, 38, 45, 0.5);
  }
  html.light .tag {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(246, 248, 250, 0.7);
    color: #57606a;
  }
  html.light .tag:hover {
    border-color: rgba(140, 149, 159, 0.5);
    color: #424a53;
  }
  .text-gradient-green {
    background: linear-gradient(135deg, #3fb950 0%, #238636 50%, #1a7f37 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  html.light .text-gradient-green {
    background: linear-gradient(135deg, #1a7f37 0%, #116329 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .text-gradient-blue {
    background: linear-gradient(135deg, #79c0ff 0%, #388bfd 50%, #1f6feb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .glow-green {
    box-shadow: 0 0 40px rgba(35, 134, 54, 0.15);
  }
  .glow-blue {
    box-shadow: 0 0 40px rgba(31, 111, 235, 0.15);
  }
  .theme-bg-primary {
    background-color: #0a0a0f;
  }
  html.light .theme-bg-primary {
    background-color: #f6f8fa;
  }
  .theme-bg-surface {
    background-color: rgba(22, 27, 34, 0.6);
  }
  html.light .theme-bg-surface {
    background-color: rgba(246, 248, 250, 0.7);
  }
  .theme-bg-overlay {
    background-color: rgba(33, 38, 45, 0.6);
  }
  html.light .theme-bg-overlay {
    background-color: rgba(234, 238, 242, 0.7);
  }
  .theme-border {
    border-color: rgba(48, 54, 61, 0.6);
  }
  html.light .theme-border {
    border-color: rgba(208, 215, 222, 0.7);
  }
  .theme-border-muted {
    border-color: rgba(33, 38, 45, 0.6);
  }
  html.light .theme-border-muted {
    border-color: rgba(234, 238, 242, 0.7);
  }
  .theme-text-primary {
    color: #e6edf3;
  }
  html.light .theme-text-primary {
    color: #1f2328;
  }
  .theme-text-secondary {
    color: #8b949e;
  }
  html.light .theme-text-secondary {
    color: #57606a;
  }
  .theme-text-muted {
    color: #6e7681;
  }
  html.light .theme-text-muted {
    color: #8c959f;
  }
  .prose-zed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
    color: #8b949e;
  }
  html.light .prose-zed {
    color: #57606a;
  }
  .prose-zed h2 {
    margin-top: calc(var(--spacing) * 10);
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
    color: #e6edf3;
  }
  html.light .prose-zed h2 {
    color: #1f2328;
  }
  .prose-zed h3 {
    margin-top: calc(var(--spacing) * 8);
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: #e6edf3;
  }
  html.light .prose-zed h3 {
    color: #1f2328;
  }
  .prose-zed p {
    margin-top: calc(var(--spacing) * 4);
  }
  .prose-zed a {
    text-decoration-line: underline;
    text-underline-offset: 2px;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    color: #388bfd;
  }
  .prose-zed a:hover {
    color: #79c0ff;
  }
  html.light .prose-zed a {
    color: #0969da;
  }
  html.light .prose-zed a:hover {
    color: #0550ae;
  }
  .prose-zed ul {
    margin-top: calc(var(--spacing) * 4);
    list-style-type: disc;
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
    padding-left: calc(var(--spacing) * 6);
  }
  .prose-zed ol {
    margin-top: calc(var(--spacing) * 4);
    list-style-type: decimal;
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
    padding-left: calc(var(--spacing) * 6);
  }
  .prose-zed code {
    border-radius: var(--radius-lg);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 1.5);
    padding-block: calc(var(--spacing) * 0.5);
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    background: rgba(22, 27, 34, 0.6);
    color: #f0883e;
    border-color: rgba(48, 54, 61, 0.6);
  }
  html.light .prose-zed code {
    background: rgba(246, 248, 250, 0.9);
    color: #953800;
    border-color: rgba(208, 215, 222, 0.7);
  }
  .prose-zed pre {
    margin-top: calc(var(--spacing) * 4);
    overflow-x: auto;
    border-radius: var(--radius-2xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding: calc(var(--spacing) * 6);
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(13, 17, 23, 0.9);
    backdrop-filter: blur(12px);
  }
  html.light .prose-zed pre {
    border-color: rgba(208, 215, 222, 0.7);
    background: rgba(246, 248, 250, 0.95);
  }
  .prose-zed pre code {
    border-style: var(--tw-border-style);
    border-width: 0px;
    background-color: transparent;
    padding: 0;
    color: #e6edf3;
  }
  html.light .prose-zed pre code {
    color: #1f2328;
  }
  .prose-zed blockquote {
    margin-top: calc(var(--spacing) * 4);
    border-top-right-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
    padding-block: calc(var(--spacing) * 2);
    padding-left: calc(var(--spacing) * 4);
    font-style: italic;
    border-color: #238636;
    color: #6e7681;
    background: rgba(35, 134, 54, 0.05);
  }
  html.light .prose-zed blockquote {
    border-color: #1a7f37;
    color: #57606a;
    background: rgba(26, 127, 55, 0.05);
  }
  .prose-zed img {
    margin-top: calc(var(--spacing) * 6);
    border-radius: var(--radius-2xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    border-color: rgba(48, 54, 61, 0.6);
  }
  html.light .prose-zed img {
    border-color: rgba(208, 215, 222, 0.7);
  }
  .prose-zed table {
    margin-top: calc(var(--spacing) * 6);
    width: 100%;
    border-collapse: collapse;
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .prose-zed th {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 3);
    text-align: left;
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
    color: #e6edf3;
    border-color: rgba(48, 54, 61, 0.6);
  }
  html.light .prose-zed th {
    color: #1f2328;
    border-color: rgba(208, 215, 222, 0.7);
  }
  .prose-zed td {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 3);
    color: #8b949e;
    border-color: rgba(33, 38, 45, 0.6);
  }
  html.light .prose-zed td {
    color: #57606a;
    border-color: rgba(234, 238, 242, 0.7);
  }
  .input {
    width: 100%;
    border-radius: var(--radius-xl);
    border-style: var(--tw-border-style);
    border-width: 1px;
    padding-inline: calc(var(--spacing) * 4);
    padding-block: calc(var(--spacing) * 3);
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
    --tw-duration: 200ms;
    transition-duration: 200ms;
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
    border-color: rgba(48, 54, 61, 0.6);
    background: rgba(13, 17, 23, 0.5);
    color: #e6edf3;
    backdrop-filter: blur(12px);
  }
  .input::placeholder {
    color: #6e7681;
  }
  .input:focus {
    border-color: rgba(56, 139, 253, 0.5);
    background: rgba(13, 17, 23, 0.7);
    box-shadow: 0 0 0 3px rgba(56, 139, 253, 0.12);
  }
  html.light .input {
    border-color: rgba(208, 215, 222, 0.9);
    background: rgba(255, 255, 255, 0.85);
    color: #1f2328;
  }
  html.light .input::placeholder {
    color: #8c959f;
  }
  html.light .input:focus {
    border-color: rgba(9, 105, 218, 0.5);
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.1);
  }
  .label {
    margin-bottom: calc(var(--spacing) * 2);
    display: block;
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
    color: #e6edf3;
  }
  html.light .label {
    color: #1f2328;
  }
  .noise-bg {
    position: relative;
  }
  .noise-bg::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    opacity: 0.35;
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    33% {
      transform: translateY(-18px) rotate(0.8deg);
    }
    66% {
      transform: translateY(-9px) rotate(-0.8deg);
    }
  }
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.15;
      transform: scale(1);
    }
    50% {
      opacity: 0.22;
      transform: scale(1.04);
    }
  }
  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes reveal-up {
    from {
      opacity: 0;
      transform: translateY(28px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes reveal-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float 10s ease-in-out infinite 2s;
  }
  .animate-pulse-glow {
    animation: pulse-glow 4s ease-in-out infinite;
  }
  .animate-pulse-glow-delayed {
    animation: pulse-glow 5s ease-in-out infinite 1.5s;
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 6s ease infinite;
  }
  .animate-reveal-up {
    opacity: 0;
    animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  .animate-reveal-fade {
    opacity: 0;
    animation: reveal-fade 1s ease forwards;
  }
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 {
    transition-delay: 0.08s;
  }
  .reveal-delay-2 {
    transition-delay: 0.16s;
  }
  .reveal-delay-3 {
    transition-delay: 0.24s;
  }
  .reveal-delay-4 {
    transition-delay: 0.32s;
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-float, .animate-float-delayed, .animate-pulse-glow, .animate-pulse-glow-delayed, .animate-gradient, .animate-reveal-up, .animate-reveal-fade {
      animation: none;
      opacity: 1;
      transform: none;
    }
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
  .nav-logo-wrap {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
    transition: box-shadow 0.2s;
    background: rgba(35, 134, 54, 0.12);
    border: 1px solid rgba(35, 134, 54, 0.2);
  }
  html.light .nav-logo-wrap {
    background: rgba(35, 134, 54, 0.08);
    border-color: rgba(35, 134, 54, 0.15);
  }
  .nav-logo-wrap:hover {
    box-shadow: 0 0 14px rgba(35, 134, 54, 0.3);
  }
  .nav-logo-img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
    transition: filter 0.25s;
  }
  html.light .nav-logo-img {
    filter: none;
  }
  .nav-link {
    color: #8b949e;
    transition: color 0.15s, background-color 0.15s;
  }
  .nav-link:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }
  html.light .nav-link {
    color: #57606a;
  }
  html.light .nav-link:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }
  .nav-link-active {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
  }
  html.light .nav-link-active {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }
  .nav-icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    color: #8b949e;
    background: transparent;
    cursor: pointer;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s;
  }
  .nav-icon-btn:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
    border-color: rgba(139, 148, 158, 0.4);
  }
  html.light .nav-icon-btn {
    border-color: rgba(208, 215, 222, 0.7);
    color: #57606a;
  }
  html.light .nav-icon-btn:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
    border-color: rgba(140, 149, 159, 0.5);
  }
  .nav-scrolled {
    background: rgba(10, 10, 15, 0.88);
    border-color: rgba(48, 54, 61, 0.5);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  html.light .nav-scrolled {
    background: rgba(246, 248, 250, 0.92);
    border-color: rgba(208, 215, 222, 0.6);
  }
  .mobile-menu {
    background: rgba(10, 10, 15, 0.96);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: rgba(48, 54, 61, 0.5);
  }
  html.light .mobile-menu {
    background: rgba(246, 248, 250, 0.97);
    border-color: rgba(208, 215, 222, 0.6);
  }
  .social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    color: #6e7681;
    transition: color 0.15s, background-color 0.15s, border-color 0.15s;
  }
  .social-btn:hover {
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.6);
    border-color: rgba(139, 148, 158, 0.4);
  }
  html.light .social-btn {
    border-color: rgba(208, 215, 222, 0.7);
    color: #8c959f;
  }
  html.light .social-btn:hover {
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
    border-color: rgba(140, 149, 159, 0.5);
  }
  .footer-heading {
    font-size: 0.8125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #e6edf3;
  }
  html.light .footer-heading {
    color: #1f2328;
  }
  .footer-link {
    display: block;
    font-size: 0.875rem;
    color: #8b949e;
    transition: color 0.15s;
  }
  .footer-link:hover {
    color: #e6edf3;
  }
  html.light .footer-link {
    color: #57606a;
  }
  html.light .footer-link:hover {
    color: #1f2328;
  }
  .filter-btn {
    border-radius: 8px;
    border: 1px solid rgba(48, 54, 61, 0.6);
    padding: 6px 16px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #8b949e;
    background: transparent;
    cursor: pointer;
    transition: all 0.15s;
  }
  .filter-btn:hover {
    border-color: rgba(139, 148, 158, 0.5);
    color: #e6edf3;
    background: rgba(22, 27, 34, 0.5);
  }
  html.light .filter-btn {
    border-color: rgba(208, 215, 222, 0.8);
    color: #57606a;
  }
  html.light .filter-btn:hover {
    border-color: rgba(140, 149, 159, 0.6);
    color: #1f2328;
    background: rgba(234, 238, 242, 0.7);
  }
  .filter-btn-active {
    border-radius: 8px;
    border: 1px solid rgba(35, 134, 54, 0.5);
    padding: 6px 16px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #3fb950;
    background: rgba(35, 134, 54, 0.1);
    cursor: pointer;
    transition: all 0.15s;
  }
  html.light .filter-btn-active {
    border-color: rgba(26, 127, 55, 0.4);
    color: #1a7f37;
    background: rgba(26, 127, 55, 0.08);
  }
  .project-placeholder {
    background: rgba(22, 27, 34, 0.8);
  }
  html.light .project-placeholder {
    background: rgba(234, 238, 242, 0.8);
  }
  .project-placeholder-text {
    color: rgba(48, 54, 61, 0.8);
  }
  html.light .project-placeholder-text {
    color: rgba(140, 149, 159, 0.7);
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
    }
  }
}

```
---

## static/robots.txt
```text
User-agent: *
Allow: /

Sitemap: https://zedlabs.id/sitemap.xml

```
---
