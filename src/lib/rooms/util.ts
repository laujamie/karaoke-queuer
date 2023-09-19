const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function generateRoomId(length = 4): string {
  let text = "";
  for (let i = 0; i < length; i++) {
    text += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
  }
  return text;
}
