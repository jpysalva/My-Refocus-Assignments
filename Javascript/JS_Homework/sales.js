const shop = {
    name: "JPYS Clothing",
    address: "16 Las Pinas",
    code: "16LPC",
    items:[
      {
        name: "T Shirt",
        category: "Shirt",
        price: 199.50,
        stockQuantity: 8
      },
      {
        name: "Black Pants",
        category: "Pants",
        price: 899.50,
        stockQuantity: 2
      }
    ],
    users:[
      {
        firstName: "John Paul",
        surname: "Salva",
        age: 34,
        birthday: "02/09/1989",
        username: "jpys",
        password: "pass123",
        isLoggedIn: false,
        cart: []
      },
      {
        firstName: "JP",
        surname: "Salva",
        age: 34,
        birthday: "02/09/1989",
        username: "jpys2",
        password: "pass123",
        isLoggedIn: false,
        cart: []
      }
    ]
}

    // ----------- Add Users ----------

    function addUser(firstName, surname, age, birthday, username, password){
        const newUser = {
          firstName: firstName,
          surname: surname,
          age: age,
          birthday: birthday,
          username: username,
          password: password,
          isLoggedIn: false,
          cart: []
        };
        shop.users.push(newUser);
        console.log(`Added user ${firstName} ${surname}`);
      }
      
      // addUser("Carina", "Salva", 29, "09/02/1995", "csalva", "pass123");


// -------- Restock Items ------

function restockItem(itemName, quantity){
    let itemFound = false;
    for (let i = 0; i < shop.items.length; i++){
      if (shop.items[i].name === itemName) {
        shop.items[i].stockQuantity += quantity;
        console.log(`Restocked ${quantity} ${itemName}. New stock quantity: ${shop.items[i].stockQuantity}`);
        itemFound = true;
        break;
      }
    }
    if (!itemFound){
      console.log(`Could not restock ${itemName} - item not found`);
    }
  }

// restockItem("T Shirt", 4);

//------- User Login/Add to Cart -------
function login(username, password){
    const user = shop.users.find((user) => user.username === username && user.password === password);

    if (user && !user.isLoggedIn){
      user.isLoggedIn = true;
      console.log(`${user.username} logged in successfully`);
    } else {
      console.log(`Could not log in ${username}`);
    }
  }
  

function addToCart(username, itemName, quantity){
    const user = shop.users.find((user) => user.username === username);
    if (user && user.isLoggedIn){
      const item = shop.items.find((item) => item.name === itemName);
  
      if (item && item.stockQuantity >= quantity){
        const cartItem = {
          item: item,
          quantity: quantity
        };
  
        user.cart.push(cartItem);
  
        item.stockQuantity -= quantity;
  
        console.log(`Added ${quantity}pc(s) ${item.name} to ${user.firstName}'s cart`);
      } else {
        console.log(`Could not add ${quantity}pc(s) ${itemName} to ${user.firstName}'s cart - item not found or not enough stock`);
      }
    } else {
      console.log(`Could not add ${quantity}pc(s) ${itemName} to ${firstName}'s cart - user not found or not logged in`);
    }
  }


  //------ Confirming Order ------
  function confirmOrder(username){
    const user = shop.users.find((user) => user.username === username);
  
    if (user && user.cart.length > 0){
      let receipt = `--- Receipt for ${user.firstName} ---\n`;
      let total = 0;
  
      for (let i = 0; i < user.cart.length; i++){
        const cartItem = user.cart[i];
        const item = cartItem.item;
        const quantity = cartItem.quantity;
  
        receipt += `${quantity}pc(s) ${item.name}(s) - ${item.price * quantity}\n`;
        total += item.price * quantity;
  
        console.log(`New stock quantity for ${item.name}: ${item.stockQuantity}`);
      }
  
      user.cart = [];
  
      receipt += `Total: ${total}`;
  
      console.log(receipt);
  
      console.log(`Order confirmed and cart emptied for ${user.firstName}`);
    } else {
      console.log(`Could not confirm order for ${firstName} - no items in cart`);
    }
  }

  login("jpys2", "pass123")
  addToCart("jpys2", "T Shirt", 3);
  confirmOrder("jpys2");
  
  
  