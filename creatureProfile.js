const creatureProfiles = [
    {
        name:"Phoenix",
        details:["A large, red and gold bird with a long tail and a golden beak.","Can burst into flames and be reborn from ashes, has healing tears, can fly and carry heavy loads, can swallow a Killing Curse.","Loyal, brave, noble, intelligent, and faithful to Dumbledore.","Served Dumbledore for 59 years, helped Harry Potter defeat the Basilisk, assisted Dumbledore in fighting Voldemort, left after Dumbledore's death. His tail feathers were the cores of Harry's and Voldemort's wands."]
    },
    {
        name:"Augurey",
        details:["A thin and mournful-looking bird with greenish-black feathers and a sharp beak.","Can fly in heavy rain, can signal the coming of rainfall with its cry, can lay eggs with silver shells.","Shy, elusive, aggressive if provoked, protective of its eggs.","Was once believed to foretell death, but was disproved by Gulliver Pokeby. Its feather repels ink and is useless as a quill. The Quill of Acceptance may come from an Augurey. It is a possible Patronus form."]
    },
    {
        name:"Fwooper",
        details:["A brightly-colored bird that can be orange, pink, lime green, or yellow.","Has a high-pitched song that can drive the listener insane, must be sold with a Silencing Charm on it. Feeds on rats and birds. Lays patterned eggs that are very valuable.","Has a high-pitched song that can drive the listener insane, must be sold with a Silencing Charm on it. Feeds on rats and birds. Lays patterned eggs that are very valuable.","Its symbol represents the number four in the runic alphabet. It is a rare Patronus form."]
    },
    {
        name:"Occamy",
        details:["A winged, serpentine beast with teal feathers, turquoise skin, and purple hair.","Extremely aggressive to anyone who approaches it. Lives off of insects, rats, birds, and monkeys. Lays eggs made of pure silver. Can grow or shrink to fit available space.","Very defensive of its eggs. Can be dangerous if provoked.","A rare Patronus form. Newt Scamander had several Occamies in his suitcase and one of them escaped in New York."]
    },
    {
        name:"Thunderbird",
        details:["A large eagle-like bird with multiple tails and four types of wings: sun, rain, wind, and lightning.","Can create storms as it flies. Can sense danger and warn others. Can be affected by the emotions of those around it."," Powerful, majestic, intelligent, and sentient. Classified as a beast by the American wizarding government, but some consider it to be a being."," A possible Patronus form. Newt Scamander rescued a Thunderbird named Frank from traffickers and released him in Arizona. Frank created a thunderstorm that erased the memories of the No-Majs who witnessed the exposure of the wizarding world."]
    },
    {
        name:"Giant",
        details:["Very large humanoid magical beings which could potentially grow to approximately twenty-five feet tall. They were often violent and bloodthirsty.","Not much is known about their abilities, but they were capable of communication and had their own language.","Often violent and bloodthirsty.","Not much is known about their history, but they were known to be a dangerous species."]
    },
    {
        name:"Bowtruckle",
        details:["A small magical insect-eating creature that resembles a plant and resides amidst trees and other greenery. Hand-sized and green, it is usually seen on trees and has an appearance of a stick figure with green leaf-like structures that make it easy to camouflage itself.","Not much is known about its abilities, but it is very good at camouflaging itself.","Not much is known about its personality, but it is generally peaceful and shy.","Not much is known about its history, but they are often kept as pets by wizards."]
    },
    {
        name:"Niffler",
        details:["A magical beast with a long snout and a coat of black, fluffy fur.","Attracted to shiny things, which makes them wonderful for locating treasure. Can wreak havoc if kept (or let loose) indoors.","Usually harmless, but can be mischievous if not trained properly.","Not much is known about its history, but they are often kept as pets by wizards."]
    },
    {
        name:"Troll",
        details:["The largest breed of trolls, weighing over a tonne, and also the most vicious. Often bald beasts with thick, dark grey skin. Sometimes used Graphorns as mounts.","Not much is known about their abilities, but they were very strong and could wield large clubs as weapons.","Often violent and aggressive towards humans.","Not much is known about their history, but they were known to be a dangerous species."]
    },
    {
        name:"Blast Ended skrewt",
        details:["A magical hybrid beast bred by Rubeus Hagrid in the autumn of 1994, by cross-breeding Manticores and Fire Crabs. These giant spiders had a taste for human flesh.","Not much is known about their abilities, but they were very dangerous and could shoot fire from their rear ends.","Not much is known about their personality, but they were very aggressive towards humans.","First spotted in 1794."]
    },
    {
        name:"Acromantula",
        details:["A giant magical species of spider native to the rainforests of Southeast Asia. These majestic equines possessed potent magical properties, with their tail hairs being used as the core of a wand.","Very fast and strong. Can spin webs that are very strong and sticky. Can communicate with other spiders telepathically. Can also paralyze humans with their venomous bite.","Very aggressive towards humans. Lived in colonies led by a queen spider.","First discovered by Hagrid in the Forbidden Forest."]
    },
    {
        name:"Centaur",
        details:["A magical creature whose head, torso, and arms appeared to be human and were joined to a horse’s lower body.","Naturally talented in archery, healing magic, divination and astronomy. Very fast runners.","Proud and independent. Respected nature and the stars. Often hostile towards humans who trespassed in their territory.","Known for being part of the Battle of Hogwarts."]
    },
    {
        name:"Buckbeak",
        details:["A male hippogriff who lived with Rubeus Hagrid during Harry Potter’s third year at Hogwarts.","Can fly very fast. Has sharp talons that can be used as weapons. Can also be trained to carry riders on its back.","Proud and independent. Respected those who showed him respect. Could be aggressive if provoked or insulted.","Unfairly sentenced to death when he attacked Draco Malfoy after being taunted and provoked."]
    },
    {
        name:"Fluffy",
        details:["A giant three-headed dog with shaggy black fur and sharp teeth.","Has a very strong sense of smell and can track scents over long distances. Can also play music to put people to sleep.","Loyal to its owner, but very dangerous if not properly trained.","Was owned by Hagrid and used to guard the Philosopher’s Stone."]
    },
    {
        name:"Unicorn",
        details:["White horses with a horn sticking out of their heads. These majestic equines possessed potent magical properties, with their tail hairs being used as the core of a wand.","Can heal wounds with its horn. Can also purify water and cure poisons.","Very shy and elusive. Only approachable by virgins. Respected by many magical creatures.","Not much is known about their history, but they were often hunted by Voldemort’s followers for their horns."]
    },
    {
        name:"Grindylow",
        details:["A small, horned, pale-green skinned water demon with green teeth and long, spindly fingers.","Can strangle its prey with its fingers, can swim fast, can live in stagnant water.","Aggressive towards witches, wizards and muggles alike, only tamed by merpeople who sometimes keep them as pets.","First described by the Venetian anatomist Julius Caesar Aranzi in 1587, who likened it to a seahorse. The name comes from the Latin remora, meaning 'delay', because of its ability to anchor ships in place. A real fish family, Echeneidae, contains several species collectively known as remoras, which have a suction disc on their head that allows them to attach to larger aquatic animals or vessels."]
    },
    {
        name:"Hippocampus",
        details:["A large aquatic beast that resembles a horse with a fish tail and scales. It has four types of wings that correspond to different aspects of the weather: sun, rain, wind, and lightning.","Can create storms as it flies, can sense danger and warn others, can be affected by the emotions of those around it.","Powerful, majestic, intelligent, and sentient. Classified as a beast by the American wizarding government, but some consider it to be a being.","The name comes from the Greek hippokampos, meaning 'horse sea monster'. In Greek mythology, the hippocampus was a creature that pulled Poseidon's chariot. The hippocampus is also a major component of the brain of humans and other vertebrates, which plays important roles in memory and navigation. The shape of the hippocampus resembles that of a seahorse. "]
    },
    {
        name:"Ramora",
        details:["A silver fish native to the Indian Ocean that has strong magical power to anchor ships in place. It is longer than ships and has a guardian role for seafarers.","Can anchor ships in place with its magic, can communicate with other fish telepathically, can also purify water and cure poisons.","Peaceful and benevolent towards humans who respect its territory. Respected by many magical creatures","The name comes from the Latin remora, meaning 'delay', hence its ability to anchor ships in place. A real fish family, Echeneidae, contains several species collectively known as remoras, which have a suction disc on their head that allows them to attach to larger aquatic animals or vessels. The ramora is protected from poaching by international wizarding law."]
    },
    {
        name:"Merpeople",
        details:["Human-like beings that live underwater. They have fish tails instead of legs and gills instead of lungs. They vary in appearance depending on their habitat: the ones in warmer waters look more beautiful and human-like, while the ones in colder waters look more fish-like and ugly.","Can breathe underwater, can swim very fast, can communicate with other aquatic creatures, can use some forms of magic such as charms and curses.","Proud and independent. Have their own culture and society. Often hostile towards humans who trespass in their territory or harm their environment.","The name comes from the Old English mere , meaning 'sea', and folk , meaning 'people'. Merpeople are attested in folklore and mythology throughout the ages in various parts of the world. They are sometimes associated with sirens , who were said to lure sailors to their doom with their enchanting voices. Merpeople were offered the being status by the Ministry of Magic , but refused in favour of beast , as they did not want to be placed in a status with hags and vampires."]
    }
]

module.exports = creatureProfiles;