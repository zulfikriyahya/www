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
