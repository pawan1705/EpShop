import ShopContext from "./ShopContext";
import all_product from '../assets/all_product';
const ShopContextProvider=(props)=>{
    const contextValue={all_product}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;