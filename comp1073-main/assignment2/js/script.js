
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