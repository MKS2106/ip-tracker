# IP Address Tracker
An IP Tracker web application that allows users to retrieve detailed information about any IP address, including geolocation, ISP, timezone, and more.

## Features
- See their own IP Address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location
- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page

## Project Structure
<pre>
ip-tracker/
├── src/
│   ├── components/              
│   ├── context/                
│   │   └── Map.jsx
│   ├── hooks/                   
│   │   ├── useFetch.jsx
│   │   
│   ├── App.jsx                  
│   └── main.jsx                 
├── package.json</pre>
  


## Pre-Requisite 
- Ensure you have a recent LTS (Long-Term Support) version of Node.js installed. Node.js includes npm (Node Package Manager). - You can verify your installation by opening your terminal or command prompt and running:
    " node -v "
    " npm -v "
- Ensure you have installed Tailwind for Vite'
- Ensure you have installed react router DOM(npm i react-router-dom)
- Ensure Leaflet plugin is Installed with the command "npm install react-leaflet"
- Set and Provide the API key through Environment file(.env.local)

## How to Run
#### Locally: 
1. Clone or download the project.
2. Navigate (cd) to the project folder
3. Install Dependencies run "npm install"
4. Start the development server by running "npm run dev"
5. Open the link in browser
![alt text](<Screenshot 2025-07-02 145215.png>)

#### Live Demo:
- https://ip-tracker-lilac-one.vercel.app/

## Deployment
#### You can deploy the app easily using platforms like:
- GitHub Pages
- Netlify
-Vercel

## Reflection:
- Developing this IP Address Tracker was a great opportunity for me to apply my skills of web development and API integration that I learnt so far in a practical, real word scenario. The primary objective was to build a functional web application that could retrieve and display location data based on a user's IP address, along with an interactive map for better visualization. I used React components, hooks, and context to manage state and data flow across the app effectively..

- One of the main challenges I faced was integrating Leaflet.js. I used Leaflet.js to render map. It needed careful attention. Leaflet.js provided an intuitive way to display coordinates on an interactive map. However, ensuring the map updated correctly with new IP inputs required managing state effectively and re-rendering map components appropriately.

- Designing the UI was another challenging area for me. Ensuring responsiveness across screen sizes and achieving a clean, intuitive layout took several iterations.At the same time, it also helped me to master tailwind classes very well.

- While the app is fully functional, there are several areas I’d like to improve. Adding features like dark mode, IP input validation, and error handling for failed requests would enhance the user experience.

