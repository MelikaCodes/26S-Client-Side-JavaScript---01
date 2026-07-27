
/* The Pizza Maker - script.js */

/* student info  */
const studentId = "200652992";
const studentName = "Melika Kashef";

document.getElementById("student-info").textContent =
  `Student: ${studentName} | ID: ${studentId}`;


  /* the Pizza class */
  class Pizza{
    constructor(name, size, crust, sause, cheeselevel, toppings, quantity, delivery, notes){
        this.name= name;
        this.size=size;
        this.crust= crust;
        this.sauce= sause;
        this.cheeselevel= cheeselevel;
        this.toppings= toppings;
        this.quantity= quantity;
        this.delivery= delivery;
        this.notes= notes;
    }
     // builds the order summary and returns it as a string
     getOrderSummary(){
         const toppingsList = this.toppings.length > 0
      ? this.toppings.join(", ")
      : "no extra toppings";

      let summary= `Thanks, ${this.name}! Here's your order: \n\n `;
      summary +=`${this.quantity} x ${this.size} pizza on ${this.crust} crust\n`;
      summary +=`sauce: ${this.sauce}\n`;
      summary +=`cheese: ${this.cheeselevel}\n`;
      summary +=`Topping: ${toppingsList}\n`;
      summary +=`Method: ${this.delivery}\n`;

          if (this.notes.trim() !== "") {
      summary += `Notes: ${this.notes}\n`;
          }

           summary += `\nEnjoy your pizza! 🍕`;
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
  orderOutput.classList.remove("hidden");
  orderOutput.scrollIntoView({ behavior: "smooth" });
});

