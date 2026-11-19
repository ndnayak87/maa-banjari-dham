import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = join(process.cwd(), "dist");
const SITE = "https://maabanjaridham.in";

const PAGES = [
  [
    "itihas",
    "मंदिर का इतिहास — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा रायपुर",
    "माँ बंजारी धाम खपरी (मढ़ी) मंदिर का इतिहास, मान्यता और हर साल लगने वाले मेले की जानकारी पढ़ें।",
  ],
  [
    "photos",
    "मंदिर की फोटो — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा",
    "माँ बंजारी धाम मंदिर की तस्वीरें — दर्शन, परिसर, माता रानी और रात्रि दर्शन की फोटो देखें।",
  ],
  [
    "suvidha",
    "भक्तों के लिए सुविधाएं — माँ बंजारी धाम, तिल्दा रायपुर",
    "पेयजल, विश्रामालय, भोजनालय, पूजा सामग्री, प्रकाश और पार्किंग — मंदिर परिसर में उपलब्ध सुविधाओं की जानकारी।",
  ],
  [
    "trust",
    "मंदिर समिति / ट्रस्ट — माँ बंजारी धाम खपरी (मढ़ी)",
    "माँ बंजारी धाम मंदिर समिति के सदस्यों की जानकारी — अध्यक्ष, सचिव और अन्य पदाधिकारी।",
  ],
  [
    "daan",
    "दान और सहयोग — माँ बंजारी धाम, तिल्दा रायपुर",
    "मंदिर के विकास, पूजा-सामग्री और भक्त सुविधाओं के लिए दान करें। दान की रसीद मंदिर कार्यालय से मिलती है।",
  ],
  [
    "sampark",
    "संपर्क, पता और मैप — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा",
    "माँ बंजारी धाम खपरी (मढ़ी), तिल्दा, रायपुर (छत्तीसगढ़) — 493116। दर्शन समय, पता और Google Maps पर रास्ता देखें।",
  ],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const base = readFileSync(join(DIST, "index.html"), "utf8");

for (const [path, title, desc] of PAGES) {
  const url = `${SITE}/${path}`;
  const html = base
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"/i, `<meta name="description" content="${esc(desc)}"`)
    .replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/i, `<meta property="og:url" content="${url}"`)
    .replace(/<meta property="og:title" content="[^"]*"/i, `<meta property="og:title" content="${esc(title)}"`)
    .replace(/<meta property="og:description" content="[^"]*"/i, `<meta property="og:description" content="${esc(desc)}"`)
    .replace(/<meta name="twitter:title" content="[^"]*"/i, `<meta name="twitter:title" content="${esc(title)}"`)
    .replace(/<meta name="twitter:description" content="[^"]*"/i, `<meta name="twitter:description" content="${esc(desc)}"`);

  writeFileSync(join(DIST, `${path}.html`), html);
  console.log(`  prerender-meta: ${path}.html ✓`);
}

console.log("prerender-meta: done");
