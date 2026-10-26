const products = [
  {id:1,name:"天然小晶体砂闪光珠手串",cat:"手串",price:169,img:"images/bracelet_elegant.jpg",poem:"珠面闪光，日常里自有光。",size:"6mm ¥169 / 8mm ¥289 / 10mm ¥399",skus:[{s:"6mm",p:169},{s:"8mm",p:289},{s:"10mm",p:399}]},
  {id:2,name:"天然小晶体砂苹果珠手串",cat:"手串",price:359,img:"images/bracelet_elegant.jpg",poem:"苹果珠，圆润可亲。",size:"7×8mm ¥359 / 10×11mm ¥670",skus:[{s:"7×8mm",p:359},{s:"10×11mm",p:670}]},
  {id:3,name:"天然小晶体砂光面圆珠手串",cat:"手串",price:169,img:"images/bracelet1.jpg",poem:"光面圆珠，多尺寸任选。",size:"6mm 至 16mm",skus:[{s:"6mm",p:169},{s:"8mm",p:289},{s:"10mm",p:439},{s:"12mm",p:699},{s:"14mm",p:938},{s:"16mm",p:1158}]},
  {id:4,name:"天然小晶体砂5mm多圈手串",cat:"手串",price:129,img:"images/bracelet_elegant.jpg",poem:"多圈轻盈，灵活佩戴。",size:"单/双/三圈",skus:[{s:"单圈",p:129},{s:"双圈",p:239},{s:"三圈",p:359}]},
  {id:5,name:"天然小晶体砂祈福吊坠",cat:"吊坠",price:149,img:"images/pendant_elegant.jpg",poem:"祈福之形，随身相伴。",size:"17.5×20×13mm",skus:[{s:"标准",p:149}]},
  {id:6,name:"天然小晶体砂观音吊坠",cat:"吊坠",price:659,img:"images/pendant_elegant.jpg",poem:"观音造型，不含绳。",size:"63×33×9mm",skus:[{s:"标准",p:659}]},
  {id:7,name:"天然小晶体砂天珠吊坠",cat:"吊坠",price:449,img:"images/pendant1.jpg",poem:"天珠之形，不含绳。",size:"42×18mm",skus:[{s:"标准",p:449}]},
  {id:8,name:"天然砂平安无事牌吊坠",cat:"吊坠",price:289,img:"images/pendant_elegant.jpg",poem:"平安无事，多版可选。",size:"小/中/大版",skus:[{s:"小版",p:289},{s:"中版",p:539},{s:"大版",p:799}]},
  {id:9,name:"天然小晶体砂佛公吊坠",cat:"吊坠",price:149,img:"images/pendant_elegant.jpg",poem:"佛公造型，不含绳。",size:"小/大版",skus:[{s:"小版",p:149},{s:"大版",p:239}]},
  {id:10,name:"天然小晶体砂貌貅吊坠",cat:"吊坠",price:589,img:"images/pendant_elegant.jpg",poem:"貌貅之形，不含绳。",size:"36×25×20mm",skus:[{s:"标准",p:589}]},
  {id:11,name:"天然小晶体砂平安扣吊坠",cat:"吊坠",price:279,img:"images/pendant1.jpg",poem:"平安扣，不含绳。",size:"30×9mm",skus:[{s:"标准",p:279}]},
  {id:12,name:"天然胭脂砂耳饰合集",cat:"耳饰",price:159,img:"images/earrings_elegant.jpg",poem:"麦穗/圆珠/葫芦多款。",size:"多种",skus:[{s:"麦穗",p:189},{s:"圆珠",p:159},{s:"葫芦",p:209}]},
  {id:13,name:"天然胭脂砂耳钉合集",cat:"耳饰",price:39,img:"images/earrings_elegant.jpg",poem:"纯银镶嵌，轻盈入耳。",size:"6/8mm 等",skus:[{s:"6mm",p:39},{s:"8mm",p:59},{s:"双珠",p:189}]}
];

let cat = "全部";

function render() {
  const list = cat === "全部" ? products : products.filter(p => p.cat === cat);
  document.getElementById("grid").innerHTML = list.map(p => `
    <div class="card" onclick="openM(${p.id})">
      <img src="${p.img}" alt="${p.name}">
      <div class="card-info">
        <h3>${p.name}</h3>
        <p style="font-size:14px;color:#666;margin-bottom:8px;">${p.poem}</p>
        <div class="price">¥${p.price}起</div>
      </div>
    </div>
  `).join("");
}

function openM(id) {
  const p = products.find(x => x.id === id);
  document.getElementById("modal-content").innerHTML = `
    <img src="${p.img}" style="width:100%;border-radius:8px;margin-bottom:16px;">
    <h2>${p.name}</h2>
    <p class="price">¥${p.price}起</p>
    <p>${p.poem}</p>
    <p style="margin:12px 0;"><strong>规格：</strong>${p.size}</p>
    ${p.skus.map(s => `<span class="sku" onclick="alert('已选 ${s.s} ¥${s.p}')">${s.s} ¥${s.p}</span>`).join("")}
    <p class="note">材质信息待核实，以实际检测报告为准。不宣传未经证实的功效。</p>
    <button style="width:100%;margin-top:16px;padding:12px;background:var(--red);color:#fff;border:none;border-radius:6px;" onclick="alert('请添加客服微信咨询')">咨询顾问</button>
  `;
  document.getElementById("modal").style.display = "block";
}

document.querySelectorAll(".filter").forEach(b => b.onclick = () => {
  document.querySelectorAll(".filter").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  cat = b.dataset.cat;
  render();
});

document.querySelector(".close").onclick = () => document.getElementById("modal").style.display = "none";
window.onclick = e => { if (e.target.id === "modal") document.getElementById("modal").style.display = "none"; };

document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  alert("需求已提交，顾问将尽快联系您。");
  e.target.reset();
};

render();
