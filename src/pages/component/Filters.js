// import { useState } from "react";


// export const Filters = () =>{

//     const [priceFilter, setPriceFilter] = useState("");
//     const [ratingFilter, setRatingFilter] = useState(0);
//     const [categoryFilter, setCategoryFilter] = useState("");

//     const handlePriceFilter = (event) =>{
//         setPriceFilter(event.target.value);
//       };
    
//       const handleClearAllFilters = () =>{
//         setPriceFilter("");
//         setRatingFilter(0);
//         setCategoryFilter("")
//       };
    
//       const handleRatingFilter = (event) =>{
//         setRatingFilter(event.target.value);
//       };
    
//       const handleCategoryFilter = (category) =>{
//         setCategoryFilter(category)
//       };
    
//       const filteredProducts = products.sort((a, b) => {
//             if (priceFilter === 'lowToHigh') {
//               return a.price - b.price;
//             } else if (priceFilter === 'highToLow') {
//               return b.price - a.price;
//             }
//             return a._id - b._id;
//           })
//      .filter(({rating}) => rating >= ratingFilter)
//      .filter(({ categoryName }) => categoryFilter === "" || categoryName === categoryFilter)
//       return 
//         <>

//           <div> 
//           <h2>Filter by Price:</h2>
//           <label>
//           <input type='radio' value="highToLow" checked={priceFilter === "highToLow"} onChange={handlePriceFilter} />High to Low </label>
//           <label>
//           <input type='radio' value="lowToHigh" checked={priceFilter === "lowToHigh"} onChange={handlePriceFilter} />Low to High</label>
//         </div>
//         <div> 
//           <h2>Filter by Rating:</h2>
//           <label>
//           <input type='range' min={0} max={5} step={1} value={ratingFilter} onChange={handleRatingFilter} />
//           </label>
//         </div>
//         <div>
//       <input type="checkbox" checked={categoryFilter === "men"} onChange={() => handleCategoryFilter("men")} />
//       <label>Men's wear</label>
//     </div>
//     <div>
//       <input type="checkbox" checked={categoryFilter === "women"} onChange={() => handleCategoryFilter("women")} />
//       <label>Women's Wear</label>
//     </div>
//     <div>
//       <input type="checkbox" checked={categoryFilter === "shoe"} onChange={() => handleCategoryFilter("shoe")} />
//       <label>Shoe</label>
//     </div>
    
//         <div>
//           <button onClick={handleClearAllFilters}>Clear All Filters</button>
//         </div>
//         </div>
    
// }