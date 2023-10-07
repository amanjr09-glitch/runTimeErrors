import app from "../firebase"
import {
  getFirestore,
  collection,
  query,
  onSnapshot,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
} from "@firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from "@firebase/storage";
import { getDatabase, ref as rref, set, get, child, push, remove, update as updateRTDB } from "@firebase/database";

const db = getFirestore(app);
const storage = getStorage(app);
const rdb = getDatabase(app);

export function pushData(path, data){
  return push(rref(rdb, path), data);
}

export function updateData(path, data){
  return updateRTDB(rref(rdb), {
    [path]: data
  })
}

export function deleteData(path){
  return remove(rref(rdb, path));
}
export function writeData(path, data) {
  // console.log(path, data);
  return set(rref(rdb, path), data);
  }
  export function readData(path) {
    return get(child(rref(rdb), path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

const filter = (q) => {
  return new Promise((resolve, reject) => {
    onSnapshot(q, (querySnapshot) => {
      const tempDoc = []
      querySnapshot.docs.map(doc => {
        tempDoc.push({ id: doc.id, ...doc.data() })
      })
      resolve(tempDoc);
    });
  })
}

export const syncUpload = (file, path, setPercent = () => {}) => {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) =>
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          resolve(url);
        });
      }
    )
  );
};

export const deleteFile = async (path) => {
  const desertRef = ref(storage, path);
  await deleteObject(desertRef).catch(console.log);
  return true;
};

export const getImages = async (path) => {
  const listRef = ref(storage, path);
  const { items } = await listAll(listRef).catch(console.log);
  const urls = [];
  for (let i = 0; i < items.length; i++) {
    const src = await getDownloadURL(items[i]);
    urls.push({
      src,
      path: items[i].fullPath,
    });
  }
  return urls;
};

export const readID = async (id, dbName = "users") => {
  const docRef = doc(db, dbName, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // Convert to City object
    const doc = docSnap.data();
    // console.log(doc)
    return doc;
  } else {
    console.log("No such document!");
    return null;
  }
};

export const update = async (data, dbName = "users") => {
  const docRef = doc(db, dbName, data.id);
  try {
    await updateDoc(docRef, data);
    return true;
  } catch (err) {
    alert(err);
    return false;
  }
};

export const readAll = async (dbName) => {
  const q = query(collection(db, dbName));
  return filter(q)
};

export const del = async (dbName, id) => {
  const docRef = doc(db, dbName, id);
  try {
    await deleteDoc(docRef);
  } catch (err) {
    alert(err);
  }
};

export const createDB = async (dbName, data) => {
  try {
    await setDoc(doc(db, dbName, data.id), data);
    return true;
  } catch (err) {
    alert(err);
    return false;
  }
};

export const userDbListner = ({
  onChange = () => {},
  collection = "users",
  id,
}) => {
  onSnapshot(doc(db, collection, id), (doc) => {
    onChange(doc.data());
  });
};