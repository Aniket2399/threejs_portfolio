import { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'



const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = ({ target: { name, value} }) => {
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // service_qvaoukr
     try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,);

        setLoading(false);

        alert('Message sent successfully!');

        setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Something went wrong. Please try again.');
    }
    
    
  }

  return (
    <section id='contact' className='c-space my-20 pb-20'>
      <div className='relative min-h-screen flex items-center justify-center flex-col'>
        <img src='/images/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen'/>
          <div className='contact-container'>
            <h3 className='text-content text-3xl font-semibold'>Let's talk</h3>
            <p className='text-lg text-white-600 mt-3'> Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.</p>
            <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
              <label className='space-y-3'>
                <span className='field-label'>Full Name</span>
                <input 
                  type='text' 
                  name='name' 
                  value={form.name} 
                  onChange={handleChange} 
                  className='field-input' 
                  required
                  placeholder='Enter your name'
                  />
              </label>
              <label className='space-y-3'>
                <span className='field-label'>Email</span>
                <input 
                  type='email' 
                  name='email' 
                  value={form.email} 
                  onChange={handleChange} 
                  className='field-input' 
                  required
                  placeholder='Enter your email'
                  />
              </label>
              <label className='space-y-3'>
                <span className='field-label'>Your Message</span>
                <textarea 
                  type='text' 
                  name='message' 
                  value={form.message} 
                  onChange={handleChange} 
                  className='field-input' 
                  required
                  rows={5}
                  placeholder='Hi, I want to...'
                  />
              </label>
              <button type='submit' >
                <div className='cta-button group'>
                  <div className='bg-circle' />
                    <p className='text'>{loading ? 'Sending...' : 'Send Message'}</p>
                    <div className='arrow-wrapper'>
                      <img src='/images/arrow-down.svg' alt='arrow'/>
                    </div>
                </div>
              </button>
            </form>
          </div>
      </div>
      
    </section>
  )
}

export default Contact