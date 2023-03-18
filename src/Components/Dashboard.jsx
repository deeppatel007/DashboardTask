import { useState } from 'react';

const Dashboard = (props) => {
    const [products, setProducts] = useState(PRODUCTS)
    const [newLableName,setNewLableName] = useState('')
    const [lables, setLables] = useState(LABLES)
    const handleInput=(e)=>{
        var value=e.target.value
        setNewLableName(value);
    }
    const addNewLable = (e)=>{
        if(newLableName.length!==0)
            lables.push(newLableName)
        setNewLableName('');
    }
    const handleselect = (e) => {
        const value = e.target.value;
        //console.log("value",value)
        // console.log(value)
        const pro = [];
        for (let m in PRODUCTS) {
            //console.log(PRODUCTS[m].lable)
            //console.log(PRODUCTS[m].lable,value);
            if (PRODUCTS[m].lable === value) {
                pro.push(PRODUCTS[m]);
            }
        }
        setProducts(pro)
    }
    const changeLable = (e) => {
        const name = e.target[0].getAttribute("name");
        const value = e.target.value;
        console.log(name)
        console.log("patel")
        for (let m in PRODUCTS) {
            if (PRODUCTS[m].name === name) {
                PRODUCTS[m].lable = value;
            }

        }
    }
    return (

        <>
            <div class="w-1/2 float-left">
                {
                    products.map((data, ind) => {
                        return (

                            <a class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-8 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={data.url} alt="" />
                                <h1>{data.lable}</h1>
                                <div>
                                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a filter</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { changeLable(e) }}>
                                        {
                                            lables.map((lable, index) => {
                                                return (<option name={data.name} value={lable} >{lable}</option>)
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
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { handleselect(e) }} >
                    {
                        lables.map((lable, index) => {
                            return (<option value={lable} >{lable}</option>)
                        })
                    }

                </select>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="lablename">
       Add new lable
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Lable Name" value={newLableName} onChange={(e)=>{handleInput(e)}}/>
    <div class="flex items-center justify-between pt-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e)=>{addNewLable(e)}}>
        Add label
      </button>
    </div>
  </form>
  </div>
        </>
    )
}

export const PRODUCTS = [
    {
        name: "cat1",
        url: "./images/cat1.jpg",
        lable: "None"
    },
    {
        name: "cat2",
        url: "./images/cat2.jpg",
        lable: "None"
    },
    {
        name: "cat3",
        url: "./images/cat3.jpg",
        lable: "None"
    },
    {
        name: "cat4",
        url: "./images/cat4.jpg",
        lable: "None"
    },
    {
        name: "cat5",
        url: "./images/cat5.jpg",
        lable: "None"
    },
    {
        name: "dog1",
        url: "./images/dog1.jpg",
        lable: "None"
    },
    {
        name: "dog2",
        url: "./images/dog2.jpg",
        lable: "None"
    },
    {
        name: "dog3",
        url: "./images/dog3.jpg",
        lable: "None"
    },
    {
        name: "dog4",
        url: "./images/dog4.jpg",
        lable: "None"
    },
    {
        name: "horse1",
        url: "./images/horse1.jpg",
        lable: "None"
    },
    {
        name: "horse2",
        url: "./images/horse2.jpg",
        lable: "None"
    },
    {
        name: "horse3",
        url: "./images/horse3.jpg",
        lable: "None"
    }
];
export const LABLES = ["None", "Cat", "Dog", "Horse"];
export default Dashboard;