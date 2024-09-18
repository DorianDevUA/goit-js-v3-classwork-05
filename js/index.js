// =====================
// Repeta ==============
// =====================

/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// const {
//   rating,
//   tracks,
//   name,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = playlist;

// console.log(numberOfTracks);
//================================================

/*
 * Глубокая деструктуризация
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   avatar,
//   name,
//   tag,
//   location,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);
// ==================================================================

/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];
// const [red, green, blue] = rgb;

// // console.log(red, green, blue);
//================================================

// const authors = {
//   kiwi: 4,
//   poly: 7,
//   ajax: 9,
//   mango: 6,
// };

// const entries = Object.entries(authors);

// console.log(entries);

// // ур3
// for (const [name, rating] of entries) {
//   // ур2
//   // const [name, rating] = entry;

//   // ур1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }
//==============================================

/*
 * Операция rest (сбор)
 */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, location, ...restProps } = profile;

// console.log(profile);
// console.log(name, tag, location);
// console.log(restProps);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const showProfileInfo = function (userProfile) {
//   const { name, tag, location, ...restProps } = userProfile;

//   // console.log(name, tag, location, avatar, followers, views, likes);
//   console.log(restProps);
// };

// showProfileInfo(profile);

/*
 * =============================================
 * =============== Shoping Cart ================
 * =============================================
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// function createUniqueID() {
//   return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
// }

// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//       id: crypto.randomUUID(),
//     };

//     items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { quantity, price } of items) {
//       total += quantity * price;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     const { items } = this;

//     for (const item of items) {
//       if (item.name === productName && item.quantity <= 1) {
//         this.remove(productName);
//       } else if (item.name === productName) {
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍓');

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

/*
 * =================================================
 * ================== Finish Cart ==================
 * =================================================
 */

// Работа с коллекцией (массивом объектов)
// =================================================
// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];

// console.table(friends);

// Ищем друга по имени
// =================================================
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);

//     if (friend.name === friendName) {
//       return friend;
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

// Получаем имена всех друзей
// =================================================
// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

// Получаем имена только друзей которые онлайн
// =================================================
// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.online);

//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// Получаем имена только друзей которые оффлайн
// ==================================================
// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     // console.log(friend.online);

//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }

//   return offlineFriends;
// };

// console.log(getOfflineFriends(friends));

// Получаем обьект со статусом пользователей в сети
// ==================================================
// const getFriendsByStatus = function (allFriends) {
//   const friendsByStatus = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatus.online.push(friend);
//       continue;
//     }

//     friendsByStatus.offline.push(friend);

//     // const key = friend.online ? 'online' : 'offline';
//     // friendsByStatus[key].push(friend);
//   }

//   return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

// =====================
// Rysich ==============
// =====================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
// };

// // console.log(user.languages.React_Native);
// // console.log(user['languages']['React Native']);

// for (const key in user) {
//   // console.log(user.key); // undefined
//   console.log(key);
//   console.log(user[key]);
//   // console.log(user[key]);
// }
// ============================================================

// const test = 3;
// const test2 = 45;
// const value = 'start';
// const value2 = 'End';
// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
//   // [value + value2] : 'some value',
//   result: test + test2,
// };
// console.log(user.result);

// user.age = 29;
// user.age += 1;

// user.city = 'VN';
// console.log(user);
// console.log(user.age);

// delete user.city;
// console.log(user);
// =========================================================

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
// };

// Object.freeze(user);
// // user.asdfwesgfasdfasz = 'dasdgvsdfdafsed';
// // user.age = 100;
// console.log(user);
// ==========================================================

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
// };
// // Object.freeze(user);

// const user2 = Object.create(user);
// user2.age = 33;
// console.log(user2);
// console.log(user);

// for (const key in user2) {
//   if (user2.hasOwnProperty(key)) {
//     console.log('Own', key, user2[key]);
//   } else {
//     console.log('All', key, user2[key]);
//   }
// }
// =======================================================

// const user = {
//   score: false,
// };

