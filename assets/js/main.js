(function () {
  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    syncIcons();
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
    localStorage.setItem("theme", next);
    applyTheme(next);
  };

  document.addEventListener("DOMContentLoaded", function () {
    syncIcons();
  });
})();

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

var animateCounter = function (el) {
  var target = parseInt(el.dataset.target);
  var duration = 2000;
  var step = target / (duration / 16);
  var current = 0;
  var timer = setInterval(function () {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("id-ID");
  }, 16);
};

var counters = document.querySelectorAll("[data-counter]");
if (counters.length) {
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });
}

var reveals = document.querySelectorAll(".reveal");
if (reveals.length) {
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );
  reveals.forEach(function (el) {
    revealObserver.observe(el);
  });
}

document.addEventListener("mousemove", function (e) {
  var blobs = document.querySelectorAll(".animate-pulse-glow, .animate-pulse-glow-delayed");
  var x = (e.clientX / window.innerWidth - 0.5) * 20;
  var y = (e.clientY / window.innerHeight - 0.5) * 20;
  blobs.forEach(function (blob, i) {
    var factor = i % 2 === 0 ? 1 : -0.6;
    blob.style.transform = "translate(" + x * factor + "px, " + y * factor + "px)";
  });
});

document.addEventListener("alpine:init", function () {
  Alpine.data("contactForm", function (pocketbaseUrl) {
    return {
      form: { name: "", email: "", need_type: "", message: "" },
      status: "idle",
      errors: {},

      validate: function () {
        this.errors = {};
        if (!this.form.name) this.errors.name = "Nama wajib diisi";
        if (!this.form.email || !this.form.email.includes("@"))
          this.errors.email = "Email tidak valid";
        if (!this.form.need_type) this.errors.need_type = "Pilih salah satu kebutuhan";
        if (!this.form.message || this.form.message.length < 10)
          this.errors.message = "Pesan minimal 10 karakter";
        return Object.keys(this.errors).length === 0;
      },

      submit: async function () {
        if (!this.validate()) return;
        this.status = "loading";
        try {
          var res = await fetch(pocketbaseUrl + "/api/collections/contact_submissions/records", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.form),
          });
          this.status = res.ok ? "success" : "error";
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
