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
            //   {
            //     "name": "เมล็ดเจีย Chia seeds",
            //     "url": "https://vt.tiktok.com/ZS2de7aUS/",
            //     "price": "฿57.00 - 345.00",
            //     "description": "เมล็ดเจียเกรดพรีเมียม Chia seeds"
            //   },
            //   {
            //     "name": "ตะแกรงวางของบนซิ้งค์",
            //     "url": "https://vt.tiktok.com/ZS2dY5NxG/",
            //     "price": "฿45.52 - 96.32",
            //     "description": "รางวางของ ตะแกรงวางของบนซิ้งค์ ที่คว่ำจาน แร็คคว่ำจานแบบสแตนเลส พับได้ รางตะแกรงระบายน้ำ แผ่นคว่ำจาน ตะแกรงกรองน้ำ"
            //   },
            //   {
            //     "name": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม",
            //     "url": "https://vt.tiktok.com/ZS2dYxpBw/",
            //     "price": "฿144.00",
            //     "description": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม ไข่ปลา ไข่สลิด ไข่ปลาสลิดทอด สลิด ไข่ปลา"
            //   },
            //   {
            //     "name": "ไข่ปลาสลิด(กล่อง)350g",
            //     "url": "https://vt.tiktok.com/ZS2dYKdRL/",
            //     "price": "฿169.00",
            //     "description": "ไข่ปลาสลิด(กล่อง)350g อาหารแปรรูป แช่แข็ง"
            //   }
            // ]
            // this.setState({ data: resp });
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default withDataFetching;