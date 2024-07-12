// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
//categorizeWords.js

function categorizeWords(whichText)
{
    // define word categories
    let categories =
    {
        specifier: ["the", "a", "an", "those", "that", "them", "they", "this"],
        connector: ["and", "but", "or", "however", "therefore"],
        thing: ["chair", "table", "car"],
        time: ["early", "late", "morning", "evening", "yesterday", "today", "tomorrow", "now", "then", "when"]
    };

    // convert whichText to lowercase and split it into words
    let words = whichText.toLowerCase().split(' ');

    // array to hold categorized words
    let categorizedWords = [];

    // loop through words in whichText
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];
        let categoryFound = false;

        // check each category
        let categoryKeys = Object.keys(categories);

        for (let k = 0; k < categoryKeys.length; k++)
        {
            let category = categoryKeys[k];

            let categoryWords = categories[category];

            for (let j = 0; j < categoryWords.length; j++)
            {
                if (word === categoryWords[j])
                {
                    categorizedWords.push(word + " = " + category);

                    categoryFound = true;
                    break;
                }
            }

            if (categoryFound)
            {
                break;
            }
        }

        // if no category found, label as n/a
        if (!categoryFound)
        {
            categorizedWords.push(word + " = n/a");
        }
    }

    return categorizedWords.join("<br> ");
}

