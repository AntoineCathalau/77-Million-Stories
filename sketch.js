
 //Loading Data from The Andromeda Archive
const psyLinks = { title: "[psyLink]",
                 data: ["Secret Power", "Telepathy","Imagination","Psychokinesis","Omniscience","Mind Reading","Prescience","Empathy", "Clairvoyance","Clairaudience","Astral Travel", "Intuition", "Mindfulness", "Compassion", "Sapience", "Synesthesia", "Space Time Folding", "Loving Kindness", "Intention Projection"]};

const creativeLinks = {title:"[creativeLink]",
                       data: ["Secret Gift", "Builder", "Musician", "Healer", "Philosopher", "Mathematician", "Programmer","Architect", "Psychic Architect", "Explorer", "Adventurer", "Searcher","Alchimist", "Magician", "Martial Artist","Pilot","Storyteller", "Scientist", "Shaman", "Oracle", "Engineer","Astronomer","Ambassador","Biologist","Spy Master", "Designer", "Musician", "Cosmic Gardener", "BioCreator", "Peacemaker", "Inventor", "Data Analyst", "Harmony Maker", "Cosmic Sailor", "Lunarpunk", "Solarpunk", "Plurality Guardian", "Links Weaver", "Longevity Master", "Anarchist", "Tree Whisperer", "Dream Architect", "Quantum Artist", "Neural Symphony Composer","Holographic Director", "Memory Sculptor", "Biolight Choreographer", "Digital Reality Weaver", "Gravity Artist", "Ecosystem Designer", "Synthetic Engineer", "Mind-Space Architect", "Emotion AI Trainer",  "Multiverse Designer", "Constellation Mapper", "Algorithm Anthropologist", "Digital Heritage Curator", "Virtual World Ethnographer", "Memory Ecology Consultant",  "Dark Matter Sculptor", "Neural Network Poet"]};


const energyLinks = {title: "[energyLink]", 
                  data: ["Secret Energy","Fighting Spirit","Enlightened", "In Love", "Infinitely Loving", "Awakened", "Supraconscious", "Free", "Deeply Serene", "Meditating", "Transcending Anger", "Funny", "Transforming Anxiety", "Transcending Fear", "Creative",  "Peaceful", "Spacious", "Luminous", "Weightless", "Radiant", "Unified", "Buzzing", "Mellow", "Electric", "Dreamy", "Vibrant", "Gentle", "Wild", "Bittersweet", "Wanderlust", "Melancholic", "Awestruck", "Vulnerable", "Fierce","Tender", "Stormy", "Misty", "Sunny", "Cloudy", "Glowing", "Turbulent", "Serene", "Timeless", "Rushing", "Suspended", "Cyclical", "Eternal", "Excited", "Curious", "Grumpy", "Cozy", "Playful", "Anxious", "Determined", "Silly", "Frustrated","Proud", "Inspired", "Nostalgic","Hopeful", "Protective"]};


