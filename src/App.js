import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios"; // Import Axios
import Feedback from "./components/Feedback";
import GiveFeedback from "./components/GiveFeedback";

function App() {
  const handleGoogleLogin = async (response) => {
    console.log(response);
    try {
      const res = await axios.post("http://localhost:5000/auth/google", {
        token: response.credential,
      });
      console.log(res.data);
      // You can handle the response here, such as storing the token and redirecting to another page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <header className="fixed top-6 right-6 ">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </header>
      <Feedback />
    </div>
  );
}

export default App;
