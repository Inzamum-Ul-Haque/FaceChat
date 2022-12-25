import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a5264714-7aca-431a-9f16-111f4155fc2b"
      userName="Inzamum"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
