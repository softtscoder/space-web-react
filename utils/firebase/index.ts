// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";
import { ServerConfig } from "./ServerConfig";

// import { getAnalytics } from "firebase-admin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// for firebase-client only
// const firebaseApp = initializeApp(ClientConfig);
// export const analytics = getAnalytics(firebaseApp);

/**
 * @description Get `firebase-admin` database
 *
 * @example
 * _**Notes**_: Only use this function on server-side code (i.e: `getStaticProps, getServerSideProps`)
 *
 * ```jsx
 * getDatabaseServer()
 *   .ref("/destination")
 *   .on(
 *     "value",
 *     (snapshot) => {
 *       console.log(snapshot.val());
 *     },
 *     (errorObject) => {
 *       console.log("The read failed: " + errorObject.name);
 *     }
 *   );
 * ```
 */
export const getDatabaseServer = () => {
  if (getApps().length === 0) initializeApp(ServerConfig);

  return getDatabase();
};

/**
 * @description Use like `fetch()`
 * @returns Original data as show in _Firebase console_
 *
 * @example
 * ```jsx
 * const result = await retrieve("/destination");
 * console.log(result);
 * ```
 */
export async function retrieve<T>(url: string) {
  // getDatabaseServer()
  //   .ref(url)
  //   .on(
  //     "value",
  //     (snapshot) => {
  //       receiver(snapshot);
  //     },
  //     (err) => {
  //       console.log("The read failed: " + err.name);
  //       // throw err;
  //     }
  //   );
  return (await getDatabaseServer().ref(url).get()).val() as T;
}
