const nameGirl = ''; // Thay tên người nhận nếu có
const giftUrl = '';
const eventName = `Nhấn vào đây nhé🤗`;
const titleCard = '8/3 Vui Vẻ';

const urlParams = new URLSearchParams(window.location.search);
const titleFromUrl = urlParams.get('title') || '';

// Danh sách ảnh tương ứng với tên
const imageMap = {
    'TranThu': './454668671_1209244586765450_8276260813791885045_n.jpg',
    'DoThu': './474478872_1827845191088347_8319876984335498387_n.jpg',
};

// Nội dung lời chúc
const text = {
    'TranThu': `
        🌸 Chúc bạn Thu có một ngày 8/3 thật rực rỡ, luôn xinh đẹp, hạnh phúc và tràn đầy năng lượng tích cực! ✨ 
        🌷 Chúc bạn luôn thành công, gặp nhiều may mắn, và có thật nhiều niềm vui trong cuộc sống.
        <br> 
        Chúc bạn luôn tự tin và vui vẻ nhé! 💕
        <br>
        💝 Happy Women's Day! 🎉🥰`,
    'DoThu': `
        🌸 Nhân ngày 8/3, chúc chị Thu có một ngày thật rực rỡ, luôn xinh đẹp và tràn đầy năng lượng tích cực! ✨
        🌷 Chúc chị tràn đầy niềm vui và thành công trong cuộc sống! 💖
        💐 Hãy luôn tự tin và giữ mãi nụ cười trên môi nhé!
        <br>
        💝 Happy Women's Day! 🎉💞🥰`,
};

// Kiểm tra nếu titleFromUrl có trong text, nếu không thì dùng nội dung mặc định
const contentCard = text[titleFromUrl] || `
    🌸 Chúc bạn có một ngày 8/3 thật rực rỡ, luôn xinh đẹp, hạnh phúc và tràn đầy năng lượng! ✨
    🌷 Chúc bạn luôn thành công, gặp nhiều may mắn, và có thật nhiều niềm vui trong cuộc sống.
    <br> 
    Chúc bạn luôn tự tin và vui vẻ nhé! 💕
    <br>
    💝 Happy Women's Day! 🎉🥰`;

// Lấy ảnh tương ứng, nếu không có thì dùng ảnh mặc định
const giftImage = imageMap[titleFromUrl] || './default-image.jpg';
const base64 = '';

// Xác định đường dẫn ảnh, nếu có base64 thì ưu tiên dùng base64
const giftImageBase64 = base64 ? `data:image/png;base64, ${base64}` : giftImage;

console.log(giftImageBase64);
