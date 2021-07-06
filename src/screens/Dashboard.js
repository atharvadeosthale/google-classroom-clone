import React, { useEffect } from "react";
import "./Dashboard.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (!user) history.replace("/");
  }, [user, loading]);

  return <div className="dashboard"></div>;
}

export default Dashboard;
