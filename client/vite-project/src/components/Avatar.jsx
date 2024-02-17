import React from "react";

const Avatar = ({isDrawerOpen, setDrawerOpen}) => {
  const toggle = () => setDrawerOpen(!isDrawerOpen);
  return (
    <>
      <div className="avatar">
        <div className="w-12 rounded-[50%]">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" onClick={toggle}/>
        </div>
      </div>
    </>
  );
};

export default Avatar;