const timeLinks = {title: "[timeLink]",
  data: [ {
    title: "Dawn of Civilization",
    period: "10,000 BCE - 3000 BCE",
    dates: ["10000 BCE", "9500 BCE", "9000 BCE", "8500 BCE", "8000 BCE", "7500 BCE", "7000 BCE", "6500 BCE", "6000 BCE", "5500 BCE", "5000 BCE", "4500 BCE", "4000 BCE", "3500 BCE", "3000 BCE"]
  },
  {
    title: "Bronze Age",
    period: "3000 BCE - 1200 BCE",
    dates: ["3000 BCE", "2800 BCE", "2600 BCE", "2400 BCE", "2200 BCE", "2000 BCE", "1800 BCE", "1600 BCE", "1400 BCE", "1200 BCE"]
  },
  {
    title: "Classical Antiquity",
    period: "800 BCE - 500 CE",
    dates: ["800 BCE", "700 BCE", "600 BCE", "500 BCE", "523BCE", "400 BCE", "300 BCE", "200 BCE", "100 BCE", "1 CE", "100 CE", "200 CE", "300 CE", "400 CE", "500 CE"]
  },
  {
    title: "Middle Ages",
    period: "500 - 1500",
    dates: ["500", "523", "600", "700", "800", "900", "1000", "1100", "1200", "1300", "1400", "1500"]
  },
  {
    title: "Renaissance",
    period: "1300 - 1600",
    dates: ["1300",  "1306", "1350", "1400", "1450", "1500", "1550",  "1568", "1600"]
  },
  {
    title: "Age of Revolution",
    period: "1600 - 1850",
    dates: ["1600", "1650", "1700", "1750", "1800", "1850"]
  },
  {
    title: "Modern Era",
    period: "1850 - 2024",
    dates: ["1850", "1875", "1900", "1925", "1950", "1975", "2000", "2024"]
  },
  // Future Eras
  {
    title: "Digital Renaissance",
    period: "2025 - 2075",
    dates: [ "2021","2022","2023","2024","2025", "2028", "2030", "2032", "2035", "2040", "2045", "2050", "2052", "2055", "2060", "2065", "2070", "2075"]
  },
  {
    title: "Quantum Age",
    period: "2075 - 2150",
    dates: ["2075", "2085", "2186", "2095", "2105", "2115", "2125", "2135", "2145", "2150"]
  },
  {
    title: "Solar Expansion",
    period: "2150 - 2300",
    dates: ["2150", "2175", "2200", "2225", "2250", "2275", "2300"]
  },
  {
    title: "Neural Evolution",
    period: "2300 - 2500",
    dates: ["2300", "2350", "2400", "2450", "2500"]
  },
  {
    title: "Cosmic Diaspora",
    period: "2500 - 4000",
    dates: ["2500", "2600", "2700", "2800", "2900", "3000","3522"]
  },
  {
    title: "Multiversal Age",
    period: "4000 - 6000",
    dates: ["4018","5000", "5200", "5400", "5600", "5800", "6000"]
  },
  {
    title: "Dimensional Mastery",
    period: "6000 - 7000",
    dates: ["6000", "6200", "6400", "6600", "6800", "7000"]
  },
  {
    title: "Universal Reconstruction",
    period: "7000 - 8000",
    dates: ["7000", "7200", "7400", "7600", "7800", "8000"]
  },
  {
    title: "Cosmic Architecture",
    period: "8000 - 9000",
    dates: ["8000", "8036", "8200", "8400", "8600", "8800", "9000"]
  },
  {
    title: "Transcendent Evolution",
    period: "9000 - 10000",
    dates: ["9000", "9200", "9400", "9600", "9800", "10000"]
  },
  {
    title: "Universal Singularity",
    period: "10000 - 11000",
    dates: ["10000", "10200", "10400", "10600", "10800", "11000"]
  },
  {
    title: "Omega Phase",
    period: "11000 - 12000",
    dates: ["11000", "11200", "11400", "11600", "11800", "12000"]
  }
        ]
  };


