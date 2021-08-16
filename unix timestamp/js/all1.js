// const dateTime = Date.now();
// const timestamp = Math.floor(dateTime / 1000);

// 取得特定的 unix timestamp 傳送一個 YYYY-MM-DD 或 YYYY-MM-DDT00:00:00Z 參數到 Date 的建構子。
const dateTime = +new Date('2021-08-15T12:54:00Z');
const timestamp = Math.floor(dateTime / 1000);

console.log(dateTime);
console.log(timestamp);