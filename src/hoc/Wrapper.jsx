import React from 'react'

const Wrapper = (Component, className) => {
  function HOC() {
    return (
      <section className={`${className}`}>
        <Component />
      </section>
    )
  }
  return HOC
}

export default Wrapper
