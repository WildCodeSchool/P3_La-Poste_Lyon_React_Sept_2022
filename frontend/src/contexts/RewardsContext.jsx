import React, { createContext, useEffect, useContext } from "react";
import { toast, Toaster } from "react-hot-toast";
import CurrentUserContext from "./userContext";
import useLocalStorage from "../hooks/useLocalStorage";

const { VITE_BACKEND_URL } = import.meta.env;

const RewardsContext = createContext();
export { RewardsContext };

export function RewardsContextProvider({ children }) {
  const notifyProblem = () =>
    toast("There was a problem fetching the rewards. Please try again later.");
  const [rewards, setRewards] = useLocalStorage("rewards", []);
  const { currentUser, token } = useContext(CurrentUserContext);

  const getRewards = () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`${VITE_BACKEND_URL}/api/rewards/${currentUser.id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setRewards(data);
      })
      .catch((err) => {
        notifyProblem(err);
      });
  };

  useEffect(() => {
    currentUser.email && getRewards();
  }, [rewards.length]);

  return (
    <RewardsContext.Provider value={{ rewards, setRewards, getRewards }}>
      <Toaster position="top-center" reverseOrder />
      {children}
    </RewardsContext.Provider>
  );
}

export const useRewardsContext = () => useContext(RewardsContext);
