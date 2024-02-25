import React from "react";

const DashboardCard = ({ Color, Icon, iconsColor, info, text }) => {
  return (
    <div className="md:p-4 lg:p-4  p-3 md:max-w-[22%]  bg-slate-200 flex  rounded-xl w-full ">
      <p className={`md:p-8 lg:p-6 p-8 ${Color} self-center rounded-xl`}>
        <Icon size={40} color={iconsColor} />
      </p>
      <p className="p-2 md:p-5 lg:p-5 text-black flex flex-col overflow-hidden">
        <span className="text-3xl font-semibold whitespace-nowrap overflow-hidden truncate overflow-ellipsis">
          {info ? info : "N/A"}
        </span>
        <span className="text-xl overflow-ellipsis whitespace-nowrap">
          {text}
        </span>
      </p>
    </div>
  );
};

export default DashboardCard;
