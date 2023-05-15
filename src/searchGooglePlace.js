import {React, useEffect} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

const SearchGooglePlace = props => {
    const { searchHistory, setSearchHistory, address, setAddress } = props;

    useEffect(() => {
      setSearchHistory({address_label:address.label,address});
    }, [address]);

return(
  <div>
    <GooglePlacesAutocomplete
      apiKey="myapikey"
      autocompletionRequest={{
        componentRestrictions: {
            country: ['sg']
        }
    }}
      onFail={error => console.log(error)}
      selectProps={{
        address,
        onChange: setAddress,
        placeholder:'Type address here'    
      }}
      name="address"

    />
    {searchHistory && (
    <div id='history'>
    <h1 id='historyHeader'>History</h1>
    {Object.keys(searchHistory).map( add =>(
       <div>{add}</div>
    )
    )}
  </div>
    )}

    </div>
);
};
  // <div>
  //   <AutoComplete 
  //   style={{width:"230px"}}
  //   placeholder="Type address here"
  //   value={place}
  //   options={options}
  //   onSelect={(value)=>{
  //    console.log(value);
  //    setPlace(value);
  //   }}
  //   >
      
  //   </AutoComplete>
  // </div>


    const mapState = state => ({
      searchHistory: state.SearchGooglePlaceModel.searchHistory,
      address: state.SearchGooglePlaceModel.address
  });
   
  const mapDispatch = dispatch => ({
    setSearchHistory: dispatch.SearchGooglePlaceModel.setSearchHistory,
    setAddress: dispatch.SearchGooglePlaceModel.setAddress,
  });
// export default SearchGooglePlace;
  export default connect(mapState, mapDispatch)(SearchGooglePlace);

  SearchGooglePlace.propTypes = {
    searchHistory:propTypes.object,
    setSearchHistory:propTypes.func,
    address:propTypes.object,
    setAddress:propTypes.func
 };