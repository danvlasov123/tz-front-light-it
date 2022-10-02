import { useState } from "react";
import { LoginForm } from "components/Forms/LoginForm";
import { RegisterForm } from "components/Forms/RegisterForm";
export interface IStages {
  SIGN_UP: string;
  SIGN_IN: string;
}

const AuthPage = (): JSX.Element => {
  const STAGES: IStages = {
    SIGN_UP: "SIGH_UP",
    SIGN_IN: "SIGH_IN",
  };

  const [stage, setStage] = useState(STAGES.SIGN_IN);

  console.log(new Date().toISOString());

  return (
    <div className="container h-full">
      <div className="w-full h-full flex justify-center min-h-screen">
        {stage === STAGES.SIGN_IN && (
          <LoginForm setStage={setStage} stages={STAGES} />
        )}
        {stage === STAGES.SIGN_UP && (
          <RegisterForm setStage={setStage} stages={STAGES} />
        )}
      </div>
    </div>
  );
};

export { AuthPage };
