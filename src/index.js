import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDlNU0YWWLpPJ_TWS65obNuITk-J37VCT4';

YTSearch({key: API_KEY, term: 'cricket'}, function(data){
    console.log(data);
});

// Create a new component and this component should produce some HTMl.

class App extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
         };

         this.videoSearch('soccer');

    }

    videoSearch(term){


        YTSearch({key: API_KEY, term: term}, (videos) => {

           this.setState({
               videos: videos,
               selectedVideo: videos[0]

            }); // Equivalent to this.setState({videos: videos});

        });
    }

    render(){

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail videos = {this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    video = {this.state.videos} />
            </div>
        );
    }

}

// Take this components generated HTMl and put it on the page (in the DOM).

ReactDOM.render(<App />,document.querySelector('.container'));
