import React from 'react'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen w-full relative">
  {/* Azure Depths */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
    }}
  />
  {/* Your Content/Components */}
  {children}
</div>
  )
}

export default layout