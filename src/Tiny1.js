import React, { useState } from "react";
import axios from "axios";
import { BsFiletypeCsv } from 'react-icons/bs';
import img1 from './download.png'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Tiny1 = () => {
  const [histogramData, setHistogramData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://www.terriblytinytales.com/test.txt");
      const words = response.data.split(/\s+/); // Split by whitespace
      const histogram = {};

      words.forEach((word) => {
        const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, ""); 
        if (normalizedWord) { // Ignore empty words
          histogram[normalizedWord] = (histogram[normalizedWord] || 0) + 1; 
        }
      });

      const histogramArray = Object.entries(histogram).map(([word, count]) => ({ word, count }));
      histogramArray.sort((a, b) => b.count - a.count); 
      setHistogramData(histogramArray.slice(0, 20)); // for only top 20 words
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const exportData = () => {
    const csvContent = "data:text/csv;charset=utf-8," + histogramData.map((row) => `${row.word},${row.count}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "histogram.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[650px]">
      <img src={img1} className="w-[60px] h-[60px] rounded-full shadow-sm shadow-black"/>
      <h1 className="text-3xl font-bold text-orange-400">Wellcome TERRIBLY TINY TALES</h1>
      <button className="mt-5 bg-green-500 hover:bg-green-100 hover:text-blue-500 rounded-md text-white px-3 p-1" onClick={fetchData} disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
      {histogramData.length > 0 && (
        <div className="mt-9">
          <p className="p-2 mb-3 font-sans">Here is the  histogram of the 20 most occurring words.</p>
         
          <BarChart width={900}  height={380} data={histogramData}>
            <CartesianGrid strokeDasharray="4 3" />
            <XAxis dataKey="word" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>

          <button className="bg-blue-500 flex hover:bg-blue-100 hover:text-black rounded-md text-white px-3 p-1" onClick={exportData}>Export
          <BsFiletypeCsv className="text-black mt-1  ml-2"/></button>
        </div>
      )}
    </div>
  );
};

export default Tiny1;
