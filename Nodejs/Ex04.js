module.exports.shoppingcart = (function(){
    let cart = [];//private data of the module
    //all functions are private to the module....
    function addItem(item){
        cart.push(item);
    }

    function get(){
        return cart;
    }

    function removeItem(id){
        for (let index = 0; index < cart.length; index++) {
            if(cart[i].id === id){
                cart.splice(i, 1);
                return;//exit the funtion....
            }
        }
    }

    return {
        add : addItem,
        getAll : get,
        delete : removeItem
    }

})();
exports.developedBy = "Phaniraj";
exports.developedOn = new Date();
exports.othersubModule = (function(){
    return{
        apple : "Apple123"
    }
})();
//Added at last