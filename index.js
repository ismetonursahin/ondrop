function onur() {
  let tiklanan = prompt("HERHANGİ BİR ŞEY YAZ", "Buraya Yazınız");
  document.getElementById("deger").innerHTML = tiklanan;
  if (tiklanan != null) {
    document.getElementsByClassName("butons")[0].innerHTML = "";
  }
}

function basla(event) {
  let basla = document.getElementById("sonucalani");
  basla.style.color = "green";
  basla.innerHTML = "BAŞLADIN";
}

function uzerinde(event) {
  event.preventDefault();
  let uzeri = document.getElementById("sonucalani");
  uzeri.innerHTML = "ÜZERİNDESİN";
}

function birakildi(event) {
  let islem = document.getElementById("a");
  islem.innerHTML = document.getElementsByTagName("div")[0].textContent;
  islem.style.backgroundColor = " rgb(12, 145, 37)";
  islem.style.color = "bisque";
  let birak = document.getElementById("sonucalani");
  birak.innerHTML = "BIRAKTIN";
}

function cikildi(event) {
  let cikis = document.getElementById("sonucalani");
  cikis.innerHTML = "ÇIKTIN";
}
