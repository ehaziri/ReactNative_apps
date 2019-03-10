import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbanilContainerStyle, 
            thumbnailStyle,
            headerContentStyle,
            containerStyle,
            headerTextStyle,
            imageStyle } = styles;
    return (
        <Card>
            <CardSection style={containerStyle}>
                <View style={thumbanilContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
                
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }} 
                />  
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>

            </CardSection>

        </Card>
    );
};
export default AlbumDetail;

const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50, 
        height: 50
    },
    thumbanilContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
