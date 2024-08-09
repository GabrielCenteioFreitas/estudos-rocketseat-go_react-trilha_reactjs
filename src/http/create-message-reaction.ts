interface CreateMessageReactionProps {
  roomId: string;
  messageId: string;
}

export const createMessageReaction = async ({ messageId, roomId }: CreateMessageReactionProps) => {
  await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
    method: 'PATCH',
  })
}
