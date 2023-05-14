


## Deployment
`Here is the live link of this project`
-[https://react-histogram.netlify.app/]

## Libraries

**axios** </br>
 `npm i axios`</br>
Axios is a JavaScript library used for making HTTP requests. In this code, Axios is used to make an HTTP GET request to the specified URL https://www.[terriblytinytales.com/test.txt] in order to fetch the contents of a text file.

**React-icon**</br>
`npm install react-icons --save`</br>
this librarie is used for putting icon on web page

**Recharts**</br> 
 `npm i recharts`</br>
In this code, the `import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend }` from `"recharts"` statement imports specific components from the Recharts library. These components are used to create a histogram chart of the top 20 most occurring words in the text file.

`BarChart`: This component creates a bar chart, which is used to display the frequency counts of the top 20 words.

`Bar`: This component creates individual bars within the bar chart, representing the frequency count of each word.

`XAxis`: This component creates the x-axis of the chart, which displays the top 20 words with the highest frequency counts.

`YAxis`: This component creates the y-axis of the chart, which displays the frequency count values.

`CartesianGrid`: This component creates a grid of horizontal and vertical lines behind the bars to make it easier to read the chart.

`Tooltip`: This component adds a tooltip to each bar, displaying the word and its frequency count.

`Legend`: This component creates a legend for the chart, which is not used in this code.

**Tailwind css:**
Here I used little bit Tailwind css to add some style and color for styling the page.</br>

Whole code is written in `Tiny.js` file and here the parent comoponent is `App.js.`
The code imports the necessary libraries, including React itself, axios for HTTP requests, and recharts for the histogram chart. It defines a functional component `App`1 that renders the submit button and the histogram chart, and handles the fetching of the data, parsing it into a histogram, and exporting the histogram data as a CSV file.

The state of the component is managed using the `useState` hook, with `histogramData` representing the data for the histogram chart, and `isLoading` indicating whether a request is currently being made.

When the user clicks the submit button, the `fetchData` function is called, which sets the`isLoading` state to true, makes an HTTP request to the specified URL, and parses the response into a histogram object, with each word as a key and its frequency as a value. The `Object.entries` function is then used to convert the histogram object into an array of objects, where each object has a `word` and `count` property.