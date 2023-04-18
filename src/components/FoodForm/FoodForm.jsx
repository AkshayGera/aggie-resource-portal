// FormComponent.js
import React, { useState } from 'react';
import './FoodForm.css';

const FoodForm = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        dietaryRestrictions: {
            vegan: false,
            vegetarian: false,
            halal: false
        },
        foodTitle: '',
        quantity: '',
        address: '',
        description: '',
        image: null
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                dietaryRestrictions: {
                    ...formData.dietaryRestrictions,
                    [name]: checked
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleFileUpload = (event) => {
        setFormData({
            ...formData,
            image: event.target.files[0]
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const handleClear = () => {
        setFormData({
            dateFrom: '',
            dateTo: '',
            dietaryRestrictions: {
                vegan: false,
                vegetarian: false,
                halal: false
            },
            foodTitle: '',
            quantity: '',
            address: '',
            description: '',
            image: null
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date Available:</label>
                    <input
                        type="date"
                        name="dateFrom"
                        value={formData.dateFrom}
                        onChange={handleInputChange}
                    />
                    <label>Date To:</label>
                    <input
                        type="date"
                        name="dateTo"
                        value={formData.dateTo}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group checkbox-group">
                    <label>Dietary Restrictions:</label>
                    <div>
                        <label>
                            <input
                                className='checkbox'
                                type="checkbox"
                                name="vegan"
                                checked={formData.dietaryRestrictions.vegan}
                                onChange={handleInputChange}
                            />
                            <span>Vegan</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="vegetarian"
                                checked={formData.dietaryRestrictions.vegetarian}
                                onChange={handleInputChange}
                            />
                            <span>Vegetarian</span>
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="halal"
                                checked={formData.dietaryRestrictions.halal}
                                onChange={handleInputChange}
                            />
                            <span>Halal</span>
                        </label>
                    </div>
                </div>

                <div className="form-group">
                    <label>Food Title:</label>
                    <input
                        type="text"
                        name="foodTitle"
                        value={formData.foodTitle}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Quantity Available:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Upload Image:</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileUpload}
                    />
                </div>

                <div className="form-group actions">

                    <button className='btn btn-secondary' type="button" onClick={handleClear}>Clear</button>
                    <button className='btn btn-success' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FoodForm;
