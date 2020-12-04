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
    { name: "illuminationstars", fullname: "illumination STARS", title: "イルミネ" },
    { name: "lantica", fullname: "L'Antica", title: "アンティーカ" },
    { name: "hokagoclimaxgirls", fullname: "放課後クライマックスガールズ", title: "放クラ" },
    { name: "alstroemeria", fullname: "ALSTROEMERIA", title: "アルスト" },
    { name: "straylight", fullname: "Straylight", title: "ストレイ" },
    { name: "noctchill", fullname: "noctchill", title: "ノクチル" },
];
