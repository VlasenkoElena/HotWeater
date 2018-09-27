export interface Info  {
    title: string;
    phone: string;
    followers: number;
    following: number;
    photo: string[];
    weather: {
        temp: number;
        cloudy: string;
        water: number;
    }
};