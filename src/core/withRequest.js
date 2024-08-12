import React, { Component } from 'react'
// import axios from 'axios';

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
            // const result = await axios.get(url);
            // this.setState({ data: result.data });

            const respData = [
              {
                "name": "ตะแกรงวางของบนซิ้งค์",
                "url": "https://vt.tiktok.com/ZS2dY5NxG/",
                "price": "฿45.52 - 96.32",
                "description": "รางวางของ ตะแกรงวางของบนซิ้งค์ ที่คว่ำจาน แร็คคว่ำจานแบบสแตนเลส พับได้ รางตะแกรงระบายน้ำ แผ่นคว่ำจาน ตะแกรงกรองน้ำ"
              },
              {
                "name": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม",
                "url": "https://vt.tiktok.com/ZS2dYxpBw/",
                "price": "฿144.00",
                "description": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม ไข่ปลา ไข่สลิด ไข่ปลาสลิดทอด สลิด ไข่ปลา"
              },
              {
                "name": "ไข่ปลาสลิด(กล่อง)350g",
                "url": "https://vt.tiktok.com/ZS2dYKdRL/",
                "price": "฿169.00",
                "description": "ไข่ปลาสลิด(กล่อง)350g อาหารแปรรูป แช่แข็ง"
              },
              {
                "name": "เมล็ดเจียเกรดพรีเมียม Chia seeds",
                "url": "https://vt.tiktok.com/ZS2dGL2DK/",
                "price": "฿57.00 - 325.00",
                "description": "เมล็ดเจียเกรดพรีเมียม Chia seeds"
              },
              {
                "name": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 500 กรัม Chia seeds",
                "url": "https://vt.tiktok.com/ZS2dbCUdU/",
                "price": "฿124.00 - 399.00",
                "description": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 500 กรัม Chia seeds"
              },
              {
                "name": "เมล็ดเจีย เมล็ดเชีย Chia seeds Organic ขนาด 500 กรัม",
                "url": "https://vt.tiktok.com/ZS2dgdmfj/",
                "price": "฿93.00 - 163.00",
                "description": "เมล็ดเจีย เมล็ดเซีย Chia seeds Organic ขนาด 500 กรัม"
              },
              {
                "name": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 1000 กรัม (Chia seeds)",
                "url": "https://vt.tiktok.com/ZS2dgGMq6/",
                "price": "฿124.00 - 399.00",
                "description": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 1000 กรัม (Chia seeds)"
              },
              {
                "name": "ข้าวโอ๊ต 1 กิโลกรัม",
                "url": "https://vt.tiktok.com/ZS2dgVron/",
                "price": "฿182.00 - 185.00",
                "description": "ข้าวโอ๊ต 1 กิโลกรัม (Rolled Oats, Oatmeal, Instant Oats) "
              },
              {
                "name": "Diamond Grains กราโนล่า สูตร Original 500 กรัม",
                "url": "https://vt.tiktok.com/ZS2dGRsSU/",
                "price": "฿269.00 ฿290.00",
                "description": "Diamond Grains กราโนล่า สูตร Original Cranola มีหลากหลายรสให้เลือก ขนาด 500 กรัม ไดมอน"
              },
              {
                "name": "Diamond Grains กราโนล่า สูตร Two Way 500 กรัม",
                "url": "https://vt.tiktok.com/ZS2dp7s6Q/",
                "price": "฿269.00 ฿290.00",
                "description": "Diamond Grains กราโนร่า สูตร Two way Granola มีหลากหลายรสให้เลือก ขนาด 500 กรัม ไดมอนด์เกรนส์ กราโนล่าทูเวย์ ธัญพืชกรุบกรอบผสมมอลต์เฟลกส์ มอลต์ กราโนล่า ทูเวย์"
              },
              {
                "name": "หมึกกะตอยไดร์ ไม่เค็ม",
                "url": "https://vt.tiktok.com/ZS2dpBkx1/",
                "price": "฿235.00 - 382.00",
                "description": "หมึกกะตอยไดร์ ไม่เค็ม (เนื้อกลมกล่อม) ออร์แกนิก"
              },
              {
                "name": "หมึกกะตอย แพ็คละ 100 กรัม x 4 แพ็ค",
                "url": "https://vt.tiktok.com/ZS2dpp8CL/",
                "price": "฿164.00 ฿400.00",
                "description": "หมึกกะตอย แพ็คละ 100 กรัม x 4 แพ็ค หอมมันและนัว ไม่เค็ม ปลอดสารเคมี หมึกกะตอยตากแห้ง"
              },
              {
                "name": "หมึกเจาะตาปกไข่ เนื้อหวาน นุ่ม (ไซส์กลาง)",
                "url": "https://vt.tiktok.com/ZS2dsNHG7/",
                "price": "฿315.00 ฿350.00",
                "description": "หมึกเจาะตาปกไข่ เนื้อหวาน นุ่ม (ไซส์กลาง) ครึ่งกิโล กินเล่นได้เลย ออร์แกนิก"
              },
              {
                "name": "YOTEX 500W เครื่องปั่นบด เครื่องบดสับ เครื่องบดหมู อเนกประสงค์",
                "url": "https://vt.tiktok.com/ZS2dsppsB/",
                "price": "฿175.00 ฿255.00",
                "description": "YOTEX 500W เครื่องปั่นบด เครื่องบดสับ เครื่องบดหมู อเนกประสงค์"
              },
              {
                "name": "Diamond Grains กราโนล่า สูตร Original 220 กรัม",
                "url": "https://vt.tiktok.com/ZS2dsHLU3/",
                "price": "฿119.00 ฿135.00",
                "description": "Diamond Grains กราโนล่า สูตร Original Cranola มีหลากหลายรสให้เลือก ขนาด 220 กรัม"
              },
              {
                "name": "หอยแมลงภู่ตากดราย 500 กรัม",
                "url": "https://vt.tiktok.com/ZS2dsP1he/",
                "price": "฿229.00",
                "description": "หอยแมลงภู่ตากดราย 500 กรัม"
              },
              {
                "name": "1แถม1 หมึกเล็ก ไม่เค็ม",
                "url": "https://vt.tiktok.com/ZS2dsfuJd/",
                "price": "฿100.00",
                "description": "1แถม1 หมึกเล็ก ไม่เค็ม ของใหม่จากแผง ขนาด 100 กรัม แถม 100 กรัม"
              },
              {
                "name": "Mask แผ่นมาส์กหน้า",
                "url": "https://vt.tiktok.com/ZS2dG2AuX/",
                "price": "฿0.01 - 1.49 ฿30.00",
                "description": "Mask แผ่นมาส์กหน้า SADOER มาส์กหน้า หมอง คล้ำ ให้ความชุ่มชื่นและดูแลผิวอย่างล้ำลึก มาส์กหน้า ยอดนิยม"
              },
              {
                "name": "หอยแมลงภู่ตากแห้ง Home made",
                "url": "https://vt.tiktok.com/ZS2dswBe9/",
                "price": "฿130.00 - 500.00",
                "description": "หอยแมลงภู่ตากแห้ง Home made วันต่อวันทุกออเดอร์ หอยหอม ไม่เค็ม วันต่อวัน แห้งสนิท"
              },
              {
                "name": "เมล็ดเจีย เมล็ดเชีย เชีย 500 กรัม",
                "url": "https://vt.tiktok.com/ZS2dqvfkW/",
                "price": "฿93.00 - 163.00",
                "description": "เมล็ดเจีย เมล็ดเชีย เชีย 500 กรัม เต็มเมล็ดใหญ่เกรด AAA ผลิตใหม่ ไม่หืน Chia seeds"
              },
              {
                "name": "ถุงตาข่าย ถุงตาข่ายไนล่อน",
                "url": "https://vt.tiktok.com/ZS2dG8f2G/",
                "price": "฿18.99 - 68.99  ฿99.95 - 344.95",
                "description": "ถุงตาข่าย ถุงตาข่ายไนล่อน ถุงตาข่ายหูรูด ห่อขนุน เลี้ยงหอย ถุงมุ้งฟ้า ใส่ปลา ใส่กบ ใส่ขวด ถุงผ้าแยง clearance"
              },
              {
                "name": "กางเกงเก็บพุง",
                "url": "https://www.tiktok.com/view/product/1730002682775964532?trackParams=%7B%22traffic_source_list%22%3A%5B3%5D%2C%22traffic_source%22%3A3%2C%22enable_shop_tab_popup%22%3A1%7D&unique_id=jittrasornda&u_code=dm2m6hi34gedgl&og_info=%7B%22title%22%3A%22%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B8%9E%E0%B8%B8%E0%B8%87%20%20%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B9%89%E0%B8%99%20%E0%B8%A3%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%20%E0%B8%A1%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%AA%E0%B9%8C%20M-6XL%20%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%20205%20%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%20%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F4f636d918425410ca84e2f438b9be39d~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Ffrom%3D1826719393%22%7D×tamp=1723362614&user_id=7037423645405135873&sec_user_id=MS4wLjABAAAAQJjw6ydhrErXo9TIjBARQb1SXPlZz7mJGYwvL2URqwQQrwITHFgC2OCHy4jqftPV&utm_source=messenger&utm_campaign=client_share&utm_medium=android&share_iid=7399510517667088149&share_link_id=0d78c47b-3aa3-478a-a024-d12cc5d092a7&share_app_id=1180&ugbiz_name=UNKNOWN&ug_btm=b1285%2Cb6661&social_share_type=15&enable_checksum=1",
                "price": "฿315.00 ฿350.00",
                "description": "กางเกงเก็บพุง  ขาสั้น รัดหน้าท้อง มีไซส์ M-6XL รหัส 205 ผู้หญิง เสื้อผ้า"
              }
            ]
            const respDataGroupByCategory = [
              {
                "category": "Household",
                "items": [
                  {
                    "name": "ตะแกรงวางของบนซิ้งค์",
                    "url": "https://vt.tiktok.com/ZS2dY5NxG/",
                    "price": "฿45.52 - 96.32",
                    "description": "รางวางของ ตะแกรงวางของบนซิ้งค์ ที่คว่ำจาน แร็คคว่ำจานแบบสแตนเลส พับได้ รางตะแกรงระบายน้ำ แผ่นคว่ำจาน ตะแกรงกรองน้ำ"
                  },
                  {
                    "name": "YOTEX 500W เครื่องปั่นบด เครื่องบดสับ เครื่องบดหมู อเนกประสงค์",
                    "url": "https://vt.tiktok.com/ZS2dsppsB/",
                    "price": "฿175.00 ฿255.00",
                    "description": "YOTEX 500W เครื่องปั่นบด เครื่องบดสับ เครื่องบดหมู อเนกประสงค์"
                  },
                  {
                    "name": "ถุงตาข่าย ถุงตาข่ายไนล่อน",
                    "url": "https://vt.tiktok.com/ZS2dG8f2G/",
                    "price": "฿18.99 - 68.99  ฿99.95 - 344.95",
                    "description": "ถุงตาข่าย ถุงตาข่ายไนล่อน ถุงตาข่ายหูรูด ห่อขนุน เลี้ยงหอย ถุงมุ้งฟ้า ใส่ปลา ใส่กบ ใส่ขวด ถุงผ้าแยง clearance"
                  }
                ]
              },
              {
                "category": "Food",
                "items": [
                  {
                    "name": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม",
                    "url": "https://vt.tiktok.com/ZS2dYxpBw/",
                    "price": "฿144.00",
                    "description": "ไข่ปลาสลิด แพ็คกล่อง 400กรัม ไข่ปลา ไข่สลิด ไข่ปลาสลิดทอด สลิด ไข่ปลา"
                  },
                  {
                    "name": "ไข่ปลาสลิด(กล่อง)350g",
                    "url": "https://vt.tiktok.com/ZS2dYKdRL/",
                    "price": "฿169.00",
                    "description": "ไข่ปลาสลิด(กล่อง)350g อาหารแปรรูป แช่แข็ง"
                  },
                  {
                    "name": "เมล็ดเจียเกรดพรีเมียม Chia seeds",
                    "url": "https://vt.tiktok.com/ZS2dGL2DK/",
                    "price": "฿57.00 - 325.00",
                    "description": "เมล็ดเจียเกรดพรีเมียม Chia seeds"
                  },
                  {
                    "name": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 500 กรัม Chia seeds",
                    "url": "https://vt.tiktok.com/ZS2dbCUdU/",
                    "price": "฿124.00 - 399.00",
                    "description": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 500 กรัม Chia seeds"
                  },
                  {
                    "name": "เมล็ดเจีย เมล็ดเชีย Chia seeds Organic ขนาด 500 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dgdmfj/",
                    "price": "฿93.00 - 163.00",
                    "description": "เมล็ดเจีย เมล็ดเซีย Chia seeds Organic ขนาด 500 กรัม"
                  },
                  {
                    "name": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 1000 กรัม (Chia seeds)",
                    "url": "https://vt.tiktok.com/ZS2dgGMq6/",
                    "price": "฿124.00 - 399.00",
                    "description": "เมล็ดเจีย เมล็ดเชีย ออร์แกนิค 1000 กรัม (Chia seeds)"
                  },
                  {
                    "name": "ข้าวโอ๊ต 1 กิโลกรัม",
                    "url": "https://vt.tiktok.com/ZS2dgVron/",
                    "price": "฿182.00 - 185.00",
                    "description": "ข้าวโอ๊ต 1 กิโลกรัม (Rolled Oats, Oatmeal, Instant Oats) "
                  },
                  {
                    "name": "Diamond Grains กราโนล่า สูตร Original 500 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dGRsSU/",
                    "price": "฿269.00 ฿290.00",
                    "description": "Diamond Grains กราโนล่า สูตร Original Cranola มีหลากหลายรสให้เลือก ขนาด 500 กรัม ไดมอน"
                  },
                  {
                    "name": "Diamond Grains กราโนล่า สูตร Two Way 500 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dp7s6Q/",
                    "price": "฿269.00 ฿290.00",
                    "description": "Diamond Grains กราโนร่า สูตร Two way Granola มีหลากหลายรสให้เลือก ขนาด 500 กรัม ไดมอนด์เกรนส์ กราโนล่าทูเวย์ ธัญพืชกรุบกรอบผสมมอลต์เฟลกส์ มอลต์ กราโนล่า ทูเวย์"
                  },
                  {
                    "name": "หมึกกะตอยไดร์ ไม่เค็ม",
                    "url": "https://vt.tiktok.com/ZS2dpBkx1/",
                    "price": "฿235.00 - 382.00",
                    "description": "หมึกกะตอยไดร์ ไม่เค็ม (เนื้อกลมกล่อม) ออร์แกนิก"
                  },
                  {
                    "name": "หมึกกะตอย แพ็คละ 100 กรัม x 4 แพ็ค",
                    "url": "https://vt.tiktok.com/ZS2dpp8CL/",
                    "price": "฿164.00 ฿400.00",
                    "description": "หมึกกะตอย แพ็คละ 100 กรัม x 4 แพ็ค หอมมันและนัว ไม่เค็ม ปลอดสารเคมี หมึกกะตอยตากแห้ง"
                  },
                  {
                    "name": "หมึกเจาะตาปกไข่ เนื้อหวาน นุ่ม (ไซส์กลาง)",
                    "url": "https://vt.tiktok.com/ZS2dsNHG7/",
                    "price": "฿315.00 ฿350.00",
                    "description": "หมึกเจาะตาปกไข่ เนื้อหวาน นุ่ม (ไซส์กลาง) ครึ่งกิโล กินเล่นได้เลย ออร์แกนิก"
                  },
                  {
                    "name": "Diamond Grains กราโนล่า สูตร Original 220 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dsHLU3/",
                    "price": "฿119.00 ฿135.00",
                    "description": "Diamond Grains กราโนล่า สูตร Original Cranola มีหลากหลายรสให้เลือก ขนาด 220 กรัม"
                  },
                  {
                    "name": "หอยแมลงภู่ตากดราย 500 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dsP1he/",
                    "price": "฿229.00",
                    "description": "หอยแมลงภู่ตากดราย 500 กรัม"
                  },
                  {
                    "name": "1แถม1 หมึกเล็ก ไม่เค็ม",
                    "url": "https://vt.tiktok.com/ZS2dsfuJd/",
                    "price": "฿100.00",
                    "description": "1แถม1 หมึกเล็ก ไม่เค็ม ของใหม่จากแผง ขนาด 100 กรัม แถม 100 กรัม"
                  },
                  {
                    "name": "หอยแมลงภู่ตากแห้ง Home made",
                    "url": "https://vt.tiktok.com/ZS2dswBe9/",
                    "price": "฿130.00 - 500.00",
                    "description": "หอยแมลงภู่ตากแห้ง Home made วันต่อวันทุกออเดอร์ หอยหอม ไม่เค็ม วันต่อวัน แห้งสนิท"
                  },
                  {
                    "name": "เมล็ดเจีย เมล็ดเชีย เชีย 500 กรัม",
                    "url": "https://vt.tiktok.com/ZS2dqvfkW/",
                    "price": "฿93.00 - 163.00",
                    "description": "เมล็ดเจีย เมล็ดเชีย เชีย 500 กรัม เต็มเมล็ดใหญ่เกรด AAA ผลิตใหม่ ไม่หืน Chia seeds"
                  }
                ]
              },
              {
                "category": "Beauty",
                "items": [
                  {
                    "name": "Mask แผ่นมาส์กหน้า",
                    "url": "https://vt.tiktok.com/ZS2dG2AuX/",
                    "price": "฿0.01 - 1.49 ฿30.00",
                    "description": "Mask แผ่นมาส์กหน้า SADOER มาส์กหน้า หมอง คล้ำ ให้ความชุ่มชื่นและดูแลผิวอย่างล้ำลึก มาส์กหน้า ยอดนิยม"
                  }
                ]
              },
              {
                "category": "Clothes",
                "items": [
                  {
                    "name": "กางเกงเก็บพุง",
                    "url": "https://www.tiktok.com/view/product/1730002682775964532?trackParams=%7B%22traffic_source_list%22%3A%5B3%5D%2C%22traffic_source%22%3A3%2C%22enable_shop_tab_popup%22%3A1%7D&unique_id=jittrasornda&u_code=dm2m6hi34gedgl&og_info=%7B%22title%22%3A%22%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B9%80%E0%B8%81%E0%B9%87%E0%B8%9A%E0%B8%9E%E0%B8%B8%E0%B8%87%20%20%E0%B8%82%E0%B8%B2%E0%B8%AA%E0%B8%B1%E0%B9%89%E0%B8%99%20%E0%B8%A3%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B9%89%E0%B8%AD%E0%B8%87%20%E0%B8%A1%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%AA%E0%B9%8C%20M-6XL%20%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%20205%20%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%20%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%22%2C%22image%22%3A%22https%3A%5C%2F%5C%2Fp16-oec-va.ibyteimg.com%5C%2Ftos-maliva-i-o3syd03w52-us%5C%2F4f636d918425410ca84e2f438b9be39d~tplv-o3syd03w52-resize-webp%3A260%3A260.webp%3Ffrom%3D1826719393%22%7D×tamp=1723362614&user_id=7037423645405135873&sec_user_id=MS4wLjABAAAAQJjw6ydhrErXo9TIjBARQb1SXPlZz7mJGYwvL2URqwQQrwITHFgC2OCHy4jqftPV&utm_source=messenger&utm_campaign=client_share&utm_medium=android&share_iid=7399510517667088149&share_link_id=0d78c47b-3aa3-478a-a024-d12cc5d092a7&share_app_id=1180&ugbiz_name=UNKNOWN&ug_btm=b1285%2Cb6661&social_share_type=15&enable_checksum=1",
                    "price": "฿315.00 ฿350.00",
                    "description": "กางเกงเก็บพุง  ขาสั้น รัดหน้าท้อง มีไซส์ M-6XL รหัส 205 ผู้หญิง เสื้อผ้า"
                  }
                ]
              }
            ]
            this.setState({ data: context.includes('GroupByCategory')? respDataGroupByCategory : respData  });
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    };

export default withDataFetching;