// NOTE: Begins Business Logic.

function adobo(size,addDiffMeats) {
  this.size = size;
  this.addDiffMeat = addDiffMeats;
  }

adobo.prototype.cost = function() {
  if (this.size === "small") {
     this.price = 10;
  }else if (this.size === "medium") {
     this.price = 15;
  }else {
     this.price = 20;
  }return this.price = this.price + (1.00 * this.addDiffMeats.length);
}

Adobo.prototype.spaces = function() {
  var spacedAddDiffMeats;
  if (this.addDiffMeats.includes(" ") === false) {
    this.addDiffMeats.forEach(function(addDiffMeat){
      spacedAddDiffMeats = this.addDiffMeats + " ";
    });
  }; return spacedAddDiffMeats;
};

// NOTE: Begins User Interface Logic.

$(document).ready(function(){
  $("#welcome").submit(function(event){
    event.preventDefault();

     var adoboSize = $("#adoboSize").val();
     var adoboAddDiffMeats = [];

    $("input:checkbox[name=addDiffMeats]:checked").each(function(){
      adoboAddDiffMeats.push($(this).val());
    });

     var adobo = new Adobo(adoboSize, adoboAddDiffMeats);
     var adoboPrice = adoboSize.cost().toFixed(2);
     $("#userOutput").text("You have ordered a " + adoboSize.size + " adobo with " + personalPizza.toppings + " for $" + pizzaPrice + " .");
     console.log(adobo);
  });
});
