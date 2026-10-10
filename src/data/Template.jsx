import Classic from "../components/templates/Classic";
import Modern from "../components/templates/Modern";
import Creative from "../components/templates/Creative";
import Minimal from "../components/templates/Minimal";
import Executive from "../components/templates/Executive";
import classicPreview from "../assets/classicPreview.png";
import modernPreview from "../assets/modernPreview.png";
import creativePreview from "../assets/creativePreview.png";
import minimalPreview from "../assets/minimalPreview.png";
import executivePreview from "../assets/executivePreview.webp";

export const templates = [
  {
    id: 1,
    name: "Classic",
    slug: "classic",
    description: "Timeless two-column with serif headers",
    preview: classicPreview,
    accentColor: "#1a2744",
    component: Classic,
  },
  {
    id: 2,
    name: "Modern",
    slug: "modern",
    description: "Bold hierarchy, clean geometric accent",
    preview: modernPreview,
    accentColor: "#0d3b66",
    component: Modern,
  },
  {
    id: 3,
    name: "Creative",
    slug: "creative",
    description: "Vibrant sidebar with colorful accents",
    preview: creativePreview,
    accentColor: "#6b21a8",
    component: Creative,
  },
  {
    id: 4,
    name: "Minimal",
    slug: "minimal",
    description: "Ultra-clean whitespace-led layout",
    preview: minimalPreview,
    accentColor: "#111111",
    component: Minimal,
  },
  {
    id: 5,
    name: "Executive",
    slug: "executive",
    description: "Premium dark header, refined serif type",
    preview: executivePreview,
    accentColor: "#7b2d12",
    component: Executive,
  },
];
