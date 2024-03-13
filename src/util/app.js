function getLocalStorageItems() {
  let getLOcalCart=  localStorage.getItem('cart')
    if (getLOcalCart) {
        return JSON.parse(getLOcalCart)
    }
    return []
}


// document.getElementById('l').previousElementSibling


function setLocalStorageItems(value) {
    let setLocalStoItem=JSON.stringify(value)
    localStorage.setItem('cart',setLocalStoItem)
}

function addTocart(id) {
   let getlocalItemValueArray=getLocalStorageItems()
    getlocalItemValueArray.push(id)
    setLocalStorageItems(getlocalItemValueArray)
}

  function removeData(rm) {
    let stor=getLocalStorageItems()
    // console.log( stor.includes(rm));
    if (stor.includes(rm)) {
        console.log(rm);
        let r=stor.indexOf(rm)
        stor.splice(r,1)
        console.log(stor);

    }
    setLocalStorageItems(stor)
   
  }
export {addTocart,setLocalStorageItems,getLocalStorageItems,removeData}