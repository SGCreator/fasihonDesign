const hide = (btnSel, itemsSel) => {
    const btn = document.querySelector(btnSel),
          items = document.querySelectorAll(itemsSel)
    
    function hideItems(){
        items.forEach(item => {
            item.style.display = 'none'
        })
    }
    hideItems()
    function showItems(){
        items.forEach(item => {
            item.style.display = 'block'
        })
    }

    btn.addEventListener('click', function(e){
        e.preventDefault()
        showItems()
        this.style.display = 'none'
    })
}
hide('.feature__btn', '.feature-container-item--hide');