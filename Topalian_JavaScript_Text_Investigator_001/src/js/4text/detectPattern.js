// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// detectPattern.js

function detectPattern(whichText)
{
    let pattern = /the/gi;

    let matches = whichText.match(pattern);

    let matchCount;

    if (matches)
    {
        matchCount = matches.length;
    }
    else
    {
        matchCount = 0;
    }

    return matchCount;
}

