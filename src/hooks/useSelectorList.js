import { useSelector } from 'react-redux';

export default function useSelectorList() {
  const navBarOptions = useSelector((state) => state.navBarOptions);
  const auth = useSelector((state) => state.auth);
  const modalsControl = useSelector((state) => state.modalsControl);
  const locations = useSelector((state) => state.locations);

  const { currentActiveMenuNumber, currentBoardType, bannerTitle, bannerDesc } =
    navBarOptions;
  const {
    isLogin,
    userId,
    membershipStatus,
    isSuspended,
    rejected,
    rejectedReason,
    suspensionDuration,
    suspensionEndDate,
    suspensionReason,
  } = auth;

  const {
    isHospitalSearchModal,
    isUserBanModal,
    isPostDeleteModal,
    isPostOrCommentReportModal,
    scrollLocation,
  } = modalsControl;
  const { comentWrapperLocation } = locations;

  return {
    currentActiveMenuNumber,
    currentBoardType,
    bannerTitle,
    bannerDesc,
    isLogin,
    userId,
    membershipStatus,
    isSuspended,
    rejected,
    rejectedReason,
    suspensionDuration,
    suspensionEndDate,
    suspensionReason,
    isHospitalSearchModal,
    isUserBanModal,
    isPostDeleteModal,
    isPostOrCommentReportModal,
    scrollLocation,
    comentWrapperLocation,
  };
}