// if (user.hasOwnProperty('score')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// if ('score' in user) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// if (user.score) {
//   console.log('yes');
// } else {
//   console.log('no');
// }
// ========================================================

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     ReactNative: false,
//   },

//   sayHello() {
//     console.log(`My name ${this.name}`);
//   },

//   iKnow() {
//     // const keys = Object.keys(this.languages);
//     // console.log(keys);
//     // // const values = Object.values(this.languages);
//     // // console.log(values);
//     // // const entries = Object.entries(this.languages);
//     // // console.log(entries);

//     // // for (const key in this.languages) {
//     // //   if (this.languages[key]) {
//     // //     console.log(key);
//     // //   }
//     // // }

//     // for (const key of keys) {
//     //   // console.log(key);
//     //   if (this.languages[key]) {
//     //     console.log(key);
//     //   }
//     // }

//     const keys = Object.keys(this);
//     console.log('Keys from Object.keys:', keys);

//     for (const key of keys) {
//       if (typeof this[key] === 'function') {
//         continue;
//       } else {
//         console.log('key:', key);
//       }
//     }
//   },
// };

// user.iKnow();

// const user2 = Object.create(user);
// user2.name = 'Den';
// console.log('user2:', user2);
// user2.sayHello();
// user.sayHello();
//==============================================================

// Example 1 - Основи об 'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення lastName на 'Sirko'
// замінює значення premium на false
// виводить вміст об 'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   firstName: 'Mango',
//   lastName: 'Homenko',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// console.log('user:', user);

// user.mode = 'happy';
// user.hobby = 'skydiving';
// user['lastName'] = 'Sirko';
// // user['premium'] = false;
// const key = 'premium';
// user[key] = false;

// console.log('user:', user);

// for (const key in user) {
//   console.log('for...in:', user[key]);
// }

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log('key:', key);
//   console.log('value:', user[key]);
//   console.log('key:value |:', `${key}: ${user[key]}`);
// }

// user.skills = {
//   js: true,
//   react: true,
//   node: false,
// };
// console.log('user:', user);
//============================================================

// Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// // const values = Object.values(salaries);
// // console.log(values);

// // for (const value of values) {
// //   // console.log(value);
// //   sum += value;
// // }
// // console.log(sum);

// for (const key in salaries) {
//   console.log(key);
//   console.log(salaries[key]);
//   sum += salaries[key];
// }
// console.log(sum);
// ========================================================

// Example 3 - Масив об 'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об 'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   {
//     name: 'Смарагд',
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: 'Діамант',
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: 'Сапфір',
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: 'Щебінь',
//     price: 200,
//     quantity: 2,
//   },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const { name, price, quantity } of stones) {
//     if (name === stoneName) {
//       return price * quantity;
//     }
//   }

//   return 'Товар відсутній';
// }

// console.log(calcTotalPrice(stones, 'Діамант'));
// ===========================================================

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// Object.freeze(Transaction);

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [
//     {
//       id: 16,
//       amount: 145,
//       type: 'deposit',
//     },
//   ],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */

//   createTransaction(amount, type) {
//     return {
//       id: crypto.randomUUID(),
//       amount,
//       type,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */

//   deposit(amount) {
//     if (amount <= 0) {
//       return 'Error';
//     }

//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return 'Недостатньо коштів';
//     } else if (amount <= 0) {
//       return 'Зняття такої суми не можливе';
//     }

//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.balance -= amount;
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */

//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return 'Такої транзакції не знайдено';
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */

//   getTransactionTotal(type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type !== type) {
//         continue;
//       }

//       total += transaction.amount;
//     }

//     return total;
//   },
//   getTransactions() {
//     return this.transactions;
//   },
// };

// console.log('Balance:', account.getBalance());
// account.deposit(1);
// account.deposit(1231);
// account.deposit(1431);
// console.log('Balance:', account.getBalance());
// console.log(account.withdraw(0));
// console.log(account.withdraw(12300));
// account.withdraw(123);
// console.log('Balance:', account.getBalance());
// console.log(account.getTransactionDetails(16));

// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// console.table(account.getTransactions());
// console.log(account);

// ============================================================
