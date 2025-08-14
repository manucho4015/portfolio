import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // R9J5eTHuBl81E5USv
    // template_30vlgh5
    // service_p3gqrfm

    toast.promise(emailjs.send(
      'service_p3gqrfm',
      'template_30vlgh5',
      {
        from_name: form.name,
        to_name: 'Manucho',
        from_email: form.email,
        to_email: 'eochieng16@gmail.com',
        message: form.message
      },
      'R9J5eTHuBl81E5USv'
    ), {
      pending: 'Sending email...',
      success: {
        render() {
          setLoading(false)
          setForm({
            name: '',
            email: '',
            message: ''
          })
          return "Thank you! I'll get back as soon as I can 😄"
        }
      },
      error: {
        render() {
          console.log(error)
          return 'Something went wrong.'
        }
      }
    })

    // emailjs.send(
    //   'service_p3gqrfm',
    //   'template_30vlgh5',
    //   {
    //     from_name: form.name,
    //     to_name: 'Manucho',
    //     from_email: form.email,
    //     to_email: 'eochieng16@gmail.com',
    //     message: form.message
    //   },
    //   'R9J5eTHuBl81E5USv'
    // ).then(() => {
    //   setLoading(false)
    //   setForm({
    //     name: '',
    //     email: '',
    //     message: ''
    //   })
    // }, (error) => {
    //   setLoading(false)
    //   console.log(error)
    // })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form action="" ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label htmlFor="" className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" name="name" id="" value={form.name} onChange={handleChange} placeholder="What's your name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg focus:ring-1 focus:ring-white-100 outline-none border-none' required />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg focus:ring-1 focus:ring-white-100 outline-none border-none' required />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg focus:ring-1 focus:ring-white-100 outline-none border-none' required />
          </label>
          <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading ? 'Sending...' : 'Send'}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")