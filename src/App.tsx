import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, FirestoreProvider } from "reactfire";

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <div>
        <h1>Hello World!</h1>
      </div>
    </FirestoreProvider>
  );
}

export default App;
