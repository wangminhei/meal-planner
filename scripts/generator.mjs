import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const database = {
  man: [],
  rau: [],
  canh: [],
  phu: []
};

// 1. Phân loại Món Mặn
const proteinsMan = ["Cá ngừ", "Cá bạc má", "Cá thu", "Cá chai", "Cá nục", "Cá bóp", "Cá lóc", "Thịt heo ba chỉ", "Sườn non", "Gà ta", "Tôm sú", "Tôm đất", "Mực ống", "Mực cơm", "Trứng vịt", "Thịt bò", "Ếch đồng", "Sườn sụn", "Thịt băm", "Cá chình", "Cá dìa", "Cá hố", "Ghẹ nhàn", "Ốc móng tay", "Tôm càng xanh", "Chả lụa", "Chả cá", "Trứng cút"];
const methodsMan = [
  { name: "kho tiêu", tip: "Ở miền Trung, kho tiêu dùng nhiều ớt sừng cắt lát, nước mắm mặn đậm đà, ít ngọt, kho đến khi keo lại.", time: "40 phút" },
  { name: "kho tộ", tip: "Món kho tộ kiểu Nam Trung Bộ dùng mắm nguyên chất, phi mỡ hành thật thơm trước khi kho.", time: "45 phút" },
  { name: "rim mặn ngọt", tip: "Rim mặn ngọt cần cân bằng đường và mắm nhĩ, đun sôi liu riu cho thấm đều.", time: "30 phút" },
  { name: "xào sả ớt", tip: "Sả băm nguyễn, ớt xiêm xanh đập dập là chuẩn bài xào sả ớt miền Trung.", time: "25 phút" },
  { name: "chiên nước mắm", tip: "Chiên nước mắm phải giòn tan bên ngoài, hòa nước mắm tỏi ớt sệt sệt rưới lên trên.", time: "20 phút" },
  { name: "hấp hành gừng", tip: "Hấp vừa chín tới để giữ nguyên độ ngọt, chấm kèm mắm gừng đâm nhuyễn.", time: "25 phút" },
  { name: "kho mắm ruột", tip: "Hương vị Mắm ruột là đặc trưng Nam Trung Bộ, thơm lừng và cực kì tốn cơm.", time: "40 phút" },
  { name: "nướng mắm ớt", tip: "Nướng than hoặc lò, dùng hỗn hợp mắm nhĩ, ớt xiêm xanh tẩm ướp.", time: "35 phút" }
];

let idMan = 1;
for (const p of proteinsMan) {
  for (const m of methodsMan) {
    if (p.includes("Trứng") && (m.name.includes("kho mắm") || m.name.includes("hấp hành"))) continue;
    if (p.includes("Cá") && m.name === "xào sả ớt") continue;
    
    database.man.push({
      id: `man_${idMan++}`,
      name: `${p} ${m.name}`,
      type: "man",
      ingredients: [`400g ${p.toLowerCase()}`, "Hành tím, tỏi, ớt xiêm xanh", "Nước mắm nhỉ chuẩn vị, đường, tiêu, hạt nêm"],
      steps: [
        `Sơ chế sạch ${p.toLowerCase()}, để ráo nước. Bước sơ chế người miền Trung thường rửa qua rượu gừng để khử mùi tanh.`,
        `Ướp ${p.toLowerCase()} với mắm, xíu đường, hành tỏi ớt băm trong 15-30 phút.`,
        `Cho dầu ăn và đường vào chảo để thắng màu (màu caramel). Khi lên màu, phi thơm hành tỏi.`,
        `Tiến hành ${m.name} cho đến khi món ăn chín đều, tỏa mùi thơm đặc trưng.`
      ],
      tips: m.tip,
      time: m.time
    });
  }
}

