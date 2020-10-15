//write the functions using a sp syntax that is found from Common.js which is used in Nodejs also...
module.exports = (function(){
    let cart = [];//private data of the module
    //all functions are private to the module....
    function addItem(item){
        cart.push(item);
    }

    function get(){
        return cart;
    }

    return {
        add : addItem,
        getAll : get
    }
})();
//This is called as module creation thro' Anonymous function