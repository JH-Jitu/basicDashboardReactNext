import React from "react";
import DashboardLayout from "../Components/Layouts/DashboardLayout";
import DynamicTable from "../Components/Table/DynamicTable";
import { developerData } from "../Components/RandomData/RandomData";

const page = () => {
  const columns = [
    { title: "Avatar", key: "imageLink" },
    { title: "Name", key: "name" },
    { title: "GitHub", key: "gitHubLink" },
    { title: "Role", key: "role" },
  ];
  return (
    <DashboardLayout>
      <h1>Hello This is DeveloperPanel</h1>
      <DynamicTable columns={columns} data={developerData} />
    </DashboardLayout>
  );
};

export default page;
