import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import HeroSection from '../components/Home/HeroSection';
import GenerateAccessToken from '../utils/GenerateAccessToken';
import Flight from './Flight';
import {useDispatch} from 'react-redux'
import { assignAccessToken } from '../store/UserSlice';

function Home() {
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    const generate = async ()=>{
      const token = await GenerateAccessToken()
      console.log("access token generated")
      dispatch(assignAccessToken({accessToken:token?.data?.access_token}))
    }
    generate()
  },[])

  return (
    <div className='bg-gray-950 min-h-screen'>
      <div>
        <HeroSection />
      </div>
      <div>
        <Flight/>
      </div>

    </div>
  );
}

export default Home;

