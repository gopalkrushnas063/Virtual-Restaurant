let menu = [
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Fruit-Maple-Oatmeal-1:product-header-mobile?wid=768&hei=443&dpr=off",
    name: "Fruit & Maple Oatmeal",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-HASH-BROWNS-1:product-header-mobile?wid=768&hei=443&dpr=off",
    name: "Hash Browns",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Burrito-1:product-header-mobile?wid=768&hei=443&dpr=off",
    name: "Sausage Burrito",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Big-Breakfast-with-Hotcakes-Regular-Size-Biscuit-1:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "Big Breakfast® with Hotcakes",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sausage-Egg-Cheese-McGriddles:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "Sausage, Egg & Cheese McGriddles®",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-apple-fritter-bakery:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "Apple Fritter",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-blueberry-muffin-bakery-mcd:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "Blueberry Muffin",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-cinnamon-roll-mcbakery:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "Cinnamon Roll",
  },
  {
    image:
      "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fries-medium:product-header-mobile?wid=768&hei=441&dpr=off",
    name: "World Famous Fries®",
  },
];

displayFood(menu);

function displayFood(menu) {
  menu.forEach(function (el) {
    let box = document.createElement("div");

    let pic = document.createElement("img");
    pic.src = el.image;

    let name = document.createElement("h2");
    name.innerText = el.name;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    let btn = document.createElement("button");
    btn.innerText = "Order Now";
    btn.addEventListener("click",orderFun);

    box.append(pic,checkbox, name, btn);
    document.querySelector("#food_section").append(box);
  });




  //.................Promise Part.......................
    function orderFun(){
        return true;
    }

    let order_promise = new Promise(function(resolve,reject){
        let order = orderFun();

        setTimeout(function(){
            if (order){
                resolve("Order Successful");
            }else{
                reject("Try again later");
            }
        },2000)
    })


    console.log(menu)
}
