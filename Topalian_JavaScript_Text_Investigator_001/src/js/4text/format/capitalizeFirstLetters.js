// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// capitalizeFirstLetters.js

function capitalizeFirstLetters(whichText)
{
    // split whichText into words
    let words = whichText.split(" ");

    // array to hold capitalized words
    let capitalizedWords = [];

    // loop through each word
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // if word is not empty, capitalize first letter and add to array
        if (word.length > 0)
        {
            let capitalizedWord = word[0].toUpperCase() + word.slice(1);

            capitalizedWords.push(capitalizedWord);
        }
        else
        {
            capitalizedWords.push(word);
        }
    }

    // join capitalized words into a single string
    return capitalizedWords.join(" ");
}

