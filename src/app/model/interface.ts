export interface Info  {
    title: string;
    phone: string;
    followers: number;
    following: number;
    type: string;
    photo: string[];
    weather: {
        temp: number;
        cloudy: string;
        water: number;
    }
};