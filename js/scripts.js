// NOTE: Begins Business Logic.

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
  }

Pizza.prototype.cost = function() {
  if (this.size === "small") {
     this.price = 10;
  }else if (this.size === "medium") {
     this.price = 15;
  }else {
     this.price = 20;
  }return this.price = this.price + (.50 * this.toppings.length);
}

Pizza.prototype.spaces = function() {
  var spacedToppings;
  if (this.toppings.includes(" ") === false) {
    this.toppings.forEach(function(topping){
      spacedToppings = this.toppings + " ";
    });
  }; return spacedToppings;
};

// NOTE: Begins User Interface Logic.

$(document).ready(function(){
  $("#welcome").submit(function(event){
    event.preventDefault();

     var pizzaSize = $("#pizzaSize").val();
     var personalPizzaToppings = [];

    $("input:checkbox[name=pizzaTopping]:checked").each(function(){
      personalPizzaToppings.push($(this).val());
    });

     var personalPizza = new Pizza(pizzaSize, personalPizzaToppings);
     var pizzaPrice = personalPizza.cost().toFixed(2);
     $("#userOutput").text("You have ordered a " + personalPizza.size + " pizza with " + personalPizza.toppings + " for $" + pizzaPrice + " .");
     console.log(personalPizza);
  });
});
