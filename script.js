/* ==========================================================================
   DITYAA BOTTLES - MAIN SCRIPT
   Interactive Product Catalog, Configurator, Modal Dialogs & WhatsApp Inquiry
   ========================================================================== */

// Complete Pharmaceutical Packaging Database (Official Client Catalog - DITYAA BOTTLES PROFILE)
const PRODUCTS_DATA = [
  {
    "id": "DB-PHARM-01",
    "name": "Screw Cap Pharma PET Bottle",
    "category": "pet-bottles",
    "material": "PET (100% Prime Virgin Pharma Grade)",
    "grade": "US FDA 21 CFR 177.1630 Pharma Monograph",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "108 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Boston Round Cylindrical",
    "color": "Pharma Amber (UV Light Protection)",
    "weight": "14.5 g",
    "height": "108 mm",
    "diameter": "46 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Oral Liquids, Expectorants, Active Formulations, Suspensions",
    "closures": "28mm ROPP Cap, Pilfer-Proof Screw Cap, CRC Safety Cap",
    "image": "assets/product-screw-cap-pharma.png",
    "badge": "Pharma Core",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-02",
    "name": "Pharma Bottles For Cough Syrup",
    "category": "pet-bottles",
    "material": "PET (Medical Grade Resin)",
    "grade": "EP / USP Class VI Certified",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "112 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Cough Syrup Boston Round",
    "color": "Deep Amber UV-Block",
    "weight": "15.0 g",
    "height": "112 mm",
    "diameter": "48 mm",
    "standardPack": "300 Pcs / Carton",
    "application": "Cough Syrups, Bronchodilator Tonics, Pediatric Suspensions",
    "closures": "28mm Ribbed Measuring Cap (2.5ml - 10ml), CRC",
    "image": "assets/product-cough-syrup-pharma.png",
    "badge": "Cough Syrup",
    "badgeClass": "amber"
  },
  {
    "id": "DB-HDPE-01",
    "name": "Dry Syrup Bottle",
    "category": "hdpe-containers",
    "material": "HDPE (High-Density Polyethylene)",
    "grade": "US FDA 21 CFR 177.1520 Pharma Resin",
    "capacity": "60 ml",
    "capacityValue": 60,
    "overflow": "68 ml",
    "neckSize": "28 mm Ribbed CRC",
    "neckValue": 28,
    "shape": "Cylindrical Solid / Dry Powder Packer",
    "color": "Opaque Pharmaceutical White",
    "weight": "11.5 g",
    "height": "82 mm",
    "diameter": "42 mm",
    "standardPack": "450 Pcs / Carton",
    "application": "Dry Syrups, Antibiotic Reconstitution, Pediatric Oral Granules",
    "closures": "28mm Ribbed Child-Resistant Closure (CRC) with Induction Seal Liner",
    "image": "assets/product-dry-syrup-bottle.png",
    "badge": "Dry Syrup",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-PHARM-03",
    "name": "PET Pharma Micro Brut Bottles",
    "category": "pet-bottles",
    "material": "PET Pharma Grade",
    "grade": "GMP Cleanroom Molded",
    "capacity": "30 ml",
    "capacityValue": 30,
    "overflow": "35 ml",
    "neckSize": "22 mm Threaded",
    "neckValue": 22,
    "shape": "Micro Brut Contoured Neck",
    "color": "Pharma Amber",
    "weight": "8.2 g",
    "height": "78 mm",
    "diameter": "32 mm",
    "standardPack": "600 Pcs / Carton",
    "application": "Concentrated Tinctures, Oral Drops, Active Extracts, Dosing Solutions",
    "closures": "Tamper-Evident Screw Cap, Dropper Insert Plug",
    "image": "assets/product-pharma-micro-brut.png",
    "badge": "Micro Brut",
    "badgeClass": "amber"
  },
  {
    "id": "DB-DROP-01",
    "name": "Dropper PET Bottle",
    "category": "droppers",
    "material": "PET Body + LDPE Calibrated Plug + PP Cap",
    "grade": "Sterile Cleanroom Injection Molded",
    "capacity": "15 ml",
    "capacityValue": 15,
    "overflow": "18 ml",
    "neckSize": "15 mm Dropper",
    "neckValue": 15,
    "shape": "Oval Miniature Dropper",
    "color": "Medical White / High Clarity",
    "weight": "5.5 g complete assembly",
    "height": "68 mm",
    "diameter": "26 mm",
    "standardPack": "1,000 Sets / Carton",
    "application": "Eye Drops, Ear Drops, Pediatric Dosing, Nasal Sprays",
    "closures": "Calibrated 40µL Controlled Dropper Plug + Tear-Band Tamper Ring",
    "image": "assets/product-dropper-pet.png",
    "badge": "Calibrated Tip",
    "badgeClass": "crc"
  },
  {
    "id": "DB-DROP-02",
    "name": "Slim Liquid & Dropper PET Bottle",
    "category": "droppers",
    "material": "PET (Glass-like Transparent)",
    "grade": "Pharma Cleanroom Injection Molded",
    "capacity": "30 ml",
    "capacityValue": 30,
    "overflow": "34 ml",
    "neckSize": "18 mm Threaded",
    "neckValue": 18,
    "shape": "Slim Cylindrical Tower",
    "color": "High-Clarity Glass Clear",
    "weight": "7.5 g",
    "height": "92 mm",
    "diameter": "28 mm",
    "standardPack": "750 Sets / Carton",
    "application": "Pediatric Active Drops, Vitamin D3 Drops, Ophthalmic Solutions",
    "closures": "18mm Calibrated Pipette Dropper, Child-Resistant Tip",
    "image": "assets/product-slim-pet-bottle.png",
    "badge": "Pediatric",
    "badgeClass": "crc"
  },
  {
    "id": "DB-PHARM-04",
    "name": "Square Pharma PET Bottle with Tamper Cap",
    "category": "pet-bottles",
    "material": "PET (Crystal Transparent)",
    "grade": "USP <661> Container Testing Compliant",
    "capacity": "125 ml",
    "capacityValue": 125,
    "overflow": "140 ml",
    "neckSize": "32 mm Wide Neck",
    "neckValue": 32,
    "shape": "Square with Graduation Marks",
    "color": "High Clarity Transparent",
    "weight": "18.0 g",
    "height": "102 mm",
    "diameter": "48 mm x 48 mm",
    "standardPack": "280 Pcs / Carton",
    "application": "Diagnostic Reagents, Lab Solutions, Oral Liquid Formulations",
    "closures": "High-Visibility Orange Ribbed Tamper-Evident Cap",
    "image": "assets/product-pharma-square-orange.png",
    "badge": "Square Bottle",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-PHARM-05",
    "name": "100 ML Clear Graduated Syrup Bottle",
    "category": "pet-bottles",
    "material": "PET Pharma Grade",
    "grade": "EP / USP Class VI Tested",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "110 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Round Cylindrical with Embossed Marks",
    "color": "High-Clarity Glass-like Transparent",
    "weight": "14.0 g",
    "height": "108 mm",
    "diameter": "44 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Pediatric Syrups, Oral Suspensions, Antacids, Herbal Decoctions",
    "closures": "28mm White Screw Cap with Pourer Plug, Dosing Cup",
    "image": "assets/product-clear-100ml-syrup.png",
    "badge": "Graduated",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-PHARM-06",
    "name": "Square Amber Pharma PET Liquid Bottle",
    "category": "pet-bottles",
    "material": "PET Amber (UV Spectral Barrier)",
    "grade": "USP <671> Spectral Transmission Monograph",
    "capacity": "150 ml",
    "capacityValue": 150,
    "overflow": "165 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Rectangular Square Space-Saving",
    "color": "Pharma Amber",
    "weight": "17.5 g",
    "height": "118 mm",
    "diameter": "48 mm x 42 mm",
    "standardPack": "260 Pcs / Carton",
    "application": "Light-Sensitive Medicines, Ayurvedic Tonics, Chemical Reagents",
    "closures": "28mm Tamper-Evident Cap, Pilfer-Proof Seal",
    "image": "assets/product-square-amber-liquid.png",
    "badge": "UV Shield",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-07",
    "name": "500 ML Pharma PET Bottle Amber",
    "category": "pet-bottles",
    "material": "PET Pharma Grade Virgin Resin",
    "grade": "US FDA Compliant",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Boston Round Cylindrical",
    "color": "Deep Amber",
    "weight": "36.0 g",
    "height": "192 mm",
    "diameter": "72 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Bulk Oral Formulations, Antiseptic Washes, Disinfectants",
    "closures": "28mm ROPP Cap, Measuring Cup Closure, CRC",
    "image": "assets/product-amber-500ml-pharma.png",
    "badge": "500 ml",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-08",
    "name": "Amber Boston Round Pharma PET Bottle",
    "category": "pet-bottles",
    "material": "PET Amber Pharma Grade",
    "grade": "EP / USP Tested",
    "capacity": "200 ml",
    "capacityValue": 200,
    "overflow": "215 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Boston Round Cylindrical",
    "color": "Pharma Amber",
    "weight": "22.5 g",
    "height": "145 mm",
    "diameter": "56 mm",
    "standardPack": "200 Pcs / Carton",
    "application": "Digestive Enzymes, Antacids, Cough Formulations",
    "closures": "28mm ROPP Cap, CRC, Measuring Cup",
    "image": "assets/product-amber-boston-round.png",
    "badge": "Pharma Amber",
    "badgeClass": "amber"
  },
  {
    "id": "DB-HDPE-02",
    "name": "HDPE Ayurvedic Pill Packer",
    "category": "hdpe-containers",
    "material": "HDPE (High Moisture Barrier Resin)",
    "grade": "US FDA 21 CFR Pharma Resin",
    "capacity": "120 ml (40-60 Tablets)",
    "capacityValue": 120,
    "overflow": "135 ml",
    "neckSize": "38 mm Wide-Mouth",
    "neckValue": 38,
    "shape": "Round Solid Dosage Packer",
    "color": "Opaque Pure White",
    "weight": "16.5 g",
    "height": "94 mm",
    "diameter": "52 mm",
    "standardPack": "350 Pcs / Carton",
    "application": "Ayurvedic Tablets, Capsules, Herbal Churnas, Solid Dosage",
    "closures": "38mm Child Resistant Cap (CRC) with Induction Seal Liner",
    "image": "assets/product-hdpe-ayurvedic-packer.png",
    "badge": "Ayurvedic",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-HDPE-03",
    "name": "White Round Pharma Container",
    "category": "hdpe-containers",
    "material": "HDPE Cleanroom Molded",
    "grade": "USP <671> Moisture Barrier Standard",
    "capacity": "250 ml (100-150 Tablets)",
    "capacityValue": 250,
    "overflow": "275 ml",
    "neckSize": "45 mm Wide-Mouth",
    "neckValue": 45,
    "shape": "Cylindrical Solid Dosage Packer",
    "color": "Pure Pharmaceutical White",
    "weight": "26.0 g",
    "height": "120 mm",
    "diameter": "64 mm",
    "standardPack": "220 Pcs / Carton",
    "application": "Nutraceuticals, Multivitamins, Antibiotic Capsules",
    "closures": "45mm CRC or Continuous Thread Screw Cap with Induction Wad",
    "image": "assets/product-white-round-pharma.png",
    "badge": "Solid Dosage",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-HDPE-04",
    "name": "White Pharma Wide-Mouth Jar",
    "category": "hdpe-containers",
    "material": "HDPE (Cleanroom Medical Grade)",
    "grade": "US FDA 21 CFR Compliant",
    "capacity": "300 ml",
    "capacityValue": 300,
    "overflow": "330 ml",
    "neckSize": "53 mm Wide-Mouth",
    "neckValue": 53,
    "shape": "Cylindrical Straight-Sided Jar",
    "color": "Opaque Medical White",
    "weight": "28.0 g",
    "height": "110 mm",
    "diameter": "68 mm",
    "standardPack": "160 Pcs / Carton",
    "application": "Powders, Diagnostic Granules, Ointments, Active APIs",
    "closures": "53mm Ribbed Screw Cap with Hermetic Wad",
    "image": "assets/product-white-pharma-jar.png",
    "badge": "Wide Mouth",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-JAR-01",
    "name": "5000 ML PET Jar with Handle",
    "category": "jars",
    "material": "PET (Heavy Duty Food & Chemical Grade)",
    "grade": "100% Virgin US FDA Resin",
    "capacity": "5000 ml (5 Liters)",
    "capacityValue": 5000,
    "overflow": "5250 ml",
    "neckSize": "120 mm Wide Mouth",
    "neckValue": 120,
    "shape": "Square Ribbed Bulk Container",
    "color": "High Clarity Transparent",
    "weight": "145.0 g",
    "height": "295 mm",
    "diameter": "165 mm x 165 mm",
    "standardPack": "24 Pcs / Bundle",
    "application": "Bulk Food, Confectionery, Pickles, Edible Oils, Industrial Chemicals",
    "closures": "Heavy-Duty Yellow Bail Handle + Ribbed Tamper Screw Cap",
    "image": "assets/product-pet-jar-5000ml.png",
    "badge": "5 Liters",
    "badgeClass": "crc"
  },
  {
    "id": "DB-JAR-02",
    "name": "250 GM Square PET Jar",
    "category": "jars",
    "material": "PET (Ultra-Clear Crystal Polymer)",
    "grade": "Food & Cosmetic Grade Certified",
    "capacity": "250 gm / 300 ml",
    "capacityValue": 300,
    "overflow": "320 ml",
    "neckSize": "63 mm Wide-Mouth",
    "neckValue": 63,
    "shape": "Square Space-Saving Jar",
    "color": "Glass-like Crystal Clear",
    "weight": "24.0 g",
    "height": "85 mm",
    "diameter": "68 mm x 68 mm",
    "standardPack": "180 Pcs / Carton",
    "application": "Spices, Herbal Powders, Ghee, Balms, Confectionery, Dry Fruits",
    "closures": "63mm Screw Cap with Wad Liner, Gold/Black/White options",
    "image": "assets/product-pet-jar-250gm.png",
    "badge": "Square Jar",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-JAR-03",
    "name": "500 GM PET Jar with Sleek Black Lid",
    "category": "jars",
    "material": "PET Premium Grade",
    "grade": "Food & Personal Care Contact Certified",
    "capacity": "500 gm / 600 ml",
    "capacityValue": 600,
    "overflow": "640 ml",
    "neckSize": "83 mm Wide Mouth",
    "neckValue": 83,
    "shape": "Cylindrical Straight-Sided Jar",
    "color": "High-Gloss Crystal Transparent",
    "weight": "36.0 g",
    "height": "115 mm",
    "diameter": "88 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Nutraceutical Powders, Hair Scrubs, Skin Gels, Protein Powders",
    "closures": "83mm High-Gloss Black Ribbed Cap with Foil Induction Liner",
    "image": "assets/product-pet-jar-500gm-black.png",
    "badge": "Wide Mouth",
    "badgeClass": "crc"
  },
  {
    "id": "DB-JAR-04",
    "name": "500 GM Cylindrical PET Jar with Yellow Cap",
    "category": "jars",
    "material": "PET Virgin Resin",
    "grade": "Food Grade Compliant",
    "capacity": "500 gm / 580 ml",
    "capacityValue": 580,
    "overflow": "610 ml",
    "neckSize": "83 mm Threaded",
    "neckValue": 83,
    "shape": "Round Wide-Mouth Jar",
    "color": "Crystal Clear Body",
    "weight": "34.0 g",
    "height": "125 mm",
    "diameter": "84 mm",
    "standardPack": "140 Pcs / Carton",
    "application": "Pickles, Honey, Spices, Ghee, Herbal Supplements",
    "closures": "83mm Yellow Ribbed Screw Closure with Foam Liner",
    "image": "assets/product-pet-jar-500gm-yellow.png",
    "badge": "Food Grade",
    "badgeClass": "hdpe"
  },
  {
    "id": "DB-CAP-01",
    "name": "PET Spray Bottle with Fine Mist Pump",
    "category": "caps-closures",
    "material": "PET Bottle + Polypropylene Mist Pump + Overcap",
    "grade": "Cosmetic & Pharma Grade",
    "capacity": "100 ml / 200 ml",
    "capacityValue": 100,
    "overflow": "115 ml",
    "neckSize": "20 mm / 24 mm Neck",
    "neckValue": 20,
    "shape": "Slim Cylindrical Tower",
    "color": "Crystal Clear with Translucent Cap",
    "weight": "16.5 g complete assembly",
    "height": "148 mm",
    "diameter": "38 mm",
    "standardPack": "250 Sets / Carton",
    "application": "Sanitizer Sprays, Topical Antiseptics, Throat Sprays, Cosmetic Toners",
    "closures": "Ultra-Fine 0.12ml Atomizer Mist Pump with Clear Protective Hood",
    "image": "assets/product-pet-spray-mist.png",
    "badge": "Mist Pump",
    "badgeClass": "crc"
  },
  {
    "id": "DB-CAP-02",
    "name": "PET Bottle with Trigger Sprayer Pump",
    "category": "caps-closures",
    "material": "HDPE/PET Bottle + High-Output PP Trigger",
    "grade": "Industrial & Pharma Chemical Grade",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "540 ml",
    "neckSize": "28/410 Thread",
    "neckValue": 28,
    "shape": "Ergonomic Cylindrical Sprayer",
    "color": "Pure White",
    "weight": "42.0 g complete assembly",
    "height": "210 mm",
    "diameter": "68 mm",
    "standardPack": "100 Sets / Carton",
    "application": "Surface Disinfectants, Cleanroom Sanitizers, Hospital Hygiene Sprays",
    "closures": "Adjustable Spray/Stream/Off Dual-Action Trigger Mechanism",
    "image": "assets/product-trigger-pump-sprayer.png",
    "badge": "Trigger Spray",
    "badgeClass": "crc"
  },
  {
    "id": "DB-PHARM-09",
    "name": "Ayurvedic Liquid Round Amber PET Bottle",
    "category": "pet-bottles",
    "material": "PET (100% Prime Virgin Pharma Grade)",
    "grade": "US FDA 21 CFR 177.1630 / EP 3.1.15",
    "capacity": "200 ml",
    "capacityValue": 200,
    "overflow": "215 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Round Liquid Packer",
    "color": "Amber UV Protective",
    "weight": "20.5 g",
    "height": "135 mm",
    "diameter": "54 mm",
    "standardPack": "240 Pcs / Carton",
    "application": "Ayurvedic Syrups, Herbal Formulations, Tonic Liquids, Kadha",
    "closures": "28mm ROPP Aluminium Cap, Tamper-Evident Plastic Cap",
    "image": "assets/product-ayurveda-round-amber.png",
    "badge": "Ayurveda",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-10",
    "name": "Herbal Tonic & Health Syrup PET Bottle",
    "category": "pet-bottles",
    "material": "PET (Food & Pharma Monograph Grade)",
    "grade": "FSSAI Compliant / US FDA Grade",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "525 ml",
    "neckSize": "28 mm PCO",
    "neckValue": 28,
    "shape": "Fluted Tonic Oval",
    "color": "Crystal Clear",
    "weight": "24.0 g",
    "height": "210 mm",
    "diameter": "66 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Herbal Health Syrups, Liquid Phytomedicines, Ayurvedic Tonics, Oral Liquids",
    "closures": "28mm Tamper-Evident Screw Cap, Flip Cap",
    "image": "assets/product-kokum-tonic-bottle.png",
    "badge": "Herbal Tonic",
    "badgeClass": "teal"
  },
  {
    "id": "DB-PHARM-11",
    "name": "200 ML Amber Round PET Pharma Bottle",
    "category": "pet-bottles",
    "material": "PET (Pharma Grade Virgin Polymer)",
    "grade": "USP <661> Container Protection",
    "capacity": "200 ml",
    "capacityValue": 200,
    "overflow": "216 ml",
    "neckSize": "28 mm ROPP / Screw",
    "neckValue": 28,
    "shape": "Cylindrical Pharma Round",
    "color": "Deep Amber",
    "weight": "21.0 g",
    "height": "138 mm",
    "diameter": "55 mm",
    "standardPack": "220 Pcs / Carton",
    "application": "Oral Liquid Expectorants, Antibiotic Suspensions, Tonics",
    "closures": "28mm Screw Cap with Induction Foil Wad, Measuring Cup",
    "image": "assets/product-pharma-amber-round-cap.png",
    "badge": "UV Shield",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-12",
    "name": "Cough Syrup Twin Pack PET Bottles",
    "category": "pet-bottles",
    "material": "PET (Medical Grade Resin)",
    "grade": "EP / USP Class VI Certified",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "110 ml",
    "neckSize": "25 mm / 28 mm ROPP",
    "neckValue": 28,
    "shape": "Slimline Boston Round",
    "color": "Pharma Amber",
    "weight": "14.0 g",
    "height": "108 mm",
    "diameter": "45 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Day & Night Cough Formulations, Pediatric Syrups, OTC Formulations",
    "closures": "28mm Tamper-Evident Cap, Measuring Beaker",
    "image": "assets/product-cough-syrup-twin-pack.png",
    "badge": "Twin Pack",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-13",
    "name": "Oral Suspension PET Bottle with Measuring Cup",
    "category": "pet-bottles",
    "material": "PET (USP Class VI Polymer)",
    "grade": "US FDA 21 CFR 177.1630",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "112 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Classic Pharma Oval",
    "color": "Natural Translucent Clear",
    "weight": "13.5 g",
    "height": "106 mm",
    "diameter": "44 mm",
    "standardPack": "350 Pcs / Carton",
    "application": "Antacid Suspensions, Dry Powders for Reconstitution, Oral Drops",
    "closures": "28mm Measuring Cup Cap (2.5ml - 10ml calibrated)",
    "image": "assets/product-syrup-measuring-cup.png",
    "badge": "Dosage Cup",
    "badgeClass": "teal"
  },
  {
    "id": "DB-PHARM-14",
    "name": "1000 ML Ergonomic Swirl PET Bottle",
    "category": "pet-bottles",
    "material": "PET (100% Recyclable Prime Grade)",
    "grade": "US FDA & IS 12252 Compliant",
    "capacity": "1000 ml",
    "capacityValue": 1000,
    "overflow": "1040 ml",
    "neckSize": "28 mm PCO 1810 / 1881",
    "neckValue": 28,
    "shape": "Ergonomic Grip Ribbed",
    "color": "High Clarity Transparent",
    "weight": "32.0 g",
    "height": "265 mm",
    "diameter": "82 mm",
    "standardPack": "60 Pcs / Carton",
    "application": "Liquid Pharmaceuticals, Rehydration Solutions, Diagnostic Fluids",
    "closures": "28mm Tamper-Proof Screw Cap, Flip-Top Dispenser",
    "image": "assets/product-pet-fridge-1000ml.png",
    "badge": "1000 ML",
    "badgeClass": "blue"
  },
  {
    "id": "DB-PHARM-15",
    "name": "Pharma Clear PET Syrup Bottle",
    "category": "pet-bottles",
    "material": "PET (Virgin Transparent Resin)",
    "grade": "EP 3.1.15 / USP <661>",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "110 ml",
    "neckSize": "25 mm / 28 mm ROPP",
    "neckValue": 28,
    "shape": "Classic Liquid Round",
    "color": "Glass-like Crystal Clear",
    "weight": "13.0 g",
    "height": "108 mm",
    "diameter": "45 mm",
    "standardPack": "360 Pcs / Carton",
    "application": "Clear Syrups, Multivitamin Tonics, Linctus Formulations",
    "closures": "28mm Screw Cap with EPE Liner, Pilfer Proof Seal",
    "image": "assets/product-pharma-clear-syrup-bottle.png",
    "badge": "High Clarity",
    "badgeClass": "teal"
  },
  {
    "id": "DB-PHARM-16",
    "name": "Pharma PET Liquid Syrup Bottle Amber",
    "category": "pet-bottles",
    "material": "PET (Pharma Grade Resin)",
    "grade": "USP <671> Spectral Transmission Compliant",
    "capacity": "150 ml",
    "capacityValue": 150,
    "overflow": "165 ml",
    "neckSize": "28 mm ROPP",
    "neckValue": 28,
    "shape": "Boston Round Cylindrical",
    "color": "Amber Light-Resistant",
    "weight": "17.0 g",
    "height": "122 mm",
    "diameter": "50 mm",
    "standardPack": "280 Pcs / Carton",
    "application": "Active Pharmaceutical Ingredients, Antitussives, Expectorants",
    "closures": "28mm ROPP Cap, Child-Resistant Closure (CRC)",
    "image": "assets/product-amber-syrup-pharma.png",
    "badge": "Pharma Amber",
    "badgeClass": "amber"
  },
  {
    "id": "DB-PHARM-17",
    "name": "PET Round Pharma Clear Narrow Bottle",
    "category": "pet-bottles",
    "material": "PET (Medical Monograph Grade)",
    "grade": "US FDA 21 CFR 177.1630",
    "capacity": "125 ml",
    "capacityValue": 125,
    "overflow": "135 ml",
    "neckSize": "25 mm ROPP",
    "neckValue": 25,
    "shape": "Slimline Cylindrical",
    "color": "Ultra Clear",
    "weight": "14.0 g",
    "height": "118 mm",
    "diameter": "44 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Enzymatic Liquids, Oral Rehydration Solutions, Tonics",
    "closures": "25mm ROPP Aluminium Cap, Plastic Tamper-Evident Cap",
    "image": "assets/product-pet-round-pharma-clear.png",
    "badge": "Slim Round",
    "badgeClass": "teal"
  },
  {
    "id": "DB-HDPE-05",
    "name": "HDPE Cylindrical Tablet Container",
    "category": "hdpe-containers",
    "material": "HDPE (High-Density Polyethylene)",
    "grade": "US FDA 21 CFR 177.1520 Food & Drug Grade",
    "capacity": "150 ml",
    "capacityValue": 150,
    "overflow": "165 ml",
    "neckSize": "38 mm Continuous Thread",
    "neckValue": 38,
    "shape": "Cylindrical Solid Dosage",
    "color": "Opaque Medical White",
    "weight": "18.0 g",
    "height": "98 mm",
    "diameter": "52 mm",
    "standardPack": "300 Pcs / Carton",
    "application": "Tablets, Gel Capsules, Solid Dosage Pharmaceuticals, Nutraceuticals",
    "closures": "38mm Child-Resistant Cap (CRC), Induction Heat Seal Liner",
    "image": "assets/product-hdpe-plastic-pharma.png",
    "badge": "Solid Dosage",
    "badgeClass": "blue"
  },
  {
    "id": "DB-HDPE-06",
    "name": "HDPE Square Solid Dosage Packer",
    "category": "hdpe-containers",
    "material": "HDPE (High Molecular Weight)",
    "grade": "USP <661> Light & Moisture Barrier",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "115 ml",
    "neckSize": "33 mm Threaded",
    "neckValue": 33,
    "shape": "Space-Saving Square",
    "color": "Pharma Opaque White",
    "weight": "16.5 g",
    "height": "82 mm",
    "diameter": "45 x 45 mm",
    "standardPack": "360 Pcs / Carton",
    "application": "High-Value Tablets, Moisture-Sensitive Capsules, Diagnostic Strips",
    "closures": "33mm Push-Turn CRC Cap, Desiccant Cannister Closure",
    "image": "assets/product-hdpe-square-tablet.png",
    "badge": "Square Packer",
    "badgeClass": "blue"
  },
  {
    "id": "DB-HDPE-07",
    "name": "HDPE Bio-Fertilizer & Agro Chemical Bottle",
    "category": "hdpe-containers",
    "material": "HDPE (Chemical Resistant Copolymer)",
    "grade": "UN Certified Hazardous Liquid Packaging",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "540 ml",
    "neckSize": "45 mm Wide Thread",
    "neckValue": 45,
    "shape": "Ribbed Industrial Round",
    "color": "Milky White Translucent",
    "weight": "38.0 g",
    "height": "178 mm",
    "diameter": "72 mm",
    "standardPack": "90 Pcs / Carton",
    "application": "Bio-Fertilizers, Pesticides, Veterinary Formulations, Plant Nutrients",
    "closures": "45mm Vented Cap with Induction Aluminium Foil Sealing",
    "image": "assets/product-bio-fertilizer-bottle.png",
    "badge": "Agro / Chemical",
    "badgeClass": "green"
  },
  {
    "id": "DB-HDPE-08",
    "name": "HDPE Wide-Mouth Solid Tablet Packer",
    "category": "hdpe-containers",
    "material": "HDPE (Virgin Prime Polymer)",
    "grade": "EP / USP Class VI Monograph",
    "capacity": "250 ml",
    "capacityValue": 250,
    "overflow": "275 ml",
    "neckSize": "45 mm Thread",
    "neckValue": 45,
    "shape": "Wide-Mouth Straight Round",
    "color": "Bright Opaque White",
    "weight": "26.0 g",
    "height": "110 mm",
    "diameter": "62 mm",
    "standardPack": "180 Pcs / Carton",
    "application": "Bulk Tablets, Effervescent Tabs, Vitamin Powders, Capsules",
    "closures": "45mm Screw Cap with Induction Sealing Liner",
    "image": "assets/product-pharma-hdpe-jar.png",
    "badge": "Wide Mouth",
    "badgeClass": "blue"
  },
  {
    "id": "DB-HDPE-09",
    "name": "HDPE Ayurvedic Cylindrical Medicine Bottle",
    "category": "hdpe-containers",
    "material": "HDPE (Pharmaceutical Extrusion Grade)",
    "grade": "US FDA Compliant Prime Resin",
    "capacity": "120 ml",
    "capacityValue": 120,
    "overflow": "132 ml",
    "neckSize": "32 mm Thread",
    "neckValue": 32,
    "shape": "Round Cylindrical Packer",
    "color": "Solid White",
    "weight": "15.5 g",
    "height": "92 mm",
    "diameter": "48 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Ayurvedic Pills, Churna, Herbal Tablets, Vati Formulations",
    "closures": "32mm Ribbed Screw Cap with Vad & Tamper Lock",
    "image": "assets/product-hdpe-ayurvedic-cylindrical.png",
    "badge": "Ayurvedic",
    "badgeClass": "blue"
  },
  {
    "id": "DB-HDPE-10",
    "name": "HDPE Angled-Neck Chemical Cleaner Bottle",
    "category": "hdpe-containers",
    "material": "HDPE (High Stress-Crack Resistant HMW-HDPE)",
    "grade": "Chemical Compatibility Tested (ESCR > 500h)",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "28 mm Angled Spout",
    "neckValue": 28,
    "shape": "Angled Precision Neck",
    "color": "Opaque White / Blue / Grey",
    "weight": "42.0 g",
    "height": "240 mm",
    "diameter": "70 x 55 mm",
    "standardPack": "80 Pcs / Carton",
    "application": "Acidic Toilet Cleaners, Thick Bleach, Disinfectants, Chemical Sanitizers",
    "closures": "Directional Duckbill Nozzle Cap with Child-Resistant Lock",
    "image": "assets/product-angled-toilet-cleaner.png",
    "badge": "Chemical ESCR",
    "badgeClass": "orange"
  },
  {
    "id": "DB-HDPE-11",
    "name": "HDPE Industrial Phenyl & Surface Cleaner Bottle",
    "category": "hdpe-containers",
    "material": "HDPE (Virgin Blow Moulding Polymer)",
    "grade": "Industrial Chemical Resistance Grade",
    "capacity": "1000 ml",
    "capacityValue": 1000,
    "overflow": "1060 ml",
    "neckSize": "32 mm Deep Thread",
    "neckValue": 32,
    "shape": "Square Chemical Jug with Grip",
    "color": "Opaque White",
    "weight": "58.0 g",
    "height": "255 mm",
    "diameter": "85 x 85 mm",
    "standardPack": "48 Pcs / Carton",
    "application": "White Phenyl, Floor Disinfectants, Degreasers, Industrial Cleaning Solvents",
    "closures": "32mm Double Seal Screw Cap with Pull-Ring Wad",
    "image": "assets/product-phenyl-cleaner-bottle.png",
    "badge": "Industrial 1L",
    "badgeClass": "blue"
  },
  {
    "id": "DB-DROP-03",
    "name": "10 ML Pediatric Dropper Vial",
    "category": "droppers",
    "material": "LDPE / PET Medical Virgin Resin",
    "grade": "EP 3.1.5 / USP Class VI Monograph",
    "capacity": "10 ml",
    "capacityValue": 10,
    "overflow": "12 ml",
    "neckSize": "15 mm Precision Thread",
    "neckValue": 15,
    "shape": "Micro-Dose Dropper Bottle",
    "color": "Glass-Clarity Transparent",
    "weight": "4.2 g",
    "height": "62 mm",
    "diameter": "22 mm",
    "standardPack": "1200 Pcs / Carton",
    "application": "Pediatric Oral Drops, Vitamin D3 Drops, Infant Colic Suspensions",
    "closures": "Integrated Calibrated Dropper Nozzle & Tamper Ring Cap",
    "image": "assets/product-dropper-pediatric-mini.png",
    "badge": "Pediatric 10ml",
    "badgeClass": "teal"
  },
  {
    "id": "DB-DROP-04",
    "name": "Calibrated Ophthalmic Dropper Lineup",
    "category": "droppers",
    "material": "Medical Grade LDPE & Polypropylene",
    "grade": "Sterility Tested / Cleanroom Class 100,000",
    "capacity": "5 ml - 15 ml",
    "capacityValue": 15,
    "overflow": "16 ml",
    "neckSize": "13 mm / 15 mm Three-Piece Snap",
    "neckValue": 15,
    "shape": "Precision Squeeze Cylinder",
    "color": "Medical Translucent White",
    "weight": "4.8 g",
    "height": "68 mm",
    "diameter": "24 mm",
    "standardPack": "1000 Pcs / Carton",
    "application": "Eye Drops, Ophthalmic Antibacterial Solutions, Nasal Decongestants",
    "closures": "Controlled Drop-Size Plug (40-50 mcl), Tamper-Evident Ring",
    "image": "assets/product-dropper-multipack.png",
    "badge": "Ophthalmic",
    "badgeClass": "teal"
  },
  {
    "id": "DB-DROP-05",
    "name": "Precision Squeeze Dropper Dispenser Bottle",
    "category": "droppers",
    "material": "Ultra-Flexible LDPE Resin",
    "grade": "USP <661> Biocompatibility Compliant",
    "capacity": "30 ml",
    "capacityValue": 30,
    "overflow": "34 ml",
    "neckSize": "18 mm Needle Dropper",
    "neckValue": 18,
    "shape": "Squeeze Tower",
    "color": "Translucent Natural",
    "weight": "6.2 g",
    "height": "88 mm",
    "diameter": "28 mm",
    "standardPack": "800 Pcs / Carton",
    "application": "Ear Drops, Topical Derm Solutions, Essential Oils, Laboratory Reagents",
    "closures": "Fine Tapered Dropper Tip with Protective Threaded Cap",
    "image": "assets/product-plastic-squeeze-bottles.png",
    "badge": "Precision Dispenser",
    "badgeClass": "teal"
  },
  {
    "id": "DB-JAR-05",
    "name": "Pharma Tablet & Capsule Wide-Mouth Jar",
    "category": "jars",
    "material": "PET (100% Virgin Food & Drug Grade)",
    "grade": "US FDA 21 CFR 177.1630 Monograph",
    "capacity": "250 ml",
    "capacityValue": 250,
    "overflow": "270 ml",
    "neckSize": "53 mm Wide Mouth",
    "neckValue": 53,
    "shape": "Straight Cylindrical Jar",
    "color": "Crystal Clear Glass Alternative",
    "weight": "24.0 g",
    "height": "92 mm",
    "diameter": "68 mm",
    "standardPack": "180 Pcs / Carton",
    "application": "Pharmaceutical Capsules, Effervescent Tablets, Chewable Multivitamins",
    "closures": "53mm Ribbed Polypropylene Screw Cap with Heat Induction Foil Seal",
    "image": "assets/product-pharma-medicine-tablets.png",
    "badge": "Pharma Jar",
    "badgeClass": "teal"
  },
  {
    "id": "DB-JAR-06",
    "name": "Gulab Jamun PET Handle Jar with Red Cap",
    "category": "jars",
    "material": "PET (Heavy-Duty Food Grade)",
    "grade": "FSSAI Packaging Norms / US FDA Compliant",
    "capacity": "1000 ml",
    "capacityValue": 1000,
    "overflow": "1080 ml",
    "neckSize": "83 mm Giant Mouth",
    "neckValue": 83,
    "shape": "Square Barrel with Built-in Grip Handle",
    "color": "Super Clear",
    "weight": "52.0 g",
    "height": "155 mm",
    "diameter": "102 x 102 mm",
    "standardPack": "48 Pcs / Carton",
    "application": "Gulab Jamun, Indian Sweets in Syrup, Pickles, Bulk Food Storage",
    "closures": "83mm Red Screw Cap with Collapsible Carry Handle & Induction Wad",
    "image": "assets/product-gulab-jamun-handle-jar.png",
    "badge": "Handle Jar",
    "badgeClass": "orange"
  },
  {
    "id": "DB-JAR-07",
    "name": "Transparent Cylindrical Pharma PET Jar",
    "category": "jars",
    "material": "PET (High Barrier Polymer)",
    "grade": "EP 3.1.15 Moisture Barrier",
    "capacity": "350 ml",
    "capacityValue": 350,
    "overflow": "380 ml",
    "neckSize": "63 mm Wide Opening",
    "neckValue": 63,
    "shape": "Cylindrical Wide-Shoulder",
    "color": "Diamond Transparent",
    "weight": "32.0 g",
    "height": "108 mm",
    "diameter": "76 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Herbal Powders, Churna, Nutraceutical Gummies, Health Supplements",
    "closures": "63mm Glossy Plastic Screw Cap with EPE Foam Liner",
    "image": "assets/product-transparent-medicine-jar.png",
    "badge": "350 ML",
    "badgeClass": "teal"
  },
  {
    "id": "DB-JAR-08",
    "name": "Chocolate & Confectionery Straight PET Jar",
    "category": "jars",
    "material": "PET (Prime Food Contact Polymer)",
    "grade": "IS 12252 / US FDA 177.1630",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "73 mm Straight Mouth",
    "neckValue": 73,
    "shape": "Straight-Wall Round Jar",
    "color": "Ultra Transparent",
    "weight": "36.0 g",
    "height": "130 mm",
    "diameter": "82 mm",
    "standardPack": "96 Pcs / Carton",
    "application": "Chocolate Spreads, Cookies, Candies, Dry Fruits, Malt Powders",
    "closures": "73mm Fluted Screw Cap with Pressure Sensitive Wad",
    "image": "assets/product-chocolate-straight-jar.png",
    "badge": "Food / Candy",
    "badgeClass": "orange"
  },
  {
    "id": "DB-JAR-09",
    "name": "Straight-Sided Powder & Nutraceutical PET Jar",
    "category": "jars",
    "material": "PET (Virgin Polyethylene Terephthalate)",
    "grade": "USP <661> Light & Moisture Barrier",
    "capacity": "400 ml",
    "capacityValue": 400,
    "overflow": "425 ml",
    "neckSize": "63 mm Wide Mouth",
    "neckValue": 63,
    "shape": "Straight Cylinder",
    "color": "Crystal Clear",
    "weight": "30.0 g",
    "height": "115 mm",
    "diameter": "74 mm",
    "standardPack": "110 Pcs / Carton",
    "application": "Protein Powders, Collagen Peptides, Bodybuilding Supplements, BCAA",
    "closures": "63mm Matte White Screw Lid with Induction Foil",
    "image": "assets/product-powder-straight-jar.png",
    "badge": "Powder Jar",
    "badgeClass": "blue"
  },
  {
    "id": "DB-JAR-10",
    "name": "Holy Gangajal Hexagonal PET Jar",
    "category": "jars",
    "material": "PET (High-Strength Food Grade)",
    "grade": "FSSAI & BIS Certified",
    "capacity": "250 ml",
    "capacityValue": 250,
    "overflow": "265 ml",
    "neckSize": "53 mm Neck",
    "neckValue": 53,
    "shape": "Traditional Faceted Round",
    "color": "Pristine Pure Clear",
    "weight": "22.0 g",
    "height": "90 mm",
    "diameter": "65 mm",
    "standardPack": "160 Pcs / Carton",
    "application": "Gangajal, Holy Water, Rose Water, Aromatic Liquids, Puja Offerings",
    "closures": "53mm Gold / Yellow Ribbed Cap with Leak-Proof Gasket",
    "image": "assets/product-gangajal-pet-jar.png",
    "badge": "Specialty",
    "badgeClass": "teal"
  },
  {
    "id": "DB-JAR-11",
    "name": "Traditional Pickle PET Jar with Black Cap",
    "category": "jars",
    "material": "PET (Oil & Acid Resistant Formulation)",
    "grade": "FSSAI Compliant High Barrier Resin",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "63 mm Wide Mouth",
    "neckValue": 63,
    "shape": "Classic Cylindrical Food Jar",
    "color": "High Clarity",
    "weight": "34.0 g",
    "height": "128 mm",
    "diameter": "78 mm",
    "standardPack": "96 Pcs / Carton",
    "application": "Mango & Lime Pickles, Chutneys, Cooking Pastes, Spices in Oil",
    "closures": "63mm Sleek Black Screw Cap with Oil-Resistant Induction Liner",
    "image": "assets/product-pickle-jar-black-cap.png",
    "badge": "Pickle / Food",
    "badgeClass": "orange"
  },
  {
    "id": "DB-JAR-12",
    "name": "Square PET Jar with Metallic Silver Cap",
    "category": "jars",
    "material": "PET (Premium Clarity Grade)",
    "grade": "US FDA 21 CFR 177.1630",
    "capacity": "350 ml",
    "capacityValue": 350,
    "overflow": "375 ml",
    "neckSize": "63 mm Square Neck",
    "neckValue": 63,
    "shape": "Modern Cubic Square",
    "color": "Glass-Like Optical Clarity",
    "weight": "31.0 g",
    "height": "105 mm",
    "diameter": "70 x 70 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Premium Dry Fruits, Saffron, Organic Herbs, Gourmet Confectionery",
    "closures": "63mm Electroplated Silver Metallic Cap with Clear Top Insert",
    "image": "assets/product-square-jar-silver-cap.png",
    "badge": "Premium Square",
    "badgeClass": "blue"
  },
  {
    "id": "DB-JAR-13",
    "name": "Turmeric Bulk Storage PET Jar with Integrated Handle",
    "category": "jars",
    "material": "PET (Heavy Heavy-Duty Polymer)",
    "grade": "FSSAI & Industrial Bulk Packaging Certified",
    "capacity": "2000 ml",
    "capacityValue": 2000,
    "overflow": "2150 ml",
    "neckSize": "100 mm Extra Wide Mouth",
    "neckValue": 100,
    "shape": "Square Jug with Side Hand-Grip",
    "color": "Yellow Tint / Amber / Clear",
    "weight": "92.0 g",
    "height": "220 mm",
    "diameter": "125 x 125 mm",
    "standardPack": "24 Pcs / Carton",
    "application": "Bulk Turmeric Powder, Grain Spices, Ghee Storage, Agricultural Powders",
    "closures": "100mm Fluted Screw Cap with Heavy Duty Carrying Handle",
    "image": "assets/product-turmeric-bulk-handle-jar.png",
    "badge": "Bulk 2000ml",
    "badgeClass": "orange"
  },
  {
    "id": "DB-CAP-03",
    "name": "PET Dispenser Bottle with Smooth Lotion Pump",
    "category": "caps-closures",
    "material": "PET Bottle + Polypropylene (PP) Pump Mechanism",
    "grade": "Cosmetic & Pharma Dispensing Grade",
    "capacity": "250 ml",
    "capacityValue": 250,
    "overflow": "270 ml",
    "neckSize": "24/410 - 28/410 Thread",
    "neckValue": 28,
    "shape": "Tall Cylindrical Dispenser",
    "color": "Crystal Clear Bottle + White Pump",
    "weight": "26.0 g",
    "height": "175 mm",
    "diameter": "52 mm",
    "standardPack": "150 Pcs / Carton",
    "application": "Hand Sanitizers, Antiseptic Skin Washes, Medicated Lotions, Shampoos",
    "closures": "28/410 Smooth Saddle Dispenser Pump with 2cc Output & Lock-Down Feature",
    "image": "assets/product-dispenser-lotion-pump.png",
    "badge": "Lotion Pump",
    "badgeClass": "teal"
  },
  {
    "id": "DB-CAP-04",
    "name": "Amber PET Bottle with Black Saddle Dispenser Pump",
    "category": "caps-closures",
    "material": "PET (UV Resistant Resin) + PP Closure",
    "grade": "USP <671> UV Spectral Shielding",
    "capacity": "300 ml",
    "capacityValue": 300,
    "overflow": "320 ml",
    "neckSize": "28/410 Neck Finish",
    "neckValue": 28,
    "shape": "Apothecary Amber Round",
    "color": "Amber Body + Black Pump",
    "weight": "28.5 g",
    "height": "168 mm",
    "diameter": "58 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Light-Sensitive Hand Washes, Dermatology Lotions, Herbal Body Cleansers",
    "closures": "28/410 Matte Black Saddle Pump with Directional Nozzle",
    "image": "assets/product-bathroom-pump-amber.png",
    "badge": "Apothecary Pump",
    "badgeClass": "amber"
  },
  {
    "id": "DB-CAP-05",
    "name": "Ergonomic Squeeze Bottle with Flip-Top Cap",
    "category": "caps-closures",
    "material": "PET (Flexible Clarified Polymer)",
    "grade": "US FDA 21 CFR 177.1630 Compliant",
    "capacity": "200 ml",
    "capacityValue": 200,
    "overflow": "215 ml",
    "neckSize": "24/410 Flip Top",
    "neckValue": 24,
    "shape": "Ergonomic Contour Oval",
    "color": "Clear Body + Snap Cap",
    "weight": "19.0 g",
    "height": "152 mm",
    "diameter": "56 x 38 mm",
    "standardPack": "200 Pcs / Carton",
    "application": "Hand Rub Gel, Disinfectant Liquids, Hair Oils, Cosmetic Serums",
    "closures": "24/410 Dual-Tone Snap Flip-Top Dispensing Cap",
    "image": "assets/product-flip-top-dispensing-bottle.png",
    "badge": "Flip-Top",
    "badgeClass": "teal"
  },
  {
    "id": "DB-CAP-06",
    "name": "PET Toiletry Bottle with Dispensing Flip Cap",
    "category": "caps-closures",
    "material": "PET (Pure Virgin Resin)",
    "grade": "Personal Care & Topical Monograph Grade",
    "capacity": "100 ml",
    "capacityValue": 100,
    "overflow": "110 ml",
    "neckSize": "20/410 - 24/410",
    "neckValue": 24,
    "shape": "Compact Travel Cylinder",
    "color": "Crystal Translucent",
    "weight": "14.0 g",
    "height": "112 mm",
    "diameter": "42 mm",
    "standardPack": "320 Pcs / Carton",
    "application": "Travel Sanitizers, Body Washes, Topical Antiseptics, Facial Toners",
    "closures": "20mm White Press-Disc Cap / Flip-Top Nozzle",
    "image": "assets/product-pet-toiletry-flip-top.png",
    "badge": "Toiletry Dispenser",
    "badgeClass": "teal"
  },
  {
    "id": "DB-CAP-07",
    "name": "1000 ML Edible Cooking Oil Bottle with Pull-Ring Cap",
    "category": "caps-closures",
    "material": "PET (Food Grade Oxygen-Barrier Polymer)",
    "grade": "FSSAI Packaging Regulations / IS 12252",
    "capacity": "1000 ml",
    "capacityValue": 1000,
    "overflow": "1050 ml",
    "neckSize": "32 mm Push-On Neck",
    "neckValue": 32,
    "shape": "Rectangular Grip Bottle with Fluting",
    "color": "Super Transparent Yellow Tint",
    "weight": "34.0 g",
    "height": "260 mm",
    "diameter": "80 x 80 mm",
    "standardPack": "60 Pcs / Carton",
    "application": "Mustard Oil, Groundnut Oil, Sunflower Cooking Oil, Sesame Oil",
    "closures": "32mm Tamper-Evident Pull-Ring Non-Drip Dispensing Cap",
    "image": "assets/product-edible-cooking-oil.png",
    "badge": "Cooking Oil 1L",
    "badgeClass": "orange"
  },
  {
    "id": "DB-CAP-08",
    "name": "250 ML Fresh Juice Bottle with Tamper-Evident Cap",
    "category": "caps-closures",
    "material": "PET (Food Contact Approved)",
    "grade": "FSSAI & US FDA 21 CFR 177.1630",
    "capacity": "250 ml",
    "capacityValue": 250,
    "overflow": "265 ml",
    "neckSize": "38 mm 3-Start Thread",
    "neckValue": 38,
    "shape": "Round Beverage Bottle",
    "color": "High Glass Clarity",
    "weight": "18.0 g",
    "height": "142 mm",
    "diameter": "54 mm",
    "standardPack": "240 Pcs / Carton",
    "application": "Cold-Pressed Juices, Flavoured Milk, Amla Shots, Energy Drinks",
    "closures": "38mm Wide-Mouth Tamper-Evident Beverage Cap with Drop Ring",
    "image": "assets/product-fresh-juice-bottle-250ml.png",
    "badge": "Juice / Dairy",
    "badgeClass": "green"
  },
  {
    "id": "DB-CAP-09",
    "name": "400 ML Chhas / Buttermilk Bottle with Sealed Cap",
    "category": "caps-closures",
    "material": "PET (Food Grade Polymer)",
    "grade": "Dairy Packaging Standard IS 12252",
    "capacity": "400 ml",
    "capacityValue": 400,
    "overflow": "420 ml",
    "neckSize": "38 mm Dairy Thread",
    "neckValue": 38,
    "shape": "Contoured Dairy Cylinder",
    "color": "Clear Transparent",
    "weight": "22.0 g",
    "height": "172 mm",
    "diameter": "60 mm",
    "standardPack": "160 Pcs / Carton",
    "application": "Traditional Buttermilk, Masala Chaas, Lassi, Probiotic Milk",
    "closures": "38mm Break-Ring Tamper Cap for Automated Bottling Lines",
    "image": "assets/product-buttermilk-bottle-400ml.png",
    "badge": "Chhas / Dairy",
    "badgeClass": "blue"
  },
  {
    "id": "DB-CAP-10",
    "name": "Fresh Chaas PET Bottle with Green Sealed Cap",
    "category": "caps-closures",
    "material": "PET (Prime Dairy Resin)",
    "grade": "FSSAI Compliant",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "525 ml",
    "neckSize": "38 mm Wide Neck",
    "neckValue": 38,
    "shape": "Fluted Dairy Round",
    "color": "Crystal Clear",
    "weight": "25.0 g",
    "height": "188 mm",
    "diameter": "66 mm",
    "standardPack": "140 Pcs / Carton",
    "application": "Dairy Chhas, Spiced Buttermilk, Cold Beverage Formulations",
    "closures": "38mm Green Tamper-Proof Cap with Inner Hermetic Sealing",
    "image": "assets/product-buttermilk-green-cap.png",
    "badge": "Green Cap Dairy",
    "badgeClass": "green"
  },
  {
    "id": "DB-CAP-11",
    "name": "Ketchup & Tomato Sauce Squeeze Bottle with Silicone Valve Cap",
    "category": "caps-closures",
    "material": "PET / Multilayer Barrier Resin",
    "grade": "FSSAI & US FDA Food Packaging",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "525 ml",
    "neckSize": "38 mm Thread",
    "neckValue": 38,
    "shape": "Ergonomic Waist Squeeze Bottle",
    "color": "Glass-like Clear",
    "weight": "32.0 g",
    "height": "195 mm",
    "diameter": "72 x 54 mm",
    "standardPack": "100 Pcs / Carton",
    "application": "Tomato Ketchup, Chilli Sauces, Salad Dressings, Syrups",
    "closures": "38mm Non-Drip Silicone Valve Flip Cap (Clean Cutoff)",
    "image": "assets/product-ketchup-sauce-bottle.png",
    "badge": "Sauce / Squeeze",
    "badgeClass": "orange"
  },
  {
    "id": "DB-CAP-12",
    "name": "Pure Dairy PET Milk Bottle with Wide Screw Cap",
    "category": "caps-closures",
    "material": "PET (Prime Virgin Food Contact Polymer)",
    "grade": "IS 12252 Dairy Grade",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "38 mm Dairy Thread",
    "neckValue": 38,
    "shape": "Traditional Milk Bottle Profile",
    "color": "High Transparency Crystal Clear",
    "weight": "26.0 g",
    "height": "185 mm",
    "diameter": "65 mm",
    "standardPack": "120 Pcs / Carton",
    "application": "Fresh Milk, Organic Dairy Milk, Almond Milk, Flavoured Milk Drinks",
    "closures": "38mm Wide-Mouth Dairy Screw Cap with Induction Wad",
    "image": "assets/product-pet-clear-milk-bottle.png",
    "badge": "Dairy Milk",
    "badgeClass": "blue"
  },
  {
    "id": "DB-CAP-13",
    "name": "Directional Spout Chemical Dispenser Bottle",
    "category": "caps-closures",
    "material": "HDPE / Polypropylene Dispensing Unit",
    "grade": "Corrosive Chemical Resistance Certified",
    "capacity": "500 ml",
    "capacityValue": 500,
    "overflow": "530 ml",
    "neckSize": "28 mm Angled Spout Finish",
    "neckValue": 28,
    "shape": "Angled Swan Neck Dispenser",
    "color": "Opaque White Body + Red Nozzle",
    "weight": "44.0 g",
    "height": "245 mm",
    "diameter": "70 mm",
    "standardPack": "80 Pcs / Carton",
    "application": "Precision Chemical Dispensing, Rim Cleaners, Acid Cleaners, Sanitizers",
    "closures": "Directional Jet Nozzle with Child-Proof Push & Turn Cap",
    "image": "assets/product-white-toilet-cleaner-bottle.png",
    "badge": "Directional Nozzle",
    "badgeClass": "orange"
  }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileMenu();
  initHeroSlider();
  initHeroCounters();
  initProductCatalog();
  initPackagingConfigurator();
  initModals();
  initWhatsAppQuoteForm();
  initSmoothScroll();
  initScrollAnimations();
});

