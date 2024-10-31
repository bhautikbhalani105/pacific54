import UserManagementTable from "./components";
import StyledBreadcrumb from "../../components/layout/breadcrumb";

import { Wrapper } from "./style";

const BreadcrumbsPath = [
  {
    title: "User Management",
  },
];

const UserManagement = () => {
  return (
    <Wrapper>
      <StyledBreadcrumb items={BreadcrumbsPath}></StyledBreadcrumb>
      <div className="shadow-paper">
        <h2 className="pageTitle">User Management</h2>
      </div>
      <div className="shadow-paper">
        <UserManagementTable />
      </div>
    </Wrapper>
  );
};

export default UserManagement;
