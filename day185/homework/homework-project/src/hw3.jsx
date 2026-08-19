import React from 'react'

function Box(props) {
    //შექმენი Box კომპონენტი, რომელსაც color გადაეცემა props-ით. div-ის ფონი უნდა გახდეს გადაცემული ფერი. შექმენი რამდენიმე Box სხვადასხვა ფერით.
  return (
    <div>
        <div style={{
                width: 100,
                height: 100,
                backgroundColor: props.color,
            }}>
        </div>
    </div>
  )
}

export default Box