import { useCallback, useState } from "react";
import { TextField } from "components/TextField";
import { Button } from "components/Button";
import { IStages } from "views/pages/auth";
import { useAppDispatch } from "hooks/hook";
import { registerAction } from "services/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { routes } from "routes";

interface IProps {
  setStage: (value: string) => void;
  stages: IStages;
}

const RegisterForm = ({ setStage, stages }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      dispatch(registerAction(username, password))
        .then((res: any): void => {
          if (res.status === 200) {
            navigate(`${routes.find((route) => route.name === "Main")?.path}`);
            toast.success("Welcome");
          } else {
            toast.error(res?.response?.data?.message || res.status);
          }
        })
        .finally(() => setLoading(false));
    },
    [username, password, dispatch, navigate]
  );

  const handleChangeUsername = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    },
    []
  );

  const handleChangePassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    []
  );
  return (
    <div className="w-96 mt-[10%]">
      <div>
        <h1 className="text-2xl font-light tracking-tight	text-center mb-4">
          Sign up
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <TextField
          label="password"
          value={password}
          placeholder="min 8 symbol"
          onChange={handleChangePassword}
          type="password"
        />
        <Button loading={loading}>Create account</Button>
      </form>
      <div className="p-4 mt-4 border border-solid border-slate-200 rounded-md text-center">
        Have an account?
        <span
          className="text-sky-700 cursor-pointer"
          onClick={(): void => setStage(stages.SIGN_IN)}
        >
          {" "}
          Sign in
        </span>{" "}
        .
      </div>
    </div>
  );
};

export { RegisterForm };
