"use client";

import React, { useEffect, useState } from 'react'
import { GlobalContextProvider } from '../context/globalContextProvider';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, [])

  if(!isReady){
    return null;
  }
  return (
    <GlobalContextProvider>
      <Toaster/>
      {children}
    </GlobalContextProvider>
  )
}

export default ContextProvider
