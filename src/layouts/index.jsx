import { Outlet } from 'react-router-dom';

import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Navbar from '@/layouts/Navbar';
import MyPageSideTab from '@/pages/MyPage/MyPageSideTab';
import AdminSideTab from '@/pages/Admin/AdminSideTab';

import {
  CenterdContainer,
  MyPageCenterdContainer,
  MyPageTitle,
  MyPageFlexWrapper,
  MyPageContentsBox,
  EmptyFooterBox,
  AdminContainer,
  AdminContentsWrapper,
} from '@/pages/CreateCommunityPost/style';

export function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <CenterdContainer>
        <Outlet />
      </CenterdContainer>
      <Footer />
    </>
  );
}

export function MypageLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <MyPageCenterdContainer>
        <MyPageTitle>마이페이지</MyPageTitle>
        <MyPageFlexWrapper>
          <MyPageSideTab />
          <MyPageContentsBox>
            <Outlet />
          </MyPageContentsBox>
        </MyPageFlexWrapper>
      </MyPageCenterdContainer>
      <Footer />
    </>
  );
}

export function AdminLayout() {
  return (
    <>
      <AdminSideTab />
      <AdminContainer>
        <AdminContentsWrapper>
          <Outlet />
        </AdminContentsWrapper>
      </AdminContainer>
    </>
  );
}

export function HeaderLayout() {
  return (
    <>
      <Header />
      <CenterdContainer>
        <Outlet />
      </CenterdContainer>
      <EmptyFooterBox />
    </>
  );
}
