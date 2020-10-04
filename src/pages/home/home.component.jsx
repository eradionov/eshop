import React from 'react';
import { Products } from '../../components/products/products.component';

export const Home = () => (
    <div id="store" className="col-md-9">
        <Products/>
    </div>
)

// <div className={ classNames('store-filter', 'clearfix') }>
// <div className="store-sort">
//   <label>
//     Sort By:
//     <select className="input-select">
//       <option value="0">Popular</option>
//       <option value="1">Position</option>
//     </select>
//   </label>

//   <label>
//     Show:
//     <select className="input-select">
//       <option value="0">20</option>
//       <option value="1">50</option>
//     </select>
//   </label>
// </div>
// </div>


// <div className={ classNames('store-filter', 'clearfix') }>
// <span className="store-qty">Showing 20-100 products</span>
// <ul className="store-pagination">
//   <li className="active">1</li>
//   <li><a href="/">2</a></li>
//   <li><a href="/">3</a></li>
//   <li><a href="/">4</a></li>
//   <li><a href="/"><i className={ classNames('fa', 'fa-angle-right') }></i></a></li>
// </ul>
// </div>