$(document).ready(
    function ()
    {
        $("[name=soda]").change(lineTotalChangeSoda);

        function lineTotalChangeSoda (event)
        {
            // prevent default from happening
            event.preventDefault();

            // create line total variable
            var lineTotal = 0;

            // get the line total for pepsi
            var pepsi = $("#pepsi").val();
            var coke = $("#coke").val();

            // convert pepsi quantity to number
            var pepsiNum = parseFloat(pepsi);
            var cokeNum = parseFloat(coke);

            // get the total for the whole thing
            var totalPepsi = pepsiNum * $("#pepsi").data("price");
            var totalCoke = cokeNum * $("#coke").data("price");

            // output the line total
            $("#pepsiOutput").text(totalPepsi.toFixed(2));
            $("#cokeOutput").text(totalCoke.toFixed(2));

            // output grand total
            $("#output").text("The grand total is: $" + (totalPepsi + totalCoke).toFixed(2));

        }
    }
);