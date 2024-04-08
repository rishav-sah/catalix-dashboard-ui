import React, { useEffect, useState } from "react";
import pageViewsData from "../utils/pageViewsData.json"

const Pageviews = () => {

  const [pageData, setPageData] = useState([]);


  useEffect(() => {
    getPageviewsData();
  }, [])

  function getPageviewsData() {
    setPageData(pageViewsData);
  }

  console.log(pageData.Pageviews)


  const { Total, Unique, AverageTimeOnPage, Entrances, ExitPercentage, PageValue } = pageData.Pageviews || {};

  return (
    <div>
      <table className="w-full text-sm text-left text-gray-600 border">
        <thead className="text-xs uppercase bg-gray-50">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3">Page</th>
            <th>
              Pageviews
              <span className="block text-base text-gray-800 font-light">{Total}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Unique Pageviews
              <span className="block text-base text-gray-800 font-light">{Unique}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Avg. Time on Page
              <span className="block text-base text-gray-800 font-light">{AverageTimeOnPage}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Entrances
              <span className="block text-base text-gray-800 font-light">{Entrances}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              % Exit
              <span className="block text-base text-gray-800 font-light">{ExitPercentage}</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Page Value
              <span className="block text-base text-gray-800 font-light">{PageValue}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {pageData.Metrics?.map((item, index) => (
            <tr key={index} className="bg-white border-b ">
              <td>{item.Page}</td>
              <td className="px-6 py-2">
                {item.Pageviews} (<span className="text-gray-400">{item.PageviewsChangePercentage}</span>)
              </td>
              <td className="px-6 py-2">
                {item.UniquePageviews} ({item.UniquePageviewsChangePercentage})
              </td>
              <td className="px-6 py-2">{item.AverageTimeOnPage}</td>
              <td className="px-6 py-2">
                {item.Entrances} ({item.EntrancesChangePercentage})
              </td>
              <td className="px-6 py-2">{item.ExitPercentage}</td>
              <td className="px-6 py-2">
                {item.PageValue} ({item.PageValueChangePercentage})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pageviews;
