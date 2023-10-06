import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChildI {
  children: React.ReactNode;
}

function Guadian({ children }: ChildI) {
  const token: boolean = localStorage.getItem("token") ? true : false;
  const navigate = useNavigate();
 useEffect(()=> {if (!token) {
    navigate("/");
  }
 }, []);

  return <>{children}</>;
}

export default Guadian;
