const allLiItems = document.getElementsByClassName("item");
console.log(`Number of categories: ${allLiItems.length}`);

Array.from(allLiItems).forEach(liItem => {
    const titleOfH2 = liItem.querySelector('h2').textContent;
    const liChild = liItem.querySelectorAll('li').length;
  
    console.log(`Категорія: ${titleOfH2}`);
    console.log(`Кількість елементів: ${liChild}`);
});
