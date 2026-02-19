/**
 * app.js - Full Stack Logic
 * Includes: 130+ Product Database, Auth System, Cart Logic
 */

const products = [
    // --- 1. ELECTRONICS (12 Items) ---
    { id: 101, name: "Luxe Noise-Cancel Headphones", price: 299, category: "electronics", image: "https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-NOISE-CANCELLING-HEADPHONES-8246-3x2-1.jpg?auto=webp&quality=75&crop=1:1,smart&width=1024", description: "Premium sound isolation." },
    { id: 102, name: "4K Smart Drone", price: 850, category: "electronics", image: "https://www.geekbuying.pl/42311-large_default/zll-sg109max-rc-drone-electrically-adjustable-camera-intelligent-obstacle-avoidance-optical-flow-hover-3-batteries.jpg", description: "Professional aerial photography." },
    { id: 103, name: "Mirrorless Pro Camera", price: 1499, category: "electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80", description: "24MP full-frame sensor." },
    { id: 104, name: "Mechanical Keyboard", price: 120, category: "electronics", image: "https://shop.zebronics.com/cdn/shop/articles/Zeb-Max-Chroma.jpg?v=1673860111&width=1500", description: "Tactile switches with RGB." },
    { id: 105, name: "Ultra-Wide Monitor", price: 450, category: "electronics", image: "https://www.mobilepixels.us/cdn/shop/articles/samsung-odyssey-1.webp?v=1684225254&width=2048", description: "34-inch curved display." },
    { id: 106, name: "Smart Home Speaker", price: 120, category: "electronics", image: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2025/10/google-home-speaker.png?q=49&fit=crop&w=825&dpr=2", description: "Voice activated assistant." },
    { id: 107, name: "Wireless Earbuds", price: 159, category: "electronics", image: "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-1661183784.jpg?crop=1xw:1xh;center,top&resize=1200:*", description: "True wireless freedom." },
    { id: 108, name: "Gaming Mouse", price: 80, category: "electronics", image: "https://www.intex.in/cdn/shop/files/Nova.png?v=1720503757", description: "High precision sensor." },
    { id: 109, name: "Smart Phone", price: 250, category: "electronics", image: "https://hips.hearstapps.com/hmg-prod/images/google-pixel-9-samsung-s24-ultra-iphone-15-pro-max-66d71870c8add.jpg?crop=0.676xw:0.904xh;0.167xw,0.0741xh&resize=640:*", description: "Classic vinyl player." },
    { id: 110, name: "VR Headset", price: 399, category: "electronics", image: "https://m.media-amazon.com/images/I/71nK+JjLzzL._AC_UF894,1000_QL80_.jpg", description: "Immersive reality." },
    { id: 111, name: "Action Camera", price: 299, category: "electronics", image: "https://i.ibb.co/dwMRywBb/action-camera.png", description: "Waterproof 4K video." },
    { id: 112, name: "Laptop", price: 220, category: "electronics", image: "https://www.apple.com/v/macbook-pro/av/images/meta/macbook-pro__bmu4mp5lxjiq_og.png?202602111922", description: "Productivity in your work." },

    // --- 2. FASHION (12 Items) ---
    { id: 201, name: "Cashmere Sweater", price: 150, category: "fashion", image: "https://cdn-images.farfetch-contents.com/25/41/24/49/25412449_55692969_600.jpg", description: "100% organic cashmere." },
    { id: 202, name: "Italian Leather Jacket", price: 350, category: "fashion", image: "https://www.designscene.net/wp-content/uploads/2024/10/Leather-Jacket-001.jpg", description: "Handmade in Florence." },
    { id: 203, name: "Slim Fit Linen Shirt", price: 85, category: "fashion", image: "https://vellure.in/cdn/shop/files/111Untitled-1.jpg?v=1745577051&width=2048", description: "Breathable summer wear." },
    { id: 204, name: "Designer Silk Tie", price: 65, category: "fashion", image: "https://northwestcoastgifts.com/cdn/shop/products/NWCG_AJosephSalmonSilkTie-web3.jpg?v=1616431970&width=1946", description: "Modern pattern." },
    { id: 205, name: "Denim Trucker Jacket", price: 110, category: "fashion", image: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/V19294s.jpg?im=Resize,width=750", description: "Vintage wash." },
    { id: 206, name: "Wool Overcoat", price: 280, category: "fashion", image: "https://image.hm.com/assets/hm/d6/5a/d65a7d362719be4a0608b0dba11c6f26ecf1ec9a.jpg?imwidth=2160", description: "Classic camel color." },
    { id: 207, name: "Pleated Midi Skirt", price: 95, category: "fashion", image: "https://www.vettedmag.com/wp-content/uploads/2025/05/claire-rose-in-a-midi-pleated-skirt.jpg.webp", description: "Elegant silhouette." },
    { id: 208, name: "Graphic Tee", price: 45, category: "fashion", image: "https://bollywoo.ooo/cdn/shop/files/studio-mockup-of-a-crewneck-t-shirt-on-a-hanger-1983-el1_f5c05d1d-45c6-4088-bc96-4ae413199a31.png?v=1682756251&width=900", description: "Limited edition print." },
    { id: 209, name: "Chino Pants", price: 70, category: "fashion", image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/files/301052052STONE_1_800x.jpg?v=1771314437", description: "Versatile styling." },
    { id: 210, name: "Summer Dress", price: 120, category: "fashion", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80", description: "Floral pattern." },
    { id: 211, name: "Bomber Jacket", price: 160, category: "fashion", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80", description: "Streetwear essential." },
    { id: 212, name: "Cable Knit Cardigan", price: 90, category: "fashion", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80", description: "Cozy warmth." },

    // --- 3. HOME (12 Items) ---
    { id: 301, name: "Ceramic Pour-Over", price: 45, category: "home", image: "https://www.hario-usa.com/cdn/shop/files/IMG_6520.jpg?v=1730397441&width=1946", description: "Artisan coffee maker." },
    { id: 302, name: "Linen Bedding Set", price: 220, category: "home", image: "https://venettodesign.com/cdn/shop/files/0G8A1238.jpg?v=1732196726&width=3840", description: "French flax linen." },
    { id: 303, name: "Modern Table Lamp", price: 89, category: "home", image: "https://n-lighten.in/wp-content/uploads/O1CN01XLa3DQ2DbDcj5r0oR_21212210741778627-0-cib-5.jpg", description: "Brass finish." },
    { id: 304, name: "Abstract Wall Art", price: 150, category: "home", image: "https://thecastledecor.in/cdn/shop/files/3_6cef34b1-29c2-4999-9b5e-3bc789f63446.jpg?v=1729625656", description: "Canvas print." },
    { id: 305, name: "Succulent Terrarium", price: 35, category: "home", image: "https://www.jacksonandperkins.com/images/xxl/v2563_1.jpg", description: "Low maintenance." },
    { id: 306, name: "Scented Soy Candle", price: 28, category: "home", image: "https://thescentedmarket.ca/cdn/shop/articles/blog_image_88.png?v=1726767852&width=1100", description: "Sandalwood & Amber." },
    { id: 307, name: "Velvet Cushion", price: 40, category: "home", image: "https://www.lamuse.in/cdn/shop/files/RN1592722.jpg?v=1732539880&width=1946", description: "Plush comfort." },
    { id: 308, name: "Wooden Serving Board", price: 55, category: "home", image: "https://cb.scene7.com/is/image/Crate/CB_H25_GG_20_205_VER_001_PDP?$web_pdp_main_carousel_med$", description: "Acacia wood." },
    { id: 309, name: "Glass Vase", price: 30, category: "home", image: "https://decure.in/cdn/shop/files/A_RV6368_A.jpg?v=1717595615&width=1445", description: "Minimalist design." },
    { id: 310, name: "Area Rug", price: 180, category: "home", image: "https://i.etsystatic.com/26689537/r/il/63fe4f/3270734832/il_570xN.3270734832_jbp8.jpg", description: "Handwoven wool." },
    { id: 311, name: "Smart Thermostat", price: 199, category: "home", image: "https://www.tanotis.com/cdn/shop/files/1711990043_IMG_2223014_1024x.jpg?v=1737806350", description: "WiFi controlled." },
    { id: 312, name: "Indoor Plant Pot", price: 25, category: "home", image: "https://images.indianexpress.com/2021/04/indoor-flower-pots_1200.jpg", description: "Ceramic glaze." },

    // --- 4. BEAUTY (12 Items) ---
    { id: 401, name: "Luxury Facial Serum", price: 85, category: "beauty", image: "https://ecdn6.globalso.com/upload/p/2216/image_product/2024-07/66a21e2714ba831492.png", description: "Vitamin C infused." },
    { id: 402, name: "Beard Grooming Oil", price: 35, category: "beauty", image: "https://m.media-amazon.com/images/I/6177mTEs9YL.jpg", description: "Cedarwood scent." },
    { id: 403, name: "Organic Clay Mask", price: 40, category: "beauty", image: "https://www.biovenebarcelona.com/cdn/shop/products/MAIN_tube_ingr._No4_FACEMASK_3D_2021_full.jpg?v=1631620974&width=1500", description: "Deep cleansing." },
    { id: 404, name: "Eau de Parfum", price: 120, category: "beauty", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&q=80", description: "Signature fragrance." },
    { id: 405, name: "Matte Lipstick", price: 28, category: "beauty", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80", description: "Long lasting wear." },
    { id: 406, name: "Hair Styling Clay", price: 22, category: "beauty", image: "https://images-cdn.ubuy.com.sa/66cc7ffb0c39827d361678c9-alex-costa-hair-clay-for-men-by-forte.jpg", description: "Strong hold." },
    { id: 407, name: "Jade Roller", price: 18, category: "beauty", image: "https://media.glamour.com/photos/5f1e11cad9e2c0c1ee51d802/master/w_2560%2Cc_limit/GettyImages-1253197555.jpg", description: "Facial massage." },
    { id: 408, name: "Body Scrub", price: 30, category: "beauty", image: "https://www.byrdie.com/thmb/ciKrhZD1b-EGPlEtkavFOXSYLCE=/fit-in/1500x2667/filters:no_upscale():max_bytes(150000):strip_icc()/byr-tier-3-osea-salts-earth-body-scrub-ahuang-031-07f41ed2ddac45059fa9bfaa67d99569.jpeg", description: "Coffee exfoliant." },
    { id: 409, name: "Safety Razor Kit", price: 55, category: "beauty", image: "https://m.media-amazon.com/images/I/71x8qm-l2zL._AC_UF1000,1000_QL80_.jpg", description: "Zero waste shave." },
    { id: 410, name: "Hand Cream", price: 15, category: "beauty", image: "https://images-static.nykaa.com/media/catalog/product/7/6/764743cKIMIR00000121_5.jpg?tr=w-500", description: "Shea butter." },
    { id: 411, name: "Bath Bombs", price: 20, category: "beauty", image: "https://images-cdn.ubuy.co.in/693c597300da11fb6400b440-bath-bombs-for-women-gift-set-12-pcs.jpg", description: "Relaxing lavender." },
    { id: 412, name: "Makeup Brush Set", price: 45, category: "beauty", image: "https://images-static.nykaa.com/media/catalog/product/a/8/a80d1997449348359303_2a.jpg?tr=w-500", description: "Synthetic bristles." },

    // --- 5. WATCHES (10 Items) ---
    { id: 501, name: "Minimalist Gold Watch", price: 250, category: "watches", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/watch/r/s/h/1-msg2727-rs-trader-co-men-original-imahgpykbssw9vme.jpeg?q=90", description: "Sapphire glass." },
    { id: 502, name: "Diver Chronograph", price: 450, category: "watches", image: "https://m.media-amazon.com/images/I/61YByqoTj4L._AC_UY1000_.jpg", description: "200m water resistance." },
    { id: 503, name: "Smart Fitness Watch", price: 199, category: "watches", image: "https://cdn.mos.cms.futurecdn.net/Pk5ydxYo6ty2Q4SX9vznP6-1200-80.jpg", description: "Heart rate monitor." },
    { id: 504, name: "Vintage Leather Watch", price: 180, category: "watches", image: "https://i.etsystatic.com/26543138/r/il/b0f72e/5473216386/il_fullxfull.5473216386_lbpu.jpg", description: "Distressed strap." },
    { id: 505, name: "Automatic Skeleton", price: 550, category: "watches", image: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2021/06/Raymond-Weil-Freelancer-Calibre-RW1212-Skeleton-watch-Automatic-Bronze-bezel-42mm-2.jpg?tr=q-70", description: "Exposed movement." },
    { id: 506, name: "Rose Gold Mesh", price: 130, category: "watches", image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw48068f15/images/Titan/Catalog/90159WM01_1.jpg?sw=600&sh=600", description: "Elegant daily wear." },
    { id: 507, name: "Field Watch", price: 110, category: "watches", image: "https://www.sekvens.com/wp-content/uploads/2023/06/bertucci-field-watch-a-2t-sekvens-com-comp.jpg", description: "Rugged durability." },
    { id: 508, name: "Luxury Steel Watch", price: 800, category: "watches", image: "https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2020/02/CAM-1035-Luxus-Sportuhren-2-1.jpg", description: "Swiss movement." },
    { id: 509, name: "Digital Retro", price: 60, category: "watches", image: "https://benlydesignwatch.com/cdn/shop/files/002.png?v=1741166411&width=2400", description: "80s inspired." },
    { id: 510, name: "Pocket Watch", price: 150, category: "watches", image: "https://jackmasonbrand.com/cdn/shop/articles/pexels-david-bartus-295884_3024x2189.jpg?v=1628059300", description: "Heirloom quality." },

    // --- 6. FOOTWEAR (12 Items) ---
    { id: 601, name: "Classic White Sneakers", price: 120, category: "footwear", image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018869727_437Wx649H_202405170753331.jpeg", description: "Full grain leather." },
    { id: 602, name: "Leather Chelsea Boots", price: 210, category: "footwear", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=400&q=80", description: "Hand stitched." },
    { id: 603, name: "Running Trainers", price: 140, category: "footwear", image: "https://trenz.co.in/cdn/shop/products/trainers-193372.jpg?v=1707338765", description: "High performance." },
    { id: 604, name: "Suede Loafers", price: 160, category: "footwear", image: "https://i.etsystatic.com/35153794/r/il/32b670/5539785256/il_fullxfull.5539785256_q1l3.jpg", description: "Casual elegance." },
    { id: 605, name: "Hiking Boots", price: 180, category: "footwear", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", description: "Waterproof." },
    { id: 606, name: "High Top Canvas", price: 65, category: "footwear", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", description: "Street style." },
    { id: 607, name: "Formal Oxfords", price: 195, category: "footwear", image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/22204562/2024/2/21/7938b119-8a50-4bdc-ae67-7ed5b6f2f9161708511691212LibertyMenTexturedLeatherFormalBrogues1.jpg", description: "Polished black." },
    { id: 608, name: "Summer Sandals", price: 50, category: "footwear", image: "https://robbreport.com/wp-content/uploads/2023/04/RR_Summer_Sandals_lead.jpg?w=1000", description: "Comfort sole." },
    { id: 609, name: "Ankle Booties", price: 130, category: "footwear", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/APRIL/7/GZFHMsNp_68d43638f5234003aff86a25ac43acb2.jpg", description: "Block heel." },
    { id: 610, name: "Slip-on Vans", price: 60, category: "footwear", image: "https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_550,e_unsharp_mask:100,w_440/dpr_2.0/v1748031883/VN000EYEBWW-ALT1/Classic-SlipOn-Checkerboard-Shoe-VANS-BlackOff-White-ALT1.png", description: "Checkerboard." },
    { id: 611, name: "Winter Snow Boots", price: 150, category: "footwear", image: "https://www.missmosa.in/cdn/shop/files/3821DF2A-0EE3-4101-BAC2-A4128E55F631.jpg?v=1749207546&width=450", description: "Faux fur lined." },
    { id: 612, name: "Athletic Slides", price: 30, category: "footwear", image: "https://imagescdn.reebok.in/img/app/product/3/39935626-18986080.jpg?auto=format&w=390", description: "Post-workout." },

    // --- 7. SPORTS (12 Items) ---
    { id: 701, name: "Premium Yoga Mat", price: 65, category: "sports", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=400&q=80", description: "Non-slip grip." },
    { id: 702, name: "Adjustable Dumbbells", price: 150, category: "sports", image: "https://repfitness.com/cdn/shop/files/AdjustableDumbbells-DetailShots-60-Edit.jpg?v=1699542484&width=1000", description: "Compact design." },
    { id: 703, name: "Thermal Water Bottle", price: 35, category: "sports", image: "https://media.e-valy.com/cms/products/images/572a5228-5585-4e06-8da0-14f1d942e64c", description: "Keeps cold 24h." },
    { id: 704, name: "Tennis Racket", price: 120, category: "sports", image: "https://www.shopdoubletake.com/cdn/shop/articles/racquet_and_ball.jpg?v=1716259246", description: "Carbon fiber." },
    { id: 705, name: "Basketball", price: 40, category: "sports", image: "https://en.reformsports.com/oxegrebi/2025/10/basketbol-potadan-gecen-top.webp", description: "Indoor/Outdoor." },
    { id: 706, name: "Running Armband", price: 20, category: "sports", image: "https://static.independent.co.uk/2021/05/13/10/running%20armbands%20indybest.jpg", description: "Phone holder." },
    { id: 707, name: "Resistance Bands", price: 25, category: "sports", image: "https://cdn.thewirecutter.com/wp-content/media/2025/01/resistancebands-2048px-00137.jpg?auto=webp&quality=75&width=1024", description: "Set of 5." },
    { id: 708, name: "Boxing Gloves", price: 60, category: "sports", image: "https://absolutemma.com/wp-content/uploads/2023/04/AdobeStock_80211655_40-770x499.jpeg", description: "Leather impact." },
    { id: 709, name: "Surfboard", price: 450, category: "sports", image: "https://sportsmatik.com/uploads/matik-sports-corner/equipage/surfboards_1601381301.jpg", description: "6ft foam top." },
    { id: 710, name: "Camping Tent", price: 200, category: "sports", image: "https://m.media-amazon.com/images/I/81pSTzxLxlL._AC_UF894,1000_QL80_.jpg", description: "2-person lightweight." },
    { id: 711, name: "Cycling Helmet", price: 80, category: "sports", image: "https://cassiopeia.cc/cdn/shop/articles/Types_of_cycling_helmets.png?v=1760627418&width=1100", description: "Aero design." },
    { id: 712, name: "Foam Roller", price: 30, category: "sports", image: "https://www.rei.com/dam/van_dragt_122916_0282_foam_roller_textures_diameters.jpg", description: "Muscle recovery." },

    // --- 8. TRAVEL (12 Items) ---
    { id: 801, name: "Aluminum Carry-On", price: 320, category: "travel", image: "https://verage.in/cdn/shop/files/Guardian.jpg?v=1737965281&width=2048", description: "Indestructible shell." },
    { id: 802, name: "Leather Passport Holder", price: 45, category: "travel", image: "https://www.brandless.co.in/cdn/shop/products/26047241_2036721969906380_4235876975351548519_n.jpg?v=1600962943&width=1445", description: "RFID protection." },
    { id: 803, name: "Travel Neck Pillow", price: 30, category: "travel", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/OCTOBER/22/I4RaOW2T_e28e7571796c4b3fa993bb7155140259.jpg", description: "Memory foam." },
    { id: 804, name: "Weekender Duffel", price: 165, category: "travel", image: "https://i.etsystatic.com/11118406/r/il/b5a8f7/1326893374/il_570xN.1326893374_4kmh.jpg", description: "Canvas & Leather." },
    { id: 805, name: "Tech Organizer Pouch", price: 35, category: "travel", image: "https://i.etsystatic.com/11118406/r/il/d5cd17/1563156242/il_fullxfull.1563156242_hzo3.jpg", description: "Cable management." }, // Reused image placeholder
    { id: 806, name: "Compact Umbrella", price: 25, category: "travel", image: "https://www.umbrellasdirect.com.au/cdn/shop/products/SWISS_PEAK_-traveller-compact-umbrella-wind-proof-fibreglass-frame-smart-automatic-open-and-close-black-1.jpg?v=1632849021", description: "Windproof." },
    { id: 807, name: "Luggage Tag Set", price: 20, category: "travel", image: "https://theartbar.in/cdn/shop/files/tag.jpg?v=1744094663", description: "Premium leather." },
    { id: 808, name: "Travel Adaptor", price: 30, category: "travel", image: "https://www.jiomart.com/images/product/original/rvkjlvu96f/shivsoft-international-travel-plug-adapter-set-multi-socket-outlet-travel-adapter-plug-charger-white-product-images-orvkjlvu96f-p609031328-5-202405201656.jpg?im=Resize=(420,420)", description: "Universal plug." },
    { id: 809, name: "Toiletry Bag", price: 50, category: "travel", image: "https://www.cockatooindia.com/cdn/shop/files/61bla6SxmOL._SL1200.jpg?v=1737374242", description: "Water resistant." },
    { id: 810, name: "Sleeping Mask", price: 15, category: "travel", image: "https://antling.in/cdn/shop/files/bth_eye_mask_pink_4.png?v=1743592203&width=1214", description: "Silk blackout." },
    { id: 811, name: "Travel Camera Bag", price: 110, category: "travel", image: "https://www.travelandleisure.com/thmb/73QtZ6QwhNbC64gTTyihRFMrbrs=/fit-in/1500x2653/filters:no_upscale():max_bytes(150000):strip_icc()/tal-camera-cases-travel-test-boundary-prima-system-jason-donnelly-01-109553d9b18e4e25a9156b7bac9d4ae5.jpg", description: "Padded inserts." },
    { id: 812, name: "Portable Espresso", price: 80, category: "travel", image: "https://m.media-amazon.com/images/I/61nXH3AA8HL.jpg", description: "Hand pump." },

    // --- 9. ACCESSORIES (12 Items) ---
    { id: 901, name: "Wayfarer Sunglasses", price: 150, category: "accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80", description: "Polarized lenses." },
    { id: 902, name: "Minimalist Wallet", price: 75, category: "accessories", image: "https://bullsheathleather.com/cdn/shop/files/2.SquareGeorgetownChestnut_91ea9d18-66df-4339-8772-243ba2a13e4f.webp?v=1763492103", description: "Slim leather." },
    { id: 903, name: "Wool Fedora Hat", price: 85, category: "accessories", image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=400&q=80", description: "Wide brim." },
    { id: 904, name: "Leather Belt", price: 55, category: "accessories", image: "https://www.popovleather.com/cdn/shop/articles/popovleather-parts-leather-belt-featured-image-1681842320848_4932f685-0fc7-4046-84ff-ad8cfd9ea883.jpg?v=1745359237", description: "Brass buckle." },
    { id: 905, name: "Key Organizer", price: 30, category: "accessories", image: "https://5.imimg.com/data5/SELLER/Default/2023/8/333360968/YN/ZY/BL/123607474/rs-interational-leather-key-organizer-with-24-hooks-12a-1.jpg", description: "Silent carry." },
    { id: 906, name: "Silk Scarf", price: 60, category: "accessories", image: "https://brownliving.in/cdn/shop/files/pure-silk-scarf-handcrafted-eco-dyed-with-sappanwood-madder-cr-scarf-001-kokikar-1208511.webp?v=1760556667", description: "Printed motif." },
    { id: 907, name: "Cufflinks", price: 45, category: "accessories", image: "https://www.gregoryjewellers.com.au/wp-content/uploads/2024/03/MRG-CL15_Sterling-Silver-Signature-Cufflinks-3.jpg", description: "Silver plated." },
    { id: 908, name: "Tote Bag", price: 110, category: "accessories", image: "https://i.etsystatic.com/20985777/r/il/6a70f3/3583829415/il_570xN.3583829415_c9qj.jpg", description: "Everyday carry." },
    { id: 909, name: "Beanie", price: 35, category: "accessories", image: "https://ik.imagekit.io/vyka3olhl/uk/product-227/Green1/SHREY_POM_POM_BEANIE_3212_GREEN_2_HD_BkogKVx1F.webp?tr=w-700,h-933?tr=w-700,h-933", description: "Merino wool." },
    { id: 910, name: "Phone Case", price: 40, category: "accessories", image: "https://i.etsystatic.com/23980716/r/il/2a0f2a/4432886386/il_fullxfull.4432886386_nsuh.jpg", description: "Leather back." },
    { id: 911, name: "Card Holder", price: 50, category: "accessories", image: "https://www.thewalletstore.in/cdn/shop/files/black-001.jpg?v=1771063002&width=2500", description: "Metal clip." },
    { id: 912, name: "Bracelet", price: 25, category: "accessories", image: "https://www.fashioncrab.com/wp-content/uploads/2023/10/White-Heart-Anti-Tarnish-Bracelet-Rose-Gold-01.jpg", description: "Beaded stone." },

    // --- 10. LIFESTYLE (10 Items) ---
    { id: 1001, name: "Electric Kettle", price: 60, category: "lifestyle", image: "https://www.vidiem.in/uploads/images/Kettle_Chrome_r1.png", description: "Gooseneck spout." },
    { id: 1002, name: "Chef's Knife", price: 115, category: "lifestyle", image: "https://www.allrecipes.com/thmb/uvwak8VhdQkOcjFf7MFS7PheHbw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_1500-AllRecipes_Overall-5-d3eed167ec704322b000b9f4de39f370.jpg", description: "Japanese steel." },
    { id: 1003, name: "Moleskine Notebook", price: 22, category: "lifestyle", image: "https://www.jbcustomjournals.com/cdn/shop/articles/Blog_welappointed_2048x.jpg?v=1497283032", description: "Hardcover dot grid." },
    { id: 1004, name: "Fountain Pen", price: 80, category: "lifestyle", image: "https://blesket.com/cdn/shop/files/FABER_CASTELL_FOUNTAIN_PEN_-_BLESKET_CANADA_7306fd51-cc6a-41f0-ad1d-4f2c21191ceb.jpg?v=1762838016&width=2224", description: "Gold nib." },
    { id: 1005, name: "Desk Organizer", price: 35, category: "lifestyle", image: "https://www.uglyducklinghouse.com/wp-content/uploads/2021/01/DIY-desk-organizer-Ugly-Duckling-House-2.jpg", description: "Walnut wood." },
    { id: 1006, name: "Laptop Stand", price: 45, category: "lifestyle", image: "https://images-cdn.ubuy.co.in/633a9ddc748c04532808ff67-ergonomic-laptop-stand-for-desk.jpg", description: "Aluminum riser." }, // Reused image
    { id: 1007, name: "Desk Plant", price: 20, category: "lifestyle", image: "https://static.vecteezy.com/system/resources/thumbnails/070/634/208/small/plant-in-white-pot-on-wooden-desk-with-computer-mouse-and-keyboard-in-bright-office-photo.jpeg", description: "Air purifier." },
    { id: 1008, name: "Coffee Beans", price: 18, category: "lifestyle", image: "https://images-static.nykaa.com/media/catalog/product/c/8/c8ef3c18906113483261_6.jpg?tr=w-500", description: "Single origin." },
    { id: 1009, name: "Tea Set", price: 55, category: "lifestyle", image: "https://images-cdn.ubuy.co.in/6937d78091ffb3fc4504c814-cwlwgo-7-oz-bone-china-blue-tea-cup-and.jpg", description: "Ceramic pot." },
    { id: 1010, name: "Reading Light", price: 30, category: "lifestyle", image: "https://rukminim2.flixcart.com/image/480/640/xif0q/table-lamp/z/i/0/cob-clip-light-adjustable-book-reading-light-easy-clip-cob-led-original-imafpcxu6mtyghzc.jpeg?q=90", description: "Clip-on LED." }
];

// --- 2. Auth Logic ---
const auth = {
    getUsers: () => JSON.parse(localStorage.getItem('lumos_users')) || [],
    getCurrentUser: () => localStorage.getItem('lumos_current_user'),

    register: (email, password, name) => {
        const users = auth.getUsers();
        if (users.find(u => u.email === email)) return { success: false, message: "User already exists!" };
        users.push({ email, password, name });
        localStorage.setItem('lumos_users', JSON.stringify(users));
        return { success: true };
    },

    login: (email, password) => {
        const users = auth.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('lumos_current_user', email);
            return { success: true };
        }
        return { success: false, message: "Invalid credentials" };
    },

    logout: () => {
        localStorage.removeItem('lumos_current_user');
        window.location.href = 'index.html';
    },

    updateAuthUI: () => {
        const userEmail = auth.getCurrentUser();
        const users = auth.getUsers();
        const userObj = users.find(u => u.email === userEmail);
        
        // 1. Desktop Top Header Target
        const authContainer = document.getElementById('auth-section');
        // 2. Mobile Greeting Target
        const mobileGreeting = document.getElementById('mobile-greeting');
        // 3. Dock Icon Target (New!)
        const dockAccountIcon = document.getElementById('dock-account-icon');
        
        // Handle Top Header
        if (authContainer) {
            if (userObj) {
                authContainer.innerHTML = `
                    <div class="flex items-center gap-4">
                        <div class="hidden md:flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full border border-gray-200 shadow-sm">
                            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span class="text-xs text-gray-500">Hello,</span>
                            <span class="text-sm font-bold text-luxury font-serif tracking-wide">${userObj.name}</span>
                        </div>
                        <button onclick="auth.logout()" class="text-xs font-semibold text-gray-400 hover:text-red-600 transition-colors tracking-widest border-l pl-4 border-gray-200 h-4 flex items-center">LOGOUT</button>
                    </div>`;
            } else {
                authContainer.innerHTML = `
                    <a href="login.html" class="flex items-center gap-2 hover:text-gold transition group">
                        <div class="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition"><i data-lucide="user" class="w-4 h-4"></i></div>
                        <span class="hidden md:inline text-sm font-medium">Login</span>
                    </a>`;
            }
        }

        // Handle Mobile Greeting
        if (mobileGreeting) {
            if (userObj) {
                mobileGreeting.classList.remove('hidden');
                mobileGreeting.innerHTML = `<span class="text-gray-500">Welcome back, </span><span class="font-bold text-luxury font-serif text-sm">${userObj.name}</span>`;
            } else {
                mobileGreeting.classList.add('hidden');
            }
        }

        // Handle Dock Icon (Smart Avatar)
        if (dockAccountIcon) {
            const savedPic = userData.getProfilePic();
            if (userObj && savedPic) {
                // If logged in & has pic, show Image
                dockAccountIcon.innerHTML = `<img src="${savedPic}" class="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover border border-gray-200">`;
                dockAccountIcon.classList.remove('p-1', 'bg-gray-100'); // Remove padding/bg to fit image
            } else {
                // Else show standard User Icon
                dockAccountIcon.innerHTML = `<i data-lucide="user" class="w-5 h-5 md:w-6 md:h-6"></i>`;
                dockAccountIcon.classList.add('p-1');
            }
        }

        if(window.lucide) lucide.createIcons();
    }
};

// --- 3. User Data Logic ---
const userData = {
    getKey: (type) => {
        const user = auth.getCurrentUser();
        return user ? `lumos_${type}_${user}` : null;
    },
    setProfilePic: (base64) => {
        const key = userData.getKey('avatar');
        if (key) {
            localStorage.setItem(key, base64);
            const img = document.getElementById('profile-img-display');
            if(img) img.src = base64;
        }
    },
    getProfilePic: () => {
        const key = userData.getKey('avatar');
        return key ? localStorage.getItem(key) : null;
    },
    toggleWishlist: (productId) => {
        const key = userData.getKey('wishlist');
        if (!key) return alert("Please login to use Wishlist");
        let list = JSON.parse(localStorage.getItem(key)) || [];
        if (list.includes(productId)) list = list.filter(id => id !== productId);
        else list.push(productId);
        localStorage.setItem(key, JSON.stringify(list));
        userData.updateWishlistUI();
    },
    getWishlist: () => {
        const key = userData.getKey('wishlist');
        return key ? JSON.parse(localStorage.getItem(key)) || [] : [];
    },
    updateWishlistUI: () => {
        const list = userData.getWishlist();
        document.querySelectorAll('.heart-icon').forEach(icon => {
            const id = parseInt(icon.dataset.id);
            if (list.includes(id)) icon.classList.add('fill-red-500', 'text-red-500');
            else icon.classList.remove('fill-red-500', 'text-red-500');
        });
    },
    placeOrder: (cartItems, total) => {
        const key = userData.getKey('orders');
        if (!key) return;
        const orders = JSON.parse(localStorage.getItem(key)) || [];
        orders.unshift({ id: 'ORD-' + Date.now().toString().slice(-6), date: new Date().toLocaleDateString(), items: cartItems, total: total, status: 'Processing' });
        localStorage.setItem(key, JSON.stringify(orders));
    },
    getOrders: () => {
        const key = userData.getKey('orders');
        return key ? JSON.parse(localStorage.getItem(key)) || [] : [];
    }
};

// --- 4. Cart Logic ---
const cartLogic = {
    getStorageKey: () => {
        const user = auth.getCurrentUser();
        return user ? `cart_${user}` : 'cart_guest';
    },
    getCart: () => JSON.parse(localStorage.getItem(cartLogic.getStorageKey())) || [],
    saveCart: (cart) => {
        localStorage.setItem(cartLogic.getStorageKey(), JSON.stringify(cart));
        cartLogic.updateUI();
    },
    addItem: (product) => {
        let cart = cartLogic.getCart();
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) existingItem.qty += 1;
        else cart.push({ ...product, qty: 1 });
        cartLogic.saveCart(cart);
        
        // Notify user visually
        const mobileBadge = document.getElementById('cart-badge-mobile-bottom');
        if(mobileBadge) mobileBadge.classList.remove('hidden');
        openCart();
    },
    removeItem: (id) => {
        let cart = cartLogic.getCart();
        cart = cart.filter(item => item.id !== id);
        cartLogic.saveCart(cart);
    },
    updateQty: (id, change) => {
        let cart = cartLogic.getCart();
        const item = cart.find(item => item.id === id);
        if (item) {
            item.qty += change;
            if (item.qty <= 0) { cartLogic.removeItem(id); return; }
        }
        cartLogic.saveCart(cart);
    },
    updateUI: () => {
        const cart = cartLogic.getCart();
        const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
        
        document.querySelectorAll('.cart-badge').forEach(badge => {
            badge.innerText = totalQty;
            badge.classList.toggle('hidden', totalQty === 0);
            badge.classList.toggle('flex', totalQty > 0);
        });

        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalEl = document.getElementById('cart-total');
        
        if (cartItemsContainer && cartTotalEl) {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `<div class="flex flex-col items-center justify-center h-64 text-gray-400"><i data-lucide="shopping-bag" class="w-12 h-12 mb-4 opacity-20"></i><p>Your cart is empty.</p></div>`;
                cartTotalEl.innerText = "$0.00";
            } else {
                cartItemsContainer.innerHTML = cart.map(item => `
                    <div class="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                        <img src="${item.image}" class="w-16 h-16 object-cover rounded-md border border-gray-200">
                        <div class="flex-1 min-w-0">
                            <h4 class="text-sm font-semibold truncate">${item.name}</h4>
                            <p class="text-xs text-gray-500">$${item.price}</p>
                            <div class="flex items-center gap-3 mt-2">
                                <button onclick="cartLogic.updateQty(${item.id}, -1)" class="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded text-xs">-</button>
                                <span class="text-xs font-bold w-4 text-center">${item.qty}</span>
                                <button onclick="cartLogic.updateQty(${item.id}, 1)" class="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded text-xs">+</button>
                            </div>
                        </div>
                        <button onclick="cartLogic.removeItem(${item.id})" class="text-gray-400 hover:text-red-500 p-2"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                    </div>
                `).join('');
                const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
                cartTotalEl.innerText = `$${total.toFixed(2)}`;
            }
            if(window.lucide) lucide.createIcons();
        }
    }
};


// --- Global Loader Logic (Place this at the bottom of app.js) ---
const loaderLogic = {
    show: () => {
        const loader = document.getElementById('global-loader');
        if(loader) {
            loader.classList.remove('hidden');
            loader.style.opacity = '1';
        }
    },
    hide: () => {
        const loader = document.getElementById('global-loader');
        if(loader) {
            loader.style.opacity = '0'; // Trigger CSS fade
            // Wait 300ms for the fade transition to finish before hiding completely
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
        }
    },
    
    // Simulates a loading process (e.g., used in checkout and login)
    simulate: (milliseconds, callback) => {
        loaderLogic.show();
        setTimeout(() => {
            loaderLogic.hide();
            // Wait for fade out to finish before executing the callback redirect
            if(callback) setTimeout(callback, 300); 
        }, milliseconds);
    }
};

// --- 6. UI HELPERS ---
function openCart() { 
    document.getElementById('cart-drawer')?.classList.remove('translate-x-full'); 
    document.getElementById('cart-overlay')?.classList.remove('hidden'); 
}
function closeCart() { 
    document.getElementById('cart-drawer')?.classList.add('translate-x-full'); 
    document.getElementById('cart-overlay')?.classList.add('hidden'); 
}

// --- 7. INITIALIZATION (Runs on every page load) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Init Icons
    if(window.lucide) lucide.createIcons();
    
    // 2. Sync UI states
    auth.updateAuthUI();
    cartLogic.updateUI();
    userData.updateWishlistUI();
    
    // 3. Set Auth Name Display on Account Page Specifically
    const user = auth.getCurrentUser();
    const nameEl = document.getElementById('user-name-display');
    if(nameEl && user) {
        const userObj = auth.getUsers().find(u => u.email === user);
        nameEl.innerText = userObj ? userObj.name : 'Guest User';
    }
    
    // 4. Global Event Listeners for Cart
    document.getElementById('cart-btn')?.addEventListener('click', openCart);
    document.getElementById('close-cart')?.addEventListener('click', closeCart);
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

    // 5. HIDE LOADER ON PAGE LOAD
    // Wait 800 milliseconds to simulate asset loading, then fade out
    setTimeout(() => {
        loaderLogic.hide();
    }, 800);
});