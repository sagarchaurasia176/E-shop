import LoginUi from "@/validation/LoginUi";
import SingupUi from "@/validation/SingupUi";
import React, { useState } from "react";
import toast from "react-hot-toast";

const FrontPage = () => {
  // statte to change the button accorndingot the behavious
  const [isBtnChange, setChange] = useState(true);

  // this show the true state
  const loginSignupBtnChange = () => {
    setChange(!isBtnChange);
  };

  return (
    <div className=" bg-slate-800 h-screen">
      <div className=""></div>
      <div className="  flex items-center justify-center h-screen  ">
        {isBtnChange  ? (
          <LoginUi loginSignupBtnChange={loginSignupBtnChange} />
        ) : (
          <SingupUi loginSignupBtnChange={loginSignupBtnChange} />
        )}
      </div>
    </div>
  );
};

export default FrontPage;
