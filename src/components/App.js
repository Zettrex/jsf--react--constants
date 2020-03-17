import React from 'react';
import getAndDisplay, {API_URL} from "./api";
import {WEBSITE_NAME, DOMAIN_NAME, MY_CONSTANT, USEFUL_NUMBER, ALLOW_COMMENTS} from "./constants"
import {calcArea, calcCirc, PI} from "./circles";
import greet from "./greet";

export default function App() {

  /* output - don't move this code into another file */

  return (
    <div className="App">
      <h1>Import/Export</h1>

      <h2>api.js</h2>
      <ul>
        <li>
          {getAndDisplay(API_URL)}
        </li>
      </ul>

      <h2>greet.js</h2>
      <ul>
        <li>
          {greet(WEBSITE_NAME)}
        </li>
      </ul>

      <h2>circle.js</h2>
      <ul>
        <li>
          PI is {PI}
        </li>
        <li>
          Area of a 3cm radius circle is: {calcArea(3)}
        </li>
        <li>
          Circumference of a 3cm radius circle is: {calcCirc(3)}
        </li>
      </ul>


      <h2>constants.js</h2>
      <ul>
        <li>
          websiteName: {WEBSITE_NAME}
        </li>
        <li>
          domainName: {DOMAIN_NAME}
        </li>
        <li>
          myConstant: {MY_CONSTANT}
        </li>
        <li>
          usefulNumber: {USEFUL_NUMBER}
        </li>
        <li>
          allowComments: {ALLOW_COMMENTS ? "yes" : "no"}
        </li>
      </ul>
    </div>
  );
}
