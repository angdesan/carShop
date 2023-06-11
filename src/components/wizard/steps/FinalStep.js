import React from 'react'

export function FinalStep() {
  return (
    <div className='container md:mt-10'>
        <div className='flex flex-col items-center'>
            <div className='text-green-400'>
                {/* imagen */}
            </div>
            <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
                Felicitaciones!
            </div>
            <div className='text-lg font-semibold text-gray-500'>
                Ha generado su compra con éxito!
            </div>
            <a className='mt-10' href='/'>
                <button className='h-10 px-5 text-green-700 transition-colors
                duration-150 border border-gray-300 rounded-lg
                focus: shadow-out-line hover:bg-green-500 hover:text-green-100'>
                    Close
                </button>
            </a>
        </div>

    </div>
  )
}
