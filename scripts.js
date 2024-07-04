document.addEventListener("DOMContentLoaded", () => {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  const updateTime = () => {
    const now = new Date();
    currentTimeUTC.textContent =
      now.toISOString().split("T")[1].split(".")[0] + " UTC";
    currentDay.textContent = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  updateTime();
  setInterval(updateTime, 1000); // Update every second
});
