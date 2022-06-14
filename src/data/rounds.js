const EASY = [
  {
    question: "What is the capital city of Germany?",
    answer: "Berlin",
    options: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    points: 10,
  },
  {
    question: "How many continents are there?",
    answer: "7",
    options: ["5", "7", "6", "8"],
    points: 10,
  },
  {
    question: 'Who painted the Mona Lisa?',
    answer: "Leonardo da Vinci",
    options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "SandroBotticelli"],
  }
]
const MEDIUM = [
  {
    question: "Which is the biggest country in the world?",
    answer: "Russia",
    options: ["China", "India", "United States", "Russia"],
    points: 100,
  },
  {
    question: "What is the biggest bird in the world?",
    answer: "Ostrich",
    options: ["Pigeon", "Ostrich", "Eagle", "Peacock"],
    points: 100,
  },
  {
    question: "What is the capital city of Luxembourg?",
    answer: "Luxembourg",
    options: ["Luxemburg", "Luxembourg", "Luxemburgs", "Luxemburgia"],
    points: 100,
  },
  {
    question: "What is the name of the first president of the United States?",
    answer: "George Washington",
    options: ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"],
    points: 100,
  },
  {
    question: "What animal Class does dogs belongs to?",
    answer: "Mammal",
    options: ["Mammal", "Bird", "Reptile", "Fish"],
  }
]
const HARD = [
  {
    question: "What is the chemical formula of baking soda?",
    answer: "NaHCO3",
    options: ["NaH3CO3", "NaH3O3", "NaH3CO2", "NaHCO3"],
    points: 1000,
  },
  {
    question: "Who was the last Russian Czar (Emperor)?",
    answer: "Nikolai II Alexandrovich",
    options: ["Ivan III Vasilyevich", "Yuriy Danilovich", "Nikolai II Alexandrovich", "Kirill Vladimirovich"],
    points: 1000,
  },
  {
    question: "Which year was the first World Cup?",
    answer: "1930",
    options: ["1930", "1932", "1934", "1936"],
  }
]
const EXPERT = [
  {
    question: "What is the scientific name of common banana?",
    answer: "Musa paradisica",
    options: ["Solanum tuberosum", "Fragaria vesca", "Musa paradisica", "Musa acuminata"],
    points: 10000,
  },
  {
    question: "How much time does it take for the light to travel from the Sun to the Earth?",
    answer: "8 minutes",
    options: ["30 minutes", "8 minutes", "1.2 seconds", "2 hours"],
    points: 10000,
  },
  {
    question: "What is the name of the earliest ancestor of the modern day human being?",
    answer: "Australopithecus afarensis",
    options: ["Australopithecus afarensis", "Homo erectus", "Homo afarensis", "Homo neanderthalensis"],
    points: 10000,
  }
]
const MASTER = [
  {
    question: "What is the name of the first programmer?",
    answer: "Ada Lovelace",
    options: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "Charles Babbage"],
    points: 100000,
  },
  {
    question: "What is the atomic number of the element iridium?",
    answer: "77",
    options: ["72", "68", "77", "80"],
    points: 100000,
  },
  {
    question: "In which year was issued the Rosetta Stone?",
    answer: "196 BC",
    options: ["150 BC", "210 BC", "105 BC", "196 BC"],
    points: 100000,
  },
]

export default function getLevels (category) {
  switch (category) {
    case 0:
      return EASY[Math.floor(Math.random() * EASY.length)]
    case 1:
      return MEDIUM[Math.floor(Math.random() * MEDIUM.length)]
    case 2:
      return HARD[Math.floor(Math.random() * HARD.length)]
    case 3:
      return EXPERT[Math.floor(Math.random() * EXPERT.length)]
    case 4:
      return MASTER[Math.floor(Math.random() * MASTER.length)]
  }
}
