import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homes from './pages/Home'; // Ensure these components exist
import Abouts from './pages/About';
import Contacts from './pages/Contact';
import Reacipes from './pages/Receipe';
import Blogs from './pages/Blog';
import { Provider } from 'react-redux';
import store from './Redux-Thunk/DeliciousStore';
import Snack from './pages/Snack';
import Dinner from './pages/Dinner';
import Sarch from './pages/SearchReceipe';

export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<Abouts />} />
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/recipe' element={<Reacipes/>}/>
        <Route path='/blog/:id'element={<Blogs/>}/>
        <Route path='/snack'element={<Snack/>}/>
        <Route path='/dinner'element={<Dinner/>}/>
        <Route path='/searchResults'element={<Sarch/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}
