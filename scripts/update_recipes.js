import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const database = {
  man: [
    {
      id: "man_1",
      name: "Cá Bóp Kho Tộ Tiêu Xanh",
      type: "man",
      ingredients: [
        "400g cá bóp tươi thái lát dày",
        "2 nhánh tiêu xanh nguyên mâm",
        "3 củ hành tím, 4 tép tỏi, 2 quả ớt hiểm",
        "3 thìa canh nước mắm nhĩ ngon loại 40 độ đạm",
        "1.5 thìa canh đường đường thốt nốt",
        "2 thìa canh mỡ lợn (tóp mỡ)",
        "Hạt nêm, tiêu đen xay, nước màu dừa"
      ],
      steps: [
        "Sơ chế cá: Khử tanh cá bóp bằng nước muối và chút rượu trắng, rửa sạch, dùng khăn giấy thấm thật khô bề mặt thịt cá.",
        "Ướp cá: Ướp cá trong thấu với 1 thìa mắm nhĩ, 1 thìa đường, tiêu xay, và hành củ băm nhuyễn để tủ mát 30 phút cho thịt cá keo săn lại.",
        "Thắng nước màu: Dùng thố đất sét (tộ), làm nóng, cho mỡ lợn vào đun chảy sủi bọt, phi thơm tỏi băm và hành băm. Cho 1 xíu đường để lên màu cánh gián.",
        "Kho cá: Áp chảo sơ cá hai mặt cho thịt săn, sau đó đổ hỗn hợp mắm, đường, tiêu xanh, ớt hiểm đập dập vào. Thêm xíu nước sôi xâm xấp mặt cá.",
        "Hoàn thiện: Kho lửa riu riu khoảng 25-30 phút đến khi nước mắm sền sệt, kẹo lại, phủ bóng lấp lánh lên miếng cá. Rắc thêm tiêu sọ đen hoặc ớt xắt để dậy mùi."
      ],
      tips: "Vị cá bóp béo ngậy kết hợp vị cay nồng của tiêu xanh mọng nước sẽ bùng nổ hương vị. Kho bằng thố đất sẽ giữ nhiệt độ lâu hơn giúp gia vị dần thẩm thấu vào tầng sâu của sớ thịt.",
      time: "45 phút"
    },
    {
      id: "man_2",
      name: "Thịt Ba Chỉ Rang Cháy Cạnh Sốt Nước Mắm",
      type: "man",
      ingredients: [
        "400g thịt heo ba chỉ (lựa phần nhiều nạc, ít mỡ, rút sườn)",
        "3 củ hành tím, 1 củ tỏi, 1 nhánh gừng nhỏ",
        "1 khúc đầu hành lá, 3 trái ớt tươi",
        "Nước mắm nhĩ loại ngon, tương ớt gừng",
        "Đường kính, tiêu, bột ngọt"
      ],
      steps: [
        "Sơ chế: Rửa sạch thịt ba chỉ sơ qua nước sôi và gừng đập dập để bay mọi tạp mùi, thái miếng mỏng vừa ăn (không quá dày sẽ khó giòn rìa).",
        "Áp chảo tươm mỡ: Cho thẳng thịt vào chảo nóng không cần dầu. Dàn đều trên mặt chảo để thịt tự tươm mỡ ở lửa vừa. Đảo nhanh tay cho đến khi các rìa miếng thịt xém nhẹ bóng bẩy vàng ươm.",
        "Trút mỡ: Chắt bớt 80% phần mỡ tươm ở chảo ra chén để món ăn không bị ngấy.",
        "Áo xốt: Phi mỡ còn lại cùng hành tỏi đập dập (không băm nhuyễn tránh cháy đắng). Đổ chén xốt (3 mắm : 1.5 đường : 1 tương ớt : 1 ít tiêu) đảo đều cho sôi sủi bọt, sau đó lắc đều chảo.",
        "Hoàn thiện: Lắc đến khi xốt keo dính tệp lấp lánh vào từng sớ thịt, tắt bếp thái nốt phần đầu hành hoa và ớt tươi rải vào đảo để tỏa hương cay tíc tắc."
      ],
      tips: "Bí quyết mỹ vị nằm ở công đoạn tươm mỡ làm miếng ba chỉ khô giòn rìa nhưng vẫn giữ được độ mềm ẩm mượt trong phần nạc, xốt bám khít nhai giòn rụm trong vòm miệng.",
      time: "25 phút"
    },
    {
      id: "man_3",
      name: "Tôm Đất Rim Mặn Ngọt Mai Quế Lộ",
      type: "man",
      ingredients: [
        "350g tôm đất (hoặc tôm thẻ tươi sống, loại size nhỏ hoặc rảo)",
        "3 củ hành khô tỏi tía",
        "2 thìa canh dầu điều",
        "Nước mắm nhĩ 35 độ đạm",
        "Đường cát, 2 cọng hành lá tước sợi, 1 muỗng cafe riệu Mai Quế Lộ"
      ],
      steps: [
        "Làm sạch: Rửa tôm đất qua nước muối loãng, cắt râu, đầu nhọn (giữ nguyên vỏ để tạo độ giòn nức nở).",
        "Chiên giòn: Bắt chảo với mỡ nước/dầu điều đun lửa lớn, chiên áp chảo nhanh tôm giòn vỏ sau đó múc tôm ra giấy thấm bớt dầu.",
        "Chuẩn bị xốt: Chừa 1 ít mỡ trong chảo, khử hành tỏi thật băm, cho vào 2 muỗng nước mắm nhĩ, 1.5 muỗng đường, 1/2 thìa cà phê tiêu mịn và 1 xíu nước dùng đun keo sệt sệt.",
        "Rim quện: Trút tôm đã chiên vào đảo rền trên lửa nhỏ liêu xiêu, thêm vài giọt riệu Mai Quế Lộ vẩy đều tắp trên thành chảo cho dậy mùi phảng phất đặc trưng.",
        "Tắt bếp rắc tiêu: Kẹo tôm bốc khói ngi ngút, tắt bếp. Vỏ tôm chuyển đỏ gạch, phủ lớp caramel nâu bóng. Cắn vào giòn mẩy, ngọt lịm từ thịt tôm."
      ],
      tips: "Rượu Mai Quế Lộ chính là vũ khí bí mật giúp nâng tầm món tôm rim dân dã trở thành mỹ vị sang trọng chốn cung đình mảng hương.",
      time: "20 phút"
    },
    {
      id: "man_4",
      name: "Gà Ta Kho Nghệ Sả Củ Nén",
      type: "man",
      ingredients: [
        "1/2 con gà ta thả vườn (đùi và lườn, thịt dai chắc nhão ăn không đành)",
        "50g củ nén (hành tăm đặc sản miền Trung)",
        "2 củ nghệ tươi, 3 cây sả dạn",
        "Nước mắm nhỉ truyền thống (đặc nồng)",
        "Đường phèn hạt nhỏ, muối hột xốp, tiêu sọ nguyên hạt",
        "2 trái ớt sừng",
        "1 xíu cốt dừa béo phớt."
      ],
      steps: [
        "Sơ chế: Gà ta chà với muối hột, chanh và gắt chút rượu để tẩy. Chặt miếng vừa góc phần tư bao diêm.",
        "Giã gia vị: Củ nén, nghệ tươi xắt lát, sả lột lớp vỏ già, thái lát, giã dập tất cả trong cối đá cho tinh dầu hòa quyện bung nhụy.",
        "Ướp gà: Đem mớ cốt gia vị mới giã trộn cùng gà, thêm đường phèn dập, mắm nhỉ rưới đẫm, một xíu muối, để nghỉ tận 40 phút cho thấm đến tận tủy mỡ.",
        "Tao và Kho: Bắt cái nồi gang dày (hoặc niêu đất). Cho dầu phộng, đập thêm xíu củ nén vào tao đến khi tỏa mùi hương điếc mũi, trút gà vào đảo thật săn.",
        "Ninh liu riu: Chế nước xâm xấp hầm lửa liu riu (vào mùa chêm thêm một ít nước dão dừa tươi tùy khẩu vị), kho rút kiệt làm đọng lại thứ xốt óng màu vàng rực bẩy của nghệ."
      ],
      tips: "Vị cay the của nghệ tự nhiên và chất nén nồng lên sẽ khiến thịt gà ăn vào ấm bụng những chiều mưa, một sự hoàn hảo tinh túy phong vị miền Trung.",
      time: "50 phút"
    },
    {
      id: "man_5",
      name: "Mực Nhồi Thịt Sốt Cà Chua",
      type: "man",
      ingredients: [
        "400g mực ống cỡ vừa, tươi roi rói (nền da còn ánh lên nhấp nháy)",
        "150g nạc vai dăm băm (có vắt mỡ đan xen)",
        "Mộc nhĩ (nấm mèo), nấm hương ngâm nở mướt",
        "Miến dong chần mềm thái vụn, hành khô tỏi tía",
        "3 trái cà chua chín đỏ ươm",
        "Nước mắm, đường, tiêu đen, ngò rí, hành lá"
      ],
      steps: [
        "Làm nhân thịt mộc: Đem miến dong, mộc nhĩ, nấm hương xắt thật nhuyễn tơi. Trộn tụ mộc với thịt heo băm, nêm mắm, tiêu, 1 xíu dầu ăn đảo quyện quánh mướt.",
        "Làm sạch mực: Tuốt phần màng tím/da của mực để ăn dòn sực hơn (hoặc giữ lại tùy ý). Khéo tay dồn nhân thịt vào buồng mực (khoảng 3/4 bụng không để đụng, tránh khi hấp mực co rút làm bể bung nhân). Dùng tăm ghim chặt đầu túi.",
        "Hấp định hình: Đem các bé mực nhồi đi hấp cách thủy khoảng 10-12 phút cho thịt bên trong tơm chín, mực bên ngoài co lằn ranh sóng.",
        "Sốt cà chua: Phi hành khô tỏi, đổ cà chua luộc thái hạt lựu (đã lột vỏ) vào xào tạo sốt, nêm xíu nước ngâm nấm tơm lên và gia giảm mắm đường ra màu đỏ cam sánh mượt.",
        "Om hương: Trút mực vào sốt cà đun chừng 5 phút cho vỏ mực nhuộm màu rực đỏ, thẩm thấu tinh hoa chua ngọt, rắc hành ngò khi bắc xuống."
      ],
      tips: "Không nên sống nhồi rán trực tiếp sẽ dễ làm thịt trong còn đỏ cõi, bõng vỏ. Hấp định hình là bí tông chân truyền trong việc bảo lưu độ mọng nước.",
      time: "40 phút"
    },
    {
      id: "man_6",
      name: "Sườn Non Ram Nước Dừa",
      type: "man",
      ingredients: [
        "400g sườn non heo (chọn xương dẹt, thịt dầy dăm mỡ hồng)",
        "1 trái dừa tươi nước ngọt lịm",
        "Hành tím, tỏi, củ hành tây",
        "Nước màu dừa tự nhiên",
        "Nước mắm cốt nhĩ, đường, tiêu vỡ hạt"
      ],
      steps: [
        "Trần sườn: Chặt sườn miếng vuông cỡ hai đốt tay, chần qua nước sôi 1 phút cùng chút muối gừng lặt cho sạch bọt dơ, rửa sạch vớt ráo.",
        "Chiên sém bề mặt: Đun xíu dầu, áp chảo sườn đảo rền nhanh vừa phải sao cho những bờ rìa sườn rám một lớp vỏ khét nhẹ (Maillard reaction).",
        "Sốt quyện: Khử tỏi băm thơm vào chung, rưới vào nồi nước mắm, xíu tương ớt lóng lánh bột canh nhẹ tay đảo đều.",
        "Khóe om dừa: Đổ nước dừa ngập đều những rẻ sườn, nhỏ lửa liu riu, hãm vung nửa hé. Quá trình này giúp cốt dừa chuyển hóa đường thành lớp màng kẹo dính bọc sườn.",
        "Keo nước: Khi tinh dừa bốc hơi gần cạn, đọng thành loại xốt caramel quánh sệt kết tụ trên sườn bóng nhẫy, thả dăm khoanh hành tây vào tắt bếp."
      ],
      tips: "Khi cắn vào, cảm giác sườn mềm rệu từ bên trong xé tơi đong dính màng sệt ngọt đậm tự nhiên của nước dừa, mút trọn cả đốt xương quyến rũ.",
      time: "45 phút"
    },
    {
      id: "man_7",
      name: "Ếch Đồng Đồng Kho Sả Ớt",
      type: "man",
      ingredients: [
        "500g ếch đồng săn thịt, đùi to",
        "5 cây sả dạn củ tươi, 3 trái ớt sừng",
        "Hành tím, tỏi ta",
        "Bột nghệ xay, Dầu điều",
        "Nước mắm, cốt dừa, bột nêm, xíu đường"
      ],
      steps: [
        "Làm thịt ếch: Làm sạch ếch, lột bỏ da (hoặc rửa với rượu gừng mẻ nếu thích giữ da dai giòn). Chặt riêng phần đùi bụng, ướp cùng 1/2 tỏi sả băm, bột nghệ nêm nếm gia vị trước ngấm.",
        "Chiên qua: Bắt chảo với lượng dầu ngập nhẹ 1/3, thả nhẹ phần thịt ếch vào chiên chảo trong 5 phút để thịt săn quắt lại và ửng sắc vành vàng da.",
        "Kho cay sả ớt: Dùng nồi đất, phi thơm hành sả tỏi phi rộn rã bốc mùi the, cho ếch đã chiên vào đổ mắm đường tiêu và ớt xiêm xanh vào tẩm.",
        "Rót cốt dừa, ninh kẹo: Cho vài thìa cốt dừa / hoặc nước vào rim lửa bé giọt để sả tiệt ra hòa cùng gia giảm bao trọn miếng đùi ếch ngập ngụi."
      ],
      tips: "Thịt ếch đồng có bản chất ngọt bùi chắc tựa gà ta lai lươn cạn. Xào cho ngọn lửa mạnh táp qua da sẽ khiến ếch đanh hơn, cắn nghe phập phập.",
      time: "35 phút"
    },
    {
      id: "man_8",
      name: "Thịt Băm Chưng Mắm Ruốc Sả",
      type: "man",
      ingredients: [
        "300g thịt nạc dăm băm nhuyễn",
        "2 thìa canh mắm ruốc Huế đặc hạng",
        "2 cây sả băm nhuyễn vô hồi",
        "Hành tỏi băm, ớt hiểm xắt",
        "Đường, tương ớt, dăm miếng da heo phồng (tùy thích)"
      ],
      steps: [
        "Hòa ruốc: Pha 2 muỗng mắm ruốc với 2 thìa muỗng nước sôi nguội khuấy đánh tơi rã, thêm vào ít đường nhằm kìm lại hậu vị nồng mặn gắt của con ruốc.",
        "Xào mỡ hành sả: Dùng thìa mỡ lợn đun chảy nóng, xào ngộp sả, tỏi hành lên tới độ xém nhẹ thơm tỏa cả gian bếp.",
        "Tao thịt: Bỏ nạc dăm đánh tơi xào chín tươm nhẹ mỡ.",
        "Chưng quyện mắm ruốc: Đổ chén mắm ruốc đánh ngập vào cùng mớ thịt. Đun nhỏ lửa xào xào liên tục đến chừng keo sệt sệt, sả li ti ôm bóp lấy từng hạt thịt đẫm đìa vị mặn ngọt cay."
      ],
      tips: "Chỉ một góc chén nhỏ chưng lên, đi theo vài lát dưa leo, là đong bay cả nồi cơm khói bốc nghi ngút. Cực kì hao cơm chốn nhân gian nồng hưng.",
      time: "20 phút"
    }
  ],
  rau: [
    {
      id: "rau_1",
      name: "Rau Muống Xào Tỏi Mỡ Lợn",
      type: "rau",
      ingredients: [
        "1 bó rau muống nước non mướt thân giòn",
        "1 củ tỏi ta tép nhỏ nhiều tinh dầu",
        "2 muỗng canh đầy mỡ lợn đọng phi tóp tỏi",
        "Nước cốt mắm tỏi, hạt nêm tinh xíu"
      ],
      steps: [
        "Khâu chuẩn bị rau thần thánh: Lặt đi những lá dà và cọng cuống xơ cứng, ngâm muối rồi đem rửa. Vẩy ráo khô nước đến từng kẽ lá (tránh khi xào bị vữa nước ỉu).",
        "Trần sơ (tùy chọn): Nhúng nhẹ lốc xoáy lộn rau qua nước sôi vớt ra bát nước đá pha chanh lợt để phá enzym làm rau đen.",
        "Xào tỏi chảo gang lửa lớn ngọn: Đun chảo gang phả khói nóng đến ngưỡng, trút mỡ lợn tan chảy xèo lạo, đập bẹp đanh củ tỏi vào đảo sém cạnh.",
        "Quá trình sốc chảo: Cho thần tốc vắt rau vào xóc liên tục dưới ngọn lửa lớn bùng che góc chảo. Nêm xíu hạt nêm và 1 muỗng mắm vào. Cả quy trình không quá chậm trễ 80 giây đổ ra dĩa thẳng tắp."
      ],
      tips: "Linh hồn không thể thay thế là mỡ lợn và ngọn lửa hung bạo. Rau muống phải xào chín trong nháy mắt, màu xanh ngọc lục bồng độ giòn vỡ tan trong khoang miệng đê mê.",
      time: "5 phút"
    },
    {
      id: "rau_2",
      name: "Cải Thìa Xào Nấm Đông Cô Mỡ Hào",
      type: "rau",
      ingredients: [
        "1 bỏ cải thìa bẹ to bóng lá thẫm",
        "150g nấm đông cô tươi (nấm hương tươi) lọng túp",
        "Tỏi băm dập, Dầu hào loại sò điệp",
        "Muối, dầu mè, hạt nêm, bột năng"
      ],
      steps: [
        "Chuẩn bị: Cải lặt từng bẹ rọc nguyên, luộc sơ qua nước sôi chêm 1 thìa dầu ăn (giúp giữ bẹ bóng lưỡng). Nấm rửa êm cắt khứa cờ rô.",
        "Xào nấm thấm hương: Phi phiến tỏi xém lộng cọng vào phi thơm nấm, thêm độ lửa tỏa hương ngầy ngậy.",
        "Nước xốt hào: Hòa một thìa canh dầu hào đặc, xíu đường, vài giọt dầu mè, khuấy cùng mỏng chừng 1 thìa súp bột năng làm độ sánh liên kết.",
        "Ủ quyện cải xào nấm: Rải cải thìa trên mặt chảo, đắp nấm vào trên, tưới lớp xốt vào đun nhẹ trong 1 phút lăn tăn bao bọc lấp loáng lớp dạ minh châu."
      ],
      tips: "Món xào hoàng gia chay hay mặn đều mỹ miều. Dầu hào ngầy ngậy cùng hạt dẻ xốp của nấm hòa lẫn với bẹ cải thìa giòn nước thanh mát.",
      time: "15 phút"
    },
    {
      id: "rau_3",
      name: "Rau Dền Đỏ Luộc Chấm Kho Quẹt",
      type: "rau",
      ingredients: [
        "1 mớ rau dền đỏ tím non tơ",
        "Nguyên liệu làm kho quẹt: 50g mỡ phần thái hạt lựu, 30g tôm khô ngâm nở, hành tím, mắm nhĩ mặn, đường thốt nốt, tiêu xanh"
      ],
      steps: [
        "Rau luộc tinh sạch: Rửa kỹ các đống cát cuộn dưới lá úp. Bắt nồi nước thả chút muối, chờ sôi sục tung mới cho rau dền nhấn đầm, canh chừng một đảo vừa mềm tới nức lên vớt trải dàn cho nguội bớt.",
        "Làm Thổ Kho Quẹt: Lấy niêu đất nhỏ thắng phần tóp mỡ chín giòn, gạt chắt đi gần ít mỡ ngập. Cho tỏi hành phi dậy mùi vớt tôm khô xào thấm.",
        "Keo sệt Kho Quẹt: Chêm một chén nước mắm ngon tơi tả cùng hai cục đường thốt nốt nấu kẹo đen quắn lại đun liu riu, nước sấp mắm keo lại kết đong vừng mảng, điểm xuyết mấy sậy tiêu.",
        "Chấm mỹ thực: Gắp đũa rau dền mềm ủ đỏ son quyện ngập dưới đấy niêu nước kho quẹt mặn ngọt the cay cực kì kích thích tì vị."
      ],
      tips: "Món ăn chân quê mang hồn của tuổi thơ bờ đê, một miếng rau dền thanh mát thấm quẹt đậm đà, kéo lại cái nóng nực phai phôi của mùa hè oi.",
      time: "20 phút"
    },
    {
      id: "rau_4",
      name: "Đọt Su Su Xào Tỏi Rắc Tiêu",
      type: "rau",
      ingredients: [
        "1 mớ đọt luống su su non giòn lẩy tay gẫy",
        "Củ tỏi nhiều ánh gân đỏ",
        "Mỡ động vật hoặc dầu phộng lạc nguyên chất",
        "Mắm nêm nếm gia truyền"
      ],
      steps: [
        "Hái tước: Tước sạch phần xơ rễ bám quanh cuống đọt, chỉ nâng niu phần lõi giòn tươm nước ráo.",
        "Vò nhúm: Một chảo nóng khét rải mỡ động vật ươm cháy, đập nát nguyên tép tỏi quăng ập vào xèo lên xém vàng.",
        "Xào tốc độ cao: Ầm một phát ập đọt su su đảo chảo liên tục tung bốc lên ngọn lửa bén ngoài thành. Mùi cháy của mỡ, vị chát tự nhiên của tự tươm đọt su vỡ lăng.",
        "Thưởng lãm: Dọn ra điền đọt xanh um ươm nhẹ khói, ăn vào đọt mơn mởn giòn sần sật bùi bùi tinh túy cực độc đáo xứ núi."
      ],
      tips: "Chìa khóa ở thời điểm lửa xào, không đượm quá đà đọt sẽ bở xơ. Thời gian nằm trong chảo quyết định trọn sự sống còn ẩm thực.",
      time: "8 phút"
    },
    {
      id: "rau_5",
      name: "Khổ Qua Rừng Xào Trứng Tiêu Đen",
      type: "rau",
      ingredients: [
        "3 trái khổ qua đèo (kết cấu gân guốc, vị nhặng đắng)",
        "2 quả trứng vịt lai ngan lòng đỏ au",
        "Tỏi, hành lá",
        "Hạt tiêu đen đập vỡ, bột muối tinh, đường tỏi"
      ],
      steps: [
        "Giảm đắng tinh tế: Thái lát thật mỏng từng vòng khổ qua phơi sần, đem chần băng qua nước muối sôi dằng bột nêm một nốt nhẹ vớt ngâp nước đá (đáng nhớ lưu mảng giòn sực).",
        "Xào sơ: Phả tỏi xào nhanh nát khổ qua đèo hơi ửng xanh nhạt. Nêm tí teo mắm nhĩ kéo hậu vị.",
        "Tráng trứng quyện: Đánh nhuyễn hai quả trứng rưới ngửa đắp đọng lên mặt chảo khổ qua, không đảo vội. Chờ rìa trứng chín đông nổi gờ mốp mép mới xúc lên tơi.",
        "Xực thành quả: Trứng vịt mỡn chanh bao bấu lấy ngọn đắng khổ qua cân bằng lại thành một tổ hợp quyện đặc đầm, không chói mặn mà hậu bùi lan man."
      ],
      tips: "Khổ qua xào trứng hoàn chỉnh phải rõ ranh thớ: trứng ốm lấy rau, mềm đan xen giòn, hậu ngậy đập bay cảm giác chát đầu lưỡi dội vào cổ họng là ngọt lịm.",
      time: "15 phút"
    }
  ],
  canh: [
    {
      id: "canh_1",
      name: "Canh Chua Cá Lóc Kiểu Miền Tây / Nam Trung Bộ",
      type: "canh",
      ingredients: [
        "1 con cá lóc (chuối) đồng tầm 600g chắc sụn",
        "Trái me vắt, dứa (thơm), cà chua thẫm quả, đậu bắp xanh, bạc hà (dọc mùng), giá đỗ",
        "Rau ngò om (ngổ), ngò gai (mùi tàu), ớt sừng",
        "Tỏi băm phi vàng ruộm, nước mắm ngon, đường vàng, tiêu hột"
      ],
      steps: [
        "Sơ chế các loại độ chua: Dầm me vắt bằng nước nóng lấy cốt lịm tuột chua. Cà chua bổ cau, dứa cắt rẻ quạt. Dọc mùng bóp muối xả sạch mủ.",
        "Làm thịt cá lóc: Cắt khúc mỏng dẹp. Áp chảo cá cùng tỏi phi sém qua để loại triệt để dư âm mùi bùn, rút ra bát.",
        "Canh trào: Cho 1 ít tỏi vào nồi phi thơm dứa, đổ nước vào đun sôi bùng, rót nước cốt me và nêm đường vàng, muối, cân tỉ lệ 1.5 chua : 1 ngọt mặn thanh đầm.",
        "Cân chuyển: Thả trôi cá lóc đã chín phân vào nổi bọt. Sau 3 phút bỏ đậu bắp, cà chua, dọc mùng ninh đúng 2 phút rồi tắt bếp.",
        "Truyền thần: Quăng giá đỗ lặn ngửa. Ghiền mớ ngò om, ngò gai xắt kim. Ộp lên trên thìa dầu tỏi phi lóng lánh thơm váng sọc hồn quê."
      ],
      tips: "Tỉ lệ hoàn mỹ của một niêu canh chua là khi húp vào miếng đầu là thanh vị me chua vuốt lưỡi, nuốt trôi để lại hậu ngọt diệu mượt ngây ngất từ cá thơm tỏi. Ngò om phi dầu nén là điểm vương vấn.",
      time: "30 phút"
    },
    {
      id: "canh_2",
      name: "Canh Gà Tây Lá Giang",
      type: "canh",
      ingredients: [
        "400g gà ta lấy phần ức hoặc đùi dai chắc xương",
        "1 nạm lá giang tản to mướt (vò nát để bung vị chua)",
        "Sả cây dập, củ nén (hành tăm), ớt khô đâm nhuyễn",
        "Nước cốt xương hầm nhẹ"
      ],
      steps: [
        "Ngấm gia cầm: Ướp thịt gà khứa xương cùng mắm tiêu hành thấm rục chừng 30p.",
        "Xào săn bưng tỏa: Lửa riu, đảo xào gà thấm nện cùng củ nén, sả băm cho đến khi thớ thịt co căng bóp bó chặt ngạnh.",
        "Chế thanh dương: Đổ nước ấm xấp xâm đun liu riu mòn xương thêm mượt nước bọt chừng độ 15 phút.",
        "Thả lá giang vò móp: Thấy sôi bùng, thả nạm mớ lá giang được vò dập để chất chua hòa tan thanh bạch trôi bung vào nước cốt gà, điểm 3 cọng ngò ngai ớt hiểm nêm vừa giáng vị."
      ],
      tips: "Chất chua đọng của lá giang hoàn toàn khác me chua lõi bẳngng bẳng, nước giang mang một phong vị chua sảng khoái và kích hương khi cắn đi kèm giọt cốt gà bọc lấy.",
      time: "40 phút"
    },
    {
      id: "canh_3",
      name: "Canh Hến Thì Là Chùm Ruột Cà Chua",
      type: "canh",
      ingredients: [
        "200g thịt hến bãi bồi ngọt phảng phất",
        "2 quả cà chua bổ hạt cau",
        "1 nắm rau thì là nồng hăng phảng phất, 1 ít hành hoa",
        "Nước luộc hến để lắng trong vắt, nước mắm nhỉ pha ruốc"
      ],
      steps: [
        "Tao hến thơm ngút: Vớt hến vảy ráo, đun chảo hành phi thơm hất cẩm hến nổ xào râm ran đâm cho săn ngọt lùi tẩm chút nước mắm.",
        "Sắc cà chua đỏ: Gắn 1 quả cà chua phi dập nát tan thành chóp xốt màu quấc đỏ nung.",
        "Thơm ngát giọt lóng: Chế nước ngâm hến chắt trong veo vào hầm, nước dần ngả vàng thanh ngọt đốn lịm đọt lưỡi. Đợi sôi réo, thả phần cà dập hạt cau.",
        "Lan xa chân trời: Bắc xuống ném nhúm hạt tiêu vỡ và xắt lạt thớt thì là tươi thái trôi xuống quyệt qua tạo một màng cay nằng nặc cực nịnh mút."
      ],
      tips: "Nước hến trong dầm vắt chua mỏng manh của cà, hòa sút với độ nồng ấm của thì là khiến vị nhắp một ngụm xua tan mỏi mệt oi ả tức khắc.",
      time: "20 phút"
    },
    {
      id: "canh_4",
      name: "Canh KHoảng Khổ Qua Nhồi Thịt Mộc Nhĩ",
      type: "canh",
      ingredients: [
        "3 quả khổ qua gai nằng nặc vỏ nhằn màu xanh ngọc",
        "250g giò sống (mộc) đan xen thịt heo tươi quết dẻo",
        "50g nấm mèo (mộc nhĩ), dây hành lá rọc trụng mềm buộc túi",
        "Nước ninh xương heo dằm"
      ],
      steps: [
        "Mò ruột: Mổ phanh rọc xéo bụng nhét nạo sạch hết sợi rễ đỏ, trung chần phôi nước nóng giảo bỏ vị ướm đắng cực độ.",
        "Dập ngấn nhân nhồi: Nấm hương, gốc hành băm nhỏ. Quết đâm đều vào khối mộc giò sống bằng cối đá quết đều tới tận khi nảy dẻo phồng tay bám chắc chày. Nhồi cứng ngắc vào lòng ôm xâu chuỗi dây hành cài lại.",
        "Ngự lâm súp hầm: Tha nổi thõng từng trái lẳng hụp trong dòng nước xương sủi bọt tâm thanh. Hầm liu riu canh nhừ xương độ 40 phút cho rệu hẳn và cốt thịt đục dính màng quyện mâm.",
        "Hoàn tác: Nước canh chắt từ khổ qua mang màu ươm phớt dịu ngọt sâu hoắm, cắn xuyên mềm ngậy mộc bao vỏ chát đê mê."
      ],
      tips: "Khi hầm khổ qua nên để mở vung để màu canh khỏi bị xỉn thành úa và đắng trút ra tịnh. Để dẫu có nguội canh màng trên trôi vẫn cứ thanh lơi ngọt lợn.",
      time: "60 phút"
    },
    {
      id: "canh_5",
      name: "Canh Bí Đỏ Hầm Sườn Đậu Phộng",
      type: "canh",
      ingredients: [
        "300g bí đỏ hạt đậu sáp miệt dẻo",
        "200g sườn thăn non dính dải mỡ",
        "100g hạt đậu phộng non dã dập dã làm tư",
        "Ngò gai (Mùi Tàu), hành xắt nhỏ"
      ],
      steps: [
        "Tuôn đậu xốp sườn: Chần khử sườn. Giã đậu phộng hơi bể tan. Đem ninh hai ngự vị sườn đậu vào nồi trút nước ủ lửa mềm nhừ rơi rệu khoảng 30 phút rã rượi cốt tủy.",
        "Sáp bí đỏ ngấm: Bí đỏ xắt khối quân cờ khứa vung đập thả nhẹ trôi nổi chìm ngụp.",
        "Mềm tơi sánh đong: Hầm thêm 12 phủi phút. Khi mà cạnh sáp góc cạnh bí vơi mủn tròn viền, thứ cốt ngọt liệm bí và béo bùi từ hột đậu tươm quyện ra nồi một thứ nước mây vàng đục quánh ngất.",
        "Nêm ngò gai thanh tâm: Cho muối mắm vừa phải vớt vát độ the cay, tung rỏm ngò dăm lên múc tung chảo ngun ngút khói."
      ],
      tips: "Một món canh thuần hương vị dinh dưỡng nôn nao bùi ngậy không từ sữa, đậu phộng gõ dập vỡ tiết mỡ thực vật kết nạp sáp bí là cực tì phàm ăn sâu.",
      time: "45 phút"
    }
  ],
  phu: [
    {
      id: "phu_1",
      name: "Cà Pháo Muối Thổi Tỏi Ớt Giòn Tan",
      type: "phu",
      ingredients: [
        "300g cà pháo trắng đục chọn củ không điếc hay sâu",
        "Củ riềng thái phiến, tỏi ta và ớt hiểm băm xé",
        "Đường thốt, nước cốt chanh vắt, và nước mắm 20 độ đạm quện vắt"
      ],
      steps: [
        "Tẩy nhựa: Bổ cà ra làm nửa ngâm trực phân vào thau nước muối vát chanh nồng 30 phứt nhả ứ độc nhựa tránh thâm ngả đen chát.",
        "Hòa cốt chua the: Pha chế bát nước xốt cay nồng: Nước mắm, cốt chanh nhung đường đánh cho bọt lên keo thành mảng nhũ, nướng riềng lát, 1 ớn cay.",
        "Sóc váng rộn rạng: Vớt cà tẩm đều khô rốc trộn với xốt nhĩ riềng tỏi. Phủ hũ kính chẽn kín cho thấu độ 4-5 tiếng hoặc qua ngày sẽ nổ vị lộng.",
        "Đớp: Miếng chà nhâm nhi giòn rắc nổ trong họng, đậm mắm tỏi kích thức mọi gai giác dạ dày để húp trọn bát cháo thịt băm cơm lả."
      ],
      tips: "Dùng để ăn trôi bết cơm cháo tẻ mặn ngày rỗi rãi, tuyệt nghệ ở chỗ độ giòn vô cấu phảng nực hương tỏi lồng.",
      time: "30 phút (trộn) + 1 ngày (muối)"
    },
    {
      id: "phu_2",
      name: "Mắm Dưa Đèo Vị Cốt Ruốc Nam Bộ",
      type: "phu",
      ingredients: [
        "1 hũ dưa đèo (dưa gang đèo nhỏ xít múi)",
        "Nửa dứa dầm tơi xơ nhuyễn, 5 Trái ớt sừng phới cối tơi tả, củ tỏi",
        "Mắm nêm nguyên cốt lứt của thợ rèn cá cơm"
      ],
      steps: [
        "Hóa dưa nhỏ: Thái dưa thành phên nan quạt ngang giòn sật.",
        "Pha Mắm Nêm đục: Lấy nguyên lòng mắm nêm đổ ra chén giã hòa với dứa xay dập nát chua êm, điểm xuyết đượng mật khử hẳn vị tanh nồng tanh.",
        "Tụ mảng: Cuộn chung dưa cắn với nước mắm nêm chưng hòa để nồng cháy ngập ngụi sau 3 lớp tỏi phi ngầu.",
        "Khoái lạp: Kẹp chả lụa đệm sần sật mơn mởn nhai đau quẩy điếc lổ mũi."
      ],
      tips: "Mắm nêm pha dứa xoa dịu đi hậu tanh và mang một mùi ngái lên chín cây làm mảng hương chua cay mặn trổ thiên hoa.",
      time: "15 phút"
    },
    {
      id: "phu_3",
      name: "Tép Dong Rang Khế Chua Cốt Vừa",
      type: "phu",
      ingredients: [
        "200g tép sông nhỏ tươi nhẩy hồng",
        "1 quả khế chua gắt, hành tăm",
        "Dầu ăn, Nước mắm nhĩ mặn gắt."
      ],
      steps: [
        "Trời nóng tép nhẩy: Cắt bỏ vể quăng đầu nhọn râu tép cho mướt thân.",
        "Cân hương khế: Thái khế thành 5 cánh hoa dẹp lóng mảng. Khử tỏi chảo xẹt tao khế vắt chút nước cốt.",
        "Rim quặp cào chảo: Bật thốc tép vào rang đảo cho vỡ gạch đỏ ửng thấm gia vị đường dẫu, rút khô chảo không dính 1 giọt.",
        "Lá chanh phủi rưới: Tép tươm mật giòn bục tan lả khéo với mùi mặn nôn của mỡ mị cọp nướng sệt vào xúi khế."
      ],
      tips: "Mê đắm giòn tan kích độ rền. Nó mặn ngót đến độ nhóp nhép ăn không cũng thành món cỗ lửng lạ lẫm.",
      time: "15 phút"
    },
    {
      id: "phu_4",
      name: "Chè Trôi Nước Lõi Đậu Xanh Đánh Dừa Mè",
      type: "phu",
      ingredients: [
        "200g bột nếp xay mịn ướt phơi khô ráo",
        "100g đậu xanh bóc vỏ hấp vàng nhuyễn, đường thốt, gừng củ xắt mỏng",
        "Nước cốt dừa lon rã, vừng mè rang chín"
      ],
      steps: [
        "Đánh nhân lịm: Sên đậu phới dừa trộn sệt mịn nặn bóng những viên tròng nhỏ nằm lặn khủy tay.",
        "Bao áo khỏa vỏ: Nhồi nước ấm trũng bột thành mây xốp ướt bao lấy nhân đậu đắp phom xoa tròn như thạch bi. Luộc phập phồng lổi lúc bập chín.",
        "Cốt đường gừng ấm: Đun nước sánh cùng bánh đường mật, quăng lốm đốm cọng gừng thái xéo cay gắt quyện nặn tinh chất ngọt lịu đầm.",
        "Chan tưới váng dừa: Gắp viên nhỏ bành tô rót kẹo nước đường đẫm lên rưới sốt cốt dừa mảy dẻo phớt màng, cắn phập màng dẻo lan tận tâm sen bùi thanh đạm bừng hương."
      ],
      tips: "Cực ẩm thực tráng miệng sau chuỗi cỗ xáo xào mặn ngợp. Xua lạnh gừng kéo vị giác về sự thư thả tĩnh mịch đượm đà hồn Nam.",
      time: "40 phút"
    },
    {
      id: "phu_5",
      name: "Bánh Tráng Nướng Mắm Ruốc Mỡ Hành Quẹt Ngò",
      type: "phu",
      ingredients: [
        "5 xấp Bánh tráng gạo mỏng rắc mè giòn",
        "Mắm ruốc đâm bông, Top mỡ ba chỉ xắt",
        "Trứng cút đánh bông, Hành tước sợi, tép khô rang khô nổ."
      ],
      steps: [
        "Lên lò than hoa: Quạt than hồng rực nung lạch tành sọc nướng cháy. Lắp bánh tráng khum nếp.",
        "Phết vũ lân: Dùng chổi lan trét một dải nhẹ ruốc mỏng loe ra rìa góc bánh lăng ngập váng mùi xém biển, đặp 2 trái trứng cút phếch tung tóe phả mặt xỉn dính nhị vàng.",
        "Rắc gia bảo: Kép xóp mỡ đọng teo ủ, tung hoa xoắn vài rọn tép bò khô nảy gãy, ụp phết tung tóe mỡ hành trứ đong vung.",
        "Quặn cuốn/gấp kẹp: Khi rìa phồng cháy khét nhẹ 1 gờ, lật gập xếp quải tròn mỏng vỏ rẽ vụn bóc đưa xống. Tan vỡ kịch kịch, ngọt béo giòn um nức lòng."
      ],
      tips: "Rụp rụp một miếng âm vang vui tai, hớp một ngụm nhân mặn trứng quyện ruốc đong đầy xao xuyến tuổi hồi ức chốn chợ chiều lộng gió.",
      time: "10 phút"
    }
  ]
};

const output = [...database.man, ...database.rau, ...database.canh, ...database.phu];

const fileData = JSON.stringify(database, null, 2);
const outputPath = path.join(__dirname, '..', 'data', 'recipes.json');

fs.writeFileSync(outputPath, fileData, 'utf-8');
console.log(`Đã tạo thành công ${output.length} món ăn CỰC PHẨM vào database!`);
