
import { createBrowserRouter, createRoutesFromElements,Navigate,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ErrorPage from './Pages/ErrorPage'
import RootLayout from './Layout/RootLayout'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import FindTutorPage from './Pages/FindTutorPage'
import AddtutorPage from './Pages/AddtutorPage'
import PrivateRoute from './Components/PrivateRoute'
import TutorDetails from './Pages/TutorDetails'
import MybookedTutor from './Pages/MybookedTutor'
import MyTutorials from './Pages/MyTutorials'
import UpdatePage from './Pages/UpdatePage'
import SearchPage from './Pages/SearchPage'
import FindTutorLayout from './Layout/FindTutorLayout'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>

        <Route path='' element={ <RootLayout />} >
        <Route path='' element={<Navigate to="home"/>} />
        <Route path='home' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signin' element={<LoginPage />} />
        <Route path='signup' element={<SignUpPage />} />
        <Route path='register' element={<SignUpPage />} />
        <Route path='find-tutors' element={<FindTutorLayout/>}  > 
        <Route path=''element={  <FindTutorPage />} />
        <Route path=':id' element={<SearchPage />} />
        </Route>
        <Route path='add-tutors' element={<PrivateRoute> <AddtutorPage /> </PrivateRoute> } />
        <Route path='my-booked-tutor' element={<PrivateRoute> <MybookedTutor /> </PrivateRoute> } />
        <Route path='my-tutorials' element={<PrivateRoute> <MyTutorials /> </PrivateRoute> } />
        <Route path='tutorials-update' >
        <Route path='' element={<Navigate to='/error'></Navigate>} />
        <Route path=':id' element={<PrivateRoute> <UpdatePage /> </PrivateRoute> }  />
        </Route>
        <Route path='tutor'  >
        <Route path='' element= {<Navigate to="/error"></Navigate>} />
        <Route path=':id' element={<PrivateRoute> <TutorDetails /> </PrivateRoute> } />
        </Route>
        </Route>
        <Route path='/*' element= {<ErrorPage/>} />

      </Route>

    )
  )
  
  return (
    <RouterProvider router ={router} />
      
  )
}

export default App
