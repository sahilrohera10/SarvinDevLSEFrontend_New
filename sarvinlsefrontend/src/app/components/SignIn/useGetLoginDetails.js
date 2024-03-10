import axios from "axios";
import { useNavigate } from "react-router-dom";

async function getLoginDetails(email, password) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  await axios
    .post("https://www.community.gradvibe.com/auth/login", {
      email,
      password,
    })
    .then(
      (response) => {
        navigate("/JobPortal");
      },
      (error) => {
        alert("Invalid User Credentials or Some Network");
      }
    );

  return 1;
}
export default getLoginDetails;
