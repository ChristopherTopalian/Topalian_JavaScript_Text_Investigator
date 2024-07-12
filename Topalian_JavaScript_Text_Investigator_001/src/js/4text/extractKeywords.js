// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// extractKeywords.js

function extractKeywords(whichText)
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

    for (let word in wordFrequencies)
    {
        frequencyArray.push([word, wordFrequencies[word]]);
    }

    // sort array by frequency in descending order
    frequencyArray.sort(function(a, b)
    {
        return b[1] - a[1];
    });

    // get top 10 keywords
    let topKeywords = frequencyArray.slice(0, 10).map(function(pair)
    {
        return pair[0];
    });

    // return top keywords as comma separated string
    return topKeywords.join(', ');
}

