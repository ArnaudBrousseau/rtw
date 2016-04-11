$(function() {
    var data = window.RTWData;

    var getRandomItem = function(items) {
        return items[Math.floor(Math.random()*items.length)];
    };

    var showFlashcard = function(card) {
        $flashcard = $(".flashcard");
        $flashcard.find(".primary a").text(card[0]);
        $flashcard.find(".secondary .definition").text(card[1]).addClass("hidden");

        $(".quote, .start").addClass("hidden");
        $flashcard.removeClass("hidden");
        $flashcard.find(".reveal").removeClass("hidden");
    };

    var showQuote = function(quote) {
        $quote = $(".quote");
        $quote.find("a").text(quote);

        $(".flashcard, .start").addClass("hidden");
        $quote.removeClass("hidden");
    };

    var next = function() {
        if (Math.random() > 0.5) {
            showFlashcard(getRandomItem(data.flashcards));
        } else {
            showQuote(getRandomItem(data.quotes));
        }
    };

    $(".flex-container-main").click(next);

    $(".flashcard .secondary").click(function(e) {
        if ($(".definition").hasClass("hidden")) {
            e.stopPropagation();
            $(".reveal").addClass("hidden")
            $(".definition").removeClass("hidden");
        } else {
            // let the even propagate up if
            // the definition is already revealed
        }
    });


});