//magicLinks
const magicLinks = {title: "[magicLink]",
                    data: ["Secret Object","Artis Magnae", "Ourobouros", "Excalibur", "Golden Flower",
  // Divination Tools
 "Thoth Tarot", "Crystal Ball of John Dee", "Black Mirror of Nostradamus", "Witch's Scrying Bowl", "Lenormand Cards", "Uppsala Runestones",
 "I-Ching Yarrow Stalks", "Etruscan Gold Book",
// Magical Weapons
 "Wand of Abramelin", "Sword of Paracelsus", "Athame of Gardner", "Staff of Moses", "Clavicle of Solomon", "Dagger of Time", "Cup of Jamshid", "Ring of Gyges",
// Sacred Stones
 "Philosopher's Stone", "Shew Stone", "Stone of Giramphiel", "Cintamani Stone", "Benben Stone",
 "Lia Fáil", "Black Stone of Mecca", "Jade Books of Heaven",
// Ritual Implements
 "Golden Dawn Lamp", "Enochian Tables", "Seal of Saturn", "Orphic Egg", "Mirror of Pythagoras", "Hermetic Caduceus", "Bowl of Hermes", "Rosicrucian Vault Tools",
 // Mystical Texts
 "Picatrix", "Red Dragon Grimoire", "Sworn Book of Honorius", "Long Lost Friend", "Grand Grimoire", "Book of Sacred Magic", "Necronomicon of Dee",
// Alchemical Apparatus
 "Athanor of Flamel", "Emerald Table", "Alchemical Furnace", "Quintessence Vessel", "Hermetic Vase", "Pelican Vessel", "Lion-Green Flask", "Mercury Chamber",
// Power Objects
 "Lamp of Aladdin", "Ring of Solomon", "Tablets of Destiny", "Eye of Horus Amulet", "Seal of Sages", "Crown of Lucifer", "Belt of Thor", "Ankh of Life",
// Dimensional Tools
 "Sirius Star Gate", "Crystal of Atlantis", "Mirrors of Pythagoras", "Tessaract Cube", "Akashic Crystal", "Time-Turner", "Astral Compass","Hermetic Sphere",
// Immortality Artifacts
 "Elixir of Life", "Golden Apples", "Amrita Chalice", "Peaches of Immortality", "Water of Life Flask", "Phoenix Feather","Dragon Pearl", "Soma Vessel",
// Ancient Tech
 "Antikythera", "Baghdad Battery", "Iron Pillar of Delhi", "Greek Fire Formula","Roman Flexible Glass","Zhang Heng Seismograph", "Lost Steam Engine of Hero",
// Manuscripts & Texts
 "Voynich Manuscript", "Copper Scroll", "Key of Solomon", "Book of Thoth", "Codex Gigas", "Rohonc Codex", "Ripley Scroll", "Procopius Secret History","Gospel of Eve", "Book of Soyga",
 // Maps & Directions
 "Piri Reis Map", "Vinland Map", "Copper Scroll Map","Beale Ciphers", "Oak Island Map", "Mazer Map", "La Buse Cryptogram",
 // Artifacts & Relics
 "Stone Spheres of Costa Rica", "Phaistos Disc", "Dropa Stones", "Emerald Tablet", "Nimrud Lens", "Saqqara Bird", "London Hammer", "Coso Artifact", "Nazca Lines Stones", "Mitchell-Hedges Crystal Skull",
// Magical & Occult
 "Marie Laveau Grimoire", "John Dee Obsidian Mirror", "Ring of Solomon", "Count St. Germain Grimoire", "Crowley Lost Manuscripts", "Black Pullet", "Nicholas Flamel Texts", "Sacred Magic of Abramelin",
 // Lost Treasures
 "Oak Island Money Pit", "Lost Library of Ivan", "Blackbeard Log", "Knights Templar Treasures", "Lost City of Paititi", "Missing Kruger Millions", "Lost Crown Jewels of Ireland", "Florentine Diamond",
// Religious & Spiritual
 "Ark of Covenant", "Holy Grail","Spear of Destiny", "Buddha Missing Tooth", "Menorah of Solomon","Sudarium of Oviedo","Stone of Destiny",
 // Devices & Machines
 "Tesla Death Ray Plans", "Chronovisor", "Babbage Analytical Engine", "Havana Device", "Keely Motor","Philosopher Stone Machine"                          
                ]};

//spaceLinkLink
const spaceLinks = {title: "[spaceLink]",
                    data: ["Secret space","Purple Heaven Temple","Great Pyramid of Giza","North Pole","South Pole","Foucault Pendulum","Delphi Temple","Stonehenge","Richat Structure","Chambord Castle","Ancient Agora of Athens ","Yorkshire Druid temple","Kailasa temple","Lake Como","The Pillars of Acre","Black Forest", "Cave of Crystals", "Son Doog", "Metaverse", "Philæ Isis Temple", "Atlantis Island", "Samarkand Observatory", "Sintra Initiation Well", "Rakotzbrücke Bridge", "Kamishikimi Kumanoimasu Shrine", "Medusae Fossae", "Valles Marineris", "Olympus Mons", "Noctis Labyrinthus", "Mare Cognitum","Mare Serenitatis", "Sea of Tranquility", "Sea of Serenity","Copernicus Crater", "Tycho Crater", "Ocean of Storms", "Hadley Rille", "Aristarchus Crater", "Mare Undarum", "Lacus Temporis","Cassini Crater", "Utopia Planitia", "Proxima Centauri b", "Arsia Mons", "Elysium Mons", "Amazonis Planitia", "Candor Chasma", "Hellas Planitia", "Gale Crater", "Elysium Planitia","Jezero Crater", "Eris planet",   "Orion Constellation", "Ursa Major Constellation", "Cassiopeia Constellation", "Scorpius Constellation", "Andromeda Constellation", "Pegasus Constellation", "Europa", "Titan","Ganymede", "Callisto", "Io", "Enceladus", "Phobos"]};

  
