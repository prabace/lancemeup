import React from 'react'
import { redirect } from "react-router-dom";

const withAuthHoc = (ChildComponent) => {

  function NewComponent (){
    
  const { isAuthenticated } = this.props;

  if (!isAuthenticated) {
    redirect('/signin') ;
  }

  return (
    <ChildComponent/>
  )


  }

  return NewComponent


}

export default withAuthHoc