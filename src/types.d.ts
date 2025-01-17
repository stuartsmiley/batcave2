type Species = {
    id: number;
    name: string;
}

type Critter = {
    name: string;
    nickname: string;
    species: Species;
    is_freak: boolean;
}

type CritterAction = {
    type: string;
    payload: any;
}