import React from 'react';
import {selfUrl} from '../../config/secrets'

const Page = async () => {
  
  const data = await fetch(`${selfUrl}/api/ticker?ticker=AAPL`);
  console.log('data')

  return (
    <div
      className = 'container mx-auto'
    >
      ticker


      

    </div>
  )
}

export default Page;