// 2. Phân loại Món Rau
const veggies = ["Rau muống", "Rau dền", "Cải xanh", "Cải ngọt", "Bắp cải", "Bông cải xanh", "Đậu cô ve", "Đậu bắp", "Bí đỏ", "Bầu", "Mướp", "Khổ qua", "Đọt bí xào", "Hoa thiên lý", "Bông bí", "Rau tần ô", "Rau lang", "Măng tây", "Giá hẹ"];
const methodsRau = [
  { name: "xào tỏi", tip: "Rau xào tỏi đập dập, mỡ lợn sẽ làm món rau bóng và thơm hơn nhiều so với dầu thực vật.", time: "10 phút" },
  { name: "xào dầu hào", tip: "Đảo nhanh tay với lửa lớn, nêm mắm và chút hạt nêm chứ ít khi dùng đường.", time: "12 phút" },
  { name: "luộc chấm mắm nêm", tip: "Luộc vừa chín tới, giữ được độ giòn. Bí quyết là mắm nêm Nam Trung Bộ pha chanh tỏi ớt dầm.", time: "15 phút" },
  { name: "luộc chấm mắm ruốc", tip: "Chấm mắm ruốc xào sả tỏi đậm vị mặn ngọt cay xé lưỡi.", time: "15 phút" },
  { name: "hấp", tip: "Giữ gần như toàn bộ độ ngọt tự nhiên của rau.", time: "15 phút" },
  { name: "xào thịt băm", tip: "Xào thịt băm trước cho tươm mỡ, sau đó trút rau vào đảo đều múc ra đĩa liền.", time: "15 phút" }
];

let idRau = 1;
for (const v of veggies) {
  for (const m of methodsRau) {
    database.rau.push({
      id: `rau_${idRau++}`,
      name: `${v} ${m.name}`,
      type: "rau",
      ingredients: [`1 bó/trái ${v.toLowerCase()}`, (m.name.includes("xào") ? "Tỏi băm" : "Nước dùng luộc")],
      steps: [
        `Rửa sạch ${v.toLowerCase()}, lặt những khúc non, ngâm qua nước muối loãng.`,
        m.name.includes("xào") 
          ? "Bắt chảo nóng, phi thơm tỏi hoặc mỡ hành, trút rau vào đảo nhanh tay xèo xèo." 
          : "Đun sôi nước, thả rau vào luộc. Thêm xíu muối vào nước luộc giữ màu xanh cho rau.",
        "Vớt rau ra đĩa ngay khi vừa chín tới để giữ độ giòn."
      ],
      tips: m.tip,
      time: m.time
    });
  }
}

// 3. Phân loại Món Canh
const broths = ["nấu ngót", "nấu nấm", "nấu tôm", "nấu cá băm", "nấu thịt băm", "nấu ngao (chíp chíp)", "chua lá dang", "chua me", "hầm xương"];
const canhBase = ["Cải xanh", "Rau dền", "Mồng tơi", "Bí đao", "Bầu", "Bí Đỏ", "Rau ngót", "Rừng chua", "Cà chua thơm", "Rong biển", "Hoa thiên lý", "Khoai mỡ", "Khoai sọ", "Cải bắp", "Đọt khổ qua", "Rau tập tàng"];

let idCanh = 1;
for (const b of canhBase) {
  for (const br of broths) {
    if (br.includes("chua") && !["Cà chua thơm", "Rừng chua", "Ngao"].some(x => b.includes(x)) && b !== "Cá lóc") continue;
    
    database.canh.push({
      id: `canh_${idCanh++}`,
      name: `Canh ${b.toLowerCase()} ${br}`,
      type: "canh",
      ingredients: [`200g ${b.toLowerCase()}`, `Nguyên liệu phụ để ${br}`, "Hành lá, ngò rí", "Gia vị tự nhiên"],
      steps: [
        `Sơ chế ${b.toLowerCase()} sạch sẽ, cắt khúc vừa ăn.`,
        `Phi thơm củ nén (nếu là miền Trung hay dùng củ nén thay hành tím) với ít dầu ăn.`,
        `Cho nguyên liệu ${br} vào xào săn, đổ nước dùng đun sôi.`,
        `Nêm nước mắm, xíu muối, bột ngọt. Cuối cùng thả ${b.toLowerCase()} vào, sôi bùng thì tắt bếp. Cắt hành ngò.`
      ],
      tips: "Người Nam Trung Bộ hay dùng củ nén (hành tăm) để nêm canh, khử mùi tanh cực kỳ tốt.",
      time: "20 phút"
    });
  }
}

