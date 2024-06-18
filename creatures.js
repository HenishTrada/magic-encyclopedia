const creatures = [
    {
        name: "Acromantula",
        description: "A giant spider with a taste for human flesh, known for its intelligence and ability to communicate with others of its kind.",
    },
    {
        name: "Ashwinder",
        description: "A thin, gray serpent that is created from the remains of a magical fire that has burned out. It is known to lay eggs that emit intense heat and can ignite surroundings if left unattended.",
    },
    {
        name: "Augurey",
        description: "A thin and mournful bird native to Britain and Ireland. It is associated with impending rain and is believed to cry when it predicts a downpour.",
    },
    {
        name: "Banshee",
        description: "A female spirit that takes the form of a wailing woman. It is an omen of death and is known for its piercing scream.",
    },
    {
        name: "Basilisk",
        description: "A serpent-like creature that is born from a chicken's egg hatched beneath a toad. Basilisks are deadly, and their gaze can petrify or kill.",
    },
    {
        name: "Bicorn",
        description: "A creature resembling a two-horned, demonic horse. Bicorns are aggressive and often hunted for their horns, which have magical properties.",
    },
    {
        name: "Billywig",
        description: "A small, insect-like creature found in Australia. It has wings that rotate so fast that it appears blurry and can cause levitation and giddiness when stung.",
    },
    {
        name: "Blast-Ended Skrewt",
        description: "A hybrid creature created by Hagrid. It has a scorpion-like tail, a shell, and shoots fire from its rear end. Skrewts are highly aggressive.",
    },
    {
        name: "Bowtruckle",
        description: "A small, twig-like creature that guards wand-wood trees. Bowtruckles are known for their camouflage abilities and are hard to spot in their natural habitat.",
    },
    {
        name: "Bundimun",
        description: "A foul-smelling creature that resembles a greenish fungus. Bundimuns infest dirty and neglected houses, consuming any waste or filth they find.",
    },
    {
        name: "Centaur",
        description: "Beings with the upper body of a human and the lower body of a horse. Centaurs are skilled in divination and are known for their wisdom.",
    },
    {
        name: "Chimaera",
        description: "A creature with the head of a lion, the body of a goat, and the tail of a dragon. Chimaeras are extremely dangerous and possess fire-breathing abilities.",
    },
    {
        name: "Chizpurfle",
        description: "A small crab-like creature that feeds on magic. Chizpurfles are known to infest magical objects and can cause them to malfunction if not removed.",
    },
    {
        name: "Clabbert",
        description: "A tree-dwelling creature with a monkey-like appearance and frog-like hands and feet. Clabberts have the ability to sense danger and alert others with a loud scream.",
    },
    {
        name: "Crup",
        description: "A wizard-bred creature that resembles a Jack Russell Terrier but has a forked tail. Crups are fiercely loyal and can be trained as guards.",
    },
    {
        name: "Demiguise",
        description: "A peaceful creature that resembles an ape with long, silky, silvery hair. Demiguises have the ability to become invisible and are sought after for their hair, which can be spun into Invisibility Cloaks.",
    },
    {
        name: "Dementor",
        description: "Non-beings that feed on human happiness and souls, leaving their victims in a state of despair. Dementors drain all light and happiness from their surroundings.",
    },
    {
        name: "Diricawl",
        description: "A plump, flightless bird also known as the Dodo. The Diricawl has the ability to vanish and reappear elsewhere, allowing it to escape from danger.",
    },
    {
        name: "Doxy",
        description: "A small, fairy-like creature that resembles a miniature human with wings. Doxies are known for their aggressive nature and sharp teeth.",
    },
    {
        name: "Dragon",
        description: "Powerful and fire-breathing creatures with different breeds and sizes. Dragons are highly territorial and have been used in various tasks, such as guarding treasures or participating in the Triwizard Tournament.",
    },
    {
        name: "Dugbog",
        description: "A slimy, green creature that inhabits marshes. Dugbogs emit a toxic substance and are often found in places with dark magical energies.",
    },
    {
        name: "Erkling",
        description: "A creature resembling a gnome or imp, known for its high-pitched voice and talent for mimicry. Erklings lure children away from their homes with their songs.",
    },
    {
        name: "Erumpent",
        description: "A large, rhinoceros-like creature with a horn that contains a powerful explosive fluid. Erumpents are hunted for their horns, which are used in potions and wand cores.",
    
    },
    {
        name: "Flobberworm",
        description: "A thick, slimy worm that moves very little and has no apparent magical properties. Flobberworms are often used as food for other creatures.",
    },
    {
        name: "Fwooper",
        description: "A brightly colored bird native to Africa. The Fwooper's song is so enchanting that it can drive listeners to madness if heard continuously.",
    },
    {
        name: "Ghoul",
        description: "A creature that resembles an ugly, slimy, human-like figure. Ghoul infestations in homes can cause havoc and are often mistaken for ghosts.",
    },
    {
        name: "Giant",
        description: "Enormous humanoid beings known for their immense strength and size. Giants are often associated with dark forces and have been involved in wizarding conflicts.",
    },
    {
        name: "Gnome",
        description: "A small, mischief-prone creature that resembles a miniature human. Gnomes are known for living in gardens and can be disruptive if not removed.",
    },
    {
        name: "Graphorn",
        description: "A large, hump-backed creature native to Europe. Graphorns are known for their tough hides, which are highly valued in potion-making.",
    },
    {
        name: "Grindylow",
        description: "A small, horned water demon that inhabits lakes and underwater areas. Grindylows are aggressive and known to drag people underwater.",
    },
    {
        name: "Hippocampus",
        description: "A creature with the head and forequarters of a horse and the tail of a fish. Hippocampi are often used as underwater mounts by merpeople.",
    },
    {
        name: "Hippogriff",
        description: "A hybrid creature with the front legs, wings, and head of a giant eagle and the body and hind legs of a horse. Hippogriffs are proud creatures that are easily offended but can be fiercely loyal if shown respect.",
    },
    {
        name: "Hodag",
        description: "A creature native to North America resembling a large, horned toad. Hodags are known for their ferocity and are classified as dangerous beasts.",
    },
    {
        name: "Hinkypunk",
        description: "A one-legged creature that resembles a wisp of smoke. Hinkypunks carry lanterns to lure travelers off the path.",
    },
    {
        name: "Hippopotamus",
        description: "A large, semi-aquatic creature. While not inherently magical, the Harry Potter series mentions a charm that can transform a person into a hippopotamus.",
    },
    {
        name: "House-elf",
        description: "Small, humanoid creatures that are enslaved and serve wizarding families. They are known for their loyalty and obedience.",
    },
    {
        name: "Imp",
        description: "A small creature that resembles a devilish sprite. Imps are mischievous and often found causing trouble.",
    },
    {
        name: "Jarvey",
        description: "A large ferret-like creature with a sharp-toothed grin. Jarveys are known for their rude and sarcastic speech.",
    },
    {
        name: "Jobberknoll",
        description: "A small, blue bird known for its ability to fly backward and produce a sound when it dies that reveals all the truth it has ever heard.",
    },
    {
        name: "Kappa",
        description: "A water-dwelling creature from Japan. Kappas are known for their scaly bodies, beaked mouths, and a cavity filled with water on the top of their heads.",
    },
    {
        name: "Kelpie",
        description: "A shape-shifting creature that often takes the form of a horse. Kelpies lure unsuspecting victims into the water to drown them.",
    },
    {
        name: "Knarl",
        description: "A hedgehog-like creature that is easily offended and becomes aggressive if it perceives any attempts to feed or befriend it.",
    },
    {
        name: "Kobold",
        description: "A creature similar to a house-elf but more mischievous and less helpful. Kobolds are known for their love of practical jokes.",
    },
    {
        name: "Kraken",
        description: "A legendary sea monster resembling a giant squid or octopus. Krakens are known for their immense size and strength.",
    },
    {
        name: "Leprechaun",
        description: "A small, mischievous creature from Irish folklore. Leprechauns are associated with hidden pots of gold and are often depicted as shoemakers.",
    },
    {
        name: "Lethifold",
        description: "A rare creature that resembles a dark, rippling cloak. Lethifolds suffocate and consume their sleeping victims.",
    },
    {
        name: "Manticore",
        description: "A creature with the body of a lion, the head of a human, and a tail that ends in a cluster of deadly spikes. Manticores are highly dangerous and known for their fierce nature.",
    },
    {
        name: "Merpeople",
        description: "Beings with the upper body of a human and the tail of a fish. Merpeople live underwater in various locations, such as the Black Lake at Hogwarts. They are skilled in underwater magic and are known for their distinctive singing.",
    },
    {
        name: "Mooncalf",
        description: "A shy, nocturnal creature resembling a cross between a hippopotamus and a deer. Mooncalves dance and frolic under the moonlight.",
    },
    {
        name: "Niffler",
        description: "A small, mole-like creature with a penchant for shiny objects. Nifflers are excellent at finding treasure but can cause chaos when given free rein.",
    },
    {
        name: "Nogtail",
        description: "A small, pig-like creature with long legs. Nogtails are known for their ability to sneak onto farms and cause mischief.",
    },
    {
        name: "Occamy",
        description: "A serpentine creature with a bird-like head and wings. Occamies are known for their ability to grow or shrink to fit available space.",
    },
    {
        name: "Phoenix",
        description: "A magnificent bird that is known for its ability to burst into flames and then be reborn from its ashes. Phoenixes are extremely loyal and possess healing tears.",
    },
    {
        name: "Pixie",
        description: "Small, mischievous creatures with transparent wings. Pixies enjoy causing chaos and are often seen in the grounds of Hogwarts.",
    },
    {
        name: "Plimpy",
        description: "A spherical, water-dwelling creature resembling a cross between a fish and a mollusk. Plimpies are known for their globular bodies and long, rubbery tentacles.",
    },
    {
        name: "Pogrebin",
        description: "A small, parasite-like creature that attaches itself to wizards and witches. Pogrebins drain their host's magical powers.",
    },
    {
        name: "Porlock",
        description: "A horse-like creature with a rough, grayish skin and a single horn on its forehead. Porlocks are known for their strong sense of duty and their role in guarding magical creatures.",
    },
    {
        name: "Puffskein",
        description: "A small, round creature covered in soft, colorful fur. Puffskeins are popular pets and emit a humming sound when they are content.",
    },
    {
        name: "Quintaped",
        description: "A dangerous creature that has five legs ending in sharp claws. Quintapeds are highly aggressive and are rarely encountered.",
    },
    {
        name: "Ramora",
        description: "A silver fish-like creature that lives in tropical waters. Ramoras attach themselves to the hulls of ships and can be used as a protective charm.",
    },
    {
        name: "Red Cap",
        description: "A malevolent creature that inhabits old, abandoned buildings. Red Caps have a propensity for violence and are known for staining their caps with their victims' blood.",
    },
    {
        name: "Re'em",
        description: "A large, ox-like creature that is native to the Far East. Re'ems are known for their strength and their tail hairs, which are highly prized as wand cores.",
    },
    {
        name: "Runespoor",
        description: "A three-headed snake known for its ability to communicate with its heads and for the venom each head produces, each with different effects.",
    },
    {
        name: "Salamander",
        description: "A creature associated with fire that can live in intense heat or even flames. Salamanders are immune to fire and are often used in potions.",
    },
    {
        name: "Sea Serpent",
        description: "A massive, snake-like creature that resides in oceans and lakes. Sea serpents are known for their incredible size and power.",
    },
    {
        name: "Shrake",
        description: "A fish-like creature with spiky protrusions. Shrakes are aggressive and can inflict painful injuries.",
    },
    {
        name: "Snallygaster",
        description: "A creature from North American folklore that resembles a dragon with bat-like wings and tentacles. Snallygasters are known for their terrifying screech.",
    },
    {
        name: "Sphinx",
        description: "A creature with the body of a lion and the head of a human. Sphinxes are known for their riddles and act as guardians of treasures.",
    },
    {
        name: "Streeler",
        description: "A giant snail with a venomous trail that changes color every hour. Streelers are often used in magical jewelery due to their vibrant and valuable slime.",
    },
    {
        name: "Thestral",
        description: "A skeletal, winged creature that can only be seen by those who have witnessed death. Thestrals are used to pull the carriages that transport students from the Hogwarts Express to Hogwarts School of Witchcraft and Wizardry.",
    },
    {
        name: "Thunderbird",
        description: "A large, bird-like creature native to North America. Thunderbirds are known for their ability to create storms as they fly.",
    },
    {
        name: "Troll",
        description: "Large, hulking creatures with low intelligence. Trolls are known for their brute strength and are often associated with mischief and chaos.",
    },
    {
        name: "Unicorn",
        description: "A pure white horse-like creature with a single horn on its forehead. Unicorns are known for their beauty and purity and are highly sought after for their horn's magical properties.",
    },
    {
        name: "Vampire",
        description: "A humanoid creature that feeds on the blood of the living. Vampires possess enhanced strength, speed, and immortality but are vulnerable to sunlight and certain substances.",
    },
    {
        name: "Veela",
        description: "Enchanting, humanoid creatures with an allure that captivates those who see them. Veela are known for their beauty and ability to perform mesmerizing dances.",
    },
    {
        name: "Werewolf",
        description: "A human who transforms into a wolf-like creature during the full moon. While in their werewolf form, they are highly dangerous and uncontrollable.",
    },
    {
        name: "Winged Horse",
        description: "A magical horse with wings that enable it to fly. Winged horses include creatures such as the Thestral and Hippogriff.",
    },
    {
        name: "Yeti",
        description: "A large, ape-like creature that resides in cold mountainous regions. Yetis are known for their strength and elusiveness.",
    },
    {
        name: "Zouwu",
        description: "A gigantic, feline-like creature from China that resembles a monstrous lion. Zouwus have a long, serpentine body and can travel at great speeds.",
    },
]
// module.exports = creatures;

const data = [];
creatures.forEach(item=>{
    data.push(item.name);
});

module.exports = data;