import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [displayName, setDisplayName] = useState("User");

  useEffect(() => {
    const getUserName = () => {
      try {
        // Get logged in user email from localStorage
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (!loggedInUser) return;

        // Parse the stored user data
        const user = JSON.parse(loggedInUser);
        
        // Get all employees and admin data from localStorage
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const admin = JSON.parse(localStorage.getItem("admin")) || [];

        // Check if admin
        if (user.role === "admin") {
          setDisplayName("Admin");
          return;
        }

        // Check if employee
        if (user.role === "employee" && user.data) {
          // Find the employee in localStorage data
          const employee = employees.find(emp => emp.email === user.data.email);
          if (employee) {
            setDisplayName(employee.firstName);
            return;
          }
        }

        // If no match found, check by email directly (fallback)
        const userEmail = user.email || user.data?.email || loggedInUser;
        const foundEmployee = employees.find(emp => emp.email === userEmail);
        const foundAdmin = admin.find(adm => adm.email === userEmail);
        
        if (foundAdmin) {
          setDisplayName("Admin");
        } else if (foundEmployee) {
          setDisplayName(foundEmployee.firstName);
        } else {
          setDisplayName("User");
        }

      } catch (error) {
        console.error("Error loading user data:", error);
        setDisplayName("User");
      }
    };

    getUserName();
  }, []);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> 
        <span className="text-3xl font-semibold">
          {displayName} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;