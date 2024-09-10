import React from 'react';
import '../../envConfig'

const Page = async () => {
  const key = process.env.selfUrl
  const data = await fetch(`${key}/api/ticker?ticker=AAPL`);
  
  console.log(data)

  return (
    <div
      className = 'container mx-auto'
    >
      ticker


      

    </div>
  )
}

export default Page;