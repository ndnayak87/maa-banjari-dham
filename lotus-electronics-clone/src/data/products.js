export const CATEGORIES = [
  { slug: 'tv', name: 'LED & Smart TVs', icon: '📺', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80' },
  { slug: 'sofas', name: 'Sofa & Couch', icon: '🛋️', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  { slug: 'beds', name: 'Beds & Mattresses', icon: '🛏️', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80' },
  { slug: 'refrigerators', name: 'Refrigerators', icon: '🧊', image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&q=80' },
  { slug: 'washing-machines', name: 'Washing Machines', icon: '🫧', image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=80' },
  { slug: 'dining', name: 'Dining Tables', icon: '🍽️', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80' },
  { slug: 'wardrobes', name: 'Wardrobes', icon: '🚪', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80' },
  { slug: 'hardware', name: 'Hardware & Tools', icon: '🔧', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
]

export const BRANDS = [
  'Samsung', 'LG', 'Sony', 'Whirlpool', 'Godrej', 'Haier',
  'Nilkamal', 'Godrej Interio', 'Durian', 'Featherlite', 'IKEA', 'HomeTown',
]

// Real product images from Unsplash (Free under Unsplash License - Copyright Free)
const img = (id) => `https://images.unsplash.com/photo-${id}?w=500&q=80`

export const PRODUCTS = [
  // TVs
  { id: 'tv1', name: 'Samsung 108 cm (43") Crystal 4K NeoLED Smart TV', category: 'tv', brand: 'Samsung', price: 32990, mrp: 47900, rating: 4.5, reviews: 2341, image: img('1593359677879-a4bb92f829d1'), badge: 'Bestseller', specs: ['4K Ultra HD', 'NeoLED Panel', '3 HDMI Ports', '20W Speaker'] },
  { id: 'tv2', name: 'LG 139 cm (55") 4K Ultra HD Smart LED TV', category: 'tv', brand: 'LG', price: 46990, mrp: 61990, rating: 4.4, reviews: 1876, image: img('1593789207106-bc796e6e793a'), badge: 'Hot Deal', specs: ['4K UHD', 'webOS', 'AI ThinQ', 'Dolby Audio'] },
  { id: 'tv3', name: 'Sony Bravia 164 cm (65") 4K Smart LED TV', category: 'tv', brand: 'Sony', price: 34990, mrp: 49900, rating: 4.7, reviews: 987, image: img('1593359677879-a4bb92f829d1'), badge: 'Premium', specs: ['4K HDR', 'X1 Processor', 'Google TV', 'Dolby Atmos'] },
  { id: 'tv4', name: 'TCL 80 cm (32") HD Ready Smart LED TV', category: 'tv', brand: 'TCL', price: 10990, mrp: 18990, rating: 4.1, reviews: 5432, image: img('1593789207106-bc796e6e793a'), badge: 'Value Pick', specs: ['HD Ready', 'Android TV', '2 HDMI', '10W Speaker'] },
  { id: 'tv5', name: 'OnePlus 108 cm (43") Q Series 4K Smart TV', category: 'tv', brand: 'OnePlus', price: 27999, mrp: 39999, rating: 4.3, reviews: 3210, image: img('1593359677879-a4bb92f829d1'), badge: 'New Launch', specs: ['4K QLED', 'Google TV', '30W Dolby Audio', 'Low Latency Mode'] },
  { id: 'tv6', name: 'Mi 100 cm (40") X Series 4K Smart TV', category: 'tv', brand: 'Mi', price: 21999, mrp: 29999, rating: 4.2, reviews: 7654, image: img('1593789207106-bc796e6e793a'), badge: 'Bestseller', specs: ['4K UHD', 'Android TV 11', '30W Speaker', 'PatchWall'] },

  // Sofas
  { id: 'sf1', name: 'Nilkamal Elegance 3-Seater Fabric Sofa - Grey', category: 'sofas', brand: 'Nilkamal', price: 18990, mrp: 28990, rating: 4.4, reviews: 3456, image: img('1555041469-a586c61ea9bc'), badge: 'Bestseller', specs: ['3-Seater', 'Fabric Upholstery', 'Solid Wood Frame', '5 Year Warranty'] },
  { id: 'sf2', name: 'Godrej Interio L-Shape Sectional Sofa - Blue', category: 'sofas', brand: 'Godrej Interio', price: 34990, mrp: 49990, rating: 4.5, reviews: 2345, image: img('1493663284031-b7e3aefcae8e'), badge: 'Premium', specs: ['L-Shape', '5-Seater', 'High Density Foam', 'Removable Covers'] },
  { id: 'sf3', name: 'Durian Chesterfield 2-Seater Sofa - Brown Leather', category: 'sofas', brand: 'Durian', price: 34990, mrp: 44990, rating: 4.6, reviews: 1234, image: img('1555041469-a586c61ea9bc'), badge: 'Premium', specs: ['2-Seater', 'Genuine Leather', 'Chesterfield Design', 'Kiln-Dried Wood'] },
  { id: 'sf4', name: 'IKEA KIVIK 3-Seater Sofa - Beige', category: 'sofas', brand: 'IKEA', price: 24990, mrp: 32990, rating: 4.3, reviews: 5678, image: img('1493663284031-b7e3aefcae8e'), badge: 'Hot Deal', specs: ['3-Seater', 'Washable Cover', 'Memory Foam', '10 Year Warranty'] },
  { id: 'sf5', name: 'HomeTown Fabric Recliner Sofa - Charcoal', category: 'sofas', brand: 'HomeTown', price: 29990, mrp: 42990, rating: 4.2, reviews: 4321, image: img('1555041469-a586c61ea9bc'), badge: 'New Launch', specs: ['Recliner', 'Fabric', 'Manual Recline', 'Cup Holders'] },
  { id: 'sf6', name: 'Featherlite Compact 2-Seater Sofa - Green', category: 'sofas', brand: 'Featherlite', price: 14990, mrp: 21990, rating: 4.1, reviews: 6543, image: img('1493663284031-b7e3aefcae8e'), badge: 'Value Pick', specs: ['2-Seater', 'Fabric', 'Compact Design', '3 Year Warranty'] },

  // Beds
  { id: 'bd1', name: 'Godrej Interio King Size Bed with Storage - Walnut', category: 'beds', brand: 'Godrej Interio', price: 28990, mrp: 42990, rating: 4.5, reviews: 4567, image: img('1505693416388-ac5ce068fe85'), badge: 'Bestseller', specs: ['King Size', 'Hydraulic Storage', 'Engineered Wood', 'Walnut Finish'] },
  { id: 'bd2', name: 'Nilkamal Queen Size Bed - Teak Finish', category: 'beds', brand: 'Nilkamal', price: 12990, mrp: 18990, rating: 4.3, reviews: 7654, image: img('1540518614846-7eded433c457'), badge: 'Value Pick', specs: ['Queen Size', 'Solid Wood', 'Teak Finish', 'No Storage'] },
  { id: 'bd3', name: 'Durian Upholstered King Bed - Grey Velvet', category: 'beds', brand: 'Durian', price: 34990, mrp: 49990, rating: 4.6, reviews: 2345, image: img('1505693416388-ac5ce068fe85'), badge: 'Premium', specs: ['King Size', 'Velvet Upholstery', 'Tufted Headboard', 'Storage Option'] },
  { id: 'bd4', name: 'IKEA MALM Queen Bed Frame - White', category: 'beds', brand: 'IKEA', price: 15990, mrp: 21990, rating: 4.2, reviews: 8765, image: img('1540518614846-7eded433c457'), badge: 'Hot Deal', specs: ['Queen Size', 'Particle Board', 'White Finish', 'Adjustable Sides'] },
  { id: 'bd5', name: 'HomeTown Bunk Bed with Trundle - Natural Pine', category: 'beds', brand: 'HomeTown', price: 22990, mrp: 32990, rating: 4.4, reviews: 3456, image: img('1505693416388-ac5ce068fe85'), badge: 'New Launch', specs: ['Bunk Bed', 'Solid Pine', 'Trundle Included', 'Safety Rails'] },
  { id: 'bd6', name: 'Featherlite Single Bed with Drawers - Oak', category: 'beds', brand: 'Featherlite', price: 9990, mrp: 14990, rating: 4.1, reviews: 5432, image: img('1540518614846-7eded433c457'), badge: 'Value Pick', specs: ['Single Size', '2 Drawers', 'MDF', 'Oak Finish'] },

  // Refrigerators
  { id: 'rf1', name: 'Samsung 253L Double Door Refrigerator', category: 'refrigerators', brand: 'Samsung', price: 24990, mrp: 31990, rating: 4.5, reviews: 8765, image: img('1571175443880-49e1d25b2bc5'), badge: 'Bestseller', specs: ['253L Capacity', 'Digital Inverter', 'Frost Free', '5 Star Rating'] },
  { id: 'rf2', name: 'LG 260L Side by Side Refrigerator', category: 'refrigerators', brand: 'LG', price: 34990, mrp: 44990, rating: 4.6, reviews: 4321, image: img('1571175443880-49e1d25b2bc5'), badge: 'Premium', specs: ['260L Capacity', 'Side by Side', 'Smart Inverter', 'Door Cooling+'] },
  { id: 'rf3', name: 'Whirlpool 245L Triple Door Refrigerator', category: 'refrigerators', brand: 'Whirlpool', price: 22990, mrp: 28990, rating: 4.3, reviews: 6543, image: img('1571175443880-49e1d25b2bc5'), badge: 'Hot Deal', specs: ['245L Capacity', 'Triple Door', '6th Sense Tech', 'Frost Free'] },
  { id: 'rf4', name: 'Godrej 185L Single Door Refrigerator', category: 'refrigerators', brand: 'Godrej', price: 13990, mrp: 17990, rating: 4.2, reviews: 9876, image: img('1571175443880-49e1d25b2bc5'), badge: 'Value Pick', specs: ['185L Capacity', 'Single Door', 'Direct Cool', '4 Star Rating'] },
  { id: 'rf5', name: 'Haier 325L Double Door Refrigerator', category: 'refrigerators', brand: 'Haier', price: 28990, mrp: 36990, rating: 4.4, reviews: 3456, image: img('1571175443880-49e1d25b2bc5'), badge: 'New Launch', specs: ['325L Capacity', 'Convertible', 'Frost Free', '10Y Compressor Warranty'] },
  { id: 'rf6', name: 'Panasonic 268L Double Door Refrigerator', category: 'refrigerators', brand: 'Panasonic', price: 26990, mrp: 33990, rating: 4.3, reviews: 2345, image: img('1571175443880-49e1d25b2bc5'), badge: 'Hot Deal', specs: ['268L Capacity', 'Ag Clean', 'Frost Free', 'Econavi'] },

  // Washing Machines
  { id: 'wm1', name: 'LG 7kg Front Load Washing Machine', category: 'washing-machines', brand: 'LG', price: 28990, mrp: 36990, rating: 4.6, reviews: 7654, image: img('1626806787461-102c1bfaaea1'), badge: 'Bestseller', specs: ['7kg Capacity', 'Front Load', 'Inverter Direct Drive', 'Steam Wash'] },
  { id: 'wm2', name: 'Samsung 6.5kg Top Load Washing Machine', category: 'washing-machines', brand: 'Samsung', price: 15990, mrp: 20990, rating: 4.4, reviews: 8765, image: img('1626806787461-102c1bfaaea1'), badge: 'Value Pick', specs: ['6.5kg Capacity', 'Top Load', 'Diamond Drum', '5 Star Rating'] },
  { id: 'wm3', name: 'Whirlpool 8kg Front Load Washing Machine', category: 'washing-machines', brand: 'Whirlpool', price: 32990, mrp: 41990, rating: 4.5, reviews: 4321, image: img('1626806787461-102c1bfaaea1'), badge: 'Hot Deal', specs: ['8kg Capacity', 'Front Load', '6th Sense', '1400 RPM'] },
  { id: 'wm4', name: 'IFB 6.5kg Front Load Washing Machine', category: 'washing-machines', brand: 'IFB', price: 24990, mrp: 31990, rating: 4.4, reviews: 5678, image: img('1626806787461-102c1bfaaea1'), badge: 'Bestseller', specs: ['6.5kg Capacity', 'Front Load', 'Cradle Wash', 'Steam'] },
  { id: 'wm5', name: 'Bosch 7kg Front Load Washing Machine', category: 'washing-machines', brand: 'Bosch', price: 34990, mrp: 44990, rating: 4.6, reviews: 3456, image: img('1626806787461-102c1bfaaea1'), badge: 'Premium', specs: ['7kg Capacity', 'Front Load', 'EcoSilence Drive', 'AntiVibration'] },
  { id: 'wm6', name: 'Haier 6kg Top Load Washing Machine', category: 'washing-machines', brand: 'Haier', price: 12990, mrp: 16990, rating: 4.2, reviews: 6543, image: img('1626806787461-102c1bfaaea1'), badge: 'Value Pick', specs: ['6kg Capacity', 'Top Load', 'Fuzzy Logic', '8 Wash Programs'] },

  // Dining Tables
  { id: 'dt1', name: 'Godrej Interio 6-Seater Dining Table - Sheesham', category: 'dining', brand: 'Godrej Interio', price: 24990, mrp: 36990, rating: 4.5, reviews: 3456, image: img('1617806118233-18e1de247200'), badge: 'Bestseller', specs: ['6-Seater', 'Sheesham Wood', 'Natural Finish', 'Chairs Included'] },
  { id: 'dt2', name: 'Nilkamal 4-Seater Glass Dining Table - Clear', category: 'dining', brand: 'Nilkamal', price: 12990, mrp: 18990, rating: 4.2, reviews: 6543, image: img('1617806118233-18e1de247200'), badge: 'Value Pick', specs: ['4-Seater', 'Tempered Glass', 'Metal Frame', 'Chairs Included'] },
  { id: 'dt3', name: 'IKEA DOCKSTA Round Dining Table - White', category: 'dining', brand: 'IKEA', price: 15990, mrp: 21990, rating: 4.3, reviews: 4321, image: img('1617806118233-18e1de247200'), badge: 'Hot Deal', specs: ['4-Seater', 'Round Shape', 'Particle Board', 'White Finish'] },
  { id: 'dt4', name: 'HomeTown Extendable Dining Table - Walnut', category: 'dining', brand: 'HomeTown', price: 19990, mrp: 28990, rating: 4.4, reviews: 2345, image: img('1617806118233-18e1de247200'), badge: 'New Launch', specs: ['4-6 Seater', 'Extendable', 'MDF', 'Walnut Finish'] },
  { id: 'dt5', name: 'Durian Marble Top Dining Table - Beige', category: 'dining', brand: 'Durian', price: 32990, mrp: 45990, rating: 4.6, reviews: 1234, image: img('1617806118233-18e1de247200'), badge: 'Premium', specs: ['6-Seater', 'Marble Top', 'Solid Wood Legs', 'Premium Finish'] },
  { id: 'dt6', name: 'Featherlite Compact 2-Seater Dining - Natural', category: 'dining', brand: 'Featherlite', price: 8990, mrp: 13990, rating: 4.1, reviews: 5678, image: img('1617806118233-18e1de247200'), badge: 'Value Pick', specs: ['2-Seater', 'Foldable', 'MDF', 'Natural Finish'] },

  // Wardrobes
  { id: 'wr1', name: 'Godrej Interio 3-Door Wardrobe with Mirror - Wenge', category: 'wardrobes', brand: 'Godrej Interio', price: 22990, mrp: 34990, rating: 4.5, reviews: 4567, image: img('1595428774223-ef52624120d2'), badge: 'Bestseller', specs: ['3-Door', 'Mirror Included', 'Engineered Wood', 'Wenge Finish'] },
  { id: 'wr2', name: 'Nilkamal 2-Door Wardrobe - Teak', category: 'wardrobes', brand: 'Nilkamal', price: 11990, mrp: 16990, rating: 4.3, reviews: 7654, image: img('1595428774223-ef52624120d2'), badge: 'Value Pick', specs: ['2-Door', 'Solid Wood', 'Teak Finish', 'Lock Included'] },
  { id: 'wr3', name: 'IKEA PAX Wardrobe System - White', category: 'wardrobes', brand: 'IKEA', price: 28990, mrp: 38990, rating: 4.4, reviews: 3456, image: img('1595428774223-ef52624120d2'), badge: 'Premium', specs: ['Modular', 'Customizable', 'Soft Close', '10 Year Warranty'] },
  { id: 'wr4', name: 'HomeTown Sliding Door Wardrobe - Oak', category: 'wardrobes', brand: 'HomeTown', price: 18990, mrp: 26990, rating: 4.3, reviews: 2345, image: img('1595428774223-ef52624120d2'), badge: 'Hot Deal', specs: ['Sliding Doors', '2-Door', 'MDF', 'Oak Finish'] },
  { id: 'wr5', name: 'Durian Walk-in Wardrobe Organizer - Custom', category: 'wardrobes', brand: 'Durian', price: 34990, mrp: 49990, rating: 4.6, reviews: 1234, image: img('1595428774223-ef52624120d2'), badge: 'Premium', specs: ['Walk-in', 'Custom Size', 'Premium Hardware', 'Installation Included'] },
  { id: 'wr6', name: 'Featherlite Single Door Wardrobe - Natural', category: 'wardrobes', brand: 'Featherlite', price: 7990, mrp: 11990, rating: 4.1, reviews: 5432, image: img('1595428774223-ef52624120d2'), badge: 'Value Pick', specs: ['1-Door', 'MDF', 'Natural Finish', 'Compact'] },

  // Hardware & Tools - A to Z (Pump, Pipe, Paint, Iron, Lakkhar, etc.)
  { id: 'hw1', name: 'Bosch Professional Cordless Drill Machine GSR 120-LI', category: 'hardware', brand: 'Bosch', price: 8990, mrp: 12990, rating: 4.6, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['12V Li-Ion', '2-Speed', 'LED Light', '2 Batteries Included'] },
  { id: 'hw2', name: 'Stanley 19mm Tape Measure - 8m/26ft', category: 'hardware', brand: 'Stanley', price: 499, mrp: 799, rating: 4.4, reviews: 12345, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['8m/26ft', '19mm Blade', 'Auto Lock', 'Belt Clip'] },
  { id: 'hw3', name: 'Draper 132 Piece Tool Set with Case', category: 'hardware', brand: 'Draper', price: 4990, mrp: 7990, rating: 4.5, reviews: 3456, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['132 Pieces', 'Chrome Vanadium', 'Carry Case', 'Lifetime Warranty'] },
  { id: 'hw4', name: 'Makita 4" Angle Grinder 720W', category: 'hardware', brand: 'Makita', price: 3490, mrp: 4990, rating: 4.5, reviews: 6789, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['720W Motor', '10000 RPM', '4" Disc', 'Side Handle'] },
  { id: 'hw5', name: 'Black+Decker 550W Hammer Drill', category: 'hardware', brand: 'Black+Decker', price: 2990, mrp: 4490, rating: 4.3, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['550W', 'Hammer Action', '13mm Chuck', 'Variable Speed'] },
  { id: 'hw6', name: 'Taparia 8-Piece Screwdriver Set', category: 'hardware', brand: 'Taparia', price: 599, mrp: 999, rating: 4.2, reviews: 9876, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['8 Pieces', 'Magnetic Tips', 'Comfort Grip', 'Chrome Vanadium'] },
  { id: 'hw7', name: 'HiKOKI 18V Cordless Impact Driver', category: 'hardware', brand: 'HiKOKI', price: 12990, mrp: 17990, rating: 4.6, reviews: 2345, image: img('1581092160562-40aa08e78837'), badge: 'Premium', specs: ['18V Li-Ion', '180Nm Torque', 'LED Light', '2 Batteries'] },
  { id: 'hw8', name: 'Duro 100 Piece Wall Plug & Screw Set', category: 'hardware', brand: 'Duro', price: 299, mrp: 499, rating: 4.1, reviews: 11234, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['100 Pieces', 'Assorted Sizes', 'Nylon Plugs', 'Storage Box'] },
  { id: 'hw9', name: 'Ingco 135 Piece Socket Set', category: 'hardware', brand: 'Ingco', price: 3990, mrp: 5990, rating: 4.4, reviews: 4567, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['135 Pieces', '1/2" & 1/4" Drive', 'Chrome Vanadium', 'Carry Case'] },
  { id: 'hw10', name: 'KPT 1000W Heat Gun', category: 'hardware', brand: 'KPT', price: 1490, mrp: 2490, rating: 4.2, reviews: 5678, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['1000W', '2 Temp Settings', 'Overheat Protection', '2 Nozzles'] },
  { id: 'hw11', name: 'Fischer Wall Plugs - 50 Pieces Assorted', category: 'hardware', brand: 'Fischer', price: 399, mrp: 699, rating: 4.3, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['50 Pieces', 'Assorted Sizes', 'Nylon', 'For All Walls'] },
  // Pumps
  { id: 'hw12', name: 'Kirloskar 1HP Self Priming Monoblock Pump', category: 'hardware', brand: 'Kirloskar', price: 4990, mrp: 6990, rating: 4.5, reviews: 7654, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['1HP', 'Self Priming', 'Copper Winding', '2 Year Warranty'] },
  { id: 'hw13', name: 'Crompton 0.5HP Borewell Submersible Pump', category: 'hardware', brand: 'Crompton', price: 6990, mrp: 9990, rating: 4.4, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['0.5HP', 'Submersible', '4" Borewell', 'Stainless Steel'] },
  { id: 'hw14', name: 'Kos 1.5HP Openwell Submersible Pump', category: 'hardware', brand: 'Kos', price: 8990, mrp: 12990, rating: 4.3, reviews: 3456, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['1.5HP', 'Openwell', 'Cast Iron Body', 'Auto Cut'] },
  { id: 'hw15', name: 'Texmo 1HP Centrifugal Monoblock Pump', category: 'hardware', brand: 'Texmo', price: 3990, mrp: 5990, rating: 4.2, reviews: 6789, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['1HP', 'Centrifugal', 'Brass Impeller', 'Thermal Overload'] },
  // Pipes & Fittings
  { id: 'hw16', name: 'Supreme PVC Pipe 1 inch - 90ft Coil', category: 'hardware', brand: 'Supreme', price: 899, mrp: 1299, rating: 4.3, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['1 inch', '90ft Coil', 'ISI Marked', '6 kg/cm²'] },
  { id: 'hw17', name: 'Finolex CPVC Pipe 3/4 inch - 90ft', category: 'hardware', brand: 'Finolex', price: 1299, mrp: 1899, rating: 4.4, reviews: 6543, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['3/4 inch', '90ft', 'CPVC', 'Hot & Cold Water'] },
  { id: 'hw18', name: 'Astral PPR-C Pipe 20mm - 3m Length', category: 'hardware', brand: 'Astral', price: 299, mrp: 499, rating: 4.2, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['20mm', '3m Length', 'PPR-C', '20 Year Warranty'] },
  { id: 'hw19', name: 'Jindal GI Pipe 1/2 inch - 6m Length', category: 'hardware', brand: 'Jindal', price: 1499, mrp: 2199, rating: 4.5, reviews: 4321, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['1/2 inch', '6m', 'Galvanized Iron', 'ISI Marked'] },
  { id: 'hw20', name: 'Havells PVC Conduit Pipe 25mm - 3m', category: 'hardware', brand: 'Havells', price: 199, mrp: 349, rating: 4.3, reviews: 7654, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['25mm', '3m', 'PVC Conduit', 'Fire Retardant'] },
  // Paint & Adhesives
  { id: 'hw21', name: 'Asian Paints Emulsion 20L Bucket - White', category: 'hardware', brand: 'Asian Paints', price: 2499, mrp: 3499, rating: 4.6, reviews: 9876, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['20L', 'Emulsion', 'White', '5 Year Warranty'] },
  { id: 'hw22', name: 'Berger Weathercoat Exterior Paint 20L', category: 'hardware', brand: 'Berger', price: 3999, mrp: 5499, rating: 4.5, reviews: 6543, image: img('1581092160562-40aa08e78837'), badge: 'Premium', specs: ['20L', 'Exterior', 'Weatherproof', '7 Year Warranty'] },
  { id: 'hw23', name: 'Dulux Maxilite Emulsion 20L - Ivory', category: 'hardware', brand: 'Dulux', price: 2999, mrp: 4299, rating: 4.5, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['20L', 'Emulsion', 'Ivory', 'Low VOC'] },
  { id: 'hw24', name: 'Fevicol SH Wood Adhesive 500g', category: 'hardware', brand: 'Fevicol', price: 199, mrp: 299, rating: 4.4, reviews: 12345, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['500g', 'Synthetic Resin', 'Water Resistant', 'Fast Setting'] },
  { id: 'hw25', name: 'Dr. Fixit Waterproofing Chemical 1L', category: 'hardware', brand: 'Dr. Fixit', price: 499, mrp: 799, rating: 4.3, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['1L', 'Waterproofing', 'Integral', 'For Bathrooms & Terrace'] },
  // Iron & Steel
  { id: 'hw26', name: 'TATA Tiscon TMT Bar 12mm - 12m', category: 'hardware', brand: 'TATA Tiscon', price: 899, mrp: 1199, rating: 4.7, reviews: 15432, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['12mm', '12m', 'TMT', 'Fe-500D'] },
  { id: 'hw27', name: 'JSW Neosteel TMT Bar 10mm - 12m', category: 'hardware', brand: 'JSW', price: 699, mrp: 999, rating: 4.6, reviews: 12345, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['10mm', '12m', 'TMT', 'Corrosion Resistant'] },
  { id: 'hw28', name: 'SAIL HRC Sheet 2mm - 8x4 ft', category: 'hardware', brand: 'SAIL', price: 4999, mrp: 6999, rating: 4.5, reviews: 4321, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['2mm', '8x4 ft', 'HRC', 'Hot Rolled'] },
  { id: 'hw29', name: 'Jindal GI Sheet 22 Gauge - 8x4 ft', category: 'hardware', brand: 'Jindal', price: 2999, mrp: 4299, rating: 4.4, reviews: 5678, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['22 Gauge', '8x4 ft', 'Galvanized', 'ISI Marked'] },
  { id: 'hw30', name: 'TATA Wiron Binding Wire 20kg', category: 'hardware', brand: 'TATA Wiron', price: 1499, mrp: 1999, rating: 4.3, reviews: 7654, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['20kg', 'Binding Wire', 'Soft Annealed', '1.2mm'] },
  // Lakkhar (Lacquer) & Polish
  { id: 'hw31', name: 'Asian Paints Woodtech Melamine Polish 1L', category: 'hardware', brand: 'Asian Paints', price: 899, mrp: 1299, rating: 4.4, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['1L', 'Melamine', 'High Gloss', 'For Wood'] },
  { id: 'hw32', name: 'Dulux Woodguard Polyurethane Varnish 1L', category: 'hardware', brand: 'Dulux', price: 1099, mrp: 1599, rating: 4.5, reviews: 4321, image: img('1581092160562-40aa08e78837'), badge: 'Premium', specs: ['1L', 'Polyurethane', 'Clear Varnish', 'UV Resistant'] },
  { id: 'hw33', name: 'Fevicol Marine Plywood Adhesive 1kg', category: 'hardware', brand: 'Fevicol', price: 399, mrp: 599, rating: 4.3, reviews: 6543, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['1kg', 'Marine Grade', 'Waterproof', 'For Plywood'] },
  { id: 'hw34', name: 'Touchwood PU Polish 500ml - Natural', category: 'hardware', brand: 'Touchwood', price: 499, mrp: 799, rating: 4.2, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['500ml', 'PU Polish', 'Natural', 'For Furniture'] },
  // Nails, Screws & Fasteners
  { id: 'hw35', name: 'GKW Iron Nails 2 inch - 1kg', category: 'hardware', brand: 'GKW', price: 99, mrp: 149, rating: 4.2, reviews: 9876, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['2 inch', '1kg', 'Iron', 'For Woodwork'] },
  { id: 'hw36', name: 'Duro Screw Assorted Box - 500 Pieces', category: 'hardware', brand: 'Duro', price: 299, mrp: 499, rating: 4.1, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['500 Pieces', 'Assorted', 'Phillips Head', 'Carbon Steel'] },
  { id: 'hw37', name: 'Hilti Anchor Fasteners - 20 Pieces', category: 'hardware', brand: 'Hilti', price: 599, mrp: 899, rating: 4.5, reviews: 3456, image: img('1581092160562-40aa08e78837'), badge: 'Premium', specs: ['20 Pieces', 'Anchor', 'For Concrete', 'M8 Size'] },
  // Electrical Hardware
  { id: 'hw38', name: 'Havells MCB 32A Single Pole', category: 'hardware', brand: 'Havells', price: 299, mrp: 449, rating: 4.4, reviews: 7654, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['32A', 'Single Pole', 'MCB', 'C Curve'] },
  { id: 'hw39', name: 'Anchor Roma Switch 16A - 1 Module', category: 'hardware', brand: 'Anchor', price: 99, mrp: 149, rating: 4.3, reviews: 12345, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['16A', '1 Module', 'Switch', 'ISI Marked'] },
  { id: 'hw40', name: 'Polycab Copper Wire 1.5 sq mm - 90m', category: 'hardware', brand: 'Polycab', price: 1999, mrp: 2799, rating: 4.5, reviews: 8765, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['1.5 sq mm', '90m', 'Copper', 'FR PVC'] },
  // Plumbing & Sanitary
  { id: 'hw41', name: 'Jaquar Basin Mixer Tap - Chrome', category: 'hardware', brand: 'Jaquar', price: 2499, mrp: 3999, rating: 4.5, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Premium', specs: ['Basin Mixer', 'Chrome', 'Ceramic Cartridge', '5 Year Warranty'] },
  { id: 'hw42', name: 'Hindware Wall Mount WC - White', category: 'hardware', brand: 'Hindware', price: 4999, mrp: 7999, rating: 4.4, reviews: 4321, image: img('1581092160562-40aa08e78837'), badge: 'Hot Deal', specs: ['Wall Mount', 'White', 'Ceramic', 'Dual Flush'] },
  { id: 'hw43', name: 'Cera Wash Basin 550x400mm - White', category: 'hardware', brand: 'Cera', price: 1999, mrp: 2999, rating: 4.3, reviews: 6543, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['550x400mm', 'White', 'Vitreous China', 'Wall Mounted'] },
  // Safety & Welding
  { id: 'hw44', name: 'ESAB Welding Electrode 4mm - 5kg', category: 'hardware', brand: 'ESAB', price: 999, mrp: 1499, rating: 4.4, reviews: 5432, image: img('1581092160562-40aa08e78837'), badge: 'Bestseller', specs: ['4mm', '5kg', 'General Purpose', 'Low Hydrogen'] },
  { id: 'hw45', name: '3M Safety Goggles - Clear Lens', category: 'hardware', brand: '3M', price: 299, mrp: 499, rating: 4.3, reviews: 7654, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['Clear Lens', 'UV Protection', 'Anti-Fog', 'Adjustable'] },
  { id: 'hw46', name: 'Karam Safety Helmet - Yellow', category: 'hardware', brand: 'Karam', price: 199, mrp: 349, rating: 4.2, reviews: 6543, image: img('1581092160562-40aa08e78837'), badge: 'Value Pick', specs: ['Yellow', 'HDPE', '4 Point Ratchet', 'ISI Marked'] },
]

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Great Indian Sale',
    subtitle: 'Up to 70% Off on Electronics & Furniture',
    description: 'TVs, Sofas, Beds, Wardrobes & more at unbeatable prices',
    cta: 'Shop Now',
    link: '/category/tv',
    bg: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #01579b 100%)',
  },
  {
    id: 2,
    title: 'Home Furniture Fest',
    subtitle: 'Sofas, Beds, Dining & Wardrobes',
    description: 'Transform your home with premium furniture at best prices',
    cta: 'Explore Furniture',
    link: '/category/sofas',
    bg: 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 50%, #8e24aa 100%)',
  },
  {
    id: 3,
    title: 'Appliances Bonanza',
    subtitle: 'Refrigerators & Washing Machines',
    description: 'Top brands with free installation & delivery',
    cta: 'View Deals',
    link: '/category/refrigerators',
    bg: 'linear-gradient(135deg, #b71c1c 0%, #c62828 50%, #d32f2f 100%)',
  },
]

export const getProductById = (id) => PRODUCTS.find((p) => p.id === id)
export const getProductsByCategory = (slug) => PRODUCTS.filter((p) => p.category === slug)
export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)
export const getDeals = () => PRODUCTS.filter((p) => p.mrp - p.price > p.mrp * 0.25).slice(0, 8)
export const getBestSellers = () => PRODUCTS.filter((p) => p.badge === 'Bestseller')
export const searchProducts = (query) => {
  const q = query.toLowerCase()
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  )
}
