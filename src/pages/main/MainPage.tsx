import React, { useState, useEffect } from 'react';
import './MainPage.css';
import withRequest from "../../core/withRequest";
import { Box, Paper, TextField, Card, CardContent, CardMedia, CardActions, Typography, Button, CircularProgress } from "@mui/material";
// import { gapi } from 'gapi-script';
import images from '../../core/imageLoader';
import noImage from '../../assets/images/no-image.png';

interface Data {
    name: string;
    url: string;
    description: string;
    price: string;
    image: string
}

interface Props {
    data: Data[]
}

const MainPage = (props: Props) => {
    const [originalData, setOriginalData] = useState<Data[]>([]);
    const [currentData, setCurrentData] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDataFound, setIsDataFound] = useState(true);
    // const [imageUrl, setImageUrl] = useState('');
    // const [authInstance, setAuthInstance] = useState<gapi.auth2.GoogleAuth | null>(null);


    // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const SCOPES = 'https://www.googleapis.com/auth/drive.file';

    // useEffect(() => {
    //     const initClient = () => {
    //       gapi.client.init({
    //         apiKey: API_KEY,
    //         clientId: CLIENT_ID,
    //         discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
    //         scope: SCOPES,
    //       }).then(() => {
    //         console.log('GAPI client initialized');
    //         setAuthInstance(gapi.auth2.getAuthInstance());
    //         gapi.client.load('drive', 'v3').then(() => {
    //             console.log('Drive API loaded');
    //             handleSignIn();
    //           }).catch(error => {
    //             console.error('Error loading Drive API:', error);
    //           });
    //       }).catch((error: any) => {
    //         console.error('Error initializing GAPI client', error);
    //       });
    //     };
    //     gapi.load('client:auth2', initClient);
    // }, []);

    // const handleSignIn = () => {
    //     if (authInstance) {
    //       authInstance.signIn().then(() => {
    //         console.log('User signed in');
    //         fetchImage();
    //       }).catch((error: any) => {
    //         console.error('Error signing in:', error);
    //       });
    //     } else {
    //       console.error('Auth instance is not available');
    //     }
    // };

    // const fetchImage = () => {
    //     if ((gapi.client as any).drive) {
    //       (gapi.client as any).drive.files.get({
    //         fileId: '1bJ4pMId-rNJmdiYp0JzUhrXYJch_OPE-', // Replace with your file ID
    //         alt: 'media',
    //       }).then((response: any) => {
    //         // Update the image URL state
    //         setImageUrl(response.body);
    //       }).catch((error: any) => {
    //         console.error('Error fetching image:', error);
    //       });
    //     } else {
    //       console.error('Drive API client is not loaded');
    //     }
    // };

    useEffect(() => {
        if (props.data.length > 0) {
            setIsLoading(false);
            console.log('images', images)
            const dataAfterAddImg = props.data.map((item, index) => {
                // console.log('index', index)
                return {
                    name: item.name ? item.name : '',
                    url: item.url ? item.url : '',
                    price: item.price ? item.price : '',
                    description: item.description ? item.description : '',
                    image: getImageByName(item.image)
                }
            });
            setOriginalData(dataAfterAddImg);
            setCurrentData(dataAfterAddImg);
            console.log('dataAfterAddImg',dataAfterAddImg)
            // setImageUrl(exampleImage);
        }
    }, [props.data]);

    const getImageByName = (name: string) => {
        const formatedImageName = name+'.png';
        // console.log('name',formatedImageName)
        // console.log('images[name]',images[formatedImageName])
        return images[formatedImageName]|| noImage;
    };

    const handleSearch = (text: string) => {
        setIsDataFound(true);
        const filtedData = originalData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase()));
        console.log('filtedData=',filtedData)
        setCurrentData(filtedData);
        setIsDataFound(filtedData.length > 0 ? true : false);
        console.log('currentData=',currentData)
    };

    const handleClickItem = (url: string, type: string) => {
        console.log('url=',url)
        if (type === 'new_tab') {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else {
            if (window.top) {
                window.top.location.href = url;
            } else {
                // Handle the case where window.top is null or undefined
                console.error('window.top is null or undefined');
                window.location.href = url;
            }
        }
    };

    return (
        <Box sx={{ height: '88vh' }}>
                {isLoading && (
                    <CircularProgress color="primary" size="3rem" thickness={5} sx={{ padding: '2rem' }} />
                )}
                {/* <div style={{ padding: '1rem' }}>Main Page</div> */}
                {!isLoading && (
                    // <Paper variant="outlined" sx={{ padding: '2rem' }}>
                    <div>
                        <div style={{ padding: '1rem' }}>
                            <TextField id="outlined-basic" label="กรอกชื่อสินค้าเพื่อค้นหา" variant="outlined" fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)} placeholder='พิมพิ์ชื่อหรือคำค้นหาเกี่ยวกับสินค้า'/>
                        </div>

                        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
                            {currentData.map((item, index) => (
                                <Card sx={{ maxWidth: 345, margin: '1rem' }} key={index}>
                                <CardContent>
                                    {/* {index} */}
                                    {item.image.startsWith('data:image/png;base64') && (
                                        <CardMedia component="img" height="150" image={item.image} alt="" sx={{marginBottom: '1rem', width: '70%', margin: '0 auto'}} />
                                    )}
                                    {item.image.startsWith('/static/') && (
                                        <CardMedia component="img" height="300" image={item.image} alt="" sx={{marginBottom: '1rem'}} />
                                    )}
                                    <Typography gutterBottom variant="h5" component="div">{item.price}</Typography>
                                    <Typography gutterBottom variant="h6" component="div">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'center'}}>
                                    <Button size="small" onClick={() => handleClickItem(item.url, 'go')}>ไปที่ TikTok</Button>
                                    <Button size="small" onClick={() => handleClickItem(item.url, 'new_tab')}>เปิดแท็บใหม่</Button>
                                </CardActions>
                                </Card>
                            ))}
                        </Box>
                        {!isDataFound && (
                            <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
                                ไม่มีข้อมูล (No Data Found)
                            </Box>
                        )}
                    </div>
                    // </Paper>
                )}
        </Box>
    )
}

// export default MainPage;
export default withRequest("getData")(MainPage);