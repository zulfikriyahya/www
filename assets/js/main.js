// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Stats counter
const animateCounter = (el) => {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString("id-ID");
  }, 16);
};

const counters = document.querySelectorAll("[data-counter]");
if (counters.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((counter) => observer.observe(counter));
}

// Contact form Alpine component
document.addEventListener("alpine:init", () => {
  Alpine.data("contactForm", (pocketbaseUrl) => ({
    form: {
      name: "",
      email: "",
      need_type: "",
      message: "",
    },
    status: "idle",
    errors: {},

    validate() {
      this.errors = {};
      if (!this.form.name) {
        this.errors.name = "Nama wajib diisi";
      }
      if (!this.form.email || !this.form.email.includes("@")) {
        this.errors.email = "Email tidak valid";
      }
      if (!this.form.need_type) {
        this.errors.need_type = "Pilih salah satu kebutuhan";
      }
      if (!this.form.message || this.form.message.length < 10) {
        this.errors.message = "Pesan minimal 10 karakter";
      }
      return Object.keys(this.errors).length === 0;
    },

    async submit() {
      if (!this.validate()) return;
      this.status = "loading";
      try {
        const res = await fetch(pocketbaseUrl + "/api/collections/contact_submissions/records", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });
        this.status = res.ok ? "success" : "error";
      } catch {
        this.status = "error";
      }
    },

    reset() {
      this.form = { name: "", email: "", need_type: "", message: "" };
      this.status = "idle";
      this.errors = {};
    },
  }));
});
