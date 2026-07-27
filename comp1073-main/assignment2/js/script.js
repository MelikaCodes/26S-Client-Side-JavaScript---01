
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
  }