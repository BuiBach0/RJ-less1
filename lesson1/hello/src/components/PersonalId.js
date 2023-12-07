import React from 'react'

function PersonalId(props) {
  return (
    <div>
      <img src={props.img} alt='...' style={{with:'150px', height: '150px'}}/>
      <h1>hello</h1>
      <h2> I'm {props.name} </h2>
      <h2> {props.age} </h2>
      <h2> Address {props.address}</h2>

    </div>
  )
}

export default PersonalId
