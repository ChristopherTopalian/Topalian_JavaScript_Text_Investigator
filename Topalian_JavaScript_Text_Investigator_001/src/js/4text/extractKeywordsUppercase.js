// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// extractKeywordsUppercase.js

function extractKeywordsUppercase(whichText)
{
    // array of common stop words to ignore
    let stopWords = ["a", "an", "and", "the", "in", "on", "at", "of", "to", "is", "it", "that", "this", "with", "for", "as", "by", "but", "or", "nor", "up", "down", "out", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "too", "very", "can", "will", "just", "should", "now"];

    // convert whichText to lowercase and split it into words
    let words = whichText.toLowerCase().split(' ');

    // object to store word frequencies
    let wordFrequencies = {};

    // loop through words in whichText
    for (let i = 0; i < words.length; i++)
    {
        let word = words[i];

        // is word not a stop word
        let isStopWord = false;

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

    for (let word in wordFrequencies)
    {
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

    // capitalize first letter of each keyword
    for (let i = 0; i < topKeywords.length; i++)
    {
        topKeywords[i] = topKeywords[i].charAt(0).toUpperCase() + topKeywords[i].slice(1);
    }

    // return top keywords as comma separated string
    return topKeywords.join(', ');
}

