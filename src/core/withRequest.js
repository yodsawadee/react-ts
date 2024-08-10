import React, { Component } from 'react'
import axios from 'axios';

// Higher Order Component
const withDataFetching = (context) => (WrappedComponent) => 
    class extends Component {
        state = {
            data: []
        };

        async componentDidMount() {
            console.log('NODE_ENV =',process.env.REACT_APP_NODE_ENV)
            console.log('API_URL =',process.env.REACT_APP_API_URL)
            const url = process.env.REACT_APP_API_URL+context;
            console.log('url =',url)
            const result = await axios.get(url);
            this.setState({ data: result.data });

            // const resp = [
            //     {
            //       "name": "เมล็ดเจีย Chia seed",
            //       "url": "https://vt.tiktok.com/ZS2de7aUS/"
            //     },
            //     {
            //       "name": "ตะแกรงวางของ",
            //       "url": "https://vt.tiktok.com/ZS2dY5NxG/"
            //     },
            //     {
            //       "name": "ไข่ปลา",
            //       "url": "https://vt.tiktok.com/ZS2dYxpBw/"
            //     },
            //     {
            //       "name": "ไข่ปลา",
            //       "url": "https://vt.tiktok.com/ZS2dYKdRL/"
            //     }
            // ];
            // this.setState({ data: resp });
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default withDataFetching;