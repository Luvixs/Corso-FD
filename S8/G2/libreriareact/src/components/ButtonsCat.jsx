import React from "react";
import  Button  from "react-bootstrap/Button";
import Fantasy from "../../../json/fantasy.json"
const importCategories = async (myCategory) =>{
    let dataList = [];

        const categoryName = myCategory.toLowerCase()
        const filePath = `../../../json/${categoryName}.json`

        // try {
            const module = await import(filePath);
            console.log(module);
            dataList.push(module.default);
        // } catch (error) {
            // console.error(`Errore caricamento per la categoria ${myCategory}:`, error);
            // dataList.push([]);
        // }
    return dataList
}

const ButtonsCat = ({categories, setCard}) => {
    return (
        <div className="text-center py-4">
            {categories.map((category, index)=> (
                <Button 
                    variant="outline-success"
                    className="mx-3"
                    onClick= {async () => {
                        try {
                            const data = await importCategories(category);
                            setCard(data[0]);
                        } catch (error) {
                            console.error('Errore caricamento dei dati:', error)
                        }
                    }}
                    key={index}    
                >
                    {category}
                </Button>
            ))}
        </div>
    )
}

export default  ButtonsCat