/* ── Hero Animated Counters ── */
function initHeroCounters() {
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Run counters on the active slide immediately, and re-run on slide change
  function runCountersInSlide(slide) {
    slide.querySelectorAll(".hero-stat-num").forEach(el => {
      el.textContent = "0";
      animateCounter(el);
    });
  }

  // Run on first active slide
  const firstActive = document.querySelector(".hero-slide.active");
  if (firstActive) runCountersInSlide(firstActive);

  // Hook into slide transitions
  const track = document.querySelector(".hero-slides-track");
  if (track) {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(m => {
        if (m.type === "attributes" && m.attributeName === "class") {
          const el = m.target;
          if (el.classList.contains("active")) runCountersInSlide(el);
        }
      });
    });
    track.querySelectorAll(".hero-slide").forEach(slide => {
      observer.observe(slide, { attributes: true });
    });
  }
}

// Sticky Header Effect
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }, { passive: true });
}

// Hero 3-Banner Slider Implementation
function initHeroSlider() {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");

  if (slides.length <= 1) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const slideDuration = 6000; // 6 seconds per slide
  let slideTimer = null;
  let isPaused = false;

  function showSlide(index) {
    if (index === currentSlide && slides[index].classList.contains("active")) {
      return;
    }

    slides.forEach(slide => {
      slide.classList.remove("active");
      const vid = slide.querySelector("video");
      if (vid) vid.pause();
    });

    currentSlide = (index + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("active");
    const activeVid = slides[currentSlide].querySelector("video");
    if (activeVid) {
      activeVid.play().catch(() => {});
    }

    startTimer();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startTimer() {
    stopTimer();
    if (!isPaused) {
      slideTimer = setTimeout(() => {
        nextSlide();
      }, slideDuration);
    }
  }

  function stopTimer() {
    if (slideTimer) {
      clearTimeout(slideTimer);
      slideTimer = null;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
    });
  }

  slider.addEventListener("mouseenter", () => {
    isPaused = true;
    stopTimer();
  });

  slider.addEventListener("mouseleave", () => {
    isPaused = false;
    startTimer();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  }, { passive: true });

  // Start with Slide 0
  showSlide(0);
}

// Mobile Menu & Navigation Dropdown Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  // Handle dropdown toggle on mobile devices
  const dropTrigger = document.querySelector(".nav-dropdown-trigger");
  const navDropdown = document.querySelector(".nav-dropdown");
  if (dropTrigger && navDropdown) {
    dropTrigger.addEventListener("click", (e) => {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        const isOpen = navDropdown.classList.toggle("open");
        dropTrigger.setAttribute("aria-expanded", String(isOpen));
      }
    });
  }

  // Close when clicking nav link
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// Product Catalog Rendering, Filtering & Slider
function initProductCatalog() {
  const gridContainer = document.getElementById("productGrid");
  const tableBody = document.getElementById("productTableBody");
  const searchInput = document.getElementById("productSearch");
  const materialSelect = document.getElementById("filterMaterial");
  const capacitySelect = document.getElementById("filterCapacity");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const viewGridBtn = document.getElementById("viewGridBtn");
  const viewTableBtn = document.getElementById("viewTableBtn");
  const gridWrapper = document.getElementById("productGridWrapper");
  const tableWrapper = document.getElementById("productTableWrapper");
  const resultCounter = document.getElementById("productResultCount");
  const prodSliderPrev = document.getElementById("prodSliderPrev");
  const prodSliderNext = document.getElementById("prodSliderNext");
  const prodSliderDots = document.getElementById("prodSliderDots");

  if (!gridContainer && !tableBody) return;

  const isSliderMode = gridContainer && gridContainer.classList.contains("product-slider-track");

  let activeCategory = "all";
  let activeSearch = "";
  let activeMaterial = "all";
  let activeCapacity = "all";

  // Check URL query parameters (e.g. products.html?cat=pet-bottles)
  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    activeCategory = catParam;
    filterTabs.forEach(t => {
      t.classList.toggle("active", t.dataset.category === catParam);
    });
  }

  function filterProducts() {
    return PRODUCTS_DATA.filter(prod => {
      // Category filter
      if (activeCategory !== "all" && prod.category !== activeCategory) {
        return false;
      }
      // Material filter
      if (activeMaterial !== "all") {
        if (activeMaterial === "pet" && !prod.material.toLowerCase().includes("pet")) return false;
        if (activeMaterial === "hdpe" && !prod.material.toLowerCase().includes("hdpe")) return false;
        if (activeMaterial === "pp" && !prod.material.toLowerCase().includes("polypropylene")) return false;
      }
      // Capacity filter
      if (activeCapacity !== "all") {
        const val = prod.capacityValue;
        if (activeCapacity === "small" && (val > 60)) return false;
        if (activeCapacity === "medium" && (val < 61 || val > 200)) return false;
        if (activeCapacity === "large" && (val < 201)) return false;
      }
      // Search term
      if (activeSearch) {
        const q = activeSearch.toLowerCase();
        const haystack = `${prod.name} ${prod.id} ${prod.material} ${prod.neckSize} ${prod.application}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function updateSliderControls() {
    if (!isSliderMode || !gridContainer) return;

    const maxScroll = Math.max(0, gridContainer.scrollWidth - gridContainer.clientWidth);

    if (maxScroll <= 15) {
      if (prodSliderPrev) prodSliderPrev.style.display = "none";
      if (prodSliderNext) prodSliderNext.style.display = "none";
      if (prodSliderDots) prodSliderDots.innerHTML = "";
      return;
    }

    if (prodSliderPrev) {
      prodSliderPrev.style.display = "flex";
      prodSliderPrev.disabled = gridContainer.scrollLeft <= 10;
    }
    if (prodSliderNext) {
      prodSliderNext.style.display = "flex";
      prodSliderNext.disabled = gridContainer.scrollLeft >= maxScroll - 10;
    }

    if (prodSliderDots) {
      const cardStep = 348; // 320px + 28px gap
      const totalSteps = Math.min(6, Math.max(2, Math.ceil(maxScroll / cardStep) + 1));
      const currentRatio = maxScroll > 0 ? gridContainer.scrollLeft / maxScroll : 0;
      const currentStep = Math.min(totalSteps - 1, Math.round(currentRatio * (totalSteps - 1)));

      let dotsHtml = "";
      for (let i = 0; i < totalSteps; i++) {
        dotsHtml += `<button class="prod-dot ${i === currentStep ? 'active' : ''}" data-step="${i}" type="button" aria-label="Slide group ${i + 1}"></button>`;
      }
      prodSliderDots.innerHTML = dotsHtml;

      prodSliderDots.querySelectorAll(".prod-dot").forEach(dot => {
        dot.addEventListener("click", () => {
          const stepIdx = parseInt(dot.dataset.step, 10);
          const target = (stepIdx / (totalSteps - 1)) * maxScroll;
          gridContainer.scrollTo({ left: target, behavior: "smooth" });
        });
      });
    }
  }

  function updateFilterCounts() {
    const tabs = document.querySelectorAll(".filter-tab[data-category]");
    tabs.forEach(tab => {
      const cat = tab.dataset.category;
      let count = 0;
      if (cat === "all") count = PRODUCTS_DATA.length;
      else count = PRODUCTS_DATA.filter(p => p.category === cat).length;
      const badge = tab.querySelector(".badge-count");
      if (badge) {
        badge.textContent = count;
      }
    });
  }

  function render() {
    updateFilterCounts();
    const filtered = filterProducts();

    if (resultCounter) {
      resultCounter.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
    }

    // Render Grid / Slider Track
    if (gridContainer) {
      if (filtered.length === 0) {
        gridContainer.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; width: 100%;">
            <p style="font-size: 1.25rem; font-weight: 700; color: var(--navy-deep); margin-bottom: 0.5rem;">No products match your criteria.</p>
            <p style="color: var(--ink-muted); font-size: 0.95rem;">Try clearing your filters or contact our technical team for custom mould development.</p>
            <button class="btn btn-outline" onclick="resetFilters()" style="margin-top: 1rem;">Reset All Filters</button>
          </div>
        `;
      } else {
      function formatCardMaterial(p) {
        if (p.category === "pet-bottles") return "PET";
        if (p.category === "hdpe-containers") return "HDPE";
        if (p.category === "droppers") return "DROPPER";
        if (p.category === "caps-closures") return "CLOSURE";
        if (p.category === "jars") return "PET JAR";
        return p.material.split(/[\(\+]/)[0].trim().toUpperCase();
      }

      function formatCardSpecs(p) {
        let cap = (p.capacity || "").split("(")[0].trim();
        if (cap.includes("Universal")) cap = "Universal Fit";
        if (cap.includes("Calibrated Cup")) cap = "15 ml Cup";

        let neck = (p.neckSize || "")
          .replace("Wide-Mouth", "")
          .replace("Standard", "")
          .replace("Threaded", "")
          .replace("Dropper Neck", "")
          .replace("Tamper-Evident", "")
          .replace("Neck Fit", "")
          .replace("Thread", "")
          .replace("Ribbed", "")
          .trim();

        let wt = p.weight || "";
        if (wt.includes("±")) wt = wt.split("±")[0].trim();
        if (wt.includes("complete")) wt = wt.split("complete")[0].trim();
        if (wt.includes("(combined)")) wt = "5.2 g";

        let pack = (p.standardPack || "").split("/")[0].trim();

        return { cap, neck, wt, pack };
      }

      gridContainer.innerHTML = filtered.map(prod => {
        const mat = formatCardMaterial(prod);
        const specs = formatCardSpecs(prod);
        return `
          <article class="product-card" data-id="${prod.id}">
            <div class="prod-card-top-row">
              <span class="product-badge-tag ${prod.badgeClass}">${prod.badge}</span>
              <span class="prod-material-pill">${mat}</span>
            </div>
            <div class="product-image-box">
              <div class="prod-pedestal-glow"></div>
              <img src="${prod.image}" alt="${prod.name}" loading="lazy" />
            </div>
            <div class="product-info">
              <h3 class="product-name" title="${prod.name}">${prod.name}</h3>
              <div class="product-specs-list">
                <div class="spec-cell">
                  <strong>Capacity</strong>
                  <span title="${prod.capacity}">${specs.cap}</span>
                </div>
                <div class="spec-cell">
                  <strong>Neck Finish</strong>
                  <span title="${prod.neckSize}">${specs.neck}</span>
                </div>
                <div class="spec-cell">
                  <strong>Weight</strong>
                  <span title="${prod.weight}">${specs.wt}</span>
                </div>
                <div class="spec-cell">
                  <strong>Standard Pack</strong>
                  <span title="${prod.standardPack}">${specs.pack}</span>
                </div>
              </div>
              <div class="product-card-actions">
                <button class="btn btn-outline btn-sm js-view-detail" data-id="${prod.id}">Specs</button>
                <button class="btn btn-primary btn-sm js-enquire-prod" data-name="${prod.name}" data-id="${prod.id}">Enquire</button>
              </div>
            </div>
          </article>
        `;
      }).join("");
      }

      if (isSliderMode) {
        gridContainer.scrollLeft = 0;
        setTimeout(updateSliderControls, 60);
      }
    }

    // Render Table (for products.html)
    if (tableBody) {
      if (filtered.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 2rem;">No products match your filters.</td></tr>`;
      } else {
        tableBody.innerHTML = filtered.map(prod => `
          <tr>
            <td>
              <img class="table-thumb" src="${prod.image}" alt="${prod.name}" />
            </td>
            <td>
              <strong>${prod.name}</strong><br>
              <small style="color: var(--ink-muted);">${prod.id}</small>
            </td>
            <td><strong>${prod.capacity}</strong></td>
            <td>${prod.neckSize}</td>
            <td>${prod.material.split('(')[0]}</td>
            <td>${prod.standardPack}</td>
            <td>
              <button class="btn btn-primary btn-sm js-enquire-prod" data-name="${prod.name}" data-id="${prod.id}">Quote</button>
            </td>
          </tr>
        `).join("");
      }
    }

    bindProductActions();
    if (typeof initScrollAnimations === "function") {
      initScrollAnimations();
    }
  }

  // Slider Navigation Arrows
  if (prodSliderPrev && gridContainer) {
    prodSliderPrev.addEventListener("click", (e) => {
      e.preventDefault();
      const step = gridContainer.clientWidth > 820 ? 696 : 348;
      gridContainer.scrollBy({ left: -step, behavior: "smooth" });
    });
  }

  if (prodSliderNext && gridContainer) {
    prodSliderNext.addEventListener("click", (e) => {
      e.preventDefault();
      const step = gridContainer.clientWidth > 820 ? 696 : 348;
      gridContainer.scrollBy({ left: step, behavior: "smooth" });
    });
  }

  if (isSliderMode && gridContainer) {
    let scrollDebounce;
    gridContainer.addEventListener("scroll", () => {
      clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(updateSliderControls, 60);
    }, { passive: true });

    window.addEventListener("resize", () => {
      updateSliderControls();
    }, { passive: true });

    // Desktop Click-and-Drag Momentum Scrolling
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    gridContainer.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      isDown = true;
      gridContainer.style.cursor = "grabbing";
      gridContainer.style.userSelect = "none";
      startX = e.pageX - gridContainer.offsetLeft;
      scrollStart = gridContainer.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      gridContainer.style.cursor = "";
      gridContainer.style.userSelect = "";
    });

    gridContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - gridContainer.offsetLeft;
      const walk = (x - startX) * 1.25;
      gridContainer.scrollLeft = scrollStart - walk;
    });
  }

  window.resetFilters = function () {
    activeCategory = "all";
    activeSearch = "";
    activeMaterial = "all";
    activeCapacity = "all";
    if (searchInput) searchInput.value = "";
    if (materialSelect) materialSelect.value = "all";
    if (capacitySelect) capacitySelect.value = "all";
    filterTabs.forEach(t => t.classList.toggle("active", t.dataset.category === "all"));
    render();
  };

  // Tab clicks
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.category || "all";
      if (gridContainer && isSliderMode) {
        gridContainer.scrollLeft = 0;
      }
      render();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearch = e.target.value.trim();
      render();
    });
  }

  // Material select
  if (materialSelect) {
    materialSelect.addEventListener("change", (e) => {
      activeMaterial = e.target.value;
      render();
    });
  }

  // Capacity select
  if (capacitySelect) {
    capacitySelect.addEventListener("change", (e) => {
      activeCapacity = e.target.value;
      render();
    });
  }

  // View toggle
  if (viewGridBtn && viewTableBtn && gridWrapper && tableWrapper) {
    viewGridBtn.addEventListener("click", () => {
      viewGridBtn.classList.add("active");
      viewTableBtn.classList.remove("active");
      gridWrapper.style.display = "block";
      tableWrapper.classList.remove("active");
    });
    viewTableBtn.addEventListener("click", () => {
      viewTableBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      gridWrapper.style.display = "none";
      tableWrapper.classList.add("active");
    });
  }

  render();
}

