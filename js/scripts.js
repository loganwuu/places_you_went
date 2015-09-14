$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedCity = $("input#new-city").val();
        var inputtedCountry = $("input#new-country").val();
        var inputtedLandmark = $("input#new-landmark").val();
        var inputtedDate = $("input#new-date").val();
        var inputtedNotes = $("input#new-notes").val();
        var newPlace = { city: inputtedCity, country: inputtedCountry, landmark: inputtedLandmark, date: inputtedDate, notes: inputtedNotes };

        $("ul#places").append("<li><span class='place'>" +
                                newPlace.city + ", " +
                                newPlace.country +
                                "</span></li>");

        $("input#new-city").val("");
        $("input#new-country").val("");
        $("input#new-landmark").val("");
        $("input#new-date").val("");
        $("input#new-notes").val("");

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.city + ", " + newPlace.country);
            // $(".city").text(newPlace.city);
            // $(".country").text(newPlace.country);
            $(".landmark").text(newPlace.landmark);
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);
        });
    });
});
