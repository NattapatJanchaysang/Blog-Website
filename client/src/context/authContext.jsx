import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("/api/auth/login", inputs);
      setCurrentUser(res.data);
      return res.data;
    } catch (error) {
      // ส่ง error ขึ้นไปให้ caller แสดงข้อความ
      throw error.response?.data || error.message;
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setCurrentUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};