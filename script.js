let d = 0;
let clr = () => {
          let b = document.getElementById("txt2");
          let c = document.getElementById("txt1");
          b.innerText = "0";
          c.innerText = "0";
}
function op(ip) {
          const a = new Array(10);
          for (let i = 0; i < 10; i++) {
                    a[i] = i + 1;
          }
          for (let i = 0; i < 10; i++) {
                    if (ip == i) {
                              let b = document.getElementById("txt2");
                              b.innerText = b.innerText + i - "0";
                    }
          }
}
let add = () => {
          let b = document.getElementById("txt2");
          let a = document.getElementById("txt1");
          a.innerText = parseFloat(a.innerText) + parseFloat(b.innerText);
          b.innerText = "0";
          d = 1;
}
let minus = () => {
          let b = document.getElementById("txt2");
          let a = document.getElementById("txt1");
          a.innerText = parseFloat(b.innerText) - parseFloat(a.innerText);
          b.innerText = "0";
          d = 2;
}
let mul = () => {
          let b = document.getElementById("txt2");
          let a = document.getElementById("txt1");
          a.innerText = 1;
          a.innerText = parseFloat(b.innerText) * parseFloat(a.innerText);
          b.innerText = "0";
          d = 3;
}
let div = () => {
          let b = document.getElementById("txt2");
          let a = document.getElementById("txt1");
          a.innerText = 1;
          a.innerText = parseFloat(b.innerText) / parseFloat(a.innerText);
          b.innerText = "0";
          d = 4;
}
let mod = () => {
          let b = document.getElementById("txt2");
          b.innerText = parseFloat(b.innerText) / 100
}
function ans() {
          let b = document.getElementById("txt2");
          let c = document.getElementById("txt1");
          a = d;
          switch (a) {
                    case 1:
                              b.innerText = parseFloat(c.innerText) + parseFloat(b.innerText);
                              c.innerText = "0";
                              break;
                    case 2:
                              b.innerText = parseFloat(c.innerText) - parseFloat(b.innerText);
                              c.innerText = "0";
                              break;
                    case 3:
                              b.innerText = parseFloat(c.innerText) * parseFloat(b.innerText);
                              c.innerText = "0";
                              break;
                    case 4:
                              b.innerText = parseFloat(c.innerText) / parseFloat(b.innerText);
                              c.innerText = "0";
                              break;
                    default:
                              alert("no values found");
          }
}