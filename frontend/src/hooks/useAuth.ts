import { useAppSelector } from "./hook";

export const useAuth = () => {
  const { username, refreshToken } = useAppSelector((state) => state.user);
  return {
    isAuth: !!refreshToken,
    username,
    refreshToken,
  };
};
