import React from 'react'

export interface HISTORY{
    id:Number,
    formData:string,
    aiResponse:string,
    templateSlug:string,
    createdby:string,
    createdAt:string
}

function History() {
  return (
    <div>
        <h2 className='font-bold text-3xl'>History</h2>
    </div>
  )
}

export default History