export type Question = {
    id:number;
    quest: string;
    answer: string;
    price: number;
    themeId: number;
};

export type Theme = {
    id: number;
    name: string;
    Questions: Question[]
};
