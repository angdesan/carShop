import React from 'react'
import { FormCard } from './FormCard'
export  function MyForm() {
    const styles = {
        label: 'block text-gray-700 text-sm font-bold pt-2 pb-1',
        field:
          'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
        button:
          ' bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600',
        errorMsg: 'text-red-500 text-sm',
      }
    return (
        <div className='flex flex-row w-full'>
            <div className='py-12 flex-1'>
                <div className='flex bg-white rounded-lg shadow-2x1 overflow-hidden mx-auto max-w-sm lg:max-w-4xl'>

                    <FormCard />
                </div>
            </div>

        </div>
    )
}