// 4. Phân loại Món Phụ
const sides = [
  "Cà pháo muối chua mặn", "Dưa cải muối chua", "Kim chi dưa chuột", "Đu đủ ngâm chua ngọt", 
  "Mắm dưa đèo", "Mắm cà miền trung", "Mắm nêm pha sẵn", "Mắm ruột ớt dầm", "Nước mắm tỏi ớt nguyên chất",
  "Tráng miệng: Chè hạt sen", "Tráng miệng: Sương sáo", "Tráng miệng: Trái cây theo mùa", "Tráng miệng: Sữa chua nhà làm",
  "Tráng miệng: Bánh tráng nướng mắm ruốc", "Rau sống mắm nêm", "Mắm cái cá cơm", "Nước mắm gừng", 
  "Tráng miệng: Bánh in", "Tráng miệng: Bánh tổ", "Tráng miệng: Rau câu dừa", "Tráng miệng: Chè đỗ đen múc đá", 
  "Tráng miệng: Bánh ít lá gai", "Tráng miệng: Bánh xoài", "Lòng xào nghệ mực mặn", 
  "Tráng miệng: Bánh đậu xanh nướng", "Mực ngào tỏi ớt", "Tép ram mặn", "Tráng miệng: Chè chuối nướng", 
  "Tráng miệng: Sương sa hạt lựu", "Tráng miệng: Dưa hấu mát lạnh", "Tóp mỡ kho quẹt xào hành", "Mắm tôm chua", "Cà dĩa muối", 
  "Trái vả cuốn thịt", "Gié bò kèm", "Bánh đa nướng", "Măng chua ngâm tỏi ớt", "Hành chua ngâm", "Dưa giá", 
  "Kiệu chua ngọt", "Dưa chua ngâm nước mắm", "Tráng miệng: Chè thúng", "Tráng miệng: Chè bánh lọt", 
  "Tráng miệng: Bánh thuẫn", "Tráng miệng: Bánh nổ", "Tráng miệng: Mít hông", "Tráng miệng: Đậu ván xào", "Mắm sò Lăng Cô"
];

let idPhu = 1;
for (const s of sides) {
  // Multiply side variations to reach good numbers
  database.phu.push({
    id: `phu_${idPhu++}`,
    name: s,
    type: "phu",
    ingredients: [`Nguyên liệu chuẩn bị ${s.toLowerCase()}`],
    steps: [
      "Món phụ chuẩn bị sẵn hoặc thực hiện nhanh gọn để ăn kèm chống ngán.",
      "Đối với nước chấm: Dùng tay băm tỏi ớt, pha chút chanh đường sao cho nổi trên mặt là dĩa mắm đẹp.",
      "Đối với dưa muối: Có thể mua sẵn hoặc muối từ hôm trước 1-2 ngày."
    ],
    tips: "Món ăn kèm (mắm, dưa chua, ớt dầm) là linh hồn bữa cơm miền Trung.",
    time: "5 phút"
  });
}

// Balance array lengths if needed simply by looping back some.
const output = [...database.man, ...database.rau, ...database.canh, ...database.phu];

const fileData = JSON.stringify(database, null, 2);
const outputPath = path.join(__dirname, '..', 'data', 'recipes.json');

if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, fileData, 'utf-8');
console.log(`Đã tạo thành công ${output.length} món ăn vào database! (Trong đó: Mặn=${database.man.length}, Rau=${database.rau.length}, Canh=${database.canh.length}, Phụ=${database.phu.length})`);
