import Title from './Title'
import { useState } from 'react'


function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        areYouHuman: '',
    });

    const saveData = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
 
    const submitData = (e) => {
        e.preventDefault()
        console.log(formData)
    }

  return (
    <section className='section registration' id='registration'>
      <Title title='Registration' subTitle='Form' />
      <form>
        <div className='form-row'>
            <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={saveData} />
            </div>
        </div>
        <div className='form-row'>
            <div className='form-group'>
            <label htmlFor='name'>Email</label>
            <input type='text' id='email' name='email' value={formData.email} onChange={saveData}/>
            </div>
        </div>
        <div className='form-row'>
            <div className='form-group'>
            <label htmlFor='name'>Password</label>
            <input type='text' id='password' name='password' value={formData.password} onChange={saveData} />
            </div>
        </div>
        <div className='form-row'>
            <div className='form-group'>
            <label htmlFor='name'>Confirm Password</label>
            <input type='text' id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={saveData}/>
            </div>
        </div>
        <div className='form-row'>
            <div className='form-group'>
            <label htmlFor='name'>Are you human?</label>
            <input type='text' id='areYouHuman' name='areYouHuman' value={formData.areYouHuman} onChange={saveData}/>
            </div>
        </div>
        <button type='submit' className='btn btn-primary' onClick={submitData}>Register</button>
        </form>

      
    </section>
  );
}

export default Registration