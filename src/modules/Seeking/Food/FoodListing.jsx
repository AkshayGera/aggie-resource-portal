import React, { useState, useEffect } from "react";
import FoodFilters from "../../../components/FoodFilters/FoodFilters";
import Listings from "../../../components/Listings/Listings";
import moment from "moment";
import foodimage1 from '../../../media/Food1.jpeg';
import spag from '../../../media/spag.png';
import salad from '../../../media/salad.png'
import chicken from '../../../media/chicken.png';
import vegan from '../../../media/vegan.png';

const FoodListing = (props) => {

    const foodListing = [{ "image": foodimage1, "title": "Leftover pizza", "description": "Two slices of pepperoni pizza, still in good condition", "dateFrom": "2023-04-15", "dateTo": "2023-04-16", "type": "food", "diet": "none" },
    { "image": spag, "title": "Spaghetti with meat sauce", "description": "A small portion of spaghetti with meat sauce, enough for one person", "dateFrom": "2023-04-14", "dateTo": "2023-04-15", "type": "food", "diet": "none" },
    { "image": salad, "title": "Salad", "description": "Mixed greens with cherry tomatoes and cucumber slices", "dateFrom": "2023-04-14", "dateTo": "2023-04-15", "type": "food", "diet": "vegetarian" },
    { "image": chicken, "title": "Chicken curry", "description": "Leftover chicken curry with rice", "dateFrom": "2023-04-15", "dateTo": "2023-04-16", "type": "food", "diet": "none" },
    { "image": vegan, "title": "Vegan chili", "description": "A hearty bowl of vegan chili with beans and vegetables", "dateFrom": "2023-04-14", "dateTo": "2023-04-15", "type": "food", "diet": "vegan" }]
        ;


    return (
        <>
            <FoodFilters />
            <Listings listings={foodListing} />
        </>
    )
};

export default FoodListing;







