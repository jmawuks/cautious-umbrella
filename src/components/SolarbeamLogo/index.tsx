import React from 'react'
import Image from '../Image'

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
const SolarbeamLogo = () => {
  return (
    <>
      <div className="mt-4 mb-4 sm:hidden"></div>
      <div className="flex justify items-center mt-8 mb-10 hidden sm:block" style={{ minHeight: 40 }}>
        <Image src="/logo.png" alt="Solarbeam" width={600} height={10} />
      </div>
    </>
  )
}

export default SolarbeamLogo
