import React, { useEffect, useState } from 'react';
import axios from 'axios';

function login() {
      const [formData, setFormData] = useState({
          'email': "",
          'password': "",
      });
      const [isLoading, setIsLoading] = useState(false);
      const [successMessage, setSuccessMessage] = useState(null);
      const [error, setError] = useState(null);
  
  const handleSubmit=async(e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/login/", formData)
        setSuccessMessage("تم تسجيل الدخول بنجاح")
        setError(null)
      console.log("success", response.data)
        localStorage.setItem("accessToken",response.data.tokens.access)
        localStorage.setItem("refreshToken",response.data.tokens.refresh)
    } catch (error) {
        if (error.response && error.response.data) {
            Object.keys(error.response.data).forEach(field => {
                const errorMessages = error.response.data[field]
                if (errorMessages && errorMessages.length > 0) {
                    setError(errorMessages[0])
                }
            })
        }
        console.log("error during loading", error.response?.data)
    }
    finally { setIsLoading(false) }
    
}
const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // console.log(formData)
}
return (
    <>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        
      <form>
      <input placeholder='الايميل' onChange={handleChange}  type='text' name='email' value={formData.email}></input>
      <input placeholder='كلمة المرور' onChange={handleChange}  type='password' name='password' value={formData.password1}></input>
      <button type='submit' disabled={isLoading} onClick={handleSubmit}>{isLoading?".....جارى التحميل":"تسجيل المستخدم" }</button>
      </form>  
  </>
)
}

export default login