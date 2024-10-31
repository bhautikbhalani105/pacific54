import { ROUTES } from "../../../utils/constants/routes";

import StyledBreadcrumb from "../../../components/layout/breadcrumb";

import { Wrapper } from "../style";

const BreadcrumbsPath = [
  {
    title: "User Management",
    href: ROUTES.userManagement,
  },
  {
    title: "View User",
  },
];

const ViewUser = () => {
  return (
    <Wrapper>
      <StyledBreadcrumb items={BreadcrumbsPath}></StyledBreadcrumb>
      <div className="shadow-paper">
        <h2 className="pageTitle">View User</h2>
      </div>
      <div className="shadow-paper"></div>
    </Wrapper>
  );
};

export default ViewUser;