let storyFont;

function preload() {
  storyFont = loadFont('assets/Quicksand-Light.ttf');
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
   noLoop();
  
  
}

function draw() {
   clear();
//  frameRate(0.02);

  //colors
  let psyColors = {
      start: color(99, 102, 241),  // indigo
      end: color(244, 114, 182), // pink
  }; 
  
  let creaColors = { 
    start: color(147, 51, 234),  // purple
    end: color(219, 39, 119), //  vivid pink
     };
  let energyColors = {
    start: color(249, 115, 22),  //orange
   // end: color(236, 72, 153),  //pink
    //end: color(147, 51, 234),  // purple
     end: color(219, 39, 119), //  vivid pink
  };
  let timeColors = {
    start: color(14, 165, 233),  // indigo
    end: color(88, 28, 135),    // purple
  };
  let magicColors = {
    start: color(16, 185, 129),  // emerald
    end: color(88, 28, 135),    // purple
  };
  let spaceColors = {
    start: color(167, 139, 250), // violet
    end: color(52, 211, 153), // mint green
  };
  
  let colorMods = [psyColors, creaColors, energyColors, timeColors, magicColors, spaceColors];


  //The Karmic Lottery
  let AndromedaDatas = [psyLinks, creativeLinks, energyLinks, timeLinks , magicLinks, spaceLinks];
 // let AndromedaData = random(AndromedaDatas);
  let AndromedaData = hl.randomElement(AndromedaDatas);
  
  
  var era = "";
  if (AndromedaData.title === "[timeLink]" ){
    var Time = hl.randomElement(AndromedaData.data)
  var AndromedaText = hl.randomElement(Time.dates);
    var AndromedaTitle = AndromedaData.title;
    var era = Time.title;
  } 
  else {
 
  var AndromedaTitle = AndromedaData.title;
  var AndromedaText = hl.randomElement(AndromedaData.data);
  } ;
  
  
  //backgroundColor
  let couleurI = AndromedaDatas.indexOf(AndromedaData);
 // background(colorMod[couleurI]);  
let c77 = colorMods[couleurI]; 
  
// Draw gradient background
 drawGradient(c77.start, c77.end);
 
  //modifier
  var M = "";
  if (AndromedaTitle === "[psyLink]" || AndromedaTitle === "[creativeLink]" || AndromedaTitle === "[energyLink]") {
    let MInt = hl.randomInt(1,10);
    let Mround = Math.round(MInt);
    var M = Mround.toString();
    } 
  else {
   M = "";
  }
  
  // Create an object defining the traits of our token
  let traits = {
    "Story Element": AndromedaText,
    "Type": AndromedaTitle,
    "Modifier": M,
    "Era": era
  };
  // Set these traits so Highlight can read them
  hl.token.setTraits(traits);
  console.log(traits)
  
  
  //storyLinks Text
  textAlign(LEFT);
  textFont(storyFont);
  fill(255);

  //storyLink Type
  textSize(height/12);
  let textHeight = height/4 ;
  text(AndromedaTitle, width/14, textHeight);
  
  //storyLink
  textSize(height/8);
   textHeight = (height/4)+(height/7);
 // When you draw text with 4 numbers you create a box that the text fits in
  // x, y position of box followed by width and height of the box
  text(AndromedaText, width/14, textHeight, width-(width/14) , height-(height/5));
  
 
  // Int modifier
  if (AndromedaTitle === "[psyLink]" || AndromedaTitle === "[creativeLink]" || AndromedaTitle === "[energyLink]") {
    textSize(height/8);
    textAlign(RIGHT);
    text(M, width-(width/10), height-(height/8));
    
  } else if (AndromedaTitle === "[timeLink]" ){
   textSize(height/14);
    textAlign(RIGHT);
    text(era, width-(width/14), height-(height/8));
  } 
  else {
   
  }
  
   // Now that we're done drawing all the rectangles, trigger the preview image
  hl.token.capturePreview();
  
}

function drawGradient(startColor, endColor) {
  // Draw gradient background
  for(let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(startColor, endColor, inter);
    stroke(c);
    line(0, y, width, y);
  }
}