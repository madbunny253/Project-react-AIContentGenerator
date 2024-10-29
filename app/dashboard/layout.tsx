"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UpdateCreateUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [totalUsage, setTotalUsage] = useState<Number>(0);
  const [updateCreateUsage,setUpdateCreditUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <UpdateCreateUsageContext.Provider value={{updateCreateUsage,setUpdateCreditUsage}}>
        <div className='bg-slate-100 h-screen'>
          <div className='md:w-64 hidden md:block fixed'>
            <SideNav />
          </div>
          <div className='md:ml-64'>
            <Header />
            {children}
          </div>
        </div>
      </UpdateCreateUsageContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout