// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// fetchAllEarthquakeData.js

function fetchAllEarthquakeData()
{
    return fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&orderby=time&minmagnitude=4.5')

    .then(function(response)
    {
        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })

    .then(function(data)
    {
        if (data.features.length > 0)
        {
            let earthquakeList = [];

            // iterate through all earthquakes and collect information
            for (let i = 0; i < data.features.length; i++)
            {
                let earthquake = data.features[i];

                // format date
                let date = new Date(earthquake.properties.time);

                let formattedDate = `${date.toDateString()} ${date.toLocaleTimeString()}`;

                // make earthquake info string
                let earthquakeInfo = `Date: ${formattedDate}, Magnitude: ${earthquake.properties.mag}, Location: ${earthquake.properties.place}`;
                earthquakeList.push(earthquakeInfo);
            }

            // join earthquake info into a single string with newlines
            let allEarthquakesInfo = earthquakeList.join("\n");

            ge("textInput").value = allEarthquakesInfo;

            // return concatenated earthquake info
            return allEarthquakesInfo;
        }
        else
        {
            throw new Error('No earthquake data found');
        }
    })

    .catch(function(error)
    {
        console.error('Error fetching earthquake data:', error);

        // return error message or throw error
        throw error;
    });
}

