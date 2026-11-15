const filter = document.getElementById("status-filter");
const rows = document.querySelectorAll("tbody tr");

filter.addEventListener("change", () => {
  rows.forEach(row => {
    row.hidden = filter.value !== "All" && row.dataset.status !== filter.value;
  });
});
