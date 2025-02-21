import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Copy, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>

      <Button type="submit">
        Enviar <ArrowRight />
      </Button>

      <IconButton type="button">
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField placeholder="Digite o seu e-mail " />
        </InputRoot>
      </div>
    </main>
  )
}
