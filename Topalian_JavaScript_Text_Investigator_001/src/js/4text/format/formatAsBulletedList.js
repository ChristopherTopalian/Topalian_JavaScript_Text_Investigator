// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// formatAsBulletedList.js

function formatAsBulletedList(whichText)
{
    let words = whichText.split(' ');

    // array to hold formatted list
    let formattedList = [];

    // loop through words in whichText
    for (let i = 0; i < words.length; i++)
    {
        // trim leading/trailing whitespace
        let word = words[i].trim();

        // add each non empty word as a new bullet point
        if (word.length > 0)
        {
            formattedList.push("* " + word.charAt(0).toUpperCase() + word.slice(1) + '<br>');
        }
    }

    // return formatted list as a string with line breaks
    return formattedList.join("\n");
}

