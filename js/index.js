//**********PRODUCT*************//
const productsCoffee=[
    
    {id:`BC900`,
    type: `Brewed-Coffees`,
    img: `img/product0.png`,
    name: `Caffé Misto`,
    description: `A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink remarkably mixed.`,
    priceOld: `2.99`,
    priceNew:`1.99`,
    rating:`3`,
    Calories:`110`,
},
    {id:`BC901`,
    type: `Brewed-Coffees`,
    img: `img/product1.jpeg`,
    name: `True North Blend™ Blonde Roast`,
    description: `Lightly roasted coffee that's soft, mellow and flavourful. Easy-drinking and delicious with milk, sugar or flavours like vanilla, caramel or hazelnut.`,
    priceNew: `3.99`,
    rating:`4`,
    Calories:`130`
},

    {id:`BC902`,
    type: `Brewed -Coffees`,
    img: `img/product2.jpg`,
    name: `Decaf Pike Place® Roast`,
    description: `Our signature medium roasted coffee with a smooth, balanced and rich flavour, minus the caffeine.`,
    priceNew: `1.99`,
    rating:`4`,
    Calories:`70`
},
  
    {id:`BC903`,
    type: `Brewed-Coffees`,
    img: `img/product3.jpg`,
    name: `Pike Place® Roast`,
    description: `Our signature medium-roasted with a smooth, balanced and rich flavour, this is the perfect everyday coffee in a cup.`,
    priceNew: `1.79`,
    rating:`4`,
    Calories:`60`
},

    {id:`BC904`,
    type: `Brewed Coffees`,
    img: `img/product4.jpg`,
    name: `Featured Dark Roast`,
    description: `This full-bodied dark roast coffee has the bold, robust flavors to showcase our roasting and blending artistry.`,
    priceNew: `1.69`,
    rating:`4`,
    Calories:`79`
},
    {id:`AM905`,
    type: `Americano`,
    img: `img/product5.jpg`,
    name: `Irish Cream Americano`,
    description: `This full-bodied dark roast coffee has the bold, robust flavors to showcase our roasting and blending artistry.`,
    priceNew: `2.59`,
    rating:`4`,
    Calories:`68`,
},
    {id:`AM906`,
    type: `Americano`,
    img: `img/product6.jpg`,
    name: `Caffè Americano`,
    description: `Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance. Pro Tip: For an additional boost, ask your barista to try this with an extra shot.`,
    priceNew: `3.59`,
    rating:`5`,
    Calories:`77`,
},
    {id:`CA907`,
    type: `Cappuccino`,
    img: `img/product7.jpg`,
    name: `Cappuccino`,
    description: `Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.`,
    priceNew: `4.59`,
    rating:`5`,
    Calories:`120`,
},
    {id:`ES908`,
    type: `Espresso`,
    img: `img/product8.jpg`,
    name: `Espresso`,
    description: `Our smooth signature Espresso Roast with rich flavour and caramelly sweetness is at the very heart of everything we do.`,
    price: `3.29`,
    rating:`5`,
    Calories:`10`,
},
    {id:`LT909`,
    type: `Latte`,
    img: `img/product9.jpg`,
    name: `Chestnut Praline Latte`,
    description: `Our signature espresso, steamed milk and flavors of caramelized chestnuts and spices. Topped with whipped cream and spiced praline crumbs.`,
    priceNew: `6.29`,
    rating:`5`,
    Calories:`330`,
},
    {id:`LT910`,
    type: `Latte`,
    img: `img/product10.jpg`,
    name: `Gingerbread Latte`,
    description: `Sweet and delicately spicy gingerbread flavours mingle with our signature Espresso Roast and steamed milk. Topped with whipped cream and ground nutmeg for the perfect holiday touch.`,
    priceNew: `6.99`,
    rating:`4`,
    Calories:`330`,
},
    {id:`LT911`,
    type: `Latte`,
    img: `img/product11.jpg`,
    name: `Caffè Latte`,
    description: `Our dark, rich espresso balanced with steamed milk and a light layer of foam. A perfect milk-forward warm-up.`,
    priceNew: `4.29`,
    rating:`5`,
    Calories:`190`,
},
    {id:`LT912`,
    type: `Latte`,
    img: `img/product12.jpg`,
    name: `Chestnut Praline Latte`,
    description: `Our signature espresso, steamed milk and flavors of caramelized chestnuts and spices. Topped with whipped cream and spiced praline crumbs.`,
    priceNew: `6.29`,
    rating:`5`,
    Calories:`330`,
},
    {id:`0F913`,
    type: `food`,
    img: `img/product13.jpg`,
    name: `Everything Croissant & Roasted Ham`,
    description: `Roasted ham and cheese in the middle of an everything croissant.`,
    priceNew: `5.29`,
    rating:`5`,
    Calories:`460`,
},
    {id:`0F914`,
    type: `food`,
    img: `img/product14.jpg`,
    name: `Spicy Chorizo, Monterey Jack & Egg Sandwich`,
    description: `Kickstart your morning with spicy chorizo, aged Monterey Jack cheese and a fluffy egg with caramelized onions, all served on stone-baked potato bread.`,
    priceNew: `4.19`,
    rating:`4`,
    Calories:`470`,
},
    {id:`0F915`,
    type: `food`,
    img: `img/product15.jpg`,
    name: `Spinach, Feta & Cage Free Egg White Wrap`,
    description: `We bring together cage-free egg whites, spinach, feta cheese and tomatoes inside a whole wheat wrap, then toast it to perfection. Vegetarian and protein-rich, this low calorie wrap is a tasty start to any morning.`,
    priceNew: `7.69`,
    rating:`5`,
    Calories:`280`,
},
    {id:`0F916`,
    type: `food`,
    img: `img/product16.jpg`,
    name: `Sous Vide Egg Bites: Ham, Cheddar & Peppers`,
    description: `Diced ham with roasted red and green peppers, inspired by the classic Denver omelet.`,
    priceNew: `4.59`,
    rating:`4`,
    Calories:`250`,
},
    {id:`CC917`,
    type: `Cold-coffee`,
    img: `img/product17.png`,
    name: `Irish Cream Cold Brew`,
    description: `Cold Brew with Irish cream syrup, topped with vanilla sweet cream cold foam and a strike of cocoa powder.`,
    priceNew: `7.29`,
    rating:`5`,
    Calories:`473`,
},
    {id:`CC918`,
    type: `Cold-coffee`,
    img: `img/product18.jpg`,
    name: `Cold Brew with Salted Cream Cold Foam`,
    description: `Here's a savory-meets-sweet refreshing beverage certain to delight: Our signature, super smooth Cold Brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.`,
    priceNew: `5.09`,
    rating:`4`,
    Calories:`470`,
},
    {id:`IT919`,
    type: `IceTea`,
    img: `img/product19.jpg`,
    name: `Iced Black Tea Latte`,
    description: `Pure black tea, with its pronounced bold flavour, is shaken over ice, topped with milk, then sweetened creating a smooth, creamy beverage.`,
    priceNew: `4.29`,
    rating:`5`,
    Calories:`430`,
},
    {id:`HD920`,
    type: `IceTea`,
    img: `img/product20.jpg`,
    name: `Iced Royal English Breakfast Tea Latte`,
    description: `A select blend of rich, full-leaf black teas from India and Sri Lanka sweetened with liquid cane sugar and combined with milk and ice.`,
    priceNew: `5.39`,
    rating:`4`,
    Calories:`390`,
},
    {id:`IT921`,
    type: `IceTea`,
    img: `img/product21.jpg`,
    name: `Iced Black Tea`,
    description: `Premium black tea is lightly sweetened and shaken with ice. It's the ideal iced tea.
    `,
    priceNew: `5.59`,
    rating:`5`,
    Calories:`320`,
},
];



