$(document).ready(function() {
  $("table").hide();
  $(".more-buttons").hide();
  $(".more-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".more-info h4").hide();

  $(".btn.order").click(function() {
    var pizzaSize = $(".size option:selected").val();
    var pizzaToppings = $(".toppings option:selected").val();
    var pizzaCrust = $(".crust option:selected").val();
    var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
    var order = 1;
    var totalPrice = 0;

    $("table").show();
    $(".more-buttons").show();
    $(".btn.order").hide();

    $("#size").html($(".size option:selected").text() + " - " + pizzaSize);
    $("#toppings").html($(".toppings option:selected").text() + " - " + pizzaToppings);
    $("#crust").html($(".crust option:selected").text() + " - " + pizzaCrust);
    $("#total").html(total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }


    $(".btn.add-pizza").click(function() {
      var pizzaSize = $(".size option:selected").val();
      var pizzaToppings = $(".toppings option:selected").val();
      var pizzaCrust = $(".crust option:selected").val();
      var total = parseInt(pizzaSize) + parseInt(pizzaToppings) + parseInt(pizzaCrust);
      order = order + 1;
      totalPrice = totalPrice + total;


      var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaCrust, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + ' - ' + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });

    $(".btn.check-out").click(function() {
      $(".btn.add-pizza").hide();
      $(".btn.check-out").hide();
      // $(".more-info").show();
      // $(".btn.yes").show();
      // $(".btn.no").show();
      $(".more-info .location").hide();
      totalPrice = totalPrice + total;
     
      
      confirm("Would you like delivery!");
      if (confirm == true) {
        $(".more-info h3 span").html(totalPrice);
      }
    });
    
      
      
    $(".btn.yes").click(function() {
      $(".more-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".more-info .location").show();
      $(".more-info h3 span").html(totalPrice + 200);
    });

    $(".btn.no").click(function() {
      $(".more-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".more-info .location").show();
    });

    $(".btn.complete").click(function() {
      var location = $(".more-info .location input").val();
      $(".more-info h4").show();
      $(".more-info .location").hide();
      $(".more-info h4 span").html(location);
    });

  });

});
