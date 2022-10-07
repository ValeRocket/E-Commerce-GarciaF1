const data = [
    {
        id: 1,
        title: "Chomba Redbull",
        price: 6500,
        stock: 10,
        category: "remeras",
        detail: "Chomba RedBull Aston Martin 100% Algodon",
        img: "https://http2.mlstatic.com/D_NQ_NP_964914-MLA45304791235_032021-O.webp",
    },
    {
        id: 2,
        title: "Gorra Ferrari",
        price: 3800,
        stock: 10,
        category: "gorras",
        detail: "Gorra Ferrari Bordada",
        img: "https://http2.mlstatic.com/D_NQ_NP_953322-MLA47816216346_102021-O.webp",
    },
    {
        id: 3,
        title: "Buzo Mercedes",
        price: 7900,
        stock: 10,
        category: "buzos",
        detail: "Buzo Mercedes 100% algodon",
        img: "https://http2.mlstatic.com/D_NQ_NP_720238-MLA50995928757_082022-O.webp",
    },
    {
        id: 4,
        title: "Casco Ayrton Senna",
        price: 9000,
        stock: 10,
        category: "cascos",
        detail: "casco original ayrton senna 1988",
        img: "https://http2.mlstatic.com/D_NQ_NP_758396-MLA49256090446_032022-O.webp"
    }
];

 export default function getItems() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(data);
        },);
    });
}

export function getItemsByCategory(cat){
    return new Promise((resolve, reject) => {
        let itemFilter = data.filter((item)=>{
            return item.category === cat
        });  
        if(itemFilter) resolve(itemFilter);
        else reject(new Error("Item no encontrado"))
    })
}

export function getSingleItems(idItem){
    return new Promise((resolve, reject) => {
        let itemFind = data.find((item)=>{
            return item.id === Number(idItem)
        });  
        if(itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"))
    })
}