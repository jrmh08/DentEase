// import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Homepage from "./Pages/Home_Page";
// import AboutUs from "./Pages/About_Us";
// import DentistsPage from "./Pages/Dentists";
// import ServicePage from "./Pages/OurServices";
// import LoginPage from "./Pages/LoginPage";
// import ProfilePage from "./Pages/CustomerProfile";
// import MakeAppointments from "./Pages/MakeAppointments";
// import Admin_Page from "./Pages/AdminPage";
// import DentistPage from "./Pages/DentistPage";


// import "./App.css";

// function App() {
//   const isAuthenticated = true; // Change this based on your authentication logic

//   return (
//     <div className="AppJSX-container">
//       <BrowserRouter>
//         <Routes>
//           {/* Display LoginPage at the root */}
//           <Route path="/" element={<LoginPage />} />

//           {/* If authenticated, display authenticated routes */}
//           {isAuthenticated ? (
//             <> 
            
//               <Route path="/admin" element={<Admin_Page />} /> 
//               <Route path="/home" element={<Homepage />} />
//               <Route path="/about" element={<AboutUs />} />
//               <Route path="/dentists" element={<DentistsPage />} />
//               <Route path="/service" element={<ServicePage />} />
//               <Route path="/profile" element={<ProfilePage />} />
//               <Route path="/appointments" element={<MakeAppointments />} />
//               <Route path="/dentist" element={<DentistPage />} />




//             </>
//           ) : (
//             <Navigate to="/login" />
//           )}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Homepage from "./Pages/Home_Page";
import AboutUs from "./Pages/About_Us";
import DentistsPage from "./Pages/Dentists";
import ServicePage from "./Pages/OurServices";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/CustomerProfile";
import MakeAppointments from "./Pages/MakeAppointments";
import Admin_Page from "./Pages/AdminPage";
import DentistPage from "./Pages/DentistPage";

import "./App.css";

function App() {
  const isAuthenticated = true; // Change this based on your authentication logic

  return (
    <GoogleOAuthProvider clientId="1047582222950-j7gh1psvto801e8ns851emvvpkna9eup.apps.googleusercontent.com">
      <div className="AppJSX-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            {isAuthenticated ? (
              <>
                <Route path="/admin" element={<Admin_Page />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/dentists" element={<DentistsPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/appointments" element={<MakeAppointments />} />
                <Route path="/dentist" element={<DentistPage />} />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
