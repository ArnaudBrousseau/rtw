$(function() {
    var data = window.RTWData;

    var getRandomItem = function(items) {
        return items[Math.floor(Math.random()*items.length)];
    };

    var adjustFontSize = function($elem) {
        var length = $elem.text().length;
        if (length < 30) { return; }
        if (length > 30 && length < 80) { $elem.css('font-size', '3rem'); }
        if (length > 80 && length < 200) { $elem.css('font-size', '2rem'); }
        if (length > 200) { $elem.css('font-size', '1rem'); }
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
        adjustFontSize($quote.find("a"));
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
            adjustFontSize($(".definition"));
        } else {
            // let the even propagate up if
            // the definition is already revealed
        }
    });


});