// Bind clicks on generated buttons
function bindProductActions() {
  document.querySelectorAll(".js-view-detail").forEach(btn => {
    btn.addEventListener("click", () => {
      const prodId = btn.dataset.id;
      const product = PRODUCTS_DATA.find(p => p.id === prodId);
      if (product) openProductModal(product);
    });
  });

  document.querySelectorAll(".js-enquire-prod").forEach(btn => {
    btn.addEventListener("click", () => {
      const prodName = btn.dataset.name;
      openQuoteModalWithProduct(prodName);
    });
  });
}

// Packaging Configurator Wizard
function initPackagingConfigurator() {
  const wizard = document.getElementById("packagingWizard");
  if (!wizard) return;

  let selectedFormulation = "liquid";
  let selectedVolume = "medium";
  let selectedMaterial = "pet";

  const formulationOptions = wizard.querySelectorAll('[data-step="formulation"] .wizard-option');
  const volumeOptions = wizard.querySelectorAll('[data-step="volume"] .wizard-option');
  const materialOptions = wizard.querySelectorAll('[data-step="material"] .wizard-option');
  const resultCard = document.getElementById("wizardResultCard");

  function updateWizard() {
    let recTitle = "";
    let recDesc = "";
    let recProd = "";
    let recImage = "assets/product-screw-cap-pharma.png";
    let recVolume = "100 ml – 200 ml";
    let recNeck = "28 mm ROPP / CRC";
    let recMaterial = "Pharma Grade PET (Amber)";

    if (selectedFormulation === "liquid") {
      if (selectedMaterial === "pet" || selectedMaterial === "pet-clear") {
        if (selectedMaterial === "pet-clear") {
          recTitle = "100 ML Clear Graduated Syrup Bottle";
          recDesc = "High-clarity glass-like transparent PET bottle with embossed graduation marks, ideal for pediatric solutions, tonics, and multivitamin syrups.";
          recProd = "100 ML Clear Graduated Syrup Bottle";
          recImage = "assets/product-clear-100ml-syrup.png";
          recMaterial = "Virgin PET (Clear)";
          recVolume = selectedVolume === "small" ? "60 ml" : "100 ml";
        } else {
          recTitle = "Screw Cap Pharma PET Bottle (100ml / 200ml)";
          recDesc = "Engineered with 28mm ROPP neck finish, superior 100% UV amber light block, and induction seal compatibility for cough formulas and suspensions.";
          recProd = "Screw Cap Pharma PET Bottle";
          recImage = "assets/product-screw-cap-pharma.png";
          recMaterial = "Pharma Grade PET (Amber)";
          recVolume = selectedVolume === "large" ? "200 ml" : "100 ml";
        }
      } else if (selectedMaterial === "pp") {
        recTitle = "PET Spray Bottle with Fine Mist Pump";
        recDesc = "Precision 0.12ml atomizer mist pump with clear overcap and 28mm neck fit for topical sprays, sanitizers, and antiseptic solutions.";
        recProd = "PET Spray Bottle with Fine Mist Pump";
        recImage = "assets/product-pet-spray-mist.png";
        recMaterial = "PET Bottle + PP Pump";
        recVolume = "100 ml / 200 ml";
        recNeck = "20 mm / 24 mm";
      } else {
        recTitle = "Dry Syrup Bottle (60ml / 100ml)";
        recDesc = "High moisture barrier opaque white pharmaceutical container with ribbed child-resistant closure (CRC) and induction sealing.";
        recProd = "Dry Syrup Bottle";
        recImage = "assets/product-dry-syrup-bottle.png";
        recMaterial = "Virgin HDPE (Medical White)";
        recVolume = selectedVolume === "large" ? "100 ml" : "60 ml";
        recNeck = "28 mm CRC";
      }
    } else if (selectedFormulation === "solid") {
      recTitle = "HDPE Ayurvedic Pill Packer (120ml / 250ml)";
      recDesc = "USP <671> moisture barrier certified bottle with 38mm wide-mouth neck for high-speed automated capsule, tablet, and herbal packaging.";
      recProd = "HDPE Ayurvedic Pill Packer";
      recImage = "assets/product-hdpe-ayurvedic-packer.png";
      recMaterial = "Cleanroom HDPE Resin";
      recVolume = selectedVolume === "bulk" ? "250 ml" : "120 ml";
      recNeck = "38 mm Wide-Mouth";
    } else if (selectedFormulation === "drops") {
      recTitle = "Dropper PET Bottle (10ml / 15ml)";
      recDesc = "Precision controlled dispensing (40µL drop size) with breakaway tamper-evident ring and LDPE calibrated nozzle for ocular & pediatric use.";
      recProd = "Dropper PET Bottle";
      recImage = "assets/product-dropper-pet.png";
      recMaterial = "PET + LDPE Tip + PP Cap";
      recVolume = selectedVolume === "small" ? "10 ml" : "15 ml";
      recNeck = "15 mm Dropper Neck";
    } else {
      recTitle = "5000 ML PET Jar with Handle";
      recDesc = "Heavy-duty 120mm wide opening with bail handle for easy scooping of powders, confectionery, bulk chemicals, and nutraceuticals.";
      recProd = "5000 ML PET Jar with Handle";
      recImage = "assets/product-pet-jar-5000ml.png";
      recMaterial = "100% Virgin US FDA Resin";
      recVolume = selectedVolume === "bulk" ? "5,000 ml" : "500 gm";
      recNeck = "120 mm Wide-Mouth";
    }

    if (resultCard) {
      resultCard.innerHTML = `
        <div class="wizard-result-box">
          <div class="rec-showcase-visual">
            <span class="rec-match-tag">Optimal Match</span>
            <div class="rec-pedestal-glow"></div>
            <img src="${recImage}" alt="${recTitle}" class="rec-product-img" />
          </div>

          <div class="rec-details">
            <div class="rec-header-row">
              <span class="rec-kicker">Recommended Primary Packaging</span>
              <span class="rec-cleanroom-pill">Class 100k Cleanroom Moulded</span>
            </div>
            <h4 class="rec-title">${recTitle}</h4>
            <p class="rec-desc">${recDesc}</p>
            
            <div class="rec-spec-pills">
              <span class="rec-spec-pill"><strong>Volume:</strong> ${recVolume}</span>
              <span class="rec-spec-pill"><strong>Neck:</strong> ${recNeck}</span>
              <span class="rec-spec-pill"><strong>Material:</strong> ${recMaterial}</span>
              <span class="rec-spec-pill"><strong>Seal:</strong> Induction Wad / CRC</span>
            </div>
          </div>

          <div class="rec-actions">
            <button class="btn btn-primary js-enquire-prod" data-name="${recProd}">
              Enquire This Setup
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a class="btn btn-whatsapp" href="https://wa.me/919428027052?text=${encodeURIComponent('Hello Dityaa Bottles team, I configured packaging on your website: ' + recTitle + '. Please provide quotation and sample specs.')}" target="_blank" rel="noopener">
              WhatsApp Quote
            </a>
          </div>
        </div>
      `;
      bindProductActions();
    if (typeof initScrollAnimations === "function") {
      initScrollAnimations();
    }
    }
  }

  formulationOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      formulationOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      selectedFormulation = opt.dataset.val;
      updateWizard();
    });
  });

  volumeOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      volumeOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      selectedVolume = opt.dataset.val;
      updateWizard();
    });
  });

  materialOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      materialOptions.forEach(o => o.classList.remove("selected"));
      opt.classList.add("selected");
      selectedMaterial = opt.dataset.val;
      updateWizard();
    });
  });

  updateWizard();
}

