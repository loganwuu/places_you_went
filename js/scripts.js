$(document).ready(function() {
    $("#add-landmark").click(function() {
        $("#new-landmarks").append('<div class="new-landmark landmark">' +
                                        '<div class="form-group">' +
                                            '<label for="new-name">Name</label>' +
                                            '<input type="text" class="form-control new-name">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-address">Address</label>' +
                                            '<input type="text" class="form-control new-address">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-description">Description</label>' +
                                            '<input type="text" class="form-control new-description">' +
                                        '</div>' +
                                    '</div>');
    });

    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedCity = $("input#new-city").val();
        var inputtedCountry = $("input#new-country").val();
        var inputtedDate = $("input#new-date").val();
        var inputtedNotes = $("input#new-notes").val();

        var newPlace = { city: inputtedCity, country: inputtedCountry, date: inputtedDate, notes: inputtedNotes, landmarks: [] };

        $(".landmark").each(function() {
            var inputtedName = $(this).find("input.new-name").val();
            var inputtedAddress = $(this).find("input.new-address").val();
            var inputtedDescription = $(this).find("input.new-description").val();

            var newLandmark = { name: inputtedName, address: inputtedAddress, description: inputtedDescription };
            newPlace.landmarks.push(newLandmark);
        });

        $("ul#places").append("<li><span class='place'>" +
                                newPlace.city + ", " +
                                newPlace.country +
                                "</span></li>");

        $("input#new-city").val("");
        $("input#new-country").val("");
        $("input#new-date").val("");
        $("input#new-notes").val("");
        $("input.new-name").val("");
        $("input.new-address").val("");
        $("input.new-description").val("");

        //removes extra landmark properties after user adds a new place each time
        $(".new-landmark").remove();

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.city + ", " + newPlace.country);
            // $(".city").text(newPlace.city);
            // $(".country").text(newPlace.country);
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);

            $("ul#landmarks").text("");
            newPlace.landmarks.forEach(function(landmark) {
                $("ul#landmarks").append("<li>" + "<ul>" + "<strong>" + landmark.name + "</strong>" +
                                                  "<li>" + landmark.address + "</li>" +
                                                  "<li>" + landmark.description + "</li>" + "</ul>");
            })
        });
    });
});
