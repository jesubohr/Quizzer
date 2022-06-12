const EASY = [
  {
    question: "What is the capital city of Germany?",
    answer: "Berlin",
    options: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
    points: 10,
  },
]
const MEDIUM = [
  {
    question: "What is the capital city of Luxembourg?",
    answer: "Luxembourg",
    options: ["Luxemburg", "Luxembourg", "Luxemburgs", "Luxemburgia"],
    points: 100,
  },
]
const HARD = [
  {
    question: "What is the chemical formula of baking soda?",
    answer: "NaHCO3",
    options: ["NaH3CO3", "NaH3O3", "NaH3CO2", "NaHCO3"],
    points: 1000,
  },
]
const EXPERT = [
  {
    question: "What is the scientific name of common banana?",
    answer: "Musa paradisica",
    options: ["Solanum tuberosum", "Fragaria vesca", "Musa paradisica", "Musa acuminata"],
    points: 10000,
  },
]
const MASTER = [
  {
    question: "What was the name of the first programmer?",
    answer: "Ada Lovelace",
    options: ["Alan Turing", "Ada Lovelace", "Grace Hopper", "Charles Babbage"],
    points: 100000,
  },
]

export default function getLevels () {
  return [
    EASY[0],
    MEDIUM[0],
    HARD[0],
    EXPERT[0],
    MASTER[0],
  ]
  /* return [
    EASY[Math.floor(Math.random() * EASY.length)],
    MEDIUM[Math.floor(Math.random() * MEDIUM.length)],
    HARD[Math.floor(Math.random() * HARD.length)],
    EXPERT[Math.floor(Math.random() * EXPERT.length)],
    MASTER[Math.floor(Math.random() * MASTER.length)]
  ] */
}
