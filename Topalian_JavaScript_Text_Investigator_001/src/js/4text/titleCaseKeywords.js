// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// titleCaseKeywords.js

function titleCaseKeywords(whichText)
{
    // array of common stop words to ignore
    let stopWords = ["a", "an", "and", "the", "in", "on", "at", "of", "to", "is", "it", "that", "this", "with", "for", "as", "by", "but", "or", "nor"];

    // convert whichText to lowercase and split it into words
    let words = whichText.toLowerCase().split(' ');

    // object to store word frequencies
    let wordFrequencies = {};

    // loop through words in whichText
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        let isStopWord = false;

        // is word not a stop word
        for (let j = 0; j < stopWords.length; j++)
        {
            if (word === stopWords[j])
            {
                isStopWord = true;
                break;
            }
        }

        if (!isStopWord && word.length > 1)
        {
            // if word is not a stop word, count its frequency
            if (wordFrequencies[word])
            {
                wordFrequencies[word]++;
            }
            else
            {
                wordFrequencies[word] = 1;
            }
        }
    }

    // convert word frequencies object into an array of [word, frequency] pairs
    let frequencyArray = [];

    let keys = Object.keys(wordFrequencies);

    for (let i = 0; i < keys.length; i++)
    {
        let word = keys[i];
        frequencyArray.push([word, wordFrequencies[word]]);
    }

    // sort array by frequency in descending order
    for (let i = 0; i < frequencyArray.length - 1; i++)
    {
        for (let j = i + 1; j < frequencyArray.length; j++)
        {
            if (frequencyArray[i][1] < frequencyArray[j][1])
            {
                let temp = frequencyArray[i];
                frequencyArray[i] = frequencyArray[j];
                frequencyArray[j] = temp;
            }
        }
    }

    // get top 10 keywords
    let topKeywords = [];

    for (let i = 0; i < 10 && i < frequencyArray.length; i++)
    {
        topKeywords.push(frequencyArray[i][0]);
    }

    // loop through words in whichText and capitalize only the keywords
    let resultWords = [];

    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];
        let isKeyword = false;

        if (i === 0)
        {
            // always capitalize first word
            resultWords.push(word.charAt(0).toUpperCase() + word.slice(1));
            continue;
        }

        for (let j = 0; j < topKeywords.length; j++)
        {
            if (word === topKeywords[j])
            {
                isKeyword = true;
                break;
            }
        }

        if (isKeyword)
        {
            resultWords.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
        else
        {
            resultWords.push(word);
        }
    }

    return resultWords.join(' ');
}

