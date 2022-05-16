//function for setting the position and css for the filled squares
    $('#puzzlearea div').each(function ()
    {
        var filledSquares = {};
        var x = ((count % 4) * 100);
        var y = (Math.floor(count / 4) * 100);
        $(this).addClass('puzzlepiece');
        var leftpx = x + 'px';
        var toppx = y + 'px';
        filledSquares.leftpx = leftpx;
        filledSquares.toppx = toppx;
        arr.push(filledSquares);
        $(this).css({"left": leftpx, "top": toppx, "backgroundImage": 'url("images/background.jpg")', "backgroundPosition": -x + 'px ' + (-y) + 'px'});
        count++;
    });