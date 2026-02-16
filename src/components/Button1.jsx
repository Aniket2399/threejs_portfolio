import React from 'react'

const Button1 = ({ name ,isBeam = false, containerClass, href }) => {
  return (
    <a href={href} className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </a>
  );
};

export default Button1;