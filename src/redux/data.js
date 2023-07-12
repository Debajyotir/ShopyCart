import { createReducer } from "@reduxjs/toolkit"

import img1 from "../assets/macbook.jpg"
import img2 from "../assets/Microsoft-Surface.jpg"
import img3 from "../assets/Dell3511.png"
import img4 from "../assets/Lenovo-82EY00UXIN.jpg"
import img5 from "../assets/Acer SF314.jpg"
import img6 from "../assets/Lenovo Ideapad5.jpg"
import img7 from "../assets/Asus Vivobook.jpg"
import img8 from "../assets/Dell3515.png"
import img9 from "../assets/Lenovo Ideapad3.jpg"
import img10 from "../assets/Asus Vivobook Thin.jpg"

export const data = createReducer({
    productlist : [
        {
            name:"Apple MacBook",
            price:120000,
            imgSrc:img1,
            id:"abc111",
        },
        {
            name:"Microsoft-Surface",
            price:88990,
            imgSrc:img2,
            id:"abc112",
        },
        {
            name:"Dell 3511",
            price:40000,
            imgSrc:img3,
            id:"abc113",
        },
        {
            name:"Lenovo UXIN IdeaPad",
            price:65000,
            imgSrc:img4,
            id:"abc114",
        },
        {
            name:"Acer SF314",
            price:65000,
            imgSrc:img5,
            id:"abc115",
        },
        {
            name:"Lenovo Ideapad5",
            price:64770,
            imgSrc:img6,
            id:"abc116",
        },
        {
            name:"Asus Vivobook",
            price:51770,
            imgSrc:img7,
            id:"abc117",
        },
        {
            name:"Dell 3515",
            price:43590,
            imgSrc:img8,
            id:"abc118",
        },
        {
            name:"Lenovo Ideapad3",
            price:46114,
            imgSrc:img9,
            id:"abc119",
        },
        {
            name:"Asus Vivobook Thin",
            price:109990,
            imgSrc:img10,
            id:"abc120",
        },
    ]
},{})