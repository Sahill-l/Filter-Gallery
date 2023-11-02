import React, { useState } from "react";

import Catimg from '../images/Animal/Cat.jpeg';
import Dogimg from '../images/Animal/dog.jpeg';
import Hawkimg from '../images/Animal/hawk.jpeg';
import koelimg from '../images/Animal/koel.jpeg';
import lionimg from '../images/Animal/lion.jpeg';
import owlimg from '../images/Animal/owl.webp';
import parrotimg from '../images/Animal/parrot.jpeg';
import wolfimg from '../images/Animal/wolf.jpeg';

const PhotoGallery=()=>{
    const Photos=[
        {
            id:0,
            name: "cat",
            Type: "pets",
            likes: 12,
            img_url: Catimg
        },
        {
            id:1,
            name: "dog",
            Type: "pets",
            likes: 10,
            img_url: Dogimg
        },
        {
            id:2,
            name: "Lion",
            Type: "Animals",
            likes: 120,
            img_url: lionimg
        },
        {
            id:3,
            name: "Wolf",
            Type: "Animals",
            likes: 102,
            img_url: wolfimg
        },
        {
            id:4,
            name: "Parrot",
            Type: "pet Birds",
            likes: 11,
            img_url: parrotimg
        },
        {
            id:5,
            name: "Koel",
            Type: "pet Birds",
            likes: 20,
            img_url: koelimg
        },
        {
            id:6,
            name: "Hawk",
            Type: "Wild Birds",
            likes: 6,
            img_url: Hawkimg
        },
        {
            id:7,
            name: "owl",
            Type: "Wild Birds",
            likes: 32,
            img_url: owlimg
        }
    ]


    //filter methods here:
    const [FilteredPhotos, SetFilterPhotos] = useState(Photos);
    const FilterPhotos = (str)=> {
        if (str==="All") {
            SetFilterPhotos(Photos);
        } else {
            SetFilterPhotos(Photos.filter((item)=>
              item.Type.toLowerCase().includes(str.toLowerCase())
            ));
        }
    };


    
    //search query here:
    const[searchQuery, setSearch] = useState('');
    const SearchPhoto = (e)=>{
        e.preventDefault();
        if (searchQuery) {
            SetFilterPhotos(Photos.filter((item)=>
            item.Type.toLowerCase().includes(searchQuery.toLowerCase()) |
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
        }
    }
    


    //sorting photos here:
    const SortPhotos = (sortdata, x, y)=>{
        if (sortdata && x && y) {
            /*const sortedDataphotos = [...Photos].sort((a,b)=>{
                return a[sortdata] > b[sortdata] ? x : y;
            })
            SetPhotos(sortedDataphotos)
            */
            const sortedDataFilter = [...FilteredPhotos].sort((a,b)=>{
                return a[sortdata] > b[sortdata] ? x : y;
            })
            SetFilterPhotos(sortedDataFilter);  
        }
    }


    
    return(
        <div>
            <div className="text-center">
                <h1 className="text-3xl">PhotoGallery</h1>
                <p className="test-lg">With filtering and sorting feature</p>
            </div>
            <div className="p-4 max-w-screen-md mx-auto">
                <form className="flex mt-2 rounded-lg overflow-hidden"
                    onSubmit={(e) => {SearchPhoto(e)}}
                    >
                    <input 
                        onChange={(e)=>{setSearch(e.target.value)}} value={searchQuery}
                        placeholder="Search Blog / Author"
                        className="border-2 border-green-200 w-full h-12 p-2 hover:border-green-700 focus:border-green-800"
                    />
                    <input type="submit" className="p-2 border-2 border-green-800 bg-green-800 text-white"/>
                </form>
            </div>
            <div className="p-2 flex justify-between">
                <div className="w-60 flex justify-between border-2 mt-2 p-2 inline-block bg-black rounded-lg">
                    <h1 className="text-white">Filter:</h1>
                    <select className="rounded-lg" onChange={(event) => FilterPhotos(event.target.value)}>
                        <option value="All">All</option>
                        <option value="pets">Pets</option>
                        <option value="animals">Animals</option>
                        <option value="pet birds">Pet Birds</option>
                        <option value="wild birds">Wild Birds</option>
                    </select>
                </div>
            </div>
            <div>
                <button className="bg-indigo-500 text-white  border-white m-2 p-2" onClick={()=> {SortPhotos("name","1","-1")}}>Name (A-Z)</button>
                <button className="bg-indigo-500 text-white  border-white m-2 p-2" onClick={()=> {SortPhotos("name","-1","1")}}>Name (Z-A)</button>
                <button className="bg-indigo-500 text-white  border-white m-2 p-2" onClick={()=> {SortPhotos("likes","-1","1")}}>most liked</button>
                <button className="bg-indigo-500 text-white  border-white m-2 p-2" onClick={()=> {SortPhotos("likes","1","-1")}}>less liked</button>
            </div>
                
            <div className="px-1 md:px-8">
                {FilteredPhotos.map((item,index)=>{
                    return(
                        <div className="border-2 w-56 md:w-80 mt-3 mr-3 inline-block rounded-lg" key={item.id}>
                            <div className="w-full h-56 md:h-80 overflow-hidden rounded-lg">
                                <img src={item.img_url} className="w-full h-full" alt={item.name}/>
                            </div>
                            <p className="p-2 font-bold text-xl">{(index)+1}. {item.name}</p>
                            <div className="flex justify-between w-full p-2">
                                <div>
                                    <p className="flex">
                                        <svg class="h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg>
                                        <span>{item.likes}</span>
                                    </p>
                                </div>
                                <div><p className="text-gray-400">Year: 2022</p></div>
                                
                            </div>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
};
export default PhotoGallery;
