import React from 'react'
import Image from 'next/image';
import Nezuko from '../../../public/Nezuko.jpg';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'

const Card = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch('https://reqres.in/api/users?page=2').then((res) =>
            res.json(),
          ),
      })
    
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message;

const user_data=data.data
console.log(user_data)
  return (
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={key}>
    <a href="#">
        <Image className="rounded-t-lg" src={Nezuko} alt="" width={400} height={400}/>
    </a>

    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

</div>

<div className="flex mx-5">

    {user_data.map((data, key => {
        return(
            <div key={key}>
                <h1>hi</h1>
            </div>
        )
    }))}

</div>


  )
}

export default Card