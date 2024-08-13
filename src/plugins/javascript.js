//ハンバーガーメニュー押下のナビゲーション表示・非表示
let hamburgerEle = document.querySelector('.hamburger');
let grobalMenuEle = document.querySelector('.globalMenuSp');
hamburgerEle.addEventListener('click', () => {
    if (hamburgerEle.classList.contains('active')) {
        hamburgerEle.classList.remove('active');
        grobalMenuEle.classList.remove('active');
    } else {
        hamburgerEle.classList.add('active');
        grobalMenuEle.classList.add('active');
    }
});