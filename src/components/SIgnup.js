import React from 'react'
import { useState } from 'react';
const SIgnup = () => {

    //登録に必要なデータ
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        affiliation: '',
        phone: '',
        null: '',
        userId: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value, files} = event.target;
        setFormData({
            ...formData,
            [name]: files ? files : value,
        });
    };


    const validate = () => {
        //フォームの入力を検証する関数
        const newErrors = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.affiliation) newErrors.affiliation = 'Affiliation is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.photo) newErrors.photo = 'Photo is required';
        if (!formData.userId) newErrors.userId = 'User ID is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = 'Passwords do not match';

        // Specific domain check for academia and research
        if (['アカデミア', '研究所'].includes(formData.affiliation)) {
            if (!formData.email.endsWith('.ac.jp')) {
                newErrors.email = 'Email must be from .ac.jp domain for academia or research';
            }}
            return newErrors;
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const validationErrors = validate();
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
            } else {
              // Handle form submission
                console.log('Form submitted:', formData);
            }
        };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <lable>Name:</lable>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{width: '100%', padding: '10px', margin: '5px 0'}}
            />
            {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
        </div>

        <div>
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div>
            <label>職業</label>
            <select
                name="affiliation"
                value={formData.affiliation}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            >
                <option value="">Select...</option>
                <option value="アカデミア">アカデミア</option>
                <option value="研究所">研究所</option>
                <option value="医者">医者</option>
                <option value="企業">企業</option>
                <option value="一般">一般</option>
            </select>
            {errors.affiliation && <span style={{ color: 'red' }}>{errors.affiliation}</span>}
        </div>
        <div>
            <label>Photo:</label>
            <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
            {errors.photo && <span style={{ color: 'red' }}>{errors.photo}</span>}
        </div>
        <div>
            <label>User ID:</label>
            <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
            {errors.userId && <span style={{ color: 'red' }}>{errors.userId}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>
        <div>
            <label>Confirm Password:</label>
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', margin: '5px 0' }}
            />
            {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '10px', backgroundColor: '#1e90ff', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Signup
        </button>



        </form>
    </div>
  )
}

export default SIgnup
