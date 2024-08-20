import LoginUi from "@/validation/LoginUi";

// FrontPage function () => 
const AuthPage = () => {
  return (
    <div className=" bg-slate-800 h-screen">
      <div className="  flex items-center justify-center h-screen  ">
          <LoginUi/>
      </div>
    </div>
  );
};

export default AuthPage;
