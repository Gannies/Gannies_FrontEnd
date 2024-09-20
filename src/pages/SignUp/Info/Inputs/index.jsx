import Email from '@/pages/SignUp/Info/Inputs/Email';
import Nickname from '@/pages/SignUp/Info/Inputs/Nickname';
import Password from '@/pages/SignUp/Info/Inputs/Password';
import PasswordCheck from '@/pages/SignUp/Info/Inputs/PasswordCheck';

function Inputs({ allow, handleAllow }) {
  return (
    <>
      <Nickname handleAllow={handleAllow} />
      <Email handleAllow={handleAllow} />
      <Password handleAllow={handleAllow} />
      <PasswordCheck allow={allow} handleAllow={handleAllow} />
    </>
  );
}

export default Inputs;
