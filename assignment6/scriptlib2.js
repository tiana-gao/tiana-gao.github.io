$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appi9jZCJVoSGbBZ6/%E7%8E%8B%E5%AE%B6%E5%8D%AB%E7%94%B5%E5%BD%B1?api_key=keyaz21CsKE84rT20";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.name);
                       items.push(value.fields.director);
                       items.push(value.fields.year);
                       items.push(value.fields.label);
                       items.push(value.fields.language);
                       items.push(value.fields.starring);
                       items.push(value.fields.rating);
                       items.push(value.fields.description);
                       items.push(value.fields.poster);
                       items.push(value.fields.link);
                       items.push(value.fields.award);
                       items.push(value.fields.Keywords);
                       items.push(value.fields.Rollup);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "name",
                       defaultContent:""},
                     { title: "director",
                         defaultContent:"" },
                     { title: "year",
                       defaultContent:"" },
                     { title: "label",
                       defaultContent:""},
                     { title: "language",
                         defaultContent:""},
                     { title: "starring",
                       defaultContent:""},
                     { title: "rating",
                       defaultContent:""},
                     { title: "description",
                       defaultContent:""},
                     { title: "poster",
                       defaultContent:""},
                     { title: "Douban",
                       defaultContent:""},
                     { title: "award",
                       defaultContent:""},
                     { title: "Keywords",
                       defaultContent:""},
                     { title: "Rollup",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
