// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// calculateAvgWordLength.js

function calculateAvgWordLength(whichText)
{
    let words = whichText.split(/\s+/);
    let totalLength = 0;
    let wordCount = 0;

    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        if (word.length > 0)
        {
            totalLength += word.length;
            wordCount++;
        }
    }

    if (wordCount > 0)
    {
        return (totalLength / wordCount).toFixed(2);
    }
    else
    {
        return 0;
    }
}

