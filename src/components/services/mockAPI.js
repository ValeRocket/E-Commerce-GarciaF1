const data = [
    {
        id: 1,
        title: "Chomba Redbull",
        price: 6500,
        stock: 10,
        category: "chombas",
        detail: "Chomba redbull 100% algodon",
        img: "https://http2.mlstatic.com/D_NQ_NP_964914-MLA45304791235_032021-O.webp",
    },
    {
        id: 2,
        title: "Gorra Ferrari",
        price: 3800,
        stock: 10,
        category: "gorras",
        detail: "gorra ferrari",
        img: "https://http2.mlstatic.com/D_NQ_NP_953322-MLA47816216346_102021-O.webp",
    },
    {
        id: 3,
        title: "Buzo Mercedes",
        price: 7900,
        stock: 10,
        category: "buzos",
        detail: "buzo mercedes 100% algodon",
        img: "https://http2.mlstatic.com/D_NQ_NP_720238-MLA50995928757_082022-O.webp",
    }
];

 function getItems() {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve(data);
        },1500);
    });
}

export default getItems