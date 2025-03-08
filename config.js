const nameGirl = ''; // Thay tên người nhận nếu có
const giftUrl = 'http://nodemy.vn';
const eventName = 'Chúc Mừng 8/3';
const titleCard = '8/3 Vui Vẻ';

const urlParams = new URLSearchParams(window.location.search);
const titleFromUrl = urlParams.get('title') || '';
const imageMap = {
    'TranThu': './454668671_1209244586765450_8276260813791885045_n.jpg',
    'DoThu': './474478872_1827845191088347_8319876984335498387_n.jpg',
};

const text = {
    'TranThu': 'Trần Thu',
    'DoThu': 'Đỗ Thu',
}

const contentCard = `
🌸 Chúc chị ${text[titleFromUrl]} có một ngày 8/3 thật rực rỡ, luôn xinh đẹp, hạnh phúc và tràn đầy năng lượng! ✨ 
🌷 Chúc chị luôn thành công, gặp nhiều may mắn, và có thật nhiều niềm vui trong cuộc sống.
<br> 
Chúc chị luôn tự tin và vui vẻ nhé! 💕
<br>
💝 Happy Women's Day! 🎉🥰`;

const giftImage = imageMap[titleFromUrl] || imageMap['default'];
const base64 = '';

const giftImageBase64 = base64 ? `data:image/png;base64, ${base64}` : giftImage;

console.log(giftImageBase64);

