import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://maabanjaridham.in";

const PAGES = {
  "/": {
    title: "माँ बंजारी धाम खपरी (मढ़ी) — तिल्दा, रायपुर | दर्शन समय, इतिहास, फोटो",
    desc: "माँ बंजारी धाम मंदिर खपरी (मढ़ी), तिल्दा रायपुर — दर्शन समय, इतिहास, फोटो, सुविधाएं, दान और संपर्क। जय माता दी!",
  },
  "/itihas": {
    title: "मंदिर का इतिहास — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा रायपुर",
    desc: "माँ बंजारी धाम खपरी (मढ़ी) मंदिर का इतिहास, मान्यता और हर साल लगने वाले मेले की जानकारी पढ़ें।",
  },
  "/photos": {
    title: "मंदिर की फोटो — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा",
    desc: "माँ बंजारी धाम मंदिर की तस्वीरें — दर्शन, परिसर, माता रानी और रात्रि दर्शन की फोटो देखें।",
  },
  "/suvidha": {
    title: "भक्तों के लिए सुविधाएं — माँ बंजारी धाम, तिल्दा रायपुर",
    desc: "पेयजल, विश्रामालय, भोजनालय, पूजा सामग्री, प्रकाश और पार्किंग — मंदिर परिसर में उपलब्ध सुविधाओं की जानकारी।",
  },
  "/trust": {
    title: "मंदिर समिति / ट्रस्ट — माँ बंजारी धाम खपरी (मढ़ी)",
    desc: "माँ बंजारी धाम मंदिर समिति के सदस्यों की जानकारी — अध्यक्ष, सचिव और अन्य पदाधिकारी।",
  },
  "/daan": {
    title: "दान और सहयोग — माँ बंजारी धाम, तिल्दा रायपुर",
    desc: "मंदिर के विकास, पूजा-सामग्री और भक्त सुविधाओं के लिए दान करें। दान की रसीद मंदिर कार्यालय से मिलती है।",
  },
  "/sampark": {
    title: "संपर्क, पता और मैप — माँ बंजारी धाम खपरी (मढ़ी), तिल्दा",
    desc: "माँ बंजारी धाम खपरी (मढ़ी), तिल्दा, रायपुर (छत्तीसगढ़) — 493116। दर्शन समय, पता, फोन और Google Maps पर रास्ता देखें।",
  },
};

function metaName(name) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
}

function metaProp(property) {
  let el = document.head.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  return el;
}

function canonical() {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  return el;
}

export function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = PAGES[pathname];
    const url = SITE + pathname;

    if (!page) {
      document.title = "पेज नहीं मिला — माँ बंजारी धाम";
      document.head.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex");
      return;
    }

    document.title = page.title;
    metaName("description").setAttribute("content", page.desc);
    metaProp("og:title").setAttribute("content", page.title);
    metaProp("og:description").setAttribute("content", page.desc);
    metaProp("og:url").setAttribute("content", url);
    metaName("twitter:title").setAttribute("content", page.title);
    metaName("twitter:description").setAttribute("content", page.desc);
    canonical().setAttribute("href", url);
  }, [pathname]);
}
