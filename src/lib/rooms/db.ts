import { db } from "@/lib/firebase/firestore";
import { getDocs } from "firebase/firestore";

export function getAllRooms() {
  return getDocs(db.rooms);
}
