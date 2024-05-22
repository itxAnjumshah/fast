import './Touch.css'

export default function Touch() {
  return (
    <div className=' outer-wrapper'>
        <div className='text-touch'>
            GET IN TOUCH
        </div>
    <div className='touch'>
        <div className='inner'>
        <input type="text" placeholder='Enter  your  NAme' />
        <input type="email" placeholder='Enter  your  EMail' />
        <input type="password" placeholder='Enter  your Password' />
        <textarea  placeholder='Message' ></textarea>
        </div>
    </div>
    </div>
  )
}