// Modal System
function initModals() {
  const quoteModal = document.getElementById("quoteModal");
  const productModal = document.getElementById("productModal");

  // Close triggers
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      quoteModal?.close();
      productModal?.close();
    });
  });

  // Open quote modal triggers
  document.querySelectorAll(".js-open-quote").forEach(btn => {
    btn.addEventListener("click", () => {
      quoteModal?.showModal();
    });
  });

  // Close on backdrop click
  [quoteModal, productModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener("click", (e) => {
      const rect = modal.getBoundingClientRect();
      const inDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!inDialog) modal.close();
    });
  });
}

function openProductModal(prod) {
  const modal = document.getElementById("productModal");
  const title = document.getElementById("modalProdTitle");
  const img = document.getElementById("modalProdImg");
  const specs = document.getElementById("modalProdSpecs");
  const enquireBtn = document.getElementById("modalProdEnquireBtn");

  if (!modal || !title || !img || !specs) return;

  title.textContent = prod.name;
  img.src = prod.image;
  img.alt = prod.name;

  specs.innerHTML = `
    <tr><td>Product Code</td><td><strong>${prod.id}</strong></td></tr>
    <tr><td>Capacity</td><td><strong>${prod.capacity}</strong> (Overflow: ${prod.overflow})</td></tr>
    <tr><td>Polymer Resin</td><td>${prod.material}</td></tr>
    <tr><td>Regulatory Grade</td><td>${prod.grade}</td></tr>
    <tr><td>Neck Finish</td><td><strong>${prod.neckSize}</strong></td></tr>
    <tr><td>Container Weight</td><td>${prod.weight}</td></tr>
    <tr><td>Dimensions</td><td>Height: ${prod.height} | Dia: ${prod.diameter}</td></tr>
    <tr><td>Standard Packing</td><td>${prod.standardPack}</td></tr>
    <tr><td>Recommended Closures</td><td>${prod.closures}</td></tr>
    <tr><td>Therapeutic Uses</td><td>${prod.application}</td></tr>
  `;

  if (enquireBtn) {
    enquireBtn.onclick = () => {
      modal.close();
      openQuoteModalWithProduct(prod.name);
    };
  }

  modal.showModal();
}

