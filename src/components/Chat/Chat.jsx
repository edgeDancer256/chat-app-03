import { useChat } from 'context';
import { useEffect } from 'react';
import { getChats, ChatEngine } from 'react-chat-engine';

export const Chat = () => {
  const { myChats, setMyChats, chatConfig, selectedChat } = useChat();

  useEffect(() => {
    console.log('My Chats: ', myChats);
  }, [myChats]);

  return <>{!!chatConfig && <ChatEngine />}</>;
};
