import React, { useState, useEffect } from 'react';
import './MainPage.css';
import withRequest from "../../core/withRequest";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Card from '@mui/material/Card';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import { Box, Paper, TextField, Card, CardContent, CardMedia, CardActions, Typography, Button, CircularProgress } from "@mui/material";
import { gapi } from 'gapi-script';

interface Data {
    name: string;
    url: string;
}

interface Props {
    data: Data[]
}

const MainPage = (props: Props) => {
    const [currentData, setStateData] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SCOPES = 'https://www.googleapis.com/auth/drive.file';

    useEffect(() => {
        const initClient = () => {
          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
            scope: SCOPES,
          }).then(() => {
            console.log('GAPI client initialized');
            gapi.auth2.getAuthInstance().signIn().then(() => {
                gapi.client.drive.files.get({
                  fileId: '1bJ4pMId-rNJmdiYp0JzUhrXYJch_OPE-',
                  alt: 'media',
                }).then((response: any) => {
                  setImageUrl(response.result.webContentLink);
                });
            });
          }).catch((error: any) => {
            console.error('Error initializing GAPI client', error);
          });
        };
        gapi.load('client:auth2', initClient);
    }, []);

    useEffect(() => {
        if (props.data.length > 0) setIsLoading(false);
        setStateData(props.data);
    }, [props.data]);

    const handleSearch = (text: string) => {
        const filtedData = props.data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
        console.log('filtedData=',filtedData)
        setStateData(filtedData);
        console.log('currentData=',currentData)
    };

    const handleClickItem = (url: string) => {
        console.log('url=',url)
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box sx={{ height: '88vh' }}>
            {/* <Paper variant="outlined" sx={{ height: '100%', padding: '1rem' }}> */}
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
                                        height="140"
                                        image={imageUrl}
                                        alt="Google Drive Image"
                                    />
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {item.url}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleClickItem(item.url)}>Go</Button>
                                </CardActions>
                                </Card>
                            ))}
                        </Box>
                    </Paper>
                )}
                {/* <div style={{ padding: '1rem' }}>
                    <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value)} />
                </div>

                <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
                    {currentData.map((item, index) => (
                        <Card sx={{ maxWidth: 345, margin: '1rem' }} key={index}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {item.url}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleClickItem(item.url)}>Go</Button>
                        </CardActions>
                        </Card>
                    ))}
                </Box> */}
            {/* </Paper> */}
        </Box>
    )
}

// export default MainPage;
export default withRequest("getData")(MainPage);