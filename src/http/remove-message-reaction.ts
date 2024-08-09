interface RemoveMessageReactionProps {
  roomId: string;
  messageId: string;
}

export const removeMessageReaction = async ({ messageId, roomId }: RemoveMessageReactionProps) => {
  await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'DELETE',
  })
}
