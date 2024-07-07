export type Deck = {
    cards: Card[];
}

export type Card = {
    name: string;
    set: string;
    number: string;
    imageLink: string;
    deckCount?: number;
}

export type PrizeCard = {
    image: string;
    taken: boolean;
    position: 1 | 2 | 3 | 4 | 5 | 6;
}

export type ThemeSet = {
    name: string;
    code: string;
    ptcgo_code: string;
    releaseDate: string;
}