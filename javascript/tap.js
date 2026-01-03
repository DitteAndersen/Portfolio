document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;

      // fjern active fra alle
      tabs.forEach((t) => t.classList.remove("is-active"));
      contents.forEach((c) => c.classList.remove("is-active"));

      // tilføj active til valgt
      tab.classList.add("is-active");
      document.getElementById(target).classList.add("is-active");
    });
  });
});
