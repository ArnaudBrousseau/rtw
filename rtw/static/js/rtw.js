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

    var deleteElementFromArray = function(element, array) {
        var index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
        }
    };

    var displayCard = function() {
        var flashcard = getRandomItem(data.flashcards);
        showFlashcard(flashcard);
        deleteElementFromArray(flashcard, data.flashcards)
    };

    var displayQuote = function() {
        var quote = getRandomItem(data.quotes);
        showQuote(quote);
        deleteElementFromArray(quote, data.quotes);
    };

    var next = function() {
        var shouldDisplayCard = Math.random() * (data.flashcards.length + data.quotes.length) > data.flashcards.length;
        var shouldDisplayQuote = !shouldDisplayCard;
        var canDisplayCard = data.flashcards.length > 0;
        var canDisplayQuote = data.quotes.length > 0;

        if (canDisplayCard && shouldDisplayCard) { displayCard(); }
        else if (canDisplayQuote && shouldDisplayQuote) { displayQuote(); }
        else if (canDisplayCard && shouldDisplayQuote) { displayCard(); }
        else if (canDisplayQuote && shouldDisplayCard) { displayQuote(); }
        else { alert("It's over. You've gone through the entire list!"); }
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
