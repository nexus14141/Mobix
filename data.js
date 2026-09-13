/* MOBIX demo product data.
   Structure mirrors the roadmap's schema (trimmed for a static prototype).
   All scores/specs are DEMO DATA for prototyping — not verified benchmarks. */

const MOBIX_PRODUCTS = [
  {
    id: "poco-f8", brand: "POCO", name: "POCO F8", category: "phones",
    price: 449, currency: "USD", image: "📱",
    specs: { processor: "Snapdragon 8s Gen 4", ram: "12GB", storage: "256GB", display: "6.67\" AMOLED 120Hz", battery: "5500mAh", camera: "50MP main" },
    scores: { performance: 95, gaming: 97, battery: 92, camera: 78, display: 90, value: 96, longevity: 84 },
    bestFor: ["Gaming", "Performance", "Battery life", "Value"],
    notIdealFor: ["Photography-focused users"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "galaxy-s25fe", brand: "Samsung", name: "Galaxy S25 FE", category: "phones",
    price: 599, currency: "USD", image: "📱",
    specs: { processor: "Exynos 2500", ram: "8GB", storage: "256GB", display: "6.4\" AMOLED 120Hz", battery: "4700mAh", camera: "50MP main + tele" },
    scores: { performance: 86, gaming: 80, battery: 84, camera: 92, display: 89, value: 80, longevity: 88 },
    bestFor: ["Camera", "Software support", "Compact size"],
    notIdealFor: ["Heavy mobile gamers on a budget"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "pixel-9a", brand: "Google", name: "Pixel 9a", category: "phones",
    price: 399, currency: "USD", image: "📱",
    specs: { processor: "Tensor G4", ram: "8GB", storage: "128GB", display: "6.3\" OLED 90Hz", battery: "4800mAh", camera: "48MP main" },
    scores: { performance: 78, gaming: 70, battery: 85, camera: 88, display: 82, value: 90, longevity: 90 },
    bestFor: ["Camera on a budget", "Clean software", "Long software support"],
    notIdealFor: ["Gamers wanting high refresh + top-tier chips"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "oneplus-13r", brand: "OnePlus", name: "OnePlus 13R", category: "phones",
    price: 499, currency: "USD", image: "📱",
    specs: { processor: "Snapdragon 8 Gen 3", ram: "12GB", storage: "256GB", display: "6.78\" AMOLED 120Hz", battery: "6000mAh", camera: "50MP main" },
    scores: { performance: 90, gaming: 92, battery: 95, camera: 80, display: 88, value: 93, longevity: 82 },
    bestFor: ["Battery life", "Gaming", "Fast charging"],
    notIdealFor: ["Users who want the smallest possible phone"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "iphone-15", brand: "Apple", name: "iPhone 15", category: "phones",
    price: 649, currency: "USD", image: "📱",
    specs: { processor: "A16 Bionic", ram: "6GB", storage: "128GB", display: "6.1\" OLED 60Hz", battery: "3349mAh", camera: "48MP main" },
    scores: { performance: 88, gaming: 82, battery: 74, camera: 90, display: 84, value: 72, longevity: 95 },
    bestFor: ["Longevity", "Camera", "iOS ecosystem"],
    notIdealFor: ["Budget-focused buyers", "High refresh rate fans"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "galaxy-a51", brand: "Samsung", name: "Galaxy A51", category: "phones",
    price: 259, currency: "USD", image: "📱",
    specs: { processor: "Exynos 9611", ram: "6GB", storage: "128GB", display: "6.5\" AMOLED 60Hz", battery: "4000mAh", camera: "48MP main" },
    scores: { performance: 42, gaming: 35, battery: 65, camera: 60, display: 62, value: 70, longevity: 40 },
    bestFor: ["Light everyday use", "Budget buyers"],
    notIdealFor: ["Gaming", "Performance-hungry apps", "Longevity"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "thinkpad-x1", brand: "Lenovo", name: "ThinkPad X1 Carbon", category: "laptops",
    price: 1349, currency: "USD", image: "💻",
    specs: { processor: "Intel Core Ultra 7", ram: "16GB", storage: "512GB SSD", display: "14\" 2.8K OLED", battery: "Up to 14hrs", camera: "1080p webcam" },
    scores: { performance: 88, gaming: 45, battery: 85, camera: 70, display: 90, value: 78, longevity: 92 },
    bestFor: ["Work", "Portability", "Build quality"],
    notIdealFor: ["Gaming"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "macbook-air-m3", brand: "Apple", name: "MacBook Air M3", category: "laptops",
    price: 949, currency: "USD", image: "💻",
    specs: { processor: "Apple M3", ram: "16GB", storage: "256GB SSD", display: "13.6\" Liquid Retina", battery: "Up to 18hrs", camera: "1080p webcam" },
    scores: { performance: 85, gaming: 40, battery: 96, camera: 75, display: 92, value: 82, longevity: 94 },
    bestFor: ["Battery life", "Portability", "Longevity"],
    notIdealFor: ["Gaming", "Users needing many ports"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "zephyrus-g14", brand: "ASUS", name: "ROG Zephyrus G14", category: "laptops",
    price: 1499, currency: "USD", image: "💻",
    specs: { processor: "Ryzen 9 8945HS", ram: "32GB", storage: "1TB SSD", display: "14\" QHD+ 165Hz", battery: "Up to 10hrs", camera: "1080p webcam" },
    scores: { performance: 93, gaming: 91, battery: 70, camera: 68, display: 90, value: 84, longevity: 85 },
    bestFor: ["Gaming", "Performance", "Portability for a gaming laptop"],
    notIdealFor: ["All-day battery life on battery-only tasks"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "dell-xps13", brand: "Dell", name: "XPS 13", category: "laptops",
    price: 999, currency: "USD", image: "💻",
    specs: { processor: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "13.4\" FHD+", battery: "Up to 12hrs", camera: "1080p webcam" },
    scores: { performance: 78, gaming: 35, battery: 80, camera: 72, display: 84, value: 80, longevity: 86 },
    bestFor: ["School", "Everyday productivity", "Portability"],
    notIdealFor: ["Gaming", "Heavy multitasking/rendering"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "legion-pro5", brand: "Lenovo", name: "Legion Pro 5", category: "laptops",
    price: 1299, currency: "USD", image: "💻",
    specs: { processor: "Ryzen 7 8845HS", ram: "16GB", storage: "1TB SSD", display: "16\" QHD 165Hz", battery: "Up to 6hrs", camera: "1080p webcam" },
    scores: { performance: 89, gaming: 94, battery: 55, camera: 60, display: 87, value: 87, longevity: 80 },
    bestFor: ["Gaming", "Value for gaming performance"],
    notIdealFor: ["Battery life away from a charger", "Portability"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "rtx-5070ti", brand: "NVIDIA", name: "RTX 5070 Ti", category: "components",
    price: 729, currency: "USD", image: "🖥️",
    specs: { processor: "GPU", ram: "16GB VRAM", storage: "—", display: "—", battery: "—", camera: "—" },
    scores: { performance: 92, gaming: 94, battery: 0, camera: 0, display: 0, value: 82, longevity: 88 },
    bestFor: ["1440p/4K gaming", "Creator workloads"],
    notIdealFor: ["Budget builds"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "rtx-4070", brand: "NVIDIA", name: "RTX 4070", category: "components",
    price: 479, currency: "USD", image: "🖥️",
    specs: { processor: "GPU", ram: "12GB VRAM", storage: "—", display: "—", battery: "—", camera: "—" },
    scores: { performance: 82, gaming: 85, battery: 0, camera: 0, display: 0, value: 88, longevity: 78 },
    bestFor: ["1440p gaming", "Value"],
    notIdealFor: ["4K max-settings gaming"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "rx-7800xt", brand: "AMD", name: "Radeon RX 7800 XT", category: "components",
    price: 459, currency: "USD", image: "🖥️",
    specs: { processor: "GPU", ram: "16GB VRAM", storage: "—", display: "—", battery: "—", camera: "—" },
    scores: { performance: 80, gaming: 84, battery: 0, camera: 0, display: 0, value: 90, longevity: 80 },
    bestFor: ["1440p gaming", "Value per VRAM"],
    notIdealFor: ["Ray-tracing-heavy titles at max settings"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "steam-deck-oled", brand: "Valve", name: "Steam Deck OLED", category: "handhelds",
    price: 549, currency: "USD", image: "🕹️",
    specs: { processor: "AMD Van Gogh", ram: "16GB", storage: "512GB SSD", display: "7.4\" OLED 90Hz", battery: "Up to 12hrs", camera: "—" },
    scores: { performance: 74, gaming: 90, battery: 78, camera: 0, display: 88, value: 89, longevity: 82 },
    bestFor: ["PC gaming on the go", "Value"],
    notIdealFor: ["Users wanting the most raw power possible"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "rog-ally-x", brand: "ASUS", name: "ROG Ally X", category: "handhelds",
    price: 599, currency: "USD", image: "🕹️",
    specs: { processor: "AMD Z1 Extreme", ram: "24GB", storage: "1TB SSD", display: "7\" FHD 120Hz", battery: "Up to 8hrs", camera: "—" },
    scores: { performance: 84, gaming: 92, battery: 70, camera: 0, display: 86, value: 85, longevity: 80 },
    bestFor: ["Gaming performance in a handheld", "Windows game library"],
    notIdealFor: ["Battery life vs. Steam Deck"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "switch2", brand: "Nintendo", name: "Switch 2", category: "consoles",
    price: 449, currency: "USD", image: "🎮",
    specs: { processor: "Custom NVIDIA", ram: "12GB", storage: "256GB", display: "7.9\" LCD 120Hz", battery: "Up to 6hrs", camera: "—" },
    scores: { performance: 70, gaming: 88, battery: 65, camera: 0, display: 78, value: 84, longevity: 85 },
    bestFor: ["Nintendo exclusives", "Portable + docked flexibility"],
    notIdealFor: ["Users wanting max raw graphical power"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "ps5-slim", brand: "Sony", name: "PlayStation 5 Slim", category: "consoles",
    price: 499, currency: "USD", image: "🎮",
    specs: { processor: "Custom AMD Zen 2", ram: "16GB", storage: "1TB SSD", display: "Up to 4K 120Hz (TV)", battery: "—", camera: "—" },
    scores: { performance: 90, gaming: 93, battery: 0, camera: 0, display: 90, value: 82, longevity: 88 },
    bestFor: ["Console exclusives", "Home theater gaming"],
    notIdealFor: ["Portability", "Budget buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "xbox-series-x", brand: "Microsoft", name: "Xbox Series X", category: "consoles",
    price: 499, currency: "USD", image: "🎮",
    specs: { processor: "Custom AMD Zen 2", ram: "16GB", storage: "1TB SSD", display: "Up to 4K 120Hz (TV)", battery: "—", camera: "—" },
    scores: { performance: 91, gaming: 91, battery: 0, camera: 0, display: 89, value: 83, longevity: 88 },
    bestFor: ["Raw power", "Game Pass library", "Backward compatibility"],
    notIdealFor: ["Portability", "Exclusive-focused buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "xiaomi-15", brand: "Xiaomi", name: "Xiaomi 15", category: "phones",
    price: 799, currency: "USD", image: "📱",
    specs: { processor: "Snapdragon 8 Elite", ram: "12GB", storage: "256GB", display: "6.36\" AMOLED 120Hz", battery: "5400mAh", camera: "50MP triple (Leica)" },
    scores: { performance: 96, gaming: 94, battery: 88, camera: 93, display: 89, value: 80, longevity: 86 },
    bestFor: ["Flagship performance", "Camera versatility"],
    notIdealFor: ["Budget buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "nothing-phone-3", brand: "Nothing", name: "Nothing Phone (3)", category: "phones",
    price: 649, currency: "USD", image: "📱",
    specs: { processor: "Snapdragon 8s Gen 4", ram: "12GB", storage: "256GB", display: "6.7\" AMOLED 120Hz", battery: "5150mAh", camera: "50MP dual" },
    scores: { performance: 84, gaming: 80, battery: 82, camera: 82, display: 85, value: 78, longevity: 80 },
    bestFor: ["Distinctive design", "Clean software"],
    notIdealFor: ["Users chasing top benchmark numbers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "moto-edge-60", brand: "Motorola", name: "Moto Edge 60", category: "phones",
    price: 349, currency: "USD", image: "📱",
    specs: { processor: "Dimensity 7300", ram: "8GB", storage: "256GB", display: "6.67\" pOLED 120Hz", battery: "5200mAh", camera: "50MP main" },
    scores: { performance: 68, gaming: 62, battery: 86, camera: 74, display: 80, value: 88, longevity: 76 },
    bestFor: ["Battery life on a budget", "Display quality for the price"],
    notIdealFor: ["Heavy gaming", "Flagship performance seekers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "framework-13", brand: "Framework", name: "Framework Laptop 13", category: "laptops",
    price: 1099, currency: "USD", image: "💻",
    specs: { processor: "Intel Core Ultra 5", ram: "16GB", storage: "512GB SSD", display: "13.5\" 2.8K 120Hz", battery: "Up to 10hrs", camera: "1080p webcam" },
    scores: { performance: 80, gaming: 42, battery: 74, camera: 70, display: 86, value: 76, longevity: 96 },
    bestFor: ["Repairability", "Upgradability", "Longevity"],
    notIdealFor: ["Gaming", "Users wanting the thinnest possible laptop"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "spectre-x360", brand: "HP", name: "Spectre x360 14", category: "laptops",
    price: 1249, currency: "USD", image: "💻",
    specs: { processor: "Intel Core Ultra 7", ram: "16GB", storage: "1TB SSD", display: "14\" 2.8K OLED touch", battery: "Up to 11hrs", camera: "1440p webcam" },
    scores: { performance: 84, gaming: 44, battery: 80, camera: 84, display: 93, value: 74, longevity: 88 },
    bestFor: ["Convertible/touch use", "Display quality", "Build quality"],
    notIdealFor: ["Gaming", "Budget buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "predator-helios", brand: "Acer", name: "Predator Helios Neo 16", category: "laptops",
    price: 1399, currency: "USD", image: "💻",
    specs: { processor: "Intel Core i7-14700HX", ram: "16GB", storage: "1TB SSD", display: "16\" WQXGA 165Hz", battery: "Up to 6hrs", camera: "1080p webcam" },
    scores: { performance: 91, gaming: 93, battery: 52, camera: 62, display: 88, value: 85, longevity: 82 },
    bestFor: ["Gaming", "Performance per dollar"],
    notIdealFor: ["Battery life", "Portability"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "rtx-5060", brand: "NVIDIA", name: "RTX 5060", category: "components",
    price: 329, currency: "USD", image: "🖥️",
    specs: { processor: "GPU", ram: "8GB VRAM", storage: "—", display: "—", battery: "—", camera: "—" },
    scores: { performance: 68, gaming: 74, battery: 0, camera: 0, display: 0, value: 90, longevity: 68 },
    bestFor: ["1080p gaming", "Budget builds"],
    notIdealFor: ["1440p/4K gaming", "VRAM-heavy workloads"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "arc-b580", brand: "Intel", name: "Arc B580", category: "components",
    price: 249, currency: "USD", image: "🖥️",
    specs: { processor: "GPU", ram: "12GB VRAM", storage: "—", display: "—", battery: "—", camera: "—" },
    scores: { performance: 62, gaming: 70, battery: 0, camera: 0, display: 0, value: 92, longevity: 64 },
    bestFor: ["Budget 1080p/1440p gaming", "Best VRAM per dollar"],
    notIdealFor: ["Users needing mature driver support for every title"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "ipad-air-m2", brand: "Apple", name: "iPad Air (M2)", category: "tablets",
    price: 599, currency: "USD", image: "📟",
    specs: { processor: "Apple M2", ram: "8GB", storage: "128GB", display: "11\" Liquid Retina 60Hz", battery: "Up to 10hrs", camera: "12MP main" },
    scores: { performance: 85, gaming: 78, battery: 88, camera: 76, display: 86, value: 78, longevity: 92 },
    bestFor: ["Productivity", "Longevity", "App/accessory ecosystem"],
    notIdealFor: ["Users wanting a high refresh display"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "galaxy-tab-s10", brand: "Samsung", name: "Galaxy Tab S10+", category: "tablets",
    price: 899, currency: "USD", image: "📟",
    specs: { processor: "Dimensity 9300+", ram: "12GB", storage: "256GB", display: "12.4\" AMOLED 120Hz", battery: "Up to 13hrs", camera: "13MP main" },
    scores: { performance: 82, gaming: 76, battery: 85, camera: 78, display: 92, value: 72, longevity: 84 },
    bestFor: ["Display quality", "Note-taking with S Pen", "Battery life"],
    notIdealFor: ["Budget buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "lenovo-tab-p12", brand: "Lenovo", name: "Tab P12", category: "tablets",
    price: 349, currency: "USD", image: "📟",
    specs: { processor: "Snapdragon 685", ram: "8GB", storage: "128GB", display: "12.7\" 2.5K 90Hz", battery: "Up to 12hrs", camera: "8MP main" },
    scores: { performance: 55, gaming: 48, battery: 82, camera: 55, display: 78, value: 88, longevity: 68 },
    bestFor: ["Media consumption on a budget", "Large screen for less"],
    notIdealFor: ["Gaming", "Demanding productivity apps"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },

  {
    id: "ultragear-27gr93u", brand: "LG", name: "UltraGear 27GR93U", category: "monitors",
    price: 899, currency: "USD", image: "🖼️",
    specs: { processor: "—", ram: "—", storage: "—", display: "27\" 4K OLED 144Hz", battery: "—", camera: "—" },
    scores: { performance: 92, display: 96, value: 74, longevity: 86 },
    bestFor: ["High-end gaming", "Color-accurate work"],
    notIdealFor: ["Budget setups", "Static-image office use (OLED burn-in risk)"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "dell-s2721dgf", brand: "Dell", name: "S2721DGF", category: "monitors",
    price: 329, currency: "USD", image: "🖼️",
    specs: { processor: "—", ram: "—", storage: "—", display: "27\" QHD IPS 165Hz", battery: "—", camera: "—" },
    scores: { performance: 80, display: 84, value: 90, longevity: 84 },
    bestFor: ["Value 1440p gaming", "General use"],
    notIdealFor: ["Users wanting OLED contrast"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  },
  {
    id: "odyssey-g9", brand: "Samsung", name: "Odyssey G9", category: "monitors",
    price: 1099, currency: "USD", image: "🖼️",
    specs: { processor: "—", ram: "—", storage: "—", display: "49\" DQHD Ultrawide 240Hz", battery: "—", camera: "—" },
    scores: { performance: 94, display: 95, value: 68, longevity: 82 },
    bestFor: ["Immersive/ultrawide gaming", "Multitasking without multiple monitors"],
    notIdealFor: ["Small desks", "Budget buyers"],
    source: "MOBIX demo data", lastUpdated: "2026-08"
  }
];

/* Which score fields apply to which category — used to hide N/A fields like "camera" for a GPU */
const CATEGORY_SCORE_FIELDS = {
  phones: ["performance","gaming","battery","camera","display","value","longevity"],
  laptops: ["performance","gaming","battery","camera","display","value","longevity"],
  components: ["performance","gaming","value","longevity"],
  handhelds: ["performance","gaming","battery","display","value","longevity"],
  consoles: ["performance","gaming","battery","display","value","longevity"],
  tablets: ["performance","gaming","battery","camera","display","value","longevity"],
  monitors: ["performance","display","value","longevity"]
};

const CATEGORIES = [
  { id: "phones", label: "Phones", icon: "📱" },
  { id: "laptops", label: "Laptops", icon: "💻" },
  { id: "components", label: "Components", icon: "🧩" },
  { id: "consoles", label: "Consoles", icon: "🎮" },
  { id: "handhelds", label: "Handhelds", icon: "🕹️" },
  { id: "tablets", label: "Tablets", icon: "📟" },
  { id: "monitors", label: "Monitors", icon: "🖼️" }
];

/* Accent color family per category, used for device icon tinting */
const CATEGORY_ACCENT = {
  phones: "amber", laptops: "mint", components: "violet",
  consoles: "coral", handhelds: "amber", tablets: "mint", monitors: "violet"
};
