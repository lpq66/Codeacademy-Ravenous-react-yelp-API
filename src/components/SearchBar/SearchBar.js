import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            locations: '',
            sortBy: 'best_match'
        };
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions() {
        return Object
            .keys(sortByOptions)
            .map(sortByOption => {
                let sortByOptionValue = this.sortByOptions[sortByOption];
                return <li className={sortByOption} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} >sortByOption</li>
            });
    }

    getSortByClass(sortByOption) {
        if ( this.state.sortBy === sortByOption ) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    handleLocationChange(e) {
        let location = e.target.value;
        this.setState({
          locations: { location }
        })
    }

    handleTermChange(e) {
        let term = e.target.velue;
        this.setState({
            term: { term }
        })
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
          
        );
    }
}
            
export default SearchBar;