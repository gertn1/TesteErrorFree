import { Route, Routes } from 'react-router-dom';

import { Account } from './pages/accounts';
import { EditAccount } from './pages/accounts/editAccount';
import { NewAccount } from './pages/accounts/newAccount';
import { Home } from './pages/Home';
import { Organization } from './pages/organizations';
import { EditOrganization } from './pages/organizations/editOrganization';
import { NewOrganization } from './pages/organizations/newOrganization';
import { Partner } from './pages/partners';
import { EditPartner } from './pages/partners/editPartner';
import { NewPartner } from './pages/partners/newPartner';
import { MyThemeProvider } from './theme/MyThemeProvider';

export const AppRoutes = () => {
  return (
    <MyThemeProvider>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Organization />} path="/organizations" />
        <Route element={<NewOrganization />} path="/new-organization" />
        <Route element={<EditOrganization />} path="/edit-organization" />
        <Route element={<Partner />} path="/partners" />
        <Route element={<NewPartner />} path="/new-partner" />
        <Route element={<EditPartner />} path="/edit-partner" />
        <Route element={<Account />} path="/accounts" />
        <Route element={<NewAccount />} path="/new-account" />
        <Route element={<EditAccount />} path="/edit-account" />
      </Routes>
    </MyThemeProvider>
  );
};
