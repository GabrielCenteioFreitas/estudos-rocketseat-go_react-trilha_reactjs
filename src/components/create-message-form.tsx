import { useParams } from "react-router-dom";
import { createMessage } from "../http/create-message";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export const CreateMessageForm = () => {
  const { roomId } = useParams();

  if (!roomId) {
    throw new Error('Messages components must be used within room page')
  }

  async function createMessageAction(data: FormData) {
    const message = data.get('message')?.toString()

    if (!message || !roomId) return;

    try {
      await createMessage({ message, roomId })
    } catch {
      toast.error('Falha ao criar pergunta, tente novamente!')
    }
  }

  return (
    <form 
      action={createMessageAction}
      className='flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1'
    >
      <input
        type='text'
        name='theme'
        placeholder='Qual a sua pergunta?'
        autoComplete='off'
        className='flex-1 text-sm bg-transparent mx-2 outline-none text-zinc-100 placeholder:text-zinc-500'
      />

      <button
        type='submit'
        className='
          bg-orange-400 hover:bg-orange-500 text-orange-950 transition-colors rounded-lg
          px-3 py-1.5 flex gap-2 items-center font-medium text-sm
        '
      >
        Criar pergunta
        <ArrowRight className='size-4' />
      </button>
    </form>
  );
}
