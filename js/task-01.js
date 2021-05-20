const categoriesEl = document.querySelectorAll('.item');
for (const el of categoriesEl) {
    let titleList = el.firstElementChild.textContent;
    console.log(`Категория: ${titleList}`);
    let lengthEl = el.lastElementChild.children.length;
    console.log(`Количество элементов: ${lengthEl}`);
};






