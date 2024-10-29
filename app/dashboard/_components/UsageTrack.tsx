"use client"
import { Button } from '@/components/ui/button'
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '@/utils/db';
import { HISTORY } from '../history/page';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreateUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import Link from 'next/link';

function UsageTrack() {

    const {user} =useUser();
    const {totalUsage, setTotalUsage}=useContext(TotalUsageContext)
    const {updateCreateUsage,setUpdateCreditUsage}=useContext(UpdateCreateUsageContext)

    useEffect(()=>{
        user&&getData();
    },[user])

    useEffect(()=>{
        user&&getData();
    },[updateCreateUsage&&user]);

    const getData=async ()=>{
        {/* @ts-ignore */}
        const result:HISTORY[]=await db.select().from(AIOutput).where(eq(AIOutput.createdby, user?.primaryEmailAddress?.emailAddress));
        getTotalUsage(result);
    } 

    const getTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        result.forEach(element=>{
            total += Number(element.aiResponse?.length)
        });
        setTotalUsage(total);
        console.log(total);
    }

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: (totalUsage/10000)*100+'%' }}>
                    </div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 credits used</h2>
            </div>
            <Link href="/dashboard/billing">
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
            </Link>
        </div>
    )
}

export default UsageTrack