import React from "react";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import { companyData } from "../Components/RandomData/RandomData";
import DynamicTable from "../Components/Table/DynamicTable";

const page = () => {
  const columns = [
    { title: "Avatar", key: "imageLink" },
    { title: "Name", key: "name" },
    { title: "GitHub", key: "gitHubLink" },
    { title: "Role", key: "role" },
  ];
  return (
    <DashboardLayout>
      <h1>Hello This is CompanyPanel</h1>
      <DynamicTable columns={columns} data={companyData} />
    </DashboardLayout>
  );
};

export default page;
