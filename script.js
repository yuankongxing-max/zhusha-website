const products = [
  { id:1, name:"天然小晶体砂闪光珠手串", category:"手串", price:169, image:"images/bracelet_elegant.jpg", desc:"珠面闪光效果，日常佩戴优雅。", size:"6mm ¥169 / 8mm ¥289 / 10mm ¥399", skus:[{size:"6mm",price:169},{size:"8mm",price:289},{size:"10mm",price:399}] },
  { id:2, name:"天然小晶体砂苹果珠手串", category:"手串", price:359, image:"images/bracelet_elegant.jpg", desc:"苹果珠造型，精致典雅。", size:"7×8mm ¥359 / 10×11mm ¥670", skus:[{size:"7×8mm",price:359},{size:"10×11mm",price:670}] },
  { id:3, name:"天然小晶体砂光面圆珠手串", category:"手串", price:169, image:"images/bracelet1.jpg", desc:"光面圆珠，多尺寸可选。", size:"6mm ¥169 至 16mm ¥1158", skus:[{size:"6mm",price:169},{size:"8mm",price:289},{size:"10mm",price:439},{size:"12mm",price:699},{size:"14mm",price:938},{size:"16mm",price:1158}] },
  { id:4, name:"天然小晶体砂5mm多圈手串", category:"手串", price:129, image:"images/bracelet_elegant.jpg", desc:"5mm多圈设计，灵活搭配。", size:"单圈 ¥129 / 双圈 ¥239 / 三圈 ¥359", skus:[{size:"单圈",price:129},{size:"双圈",price:239},{size:"三圈",price:359}] },
  { id:5, name:"天然小晶体砂祈福吊坠", category:"吊坠", price:149, image:"images/pendant_elegant.jpg", desc:"祈福寓意，精雕工艺。", size:"17.5×20×13mm ¥149", skus:[{size:"17.5×20×13mm",price:149}] },
  { id:6, name:"天然小晶体砂观音吊坠", category:"吊坠", price:659, image:"images/pendant_elegant.jpg", desc:"观音造型，不含项链绳。", size:"63×33×9mm ¥659", skus:[{size:"63×33×9mm",price:659}] },
  { id:7, name:"天然小晶体砂天珠吊坠", category:"吊坠", price:449, image:"images/pendant1.jpg", desc:"天珠造型，不含项链绳。", size:"42×18mm ¥449", skus:[{size:"42×18mm",price:449}] },
  { id:8, name:"天然砂平安无事牌吊坠", category:"吊坠", price:289, image:"images/pendant_elegant.jpg", desc:"平安无事牌，多版本可选。", size:"小版¥289 / 中版¥539 / 大版¥799", skus:[{size:"小版 31×24×10",price:289},{size:"中版 48×29×7",price:539},{size:"大版 50×35×9",price:799}] },
  { id:9, name:"天然小晶体砂佛公吊坠", category:"吊坠", price:149, image:"images/pendant_elegant.jpg", desc:"佛公造型，不含项链绳。", size:"小版¥149 / 大版¥239", skus:[{size:"小版 27×25×7.5",price:149},{size:"大版 31×29×10",price:239}] },
  { id:10, name:"天然小晶体砂貌貅吊坠", category:"吊坠", price:589, image:"images/pendant_elegant.jpg", desc:"貌貅造型，不含项链绳。", size:"36×25×20mm ¥589", skus:[{size:"36×25×20mm",price:589}] },
  { id:11, name:"天然小晶体砂平安扣吊坠", category:"吊坠", price:279, image:"images/pendant1.jpg", desc:"平安扣，不含项链绳。", size:"30×9mm ¥279", skus:[{size:"30×9mm",price:279}] },
  { id:12, name:"天然胭脂砂耳饰合集", category:"耳饰", price:159, image:"images/earrings_elegant.jpg", desc:"麦穗/圆珠/葫芦多种款式。", size:"麦穗¥189 / 圆珠¥159 / 葫芦¥209", skus:[{size:"麦穗款",price:189},{size:"圆珠款",price:159},{size:"葫芦款",price:209}] },
  { id:13, name:"天然胭脂砂耳钉合集", category:"耳饰", price:39, image:"images/earrings_elegant.jpg", desc:"国标纯银镶嵌，多规格。", size:"6mm¥39 / 8mm¥59 / 双珠¥189", skus:[{size:"6mm",price:39},{size:"8mm",price:59},{size:"双珠8×10",price:189}] }
];

let currentCat = "全部";

function renderProducts() {
  const grid = document.getElementById("product-grid");
  const list = currentCat === "全部" ? products : products.filter(p => p.category === currentCat);
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <img src="${p.image}" alt="${p.name}">
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="price">¥${p.price}起</div>
      </div>
    </div>
  `).join("");
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h2>${p.name}</h2>
    <p class="price">¥${p.price}起</p>
    <p>${p.desc}</p>
    <p><strong>规格：</strong>${p.size}</p>
    <div class="sku-list">
      ${p.skus.map(s => `<div class="sku-item" onclick="alert('已选择 ${s.size} ¥${s.price}')">${s.size} ¥${s.price}</div>`).join("")}
    </div>
    <p class="note">材质信息待核实，以实际检测报告为准。不宣传未经证实的功效。文化表达与客观功效已区分。</p>
    <button class="btn-primary" style="margin-top:20px;width:100%" onclick="alert('咨询功能：请添加客服微信进一步沟通')">咨询顾问</button>
  `;
  modal.style.display = "block";
}

document.querySelectorAll(".categories a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    document.querySelectorAll(".categories a").forEach(x => x.classList.remove("active"));
    a.classList.add("active");
    currentCat = a.dataset.cat;
    renderProducts();
  });
});

document.querySelector(".close").onclick = () => document.getElementById("modal").style.display = "none";
window.onclick = e => { if (e.target.id === "modal") document.getElementById("modal").style.display = "none"; };

document.getElementById("custom-form").onsubmit = e => {
  e.preventDefault();
  alert("需求已提交，顾问将尽快与您联系。");
  e.target.reset();
};

renderProducts();
