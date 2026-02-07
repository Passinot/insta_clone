import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../components/themeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const STORIES = [
    { id: '1', user: 'Your Story', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', user: 'john_doe', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: '3', user: 'jane_smith', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: '4', user: 'travelER', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: '5', user: 'foodie_99', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: '6', user: 'tech_guru', avatar: 'https://i.pravatar.cc/150?img=8' },
];

const POSTS = [
    {
        id: '1',
        user: 'john_doe',
        avatar: 'https://i.pravatar.cc/150?img=2',
        image: 'https://picsum.photos/600/600?random=1',
        caption: 'Beautiful sunset! 🌅',
        likes: 124,
        type: 'image',
    },
    {
        id: '4',
        user: 'tech_guru',
        avatar: 'https://i.pravatar.cc/150?img=8',
        image: 'https://picsum.photos/600/1066?random=4',
        caption: 'My new desk setup! #coding #setup',
        likes: 1200,
        type: 'reel',
    },
    {
        id: '2',
        user: 'jane_smith',
        avatar: 'https://i.pravatar.cc/150?img=3',
        image: 'https://picsum.photos/600/600?random=2',
        caption: 'Coffee time ☕️',
        likes: 89,
        type: 'image',
    },
    {
        id: '5',
        user: 'foodie_99',
        avatar: 'https://i.pravatar.cc/150?img=5',
        image: 'https://picsum.photos/600/600?random=5',
        caption: 'Making fresh pasta 🍝',
        likes: 340,
        type: 'video',
    },
    {
        id: '3',
        user: 'travelER',
        avatar: 'https://i.pravatar.cc/150?img=4',
        image: 'https://picsum.photos/600/600?random=3',
        caption: 'Adventure awaits!',
        likes: 450,
        type: 'image',
    },
];

const HomeScreen = ({ navigation }) => {
    const { dark } = useContext(ThemeContext);
    const bgColor = dark ? '#000' : '#fff';
    const textColor = dark ? '#fff' : '#000';

    const renderStory = ({ item }) => (
        <View style={styles.storyContainer}>
            <View style={[styles.storyRing, { borderColor: dark ? '#333' : '#dbdbdb' }]}>
                <Image source={{ uri: item.avatar }} style={styles.storyAvatar} />
            </View>
            <Text style={[styles.storyUser, { color: textColor }]} numberOfLines={1}>
                {item.user}
            </Text>
        </View>
    );

    const renderPost = ({ item }) => {
        const isReel = item.type === 'reel';
        const isVideo = item.type === 'video' || isReel;
        const imageStyle = isReel ? styles.postImageReel : styles.postImage;

        return (
            <View style={styles.postContainer}>
                <View style={styles.postHeader}>
                    <View style={styles.postHeaderUser}>
                        <Image source={{ uri: item.avatar }} style={styles.postAvatar} />
                        <Text style={[styles.postUsername, { color: textColor }]}>{item.user}</Text>
                    </View>
                    <Icon name="ellipsis-horizontal" size={20} color={textColor} />
                </View>

                <View>
                    <Image source={{ uri: item.image }} style={imageStyle} resizeMode="cover" />
                    {isVideo && (
                        <View style={styles.playIconOverlay}>
                            <Icon name="play-circle" size={60} color="rgba(255, 255, 255, 0.8)" />
                        </View>
                    )}
                    {isReel && (
                        <View style={styles.reelIndicator}>
                            <Icon name="film-outline" size={16} color="#fff" />
                        </View>
                    )}
                </View>

                <View style={styles.postActions}>
                    <View style={styles.leftActions}>
                        <Icon name="heart-outline" size={28} color={textColor} style={styles.actionIcon} />
                        <Icon name="chatbubble-outline" size={26} color={textColor} style={styles.actionIcon} />
                        <Icon name="paper-plane-outline" size={26} color={textColor} style={styles.actionIcon} />
                    </View>
                    <Icon name="bookmark-outline" size={26} color={textColor} />
                </View>
                <View style={styles.postFooter}>
                    <Text style={[styles.likes, { color: textColor }]}>{item.likes} likes</Text>
                    <Text style={[styles.caption, { color: textColor }]}>
                        <Text style={styles.captionUser}>{item.user}</Text> {item.caption}
                    </Text>
                </View>
            </View>
        );
    };

    const renderHeader = () => (
        <>
            <View style={[styles.header, { borderBottomColor: dark ? '#262626' : '#efefef' }]}>
                <Text style={[styles.logo, { color: textColor }]}>Instagram</Text>
                <View style={styles.headerIcons}>
                    <Icon name="heart-outline" size={28} color={textColor} style={styles.headerIcon} />
                    <Icon name="chatbubble-ellipses-outline" size={28} color={textColor} />
                </View>
            </View>
            <View style={[styles.storiesValues, { borderBottomColor: dark ? '#262626' : '#efefef' }]}>
                <FlatList
                    horizontal
                    data={STORIES}
                    renderItem={renderStory}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContent}
                />
            </View>
        </>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: bgColor }]}>
            <FlatList
                data={POSTS}
                keyExtractor={item => item.id}
                renderItem={renderPost}
                ListHeaderComponent={renderHeader}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 54,
        borderBottomWidth: 1,
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Cochin', // Fallback for Instagram-like font
    },
    headerIcons: {
        flexDirection: 'row',
    },
    headerIcon: {
        marginRight: 20,
    },
    storiesValues: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
    },
    storiesContent: {
        paddingHorizontal: 10,
    },
    storyContainer: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    storyRing: {
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        borderColor: '#c13584', // Placeholder gradient color
    },
    storyAvatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    storyUser: {
        fontSize: 11,
        maxWidth: 70,
    },
    postContainer: {
        marginBottom: 10,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    postHeaderUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    postUsername: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    postImage: {
        width: '100%',
        height: 400,
    },
    postImageReel: {
        width: '100%',
        aspectRatio: 9 / 16, // Vertical Reel aspect ratio
    },
    playIconOverlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    reelIndicator: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 6,
        borderRadius: 4,
    },
    postActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    leftActions: {
        flexDirection: 'row',
    },
    actionIcon: {
        marginRight: 15,
    },
    postFooter: {
        paddingHorizontal: 12,
        paddingBottom: 12,
    },
    likes: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    caption: {
        lineHeight: 18,
    },
    captionUser: {
        fontWeight: 'bold',
    },
});

export default HomeScreen;
