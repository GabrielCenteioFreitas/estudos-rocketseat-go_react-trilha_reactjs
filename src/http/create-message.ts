interface CreateMessageProps {
  roomId: string;
  message: string;
}

export const createMessage = async ({ message, roomId }: CreateMessageProps) => {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages`, {
    method: 'POST',
    body: JSON.stringify({
      message,
    })
  })

  const data: { id: string } = await response.json()

  return { roomId: data.id }
}