//**********FUNCTION*************//
// Function: getCourseAsHtmlString
// Parameters: course:Object
// Return: String of HTML (<article>)
function getProductsCoffeeAsHtmlString(productsCoffee){
    let newDeal = ``;
  if (productsCoffee.type = `IceTea`) {
    newDeal = `<small class="badge">NEW!</small>`;
  }
return `<section class="product ${productsCoffee.type}">
<div class="product__photo">
    <div class="photo-container">
      <div class="photo-main">
        <div class="controls">
          <i class="material-icons">share</i>
          <i class="material-icons">favorite_border</i>
        </div>
        <img src="${productsCoffee.img}">
      </div>
    </div>
</div>
<div class="product__info">
    <div class="title">
      <h1>${productsCoffee.name}${newDeal}<h1> 
      <span>COD: ${productsCoffee.id}</span>
    </div>
    <div class="price">
        <data value="${productsCoffee.priceNew}"><del>C$ ${productsCoffee.priceOld}</del> <ins>C$ ${productsCoffee.priceNew}</ins></data>
    </div>
    <div class="product-rating">
      <span >
        <i class="material-icons">star</i>
        <i class="material-icons">star</i>
        <i class="material-icons">star</i>
        <i class="material-icons">star</i>
        <i class="material-icons">star_half</i>
      </span>
    </div>
    
    <div class="product-variant">
      <h3>SELECT SIZES</h3>
      <ul>
        <li><label><input type="radio" name="size" value="s"> <span>S 236mL</span></label></li>
        <li><label><input type="radio" name="size" value="m"> <span>M 354mL</span></label></li>
        <li><label><input type="radio" name="size" value="l"> <span>L 473mL</span></label></li>
        <li><label><input type="radio" name="size" value="xl"> <span>XL 591mL</span></label></li>
      </ul>
    </div>
    <div class="product-description">
      <h3>DESCRIPTION</h3>
      <p>${productsCoffee.description}</p>
    </div>
    <button class="buy--btn">ADD TO CART</button>
    <form>
      <input type="button" value="-" class="minus"><input type="number" name="quantity" min="1" max="auto" size="4">
    </form> 
    <div class="clear"></div>
  </div>
</section>`;
}

function renderProducts(arr){
    const arrOfHtml = arr.map(getProductsCoffeeAsHtmlString);
    const strOfHtml = arrOfHtml.join(`\n`);
    document.getElementById(`productsCoffee`).innerHTML +=strOfHtml;
}



 
/////Function: FILTER
function filterByName(productCoffee) {  
    return productCoffee.name.toLowerCase().includes(this.trim().toLowerCase())
  }
  
  function filterByCat(productCoffee) {
    return productsCoffee.type == this;
  }
  

//**********EXECUTION*************//
// Execute functions that will access data

function searchByName (event){
  const searchTerm = event.target.value;
  const arrNameCheck = productsCoffee.filter(filterByName, searchTerm);
  renderProducts(arrNameCheck);
  console.table(arrNameCheck);
}

function searchByCat(event) {
    const searchTerm = event.target.value;
    const arrCatCheck = productsCoffee.filter(filterByCat, searchTerm)
    renderProducts(arrCatCheck);
    console.log (arrCatCheck);
  }

renderProducts(productsCoffee);

document.getElementById('nameSearch').addEventListener('input', searchByName)
document.getElementById('catSearch').addEventListener('change', searchByCat)