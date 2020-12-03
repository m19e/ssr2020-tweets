import { Idol } from "../interfaces";
import { UnitData } from "./units";

const { ill, lan, hok, als, str, noc } = UnitData;

export const IdolData: { [name: string]: Idol } = {
    mano: { name: "櫻木真乃", color: "#ffbad6", unit: ill },
    hiori: { name: "風野灯織", color: "#144384", unit: ill },
    meguru: { name: "八宮めぐる", color: "#ffe012", unit: ill },
    kogane: { name: "月岡恋鐘", color: "#f84cad", unit: lan },
    mamimi: { name: "田中摩美々", color: "#a846fb", unit: lan },
    sakuya: { name: "白瀬咲耶", color: "#006047", unit: lan },
    yuika: { name: "三峰結華", color: "#3b91c4", unit: lan },
    kiriko: { name: "幽谷霧子", color: "#d9f2ff", unit: lan },
    kaho: { name: "小宮果穂", color: "#e5461c", unit: hok },
    chiyoko: { name: "園田智代子", color: "#f93b90", unit: hok },
    juri: { name: "西城樹里", color: "#ffc602", unit: hok },
    rinze: { name: "杜野凛世", color: "#89c3eb", unit: hok },
    natsuha: { name: "有栖川夏葉", color: "#90e667", unit: hok },
    amana: { name: "大崎甘奈", color: "#f54275", unit: als },
    tenka: { name: "大崎甜花", color: "#e75bec", unit: als },
    chiyuki: { name: "桑山千雪", color: "#fbfafa", unit: als },
    asahi: { name: "芹沢あさひ", color: "#f30100", unit: str },
    fuyuko: { name: "黛冬優子", color: "#5ce626", unit: str },
    mei: { name: "和泉愛依", color: "#ff00ff", unit: str },
    toru: { name: "浅倉透", color: "#50d0d0", unit: noc },
    madoka: { name: "樋口円香", color: "#be1e3e", unit: noc },
    koito: { name: "福丸小糸", color: "#7967c3", unit: noc },
    hinana: { name: "市川雛菜", color: "#ffc639", unit: noc },
};
