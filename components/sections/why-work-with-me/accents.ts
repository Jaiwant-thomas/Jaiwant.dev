export interface CardAccent {
  badge: string;
  gradient: string;
}

export const CARD_ACCENTS: CardAccent[] = [
  { badge: "Delivery", gradient: "from-blue-500 via-blue-400 to-cyan-400" },
  { badge: "Engineering", gradient: "from-violet-500 via-purple-400 to-fuchsia-400" },
  { badge: "Visibility", gradient: "from-emerald-500 via-teal-400 to-cyan-400" },
  { badge: "Design", gradient: "from-fuchsia-500 via-pink-400 to-rose-400" },
  { badge: "Devices", gradient: "from-cyan-500 via-sky-400 to-blue-400" },
  { badge: "Speed", gradient: "from-amber-500 via-orange-400 to-rose-400" },
  { badge: "Process", gradient: "from-indigo-500 via-violet-400 to-purple-400" },
  { badge: "Assurance", gradient: "from-teal-500 via-emerald-400 to-lime-400" },
];
