// var inputUsername = document.getElementById("txtUsername");
// console.log(inputUsername.value);

// var username = document.getElementById("txtUsername").value;
// console.log(username);

//Dom toi the button#btnClick
document.getElementById("btnClick").onclick = function () {
  //xu ly
  //Dom toi the input#txtUsername lay value
  var username = document.getElementById("txtUsername").value;
  console.log(username);
};

//Dom toi button#btnCong
document.getElementById("btnCong").onclick = function () {
  //Dom toi 2 the input lay value
  //Dau vao
  var number_1 = document.getElementById("txtNumber_1").value * 1;
  var number_2 = document.getElementById("txtNumber_2").value * 1;

  //Chuyển kiểu dữ liệu từ string => number
  //   number_1 = parseInt(number_1);
  //   number_2 = parseInt(number_2);

  //Xu ly
  var tong = number_1 + number_2;

  var ketQua = "Tong la: " + tong;

  //Show ket qua ra UI
  document.getElementById("divInfo").innerHTML = ketQua;

  //Style div#divInfo - inline
  //   document.getElementById("divInfo").style.backgroundColor = "red";
  //   document.getElementById("divInfo").style.color = "white";
  //   document.getElementById("divInfo").style.fontSize = "50px";
  //   document.getElementById("divInfo").style.textAlign = "center";

  //Style div#divInfo - class
  //   document.getElementById("divInfo").className = "showInfo";

  //Style div#divInfo - classList
  document.getElementById("divInfo").classList.add("showInfo");
};
/**
 * Login
 */
document.getElementById("btnLogin").onclick = function (){
  //lay value tu 2 the input #username #password
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

  //show username password => footer #footerLogin
  // var result = "Username:  " + username + "<br/>Password: " + password
  var result = "";
  result += "<p>Username: " + username + "</p>";
  result += "<p>Password: " + password + "</p>";

  document.getElementById("footerLogin").innerHTML = result;
};

document.getElementById("btnOn").onclick = function(){
  document.getElementById("imgBulb").src = "./images/pic_bulbon.gif"
};

document.getElementById("btnDisableOn").onclick = function() {
  //Khoa button #btnOn
  document.getElementById("btnOn").disabled = true;
};
document.getElementById("btnEnabledOn").onclick = function() {
  //mo button #btnOn
  document.getElementById("btnOn").disabled = false
};



document.getElementById("btnTinh").onclick = function(){
  //lay value nguoi dung
var tongTien = document.getElementById("txtTongTien").value;
var phanTramTip = document.getElementById("selectTip").value;
var share = document.getElementById("share").value;
//xu ly:
var tip = (tongTien * phanTramTip) / 100 / share;
var result = "Tip Amount: " + tip + "$ moi nguoi";
//dau r: dom toi #footertip
document.getElementById("footerTip").innerHTML = result;
document.getElementById("footerTip").classList.add("alert-success");
};

document.getElementById("btnTaoThe").onclick = function(){
  //cach 1 tao the bang chuoi
  //var tagP = "<p>Hello Cybersoft</p>";
  //document.getElementById("divContent").innerHTML = tagP

  //cach 2
  //xoa noi dung trong the div#divContent
  document.getElementById("divContent").innerHTML = "";//xoa lap

  var tagP = document.createElement("p");
  //them text cho the p moi tao
  tagP.innerHTML = "Hello Cybersoft";
  //gan tagP ra the div#divContent
  document.getElementById("divContent").appendChild(tagP);
}
// document.getElementById("btnTaoBang").onclick = function(){
//   //tao 3 dong
//   //moi dong 3 cot
//   var content = "";
//  content += "<tr>";
//  content += "<td>1</td>";
//  content += "<td>Samsung</td>";
//  content += "<td>10000</td>";
//  content += "</tr>";

//  content += "<tr>";
//  content += "<td>1</td>";
//  content += "<td>Iphone</td>";
//  content += "<td>20000</td>";
//  content += "</tr>";

//  content += "<tr>";
//  content += "<td>1</td>";
//  content += "<td></td>";
//  content += "<td>10000</td>";
//  content += "</tr>";

//  document.getElementById("tbody").innerHTML = content;
// };

document.getElementById("btnTaoBang").onclick = function(){
  //reset tbody
  document.getElementById("tbody").innerHTML = ""
//Tao dong 1
var tagTR_1 = document.createElement("tr");
//Tao 3 cot - dong 1
var tagTD_1_1 = document.createElement("td");
var tagTD_2_1 = document.createElement("td");
var tagTD_3_1 = document.createElement("td");
//Gan text cho tung cot
tagTD_1_1.innerHTML = "1";
tagTD_2_1.innerHTML = "Samsung";
tagTD_3_1.innerHTML = "10000";
//appand 3 cot vao dong
tagTR_1.appendChild(tagTD_1_1);
tagTR_1.appendChild(tagTD_2_1);
tagTR_1.appendChild(tagTD_3_1);

document.getElementById("tbody").appendChild(tagTR_1);

//Tao dong 2
var tagTR_2 = document.createElement("tr");
//Tao 3 cot - dong 2
var tagTD_1_2 = document.createElement("td");
var tagTD_2_2 = document.createElement("td");
var tagTD_3_2 = document.createElement("td");
//Gan text cho tung cot
tagTD_1_2.innerHTML = "2";
tagTD_2_2.innerHTML = "Iphone";
tagTD_3_2.innerHTML = "20000";
//appand 3 cot vao dong
tagTR_2.appendChild(tagTD_1_2);
tagTR_2.appendChild(tagTD_2_2);
tagTR_2.appendChild(tagTD_3_2);

document.getElementById("tbody").appendChild(tagTR_2);
}

