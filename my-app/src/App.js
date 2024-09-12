import React from 'react';
import Menu from './MenuItem';
//import ProductCard from './card';
function App(){
    return (
        <Menu/>
    );
}

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import OrdersList from './OrdersList';
// import Dashboard from './Dashboard';
// import CustomerList from './CustomersList';
// import CustomerProfile from './CustomerDetails';
// import ItemForm from './ItemForm';
// import ItemsList from './ItemsList';
// import MediaUpload from './MediaUpload';
// function App() {
//   return (
//     <Router>
//       <div className="flex bg-gray-100 min-h-screen">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <main className="flex-1 p-6">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/orderslist" element={<OrdersList />} />
//               <Route path="/customerslist" element = {<CustomerList/>}/>
//               <Route path= "/customersdetails" element = {<CustomerProfile/>}/>
//               <Route path= "/itemslist" element = {<ItemsList/>}/>
//               <Route path= "/itemadd" element = {<ItemForm/>}/>
//               <Route path= "/addmedia" element = {<MediaUpload/>}/>
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
   
//   );
// }
export default App;

