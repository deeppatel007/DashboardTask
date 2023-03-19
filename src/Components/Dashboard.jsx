import { useState } from 'react';

const Dashboard = (props) => {
    const [products, setProducts] = useState(PRODUCTS)
    const [newLableName, setNewLableName] = useState('')
    const [filterProduct, setFilterProduct] = useState(PRODUCTS)
    const [lables, setLables] = useState(LABLES)
    const handleInput = (e) => {
        var value = e.target.value
        setNewLableName(value);
    }
    const addNewLable = (e) => {
        if (newLableName.length !== 0)
            lables.push(newLableName)
        setNewLableName('');
    }
    const handleFilter = (e) => {
        const value = e.target.value;

        const pro = [];
        if (value === "None") {
            setFilterProduct(products)
        }
        else {
            for (let m in products) {
                if (products[m].lable === value) {
                    pro.push(products[m]);
                }
            }
            setFilterProduct(pro)
        }

    }
    const changeLable = (e) => {
        const name = e.target[0].getAttribute("name");
        const value = e.target.value;
        let pro = [...products]
        for (let m in pro) {
            if (pro[m].name === name) {
                pro[m].lable = value;
            }

        }
        setProducts(pro);
    }
    return (

        <div >
            <div class="w-1/3 float-left">
                {
                    filterProduct.map((data, ind) => {
                        return (
                            <div class="grid grid-cols-2 gap-4 border-2 m-4 shadow-md" >
                                <img class="h-64 w-64" src={data.url} alt="" />
                                <div><h1 class="pt-0"><span class="font-bold">Lable : </span>{data.lable !== "None" ? data.lable : "No Lable Added"}</h1>
                                    <div class="pt-2">
                                        <label for="filter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Lable To Image</label>
                                        <select id="filter" class="w-28 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { changeLable(e) }}>
                                            {
                                                lables.map((lable, index) => {
                                                    return (<option name={data.name} value={lable} >{lable}</option>)
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>

                            </div>


                        )
                    })
                }
            </div>

            <div class="float-left w-96">

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="filter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-4">Apply a filter</label>
                        <select id="filter" class="w-28 h-12 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => { handleFilter(e) }} >
                            {
                                lables.map((lable, index) => {
                                    return (<option value={lable} >{lable}</option>)
                                })
                            }

                        </select>
                    </div>
                    {props.IsAdmin ?
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80 mt-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="lablename">
                                Add new lable
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Lable Name" value={newLableName} onChange={(e) => { handleInput(e) }} />
                            <div class="flex items-center justify-between pt-4">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={(e) => { addNewLable(e) }}>
                                    Add label
                                </button>
                            </div>

                        </form>

                        : <></>
                    }
                </div>
            </div>
        </div>
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