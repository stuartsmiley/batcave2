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

type Authorization = {
    accessToken: string;
    permissions: string[];
}

type KitchenData = {
    id: number;
    timestamp: string;
    pressure_hectopascales: number;
    gas_resistence_ohms: number;
    temp_celsius: number;
    relative_humidity: number;
}