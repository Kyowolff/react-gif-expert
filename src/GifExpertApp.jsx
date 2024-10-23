import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {


    const [ categories, setCategories ] = useState(['One Piece']); 

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        //categories.push(newCategory);
        setCategories([ newCategory, ...categories ]);  
        //setCategories( cat=> [...cat,'Valorant']);forma de añadir una categoria 
    }

  return (
    <>
    {/* Titulo */}
        <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory 
    //setCategories={ setCategories }
    onNewCategory={ (value) => onAddCategory(value)}
    
    />

    {/* Listado de Gifs */}
 
    
    { 
        categories.map(( category ) => (
        <GifGrid 
            key={ category } 
            category={ category }/>
        )) 
    }

    
        {/* Gif item */}

    </>
  )
};
