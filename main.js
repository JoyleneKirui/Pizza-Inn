
$(document).ready(function() {

  $("table").hide();
  $(".more-buttons").hide();
  $(".more-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".more-info h4").hide();

  $('.btn.order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $(".more-buttons").show();
    $(".btn.order").hide();

    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#total").html(total);

    function Pizza(size, toppings, crust, total, orderNo) {
      this.size = size;
      this.toppings = toppings;
      this.crust = crust;
      this.total = total;
      this.orderNo = orderNo;
    }


    $('.btn.add-pizza').click(function() {
      var sizeOfPizza = $(".size option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });

    $(".btn.check-out").click(function() {
      $(".btn.add-pizza").hide();
      $(".btn.check-out").hide();
      $(".more-info").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $(".more-info .location").hide();
      grandTotal = grandTotal + total;

      $(".more-info h3 span").html(grandTotal);
    });

    $(".btn.yes").click(function() {
      $(".more-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".more-info .location").show();
      $(".more-info h3 span").html(grandTotal + 200);
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