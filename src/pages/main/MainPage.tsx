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
    img: string
}

interface Props {
    data: Data[]
}

const MainPage = (props: Props) => {
    const [originalData, setOriginalData] = useState<Data[]>([]);
    const [currentData, setCurrentData] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState(true);
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
            const imgList = Object.keys(images).map((key) => images[key]);
            console.log('imgList length', imgList.length)
            const dataAfterAddImg = props.data.map((item, index) => {
                // console.log('index', index)
                return {
                    name: item.name,
                    url: item.url,
                    price: item.price,
                    description: item.description,
                    img: getImage(imgList, index)
                    
                }
            });
            setOriginalData(dataAfterAddImg);
            setCurrentData(dataAfterAddImg);
            console.log('dataAfterAddImg',dataAfterAddImg)
            // setImageUrl(exampleImage);
        }
    }, [props.data]);

    const getImage = (imgList: string[], index: number) => {
        if (imgList.length > index) {
            return imgList[index];
        } else {
            return noImage;
        }
        
    };

    const handleSearch = (text: string) => {
        const filtedData = originalData.filter(item => item.name.toLowerCase().includes(text.toLowerCase()) || item.description.toLowerCase().includes(text.toLowerCase()));
        console.log('filtedData=',filtedData)
        setCurrentData(filtedData);
        console.log('currentData=',currentData)
    };

    const handleClickItem = (url: string) => {
        console.log('url=',url)
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box sx={{ height: '88vh' }}>
                {isLoading && (
                    <CircularProgress color="primary" size="3rem" thickness={5} sx={{ padding: '2rem' }} />
                )}
                {/* <div style={{ padding: '1rem' }}>Main Page</div> */}
                {!isLoading && (
                    <Paper variant="outlined" sx={{ height: '100%', padding: '2rem' }}>
                        <div style={{ padding: '1rem' }}>
                            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)} />
                        </div>

                        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
                            {currentData.map((item, index) => (
                                <Card sx={{ maxWidth: 345, margin: '1rem' }} key={index}>
                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={item.img}
                                        alt=""
                                        sx={{marginBottom: '1rem'}}
                                    />
                                    <Typography gutterBottom variant="h5" component="div">{item.price}</Typography>
                                    <Typography gutterBottom variant="h6" component="div">{item.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'center'}}>
                                    <Button size="small" onClick={() => handleClickItem(item.url)}>Go</Button>
                                </CardActions>
                                </Card>
                            ))}
                        </Box>
                    </Paper>
                )}
        </Box>
    )
}

// export default MainPage;
export default withRequest("getData")(MainPage);