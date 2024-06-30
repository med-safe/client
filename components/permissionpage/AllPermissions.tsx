
import React from 'react'
import Request from './Request'


const AllPermissions = (data:any) => {
    // console.log(">>>>", data.data[0].id);

    
  return (
    <div className='flex flex-col divide-y-[1px] divide-slate-200 w-fit'>
                {
                    !data ? <div>Loading</div>:data.data.map((item:any, idx:any) => (
                        <Request key={idx} title={item.to.name} reqId={item.id} />
                    ))
                  
                }
                {
                  data.data.length<=0&&
                  <h1 className='text-xl'>Nothing to show for now.</h1>
                }
            </div>
  )
}

export default AllPermissions