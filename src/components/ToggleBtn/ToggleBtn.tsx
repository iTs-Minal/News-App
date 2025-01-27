import React from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div 
      className={`relative w-14 h-6 flex items-center rounded-full cursor-pointer transition-colors ${
        isOn ? "bg-slate-500" : "bg-white"
      }`} 
      onClick={handleToggle}
    >
      <div 
        className={`w-6 h-6 bg-black rounded-full shadow-md transform transition-transform ${
          isOn ? "translate-x-8" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;