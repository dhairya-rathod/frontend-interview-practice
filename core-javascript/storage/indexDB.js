// let openRequest = indexedDB.open("demoDB", 2);

// openRequest.onupgradeneeded = function (event) {
//   let demoDB = openRequest.result;
//   console.log(demoDB.objectStoreNames.contains("users"));
//   if (!demoDB.objectStoreNames.contains("users")) {
//     console.log("xxx");
//     demoDB.createObjectStore("users", { keyPath: "id", autoIncrement: true });

//     let dbTransaction = demoDB.transaction("users", "readwrite");

//     let users = dbTransaction.objectStore("users");
//     let user = {
//       id: 1,
//       name: "DR",
//       created: new Date(),
//     };

//     let request = users.add(user);

//     request.onsuccess = function () {
//       console.log("User added successfully! ::", request.result);
//     };
//   }
// };

// openRequest.onerror = function () {
//   console.error("DB init error :: ", openRequest.error);
// };

// openRequest.onsuccess = function () {
//   let demoDB = openRequest.result;

//   demoDB.onversionchange = function () {
//     demoDB.close();
//     alert("Database is outdated, please reload the page");
//   };
// };

const request = indexedDB.open("CarsDatabase", 1);

request.onerror = function (event) {
  console.error("DB init error :: ", event);
};

request.onupgradeneeded = function () {
  const db = request.result;

  const store = db.createObjectStore("cars", {
    keyPath: "id",
    autoIncrement: true,
  });

  store.createIndex("cars_color", ["color"], { unique: false });
  store.createIndex("color_and_make", ["color", "make"], { unique: false });
};

request.onsuccess = function () {
  console.log("DB opened successfully!");

  const db = request.result;

  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");
  // const colorIndex = store.index("cars_color");
  // const makeModelIndex = store.index("color_and_make");

  store.put({ color: "red", make: "maruti" });
  store.put({ color: "blue", make: "toyota" });
  store.put({ color: "green", make: "hyundai" });

  // transaction.oncomplete = function () {
  //   db.close();
  // };
};

function addData() {
  const db = request.result;

  const transaction = db.transaction("cars", "readwrite");

  const store = transaction.objectStore("cars");
  // const colorIndex = store.index("cars_color");
  // const makeModelIndex = store.index("color_and_make");

  store.put({ color: "green", make: "lamborghini", type: "sports" });

  // transaction.oncomplete = function () {
  //   db.close();
  // };
}
