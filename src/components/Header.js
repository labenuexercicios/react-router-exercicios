import { useNavigate} from "react-router-dom";
import { goToHome, goToLogin, goToProfile } from "../routes/coordinator";

function Header() {

  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfile(navigate, 'gui')}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLogin(navigate)}>
        Fazer Login
      </button>
    </header>
  );
}

export default Header;