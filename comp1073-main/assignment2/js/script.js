/* The Pizza Maker - script.js */

/* student info  */
const studentId = "200652992";
const studentName = "Melika Kashef";

document.getElementById("student-info").textContent =
  `Student: ${studentName} | ID: ${studentId}`;


/* the Pizza class */
class Pizza {
  constructor(name, size, crust, sauce, cheeselevel, toppings, quantity, delivery, notes) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheeselevel = cheeselevel;
    this.toppings = toppings;
    this.quantity = quantity;
    this.delivery = delivery;
    this.notes = notes;
  }

  // works out the price of one pizza (before quantity is applied)
  calculatePrice() {
    // base price depends on size
    const sizePrices = {
      "Small": 8,
      "Medium": 10,
      "Large": 12,
      "Extra Large": 14
    };

    let price = sizePrices[this.size] || 10; // fallback just in case

    // stuffed crust costs a little extra
    if (this.crust === "Stuffed Crust") {
      price += 2;
    }

    // each topping adds $1.25
    price += this.toppings.length * 1.25;

    // extra cheese levels cost a bit more (index 2 = "Extra", 3 = "Extra Extra Cheesy")
    const cheeseIndex = cheeseLabels.indexOf(this.cheeselevel);
    if (cheeseIndex >= 2) {
      price += 1;
    }

    // delivery adds a flat fee
    if (this.delivery === "Delivery") {
      price += 3;
    }

    return price;
  }

  // builds the order summary and returns it as a string
  getOrderSummary() {
    const toppingsList = this.toppings.length > 0
      ? this.toppings.join(", ")
      : "no extra toppings";

    const pricePerPizza = this.calculatePrice();
    const totalPrice = (pricePerPizza * this.quantity).toFixed(2);

    let summary = `Thanks, ${this.name}! Here's your order: \n\n `;
    summary += `${this.quantity} x ${this.size} pizza on ${this.crust} crust\n`;
    summary += `sauce: ${this.sauce}\n`;
    summary += `cheese: ${this.cheeselevel}\n`;
    summary += `Topping: ${toppingsList}\n`;
    summary += `Method: ${this.delivery}\n`;

    if (this.notes.trim() !== "") {
      summary += `Notes: ${this.notes}\n`;
    }

    summary += `\nPrice per pizza: $${pricePerPizza.toFixed(2)}`;
    summary += `\nTotal (x${this.quantity}): $${totalPrice}`;
    summary += `\n\nEnjoy your pizza! 🍕`;
    return summary;
  }
}


/* cheese slider label  */
const cheeseRange = document.getElementById("cheese-range");
const cheeseOutput = document.getElementById("cheese-output");
const cheeseLabels = ["Light", "Regular", "Extra", "Extra Extra Cheesy"];

cheeseRange.addEventListener("input", () => {
  cheeseOutput.textContent = cheeseLabels[cheeseRange.value];
});

/* form submit */
const form = document.getElementById("pizza-form");
const orderOutput = document.getElementById("order-output");
const orderSummary = document.getElementById("order-summary");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the page from reloading

  clearErrors();

  // run all validation checks
  const validName = validateName();
  const validSize = validateSize();
  const validCrust = validateCrust();
  const validSauce = validateSauce();
  const validToppings = validateToppings();
  const validQuantity = validateQuantity();
  const validDelivery = validateDelivery();

  const allValid = validName && validSize && validCrust &&
    validSauce && validToppings && validQuantity && validDelivery;

  if (!allValid) {
    orderOutput.classList.add("hidden");
    return;
  }

  // grab the form values
  const name = document.getElementById("customer-name").value.trim();
  const size = document.getElementById("size").value;
  const crust = document.querySelector('input[name="crust"]:checked').value;
  const sauce = document.getElementById("sauce").value;
  const cheeseLevel = cheeseLabels[cheeseRange.value];
  const quantity = Number(document.getElementById("quantity").value);
  const delivery = document.getElementById("delivery").value;
  const notes = document.getElementById("notes").value;

  const checkedToppings = document.querySelectorAll('input[name="toppings"]:checked');
  const toppings = Array.from(checkedToppings).map(box => box.value);

  // build the pizza object
  const order = new Pizza(name, size, crust, sauce, cheeseLevel, toppings, quantity, delivery, notes);

  // show the summary by calling the method on the object
  orderSummary.textContent = order.getOrderSummary();

 // trigger the fade-in animation each time a new order is shown
  orderOutput.classList.remove("hidden");
  orderOutput.classList.remove("pop-in"); // reset animation if it already played

  // wait for the browser's next paint before re-adding the class.
  // this is the reliable way to restart a CSS animation.
  // MDN reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
  requestAnimationFrame(() => {
    orderOutput.classList.add("pop-in");
  });

  orderOutput.scrollIntoView({ behavior: "smooth" });


/* validation checks */
function validateName() {
  const input = document.getElementById("customer-name");
  if (input.value.trim() === "") {
    showError("error-name", "Please enter your name.");
    input.classList.add("invalid");
    return false;
  }
  return true;
}

function validateSize() {
  const input = document.getElementById("size");
  if (input.value === "") {
    showError("error-size", "Please choose a size.");
    input.classList.add("invalid");
    return false;
  }
  return true;
}

function validateCrust() {
  const checked = document.querySelector('input[name="crust"]:checked');
  if (!checked) {
    showError("error-crust", "Please pick a crust.");
    return false;
  }
  return true;
}

function validateSauce() {
  const input = document.getElementById("sauce");
  if (input.value === "") {
    showError("error-sauce", "Please choose a sauce.");
    input.classList.add("invalid");
    return false;
  }
  return true;
}

function validateToppings() {
  const checked = document.querySelectorAll('input[name="toppings"]:checked');
  if (checked.length === 0) {
    showError("error-toppings", "Pick at least one topping.");
    return false;
  }
  return true;
}

function validateQuantity() {
  const input = document.getElementById("quantity");
  const value = Number(input.value);
  if (!input.value || value < 1 || value > 10) {
    showError("error-quantity", "Quantity must be 1-10.");
    input.classList.add("invalid");
    return false;
  }
  return true;
}

function validateDelivery() {
  const input = document.getElementById("delivery");
  if (input.value === "") {
    showError("error-delivery", "Choose delivery or pickup.");
    input.classList.add("invalid");
    return false;
  }
  return true;
}


/* helpers */
function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll(".error-msg").forEach(el => el.textContent = "");
  document.querySelectorAll(".invalid").forEach(el => el.classList.remove("invalid"));
}
})