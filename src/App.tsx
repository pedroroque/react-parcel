import React, { ReactElement } from 'react'

export const App = (): ReactElement => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
      <div className="grid mt-40">
        <span className="text-center text-5xl text-red-800 shadow-blue-500 drop-shadow-lg ">Parcel Rocks!</span>
        <span className="text-center text-5xl text-red-800">Parcel Rocks!</span>
      </div>
    </>
  )
}
