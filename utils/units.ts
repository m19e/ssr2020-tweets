import { Unit, UnitInfo } from "../interfaces";

export const UnitData: { [name: string]: Unit } = {
    ill: { name: "illuminationstars", color: "#ffa700" },
    lan: { name: "lantica", color: "#853998" },
    hok: { name: "hokagoclimaxgirls", color: "#fa8333" },
    als: { name: "alstroemeria", color: "#e43b80" },
    str: { name: "straylight", color: "#e71212" },
    noc: { name: "noctchill", color: "#a9bbfd" },
};

export const UnitInfoList: UnitInfo[] = [
    { name: "illuminationstars", fullname: "illumination STARS", title: "イルミネ", color: "#ffa700" },
    { name: "lantica", fullname: "L'Antica", title: "アンティーカ", color: "#853998" },
    { name: "hokagoclimaxgirls", fullname: "HO-KA-GO CLIMAX GIRLS", title: "放クラ", color: "#fa8333" },
    { name: "alstroemeria", fullname: "ALSTROEMERIA", title: "アルスト", color: "#e43b80" },
    { name: "straylight", fullname: "Straylight", title: "ストレイ", color: "#e71212" },
    { name: "noctchill", fullname: "noctchill", title: "ノクチル", color: "#a9bbfd" },
];
