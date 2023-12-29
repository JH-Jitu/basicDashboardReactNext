import React from "react";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import DynamicTable from "../Components/Table/DynamicTable";
import { recruiterData } from "../Components/RandomData/RandomData";

const page = () => {
  const columns = [
    { title: "Avatar", key: "imageLink" },
    { title: "Name", key: "name" },
    { title: "GitHub", key: "gitHubLink" },
    { title: "Role", key: "role" },
  ];
  return (
    <DashboardLayout>
      <h1>Hello This is RecruiterPanel</h1>
      <DynamicTable columns={columns} data={recruiterData} />
    </DashboardLayout>
  );
};

export default page;
