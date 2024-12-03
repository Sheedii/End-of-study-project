import React, { useState } from 'react';
import axios from 'axios';
import './search.css';

const Search = ({ searchTitle, setSelectedProduct }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstSearch, setIsFirstSearch] = useState(true);
    const [previousTerm, setPreviousTerm] = useState('');
    const [selectedProduct, setSelectedProductLocal] = useState(null); 


    const handleSearchChange = async (event) => {
        const input = event.target.value;
        setSearchTerm(input);
        // Call API only if the search term has changed
        if (input !== (previousTerm) && input.includes(' ')) {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:8087/dashboard/search?name=${input}`);
                setSearchResults(response.data);
                console.log("ayatly");
                setPreviousTerm(input); // Update previous term after successful request
                setIsFirstSearch(false); // Set isFirstSearch to false after the first search
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleSearchResultClick = (result) => {
        setSearchResults([]);
        setSearchTerm(result);
        setSelectedProduct(result); // Store selected product in the state variable
        setSelectedProductLocal(result); // Store selected product in the state variable
    };

    return (
        <div>
            <div> {searchTitle} </div>
            <div className="search">
                <input type="text" className="search__input"
                    placeholder="Product Name" value={searchTerm} onChange={handleSearchChange} />
                {(isLoading && isFirstSearch) || (searchTerm === '') ? <div>{searchTerm}</div> : (
                    <div className="suggestions">
                        {searchResults.map((result) => (
                            <div className='results' key={result}>
                                <div className='result' onClick={() => handleSearchResultClick(result)}>{result}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/*selectedProduct && <div>Selected Product: {selectedProduct}</div>*/}
        </div>
    );
};

export default Search;
