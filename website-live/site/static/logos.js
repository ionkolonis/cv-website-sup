// Add or edit entries here. Odds are percentages and must total 100.
// Use null for the normal red background; image files belong in static/bogos/.
const logos = [
    { name: "normal",   odds: 75, filename: null },
    { name: "bandana",  odds: 7,  filename: "website_bogo_bandana.png" },
    { name: "UK",       odds: 5,  filename: "website_bogo_UK.png" },
    { name: "bape",     odds: 4,  filename: "website_bogo_bape.png" },
    { name: "USD",      odds: 4,  filename: "website_bogo_usd.png" },
    { name: "supper",   odds: 3,  filename: "website_bogo_supper.png" },
    { name: "burberry", odds: 2,  filename: "website_bogo_burberry.png" }
];

function chooseLogo() {
    const box = document.querySelector(".namebox");
    if (!box) return;

    const total = logos.reduce((sum, logo) => sum + logo.odds, 0);
    const validOdds = logos.every(
        logo => Number.isFinite(logo.odds) && logo.odds >= 0
    );
    if (!validOdds || Math.abs(total - 100) > 0.000001) {
        console.warn("Logo odds must be non-negative numbers adding up to 100.");
        return;
    }

    const roll = Math.random() * 100;
    let cumulativeOdds = 0;
    for (const logo of logos) {
        cumulativeOdds += logo.odds;
        if (roll < cumulativeOdds) {
            if (logo.filename) {
                const imageURL = box.dataset.backgroundFolder
                    + encodeURIComponent(logo.filename);
                box.style.backgroundImage = 'url("' + imageURL + '")';
            }
            break;
        }
    }
}

chooseLogo();
