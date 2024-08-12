import React, { useState, useEffect } from 'react';
import withRequest from '../../core/withRequest';
import './CategoryPage.css';
import { Box, CircularProgress, Card, CardContent, CardMedia, CardActions, Typography, Button, TextField } from '@mui/material';
import images from '../../core/imageLoader';
import noImage from '../../assets/images/no-image.png';

interface Item {
    name: string;
    url: string;
    description: string;
    price: string;
    image: string
}

interface Data {
    category: string;
    items: Item[];
}

interface Props {
    data: Data[]
}

const CategoryPage = (props: Props) => {
    const [originalData, setOriginalData] = useState<Data[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (props.data.length > 0) {
            setIsLoading(false);
            // console.log('images', images)
            const dataAfterAddImg = props.data.map(items => {
                // console.log('items', items)
                return {
                    category: items.category ? items.category : '',
                    items: items.items.map(item => {
                        return {
                            name: item.name ? item.name : '',
                            url: item.url ? item.url : '',
                            price: item.price ? item.price : '',
                            description: item.description ? item.description : '',
                            image: getImageByName(item.image)
                        }
                    })
                }
            });
            setOriginalData(dataAfterAddImg);
            console.log('dataAfterAddImg',dataAfterAddImg)
        }
    }, [props.data]);


    const getImageByName = (name: string) => {
        const formatedImageName = name+'.png';
        return images[formatedImageName]|| noImage;
    };

    const handleClickItem = (url: string) => {
        console.log('url=',url)
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box sx={{ height: '88vh', padding: '1rem' }}>
            {isLoading && (
                <CircularProgress color="primary" size="3rem" thickness={5} sx={{ padding: '2rem' }} />
            )}
            {!isLoading && (
                <div>
                    {originalData.map((items, index) => (
                        <div key={index}>
                        <h2>{items.category}</h2>
                    
                        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap="1rem">
                            {items.items.map((item, subIndex) => (
                                <Card sx={{ maxWidth: 345, margin: '1rem' }} key={subIndex}>
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
                                        <Button size="small" onClick={() => handleClickItem(item.url)}>Go</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Box>
                      </div>
                    ))}
                </div>
            )}
        </Box>
    )
}

// export default CategoryPage;
export default withRequest("getData/GroupByCategory")(CategoryPage);