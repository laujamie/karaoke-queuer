import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  collection,
  getFirestore,
} from "firebase/firestore";
import type { Room } from "@/types/room";
import firebaseApp from "./config";

const firestore = getFirestore(firebaseApp);

export function createConverter<
  T extends DocumentData
>(): FirestoreDataConverter<T, T> {
  return {
    toFirestore: (data: T) => data,
    fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
  };
}

export const db = {
  rooms: collection(firestore, "rooms").withConverter(createConverter<Room>()),
};
