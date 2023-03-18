import { useState } from 'react';
import meme from './car.png'
const Dashboard = (props) => {
    const[products,setProducts]=useState(PRODUCTS)
    const filterLable = (products,value)=>{
        if(products.label===value){
            return true;
        }
        return false;
    }
    const handleselect = (e)=>{
        const value = e.target.value;
        console.log("value",value)
        console.log(value)
        const pro=[];
        for(let m in PRODUCTS){
            console.log(PRODUCTS[m].lable)
            if(PRODUCTS[m].label==value){
                console.log("Dev",PRODUCTS[m].lable)
                pro.push(PRODUCTS[m]);
            }
        }
        console.log(pro)
        setProducts(pro)
        console.log(products)
    }
    const addLable = (e)=>{
        
    }
    return (

        <>
            <div class="w-1/2 float-left">
                {
                    products.map((data, ind) => {
                        return (

                            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-8 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={data.url} alt="" />
                                <h1>{data.lable}</h1>
                                <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a filter</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e)=>{addLable(e)}}>
                   {
                    LABLES.map((lable,index)=>{
                        return(<option value={lable}>{lable}</option>)
                    })
                   }
                   
                </select>
                </div>
                                
                            </a>
                            

                        )
                    })
                }
            </div>

            <div class="float-left">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a filter</label>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  onChange={(e)=>{handleselect(e)}}>
                   {
                    LABLES.map((lable,index)=>{
                        return(<option value={lable}>{lable}</option>)
                    })
                   }
                   
                </select>
            </div>
        </>
    )
}
export const PRODUCTS = [
    {
        name:"cat1",
        url: "./images/cat1.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/cat2.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/cat3.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/cat4.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/cat5.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/dog1.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/dog2.jpg",
        lable: "Dog"
    },
    {
        name:"cat1",
        url: "./images/dog3.jpg",
        lable: "Dog"
    },
    {
        name:"cat1",
        url: "./images/dog4.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/horse1.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/horse2.jpg",
        lable: "None"
    },
    {
        name:"cat1",
        url: "./images/horse3.jpg",
        lable: "None"
    }
];
export const LABLES = ["None","Cat","Dog","Horse"];
export default Dashboard;