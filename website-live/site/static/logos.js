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
    const show = () => { box.style.visibility = "visible"; };
    const total = logos.reduce((sum, logo) => sum + logo.odds, 0);
    if (!logos.every(logo => Number.isFinite(logo.odds) && logo.odds >= 0)
        || Math.abs(total - 100) > 0.000001) {
        console.warn("Logo odds must be non-negative numbers adding up to 100.");
        show();
        return;
    }
    // Remember normal logos too, so refreshing cannot reroll the odds.
    let selected;
    try {
        const saved = sessionStorage.getItem("website-logo");
        selected = logos.find(logo => logo.name === saved);
    } catch (_) { /* Storage may be disabled in the browser. */ }
    if (!selected) {
        const roll = Math.random() * 100;
        let cumulativeOdds = 0;
        selected = logos.find(logo => {
            cumulativeOdds += logo.odds;
            return roll < cumulativeOdds;
        });
        try {
            sessionStorage.setItem("website-logo", selected.name);
        } catch (_) { /* The logo still works without storage. */ }
    }
    if (!selected.filename) { show(); return; }
    // Keep the box hidden until its image is ready, preventing a red flash.
    const imageURL = box.dataset.backgroundFolder + encodeURIComponent(selected.filename);
    const image = new Image();
    let finished = false;
    const finish = (loaded) => {
        if (finished) return;
        finished = true;
        clearTimeout(fallback);
        if (loaded) box.style.backgroundImage = 'url("' + imageURL + '")';
        show();
    };
    const fallback = setTimeout(() => finish(false), 5000);
    image.onload = () => finish(true);
    image.onerror = () => finish(false);
    image.src = imageURL;
}
chooseLogo();
