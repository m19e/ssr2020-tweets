import { Idol } from "../interfaces";
import { UnitData } from "./units";

const { ill, noc } = UnitData;

export const IdolData: { [name: string]: Idol } = {
    mano: { name: "櫻木真乃", color: "#ffbad6", unit: ill },
    hiori: { name: "風野灯織", color: "#144384", unit: ill },
    meguru: { name: "八宮めぐる", color: "#ffe012", unit: ill },
    // kogane: {},
    // mamimi: {},
    // yuika: {},
    // kiriko: {},
    // kaho: {},
    // chiyoko: {},
    // juri: {},
    // rinze: {},
    // natsuha: {},
    // amana: {},
    // tenka: {},
    // chiyuki: {},
    // asahi: {},
    // fuyuko: {},
    // mei: {},
    toru: { name: "浅倉透", color: "#50d0d0", unit: noc },
    madoka: { name: "樋口円香", color: "#be1e3e", unit: noc },
    koito: { name: "福丸小糸", color: "#7967c3", unit: noc },
    hinana: { name: "市川雛菜", color: "#ffc639", unit: noc },
};
