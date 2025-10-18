import React from 'react'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen w-full relative bg-black">
    {/* Violet Storm Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
    {children}
  </div>
  )
}

export default layout