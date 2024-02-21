'use client'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod' 
import './contact.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const createMessageSchema = z.object({
  name: z.string()
    .min(1, 'Informe seu nome por favor')
    .transform(name => {  // Capitalizando nome
      return name.trim().split(' ').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .email('Formato de email inválido')
    .min(1, 'Informe seu email por favor'),
  message: z.string()
    .min(1, 'Insira a mensagem que deseja me enviar :)'),
});

type createMessageFormDate = z.infer<typeof createMessageSchema>

export default function Contact() {
  const { register, handleSubmit, formState: {errors} } = useForm<createMessageFormDate>({
    resolver: zodResolver(createMessageSchema)
  })
  
  const form = useRef(null)
  const [feedback, setFeedback] = useState('')
  
  async function sendEmail() {
    if (form.current != null) {
      emailjs.sendForm('service_zvbyxtu', 'template_hwvgcp3', form.current, 'iQxI2VbqGqDxowJRd')
        .then(response => {
          setFeedback("Muito obrigado pelo contato! Sua mensagem foi enviada com sucesso e em breve entrarei em contato.")
        })
        .catch(error => {
          console.error(error);
          setFeedback("Falha ao enviar mensagem, por favor tente novamente mais tarde.")
        });
    }
  }
  
  return (
    <section id="contact">
      <div className='container'>
        <div className='wrapper'>
          <div className='d-flex flex-wrap'>
            <div className='col-12 col-xl-5 mb-4 mb-xl-0'>
              <h1>Contate-me</h1>
              <p>Caso tenha alguma dúvida ou deseja entrar em contato, me mande um email utilizando o formulário</p>
            </div>
            <div className='col-12 offset-xl-1 col-xl-5'>
              <form
                  className='d-flex flex-column justify-content-center gap-3' 
                  onSubmit={handleSubmit(sendEmail)}
                  ref={form}
                >
                  <div className='form-group'>
                    <label htmlFor="name">Nome</label>
                    <input 
                      className='form-control' 
                      type="text" 
                      {...register('name')}
                    />
                    {errors.name && <span>{errors.name.message}</span>}
                  </div>
                  <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                      className='form-control' 
                      type="email" 
                      {...register('email')}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                  </div>
                  <div className='form-group'>
                    <label htmlFor="message">Mensagem</label>
                    <textarea 
                      id="message" 
                      cols={30} 
                      rows={10}
                      className='form-control'
                      {...register('message')}
                    />
                    {errors.message && <span>{errors.message.message}</span>}
                  </div>
                  <button className='btn btn-success' type='submit'>Entrar em contato</button>
                  {feedback != '' && <span>{feedback}</span>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}