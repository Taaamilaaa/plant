import { refs } from "./refs.js";


refs.modalAddGoodsBtn.addEventListener('click', addGoods);



function addGoods(e) {
    let elObj = refs.serchForm.elements
    let checkedItems = []
    for (let prop in elObj) {
       
        if (elObj[prop].checked) {
            checkedItems.push(elObj[prop].id)
        }
    }
    storagefilter(checkedItems);

}

function storagefilter(arr) {
    let goods = JSON.parse(localStorage.getItem("goodsId"))
    
    if (!goods) {
        localStorage.setItem('goodsId', JSON.stringify(arr));
       
    } else if (goods) {
        const allGoods = [...goods, ...arr]
        console.log(allGoods);
         localStorage.setItem('goodsId', JSON.stringify(allGoods));
    }
    

}

export function addGoodsFromList(e) {
    let arr = [];
    arr.push(e.currentTarget.id);

     storagefilter(arr) 
}