import React from 'react'

function Cw1() {
    let imageUrl = "https://picsum.photos/300/300";
  let width = "300px";
  let height = "300px";

  return (
    <div>
      <img src={imageUrl} width={width} height={height} />
    </div>
  )
}

export default Cw1