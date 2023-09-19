import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firestore";

export async function getRoomByCode(roomCode: string) {
  const roomDocRef = doc(db.rooms, roomCode);
  const roomDocSnap = await getDoc(roomDocRef);
  if (roomDocSnap.exists()) {
    return roomDocSnap.data();
  }
  throw Error("Failed to retrieve room from database");
}

export function createRoom(roomCode: string) {
  const newRoomDocRef = doc(db.rooms, roomCode);
  return setDoc(newRoomDocRef, {
    songQueue: [],
    currentSong: "",
    code: roomCode,
  });
}

export function addToRoomQueue(roomCode: string, url: string) {
  const roomDocRef = doc(db.rooms, roomCode);
  return updateDoc(roomDocRef, {
    songQueue: arrayUnion(url),
  });
}

export function removeFromRoomQueue(roomCode: string, url: string) {
  const roomDocRef = doc(db.rooms, roomCode);
  return updateDoc(roomDocRef, {
    songQueue: arrayRemove(url),
  });
}
