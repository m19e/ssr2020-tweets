// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
    id: number;
    name: string;
};

export type Tweet = {
    id: string;
    name: string;
    idol: Idol;
};

export type Idol = {
    name: string;
    color: string;
    unit: Unit;
};

export type Unit = {
    name: UnitType;
    color: string;
};

export type UnitType = "illuminationstars" | "lantica" | "hokagoclimaxgirls" | "alstroemeria" | "straylight" | "noctchill";
