// UPDATED LINKS
const czLink = "https://link-check.click/a/BBryLS88PjCj1pw";
const globalLink = "https://safeoffers.pro/a/zp6oKizw6tgDA4";

async function getVisitorCountry() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return data.country_code;
  } catch (error) {
    return null;
  }
}

document.getElementById("joinBtn").addEventListener("click", async () => {
  const country = await getVisitorCountry();

  if (country === "CZ") {
    window.location.href = czLink;
  } else {
    window.location.href = globalLink;
  }
});
