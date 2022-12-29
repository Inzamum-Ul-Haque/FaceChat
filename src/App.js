import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed/ChatFeed";
import "./App.css";
import LoginForm from "./Components/LoginForm/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="a5264714-7aca-431a-9f16-111f4155fc2b"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
