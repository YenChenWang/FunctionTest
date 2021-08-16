// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBhMq2YQnsdDfPMHsEUO2n-42xQLR1MsXM",
  authDomain: "fir-web-d11ce.firebaseapp.com",
  projectId: "fir-web-d11ce",
  storageBucket: "fir-web-d11ce.appspot.com",
  messagingSenderId: "910674546570",
  appId: "1:910674546570:web:ba26a451f64a42ba4e4273",
  measurementId: "G-XMBN5MKQWP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var text_id = 0; // 為了存最後一筆得資料
var select_id; // 為了存選擇哪一個編號

// 新增語法
function writedata() {
  var t1 = document.getElementById("textfield").value;
  var t2 = document.getElementById("textfield2").value;
  database.ref("/" + (text_id + 1)).set({
    value_1: t1,
    value_2: t2,
  });
  selectdata();
}

function selectdata() {
  database.ref("/").once("value", function (data) {
    var z1 = data.val();
    var html_text = "";
    for (x in z1) {
      html_text =
        html_text +
        '<a href="#" id="t' +
        x +
        '" onClick="selectid(' +
        x +
        ')">第' +
        x +
        '筆</a><ol><li id="z1_value_1_' +
        x +
        '">' +
        z1[x].value_1 +
        '</li><li id="z1_value_2_' +
        x +
        '">' +
        z1[x].value_2 +
        "</li></ol><br>";
      text_id = parseInt(x);
    }
    document.getElementById("read").innerHTML = html_text;
  });
}

// 選擇語法
function selectid(x) {
  document.getElementById("textfield").value = document.getElementById(
    "z1_value_1_" + x
  ).innerHTML;
  document.getElementById("textfield2").value = document.getElementById(
    "z1_value_2_" + x
  ).innerHTML;
  select_id = x;
}

// 修改語法
function updata() {
  var t1 = document.getElementById("textfield").value;
  var t2 = document.getElementById("textfield2").value;
  database.ref("/" + select_id).set({
    value_1: t1,
    value_2: t2,
  });
  selectdata();
}

// 刪除語法
function deldata() {
  database.ref("/" + select_id).remove();
  alert("已刪除");
  selectdata();
}
selectdata();
