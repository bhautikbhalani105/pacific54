import { lazy } from "react";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/constants/routes";

import AuthGuard from "../components/common/AuthGuard";

import ReactQueryDemo from "../modules/ReactQueryDemo";

const Layout = lazy(() => import("../components/layout"));
const PageNotFound = lazy(() => import("../modules/PageNotFound"));
const SignIn = lazy(() => import("../modules/Auth/Modules/SignIn"));
const SignUp = lazy(() => import("../modules/Auth/Modules/SignUp"));
const ForgotPassword = lazy(
  () => import("../modules/Auth/Modules/ForgotPassword"),
);
const ChangePassword = lazy(
  () => import("../modules/Auth/Modules/ChangePassword"),
);
const Dashboard = lazy(() => import("../modules/Dashboard"));
const MyAccount = lazy(() => import("../modules/MyAccount"));
const UserList = lazy(() => import("../modules/UserManagement"));
const UserView = lazy(() => import("../modules/UserManagement/ViewUser"));
const UserEdit = lazy(() => import("../modules/UserManagement/EditUser"));
const TermsAndCondition = lazy(
  () => import("../modules/CMSManagement/Module/TermsAndConditions"),
);
const PrivacyPolicy = lazy(
  () => import("../modules/CMSManagement/Module/PrivacyPolicy"),
);

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.signIn} element={<SignIn />} />
      <Route path={ROUTES.signUp} element={<SignUp />} />
      <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
      <Route
        path={ROUTES.default}
        element={
          <AuthGuard>
            <Layout />
          </AuthGuard>
        }
      >
        <Route path={ROUTES.pageNotFound} element={<PageNotFound />} />
        <Route path={ROUTES.changePassword} element={<ChangePassword />} />
        <Route path={ROUTES.dashboard} element={<Dashboard />} />
        <Route path={ROUTES.myAccount} element={<MyAccount />} />
        <Route path={ROUTES.userManagement} element={<Outlet />}>
          <Route path={ROUTES.userManagement} element={<UserList />} />
          <Route path={`${ROUTES.userView}/:id`} element={<UserView />} />
          <Route path={`${ROUTES.userEdit}/:id`} element={<UserEdit />} />
          <Route
            path="*"
            element={<Navigate to={ROUTES.userManagement} replace={true} />}
          />
        </Route>
        <Route
          path={ROUTES.termsAndConditions}
          element={<TermsAndCondition />}
        />
        <Route path={ROUTES.privacyPolicy} element={<PrivacyPolicy />} />
        <Route path={ROUTES.reactQueryDemo} element={<ReactQueryDemo />} />
        <Route
          path={ROUTES.default}
          element={<Navigate replace to={ROUTES.dashboard} />}
        />
        <Route
          path="*"
          element={<Navigate replace to={ROUTES.pageNotFound} />}
        />
      </Route>
      <Route path="*" element={<Navigate replace to={ROUTES.default} />} />
    </Routes>
  );
};

export default Routing;