function openQuoteModalWithProduct(productName) {
  const quoteModal = document.getElementById("quoteModal");
  const interestInput = document.getElementById("quoteProductInput");
  if (interestInput && productName) {
    interestInput.value = productName;
  }
  quoteModal?.showModal();
}

// Quote Form & WhatsApp Direct Generator
function initWhatsAppQuoteForm() {
  const quoteForm = document.getElementById("quoteForm");
  const toast = document.getElementById("toast");

  if (!quoteForm) return;

  quoteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(quoteForm);

    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const phone = formData.get("phone") || "";
    const email = formData.get("email") || "";
    const product = formData.get("product") || "";
    const quantity = formData.get("quantity") || "";
    const notes = formData.get("notes") || "";

    // Compose professional WhatsApp message
    const waText = `*New Packaging Enquiry - Dityaa Bottles Website*
*Name:* ${name}
*Company:* ${company}
*Phone:* ${phone}
*Email:* ${email}
*Requested Product:* ${product}
*Estimated Quantity:* ${quantity}
*Project Specifications:* ${notes}`;

    const waUrl = `https://wa.me/919428027052?text=${encodeURIComponent(waText)}`;

    // Close modal
    const modal = document.getElementById("quoteModal");
    modal?.close();

    // Show toast
    showToast("Enquiry sent! Redirecting to WhatsApp...");

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 800);

    quoteForm.reset();
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerHTML = `
    <svg style="width:20px;height:20px;color:var(--cyan-vibrant);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Smooth scrolling for hash links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId.length < 2) return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ── Global Scroll & Section Entrance Animations ── */
function initScrollAnimations() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.body.classList.add("js-animate");

  const targets = [];

  // 1. All Section Headers (Kick-off titles, subtitles across all pages)
  document.querySelectorAll("section:not(.page-hero) .section-kicker, section:not(.page-hero) .section-title, section:not(.page-hero) .section-subtitle, .intro-header > *").forEach(el => {
    if (!el.classList.contains("reveal-init")) {
      el.classList.add("reveal-init");
      targets.push(el);
    }
  });

  // 2. Multi-item grids & lists (with auto-stagger delays)
  const gridSelectors = [
    ".plant-feature-list",
    ".advantages-flow",
    ".category-grid",
    ".products-grid",
    ".location-cards-stack",
    ".footer-facilities",
    ".milestone-grid",
    ".cleanroom-specs-grid",
    ".plant-grid",
    ".company-profile-grid",
    ".cert-grid",
    ".faq-list",
    ".stats-bar",
    ".trust-bar",
    ".schematic-cards"
  ];

  gridSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(container => {
      const children = Array.from(container.children);
      children.forEach((child, idx) => {
        if (!child.classList.contains("reveal-init")) {
          child.classList.add("reveal-init");
          const delay = Math.min((idx % 6) * 90, 540);
          child.style.setProperty("--reveal-delay", `${delay}ms`);
          targets.push(child);
        }
      });
    });
  });

  // 3. Standalone major cards, forms, and feature sections
  const cardSelectors = [
    ".contact-form-box",
    ".loc-card-interactive",
    ".plant-feature",
    ".schematic-hub",
    ".schematic-card",
    ".advantages-flow-item",
    ".advantages-visual",
    ".cta-banner",
    ".configurator-box",
    ".product-card",
    ".category-card",
    ".facility-card"
  ];

  cardSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.classList.contains("reveal-init")) {
        el.classList.add("reveal-init");
        targets.push(el);
      }
    });
  });

  // 4. Facility and Production Photo Showcases (Scale & Depth animation)
  document.querySelectorAll(".plant-grid > div > div[style*='border-radius'], .intro-visual, .facility-showcase-visual, .cleanroom-photo-box").forEach(el => {
    if (!el.classList.contains("reveal-init")) {
      el.classList.add("reveal-init", "reveal-scale");
      targets.push(el);
    }
  });

  // IntersectionObserver to reveal on scroll
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -30px 0px",
      threshold: 0.05
    });

    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      // If already visible in initial viewport, reveal smoothly with slight delay
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(() => {
          el.classList.add("is-revealed");
        }, 60);
      } else {
        observer.observe(el);
      }
    });
  } else {
    targets.forEach(el => el.classList.add("is-revealed"));
  }
}