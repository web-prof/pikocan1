import React, { useState } from 'react';
function register() {
    const [formData, setFormData] = useState({
        'username': "",
        'email': "",
        'password1': "",
        'password2': "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit=async(e) => {
        e.preventDefault()
        setIsLoading(true)
        if (isLoading) {
            console.log(formData)
        }
    }    
    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }
    return (
      <>
          <form onSubmit={handleSubmit}>
          <input placeholder='اسم المستخدم' onChange={handleChange} type='text' name='username' value={formData.username}></input>
          <input placeholder='الايميل' onChange={handleChange}  type='text' name='email' value={formData.email}></input>
          <input placeholder='كلمة المرور' onChange={handleChange}  type='password' name='password1' value={formData.password1}></input>
          <input placeholder='تاكيد كلمة المرور' onChange={handleChange} type='password' name='password2' value={formData.password2}></input>
          <button type='submit' disabled={isLoading}>{isLoading?".....جارى التحميل":"تسجيل المستخدم" }</button>
          </form>  
      </>
  )
}

export default register




























// import { useState } from 'react';
// // import './Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password1: '',
//     password2: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     // Validate Username
//     if (!formData.username.trim()) {
//       newErrors.username = 'Username is required';
//     }

//     // Validate Email
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Invalid email format';
//     }

//     // Validate Password1
//     if (!formData.password1) {
//       newErrors.password1 = 'Password is required';
//     } else if (formData.password1.length < 6) {
//       newErrors.password1 = 'Password must be at least 6 characters';
//     }

//     // Validate Password2
//     if (formData.password1 !== formData.password2) {
//       newErrors.password2 = 'Passwords do not match';
//     }

//     setErrors(newErrors);

//     // If no errors, proceed with submission
//     if (Object.keys(newErrors).length === 0) {
//       // Handle form submission (e.g., API call)
//       console.log('Form submitted successfully:', formData);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
    
//     // Clear error when user starts typing
//     setErrors({
//       ...errors,
//       [e.target.name]: ''
//     });
//   };

//   return (
//     <div className="register-container">
//       <form className="register-form" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>
        
//         <div className="form-group">
//           <label>Username</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className={errors.username ? 'error' : ''}
//           />
//           {errors.username && <span className="error-message">{errors.username}</span>}
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={errors.email ? 'error' : ''}
//           />
//           {errors.email && <span className="error-message">{errors.email}</span>}
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password1"
//             value={formData.password1}
//             onChange={handleChange}
//             className={errors.password1 ? 'error' : ''}
//           />
//           {errors.password1 && <span className="error-message">{errors.password1}</span>}
//         </div>

//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="password2"
//             value={formData.password2}
//             onChange={handleChange}
//             className={errors.password2 ? 'error' : ''}
//           />
//           {errors.password2 && <span className="error-message">{errors.password2}</span>}
//         </div>

//         <button type="submit" className="submit-btn">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;