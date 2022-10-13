import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVg0IHvLPM5M6rf-Nk0u2gpyC04_Heri0",
  authDomain: "formula-1-shop.firebaseapp.com",
  projectId: "formula-1-shop",
  storageBucket: "formula-1-shop.appspot.com",
  messagingSenderId: "313360326864",
  appId: "1:313360326864:web:8d60301848a360db077ed5"
};

// Iniciando Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems() {
  const collectionRef = collection(firestore, "productos");
  let respuesta = await getDocs(collectionRef);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleItems(idParams) {
  try {
    const docRef = doc(firestore, "productos", idParams);
    const docSnapshot = await getDoc(docRef);
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getItemsByCategory(catParams) {
  const collectionRef = collection(firestore, "productos");
  const queryCategory = query(
    collectionRef,
    where("category", "==", catParams)
  );

  const respuesta = await getDocs(queryCategory);

  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}


export default firestore;
