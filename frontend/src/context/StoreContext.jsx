import { createContext,useState } from "react";
import { projectList,partnerList,GalleryList } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{
    const contextValue ={
        projectList,
        partnerList,
        GalleryList,
    }
    return(
        <StoreContext.Provider value ={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider