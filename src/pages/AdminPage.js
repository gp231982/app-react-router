import React from "react";
import { Redirect } from "react-router-dom";

const access = false;

const AdminPage = () => {
  return (
    <div>
      {access ? <h3>Witaj na stronie admina</h3> : <Redirect to="/login" />}
    </div>
  );
};

export default AdminPage;
