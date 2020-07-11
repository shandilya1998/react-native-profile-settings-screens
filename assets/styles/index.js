import {Platform, StyleSheet, Dimensions, PixelRatio} from "react-native";
const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";
const PEACH = "#ffe5b4";
const NAVY_BLUE = "#000080";
const SILVER = "#C0C0C0";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";
const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export const colors = {
    	black: '#1a1917',
    	gray: '#888888',
   	background1: '#B721FF',
	background2: '#21D4FD'
};

function wp (percentage) {
  const value = (percentage * DIMENSION_WIDTH) / 100;
  return Math.round(value);
}

const listItemmargin = ((DIMENSION_WIDTH -100)/6 - 30)/2

const itemHorizontalMargin = wp(2);
export const sliderWidth = wp(60);
export const itemWidth = sliderWidth + itemHorizontalMargin * 2;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icons: {
		width: 30
	},
	header : {
		marginTop : DIMENSION_HEIGHT*0.035,
		marginHorizontal : 7.5,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center'
	},
	headerContainer : {
		flex : 15,
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center',
		marginTop : 10},
	memoryCardContainer : {
		width : DIMENSION_WIDTH*0.8,
		height : DIMENSION_HEIGHT*0.4,
		justifyContent : 'center',
		alignItems : 'center',
		borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,         
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
	},
	memoryCardImage : {
		width : DIMENSION_WIDTH*0.8,
		height : DIMENSION_HEIGHT*0.4,
		flexDirection : 'column',
		justifyContent: 'flex-end',
		alignItems : 'center',
		},
	addMemoryContainer : {
		flex : 1,
		flexDirection : 'column',
		justifyContent : 'space-between',
	},
	memoryContainer : {
		flex : 1, 
		flexDirection : 'column',
	},
	addMemoryScreenHalfUp : {
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'flex-end'
	},
	addMemoryScreenHalfDown : {
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'flex-start'
	},
	headerView : {
		flex : 1,
		justifyContent : 'space-between',
		alignItems : 'center',
		flexDirection : 'column'
	},
	headerContainerAddMemoryScreen : { 
 		marginHorizontal : 7.5,
	},
	safeArea: {
		flex : 1,
		justifyContent : 'center', 
		alignItems : 'center'
	},
    container: {
		flex : 1,
		//width : DIMENSION_WIDTH*0.85,
        //height : DIMENSION_HEIGHT*0.5,
        justifyContent : 'center',
		alignItems : 'center'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    	exampleContainer: {
        	paddingVertical: 0
    	},
    	exampleContainerDark: {
        	backgroundColor : colors.black
    	},
    	exampleContainerLight: {
        	backgroundColor: 'white'
    	},
    	title: {
        	paddingHorizontal: 30,
        	backgroundColor: 'transparent',
        	color: 'rgba(255, 255, 255, 0.9)',
        	fontSize: 20,
        	fontWeight: 'bold',
        	textAlign: 'center'
    	},
    	titleDark: {
        	color: colors.black
    	},
    	subtitle: {
        	marginTop: 5,
        	paddingHorizontal: 30,
        	backgroundColor: 'transparent',
        	color: 'rgba(255, 255, 255, 0.75)',
        	fontSize: 13,
        	fontStyle: 'italic',
        	textAlign: 'center'
    },
    slider: {
        overflow: 'visible',
		flex : 1,
        //width : DIMENSION_WIDTH*0.8,
        //height : DIMENSION_HEIGHT*0.4,
	},
	userSearchContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection : 'row',
		margin : 10
	},
	userSearchContainerUsersList : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection : 'row',
		margin : 10,
		backgroundColor : 'red',
	},
	searchBox : {
		flex : 1,
		height : 35,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center',
		opacity : 0.75,
	},
	searchBoxGroupChat : { 
		flex : 8,
                height : 50,
		flexDirection : 'column',
                justifyContent : 'center',
                alignItems : 'center',
                opacity : 0.75,
		//backgroundColor : 'red'
        },  
	textInputContainer : {
		flex : 15,
		height : 30,
		borderColor : BLACK,
		backgroundColor : GRAY,
                borderWidth: 1,
		marginHorizontal : 4,
		opacity : 1,
	},
    sliderContentContainer: {
	    //flex : 1,
        //height : DIMENSION_HEIGHT*0.4,
        justifyContent : 'center',
        alignItems : 'center',
    	paddingVertical: 0, // for custom animation
        paddingHorizontal : 0,
    },
	memoryListContainer : {
		flex : 10,
		justifyContent : 'center',
		alignItems : 'center'
	},
	shuffleCardContainer : {
		flex : 4,
		justifyContent : 'center',
		alignItems : 'center'
	},
	shuffleCardImageContainer : {
		flex : 1,
		marginTop : 15
	},
	shuffleCardImage : {
		width : DIMENSION_WIDTH*0.45,
		height : DIMENSION_HEIGHT*0.25,
		resizeMode : 'contain',
		borderRadius : 7.5,
		shadowColor : DARK_GRAY,
		shadowOffset : {
			width : 5,
			height : 5
		},
		shadowOpacity : 0.8,
		shadowRadius : 5,
		justifyContent : 'flex-end'
	},
	memoryCardText : {
		backgroundColor : 'black',
		width : DIMENSION_WIDTH*0.8,
	},
	recordButtonContainer : {
		margin : 7.5,
		borderRadius: 2,
		borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { 
  	              width: 0,
                      height: 2 
                },  
             	shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	musicButtonContainer : {
		margin : 7.5,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { 
                      width: 0,
                      height: 2 
                },  
                shadowOpacity: 0.8,
                shadowRadius: 2,
        },
	emoteButtonContainer : {
		margin : 7.5,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { 
                      width: 0,
                      height: 2 
                },  
                shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	textButtonContainer : {
		margin : 7.5,
                borderRadius: 2,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: { 
                      width: 0,
                      height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
        },
	responderStyle: {
    		elevation: 3,
    		shadowColor: 'rgba(0,0,0,.7)',
    		shadowOffset: { width: 1, height: 2 },
    		shadowOpacity: 0.8,
    		shadowRadius: 1,
  	},
  	wheelWrapper: {
    		borderRadius: 120,
    		elevation: 5,
    		padding: 0,
    		shadowColor: 'rgba(0,0,0,.7)',
    		shadowOffset: { width: 1, height: 2 },
    		shadowOpacity: 0.8,
    		shadowRadius: 1,
    		zIndex: 1,
  	},
	preview: {
    		flex: 1,
    		justifyContent: 'space-around',
    		alignItems: 'center',
                height : DIMENSION_HEIGHT,
                width : DIMENSION_WIDTH,
  	},
  	capture: {
    		flex: 0.5,
    		backgroundColor: '#fff',
    		borderRadius: 5,
    		padding: 15,
    		paddingHorizontal: 20,
    		alignSelf: 'center',
    		margin: 20,
  	},
	cameraView : {
		flex : 1,
                justifyContent : 'center',
                alignItems : 'center',
                flexDirection : 'column',
		height : DIMENSION_HEIGHT,
                width : DIMENSION_WIDTH,
		backgroundColor : BLACK,
	},
	cameraScreenContainer : {
		flex : 1,
		justifyContent : 'space-between',
		alignItems : 'center'
	},
	playerContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection : 'row',
		//backgroundColor : 'green',
		width : DIMENSION_WIDTH,
		height : DIMENSION_HEIGHT*0.15
	},
	audioInfoContainer : {
		flex : 2,
		flexDirection : 'column',
	},
	coverImageContainer : {
		flex : 2,
		justifyContent : 'center',
		alignItems : 'center',
		//backgroundColor : 'yellow'
	},
	coverImage : {
		flex : 1,
		resizeMode : 'contain',
	},
	audioDescriptionContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center'
	},
	playerControlsContainer : {
		flex : 3,
		flexDirection : 'column',
		justifyContent : 'center',
		alignItems : 'center',
		//backgroundColor : 'red'
	},
	playerControls : {
		flexDirection : 'row',
		justifyContent : 'space-evenly',
		alignItems : 'center'
	},
	memoryChildContainer : {
		flex : 1,
		flexDirection : 'column',
		justifyContent : 'center',
		alignItems : 'center',
		//backgroundColor : 'blue'
	},
	controlContainer : { 
		justifyContent : 'center',
		alignItems : 'center',
		marginHorizontal : 10
	},
	socialItemsContainer : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-around',
		alignItems : 'center',
		width : DIMENSION_WIDTH
	},
	socialItemsImage : {
		justifyContent : 'center',
		alignItems : 'center',
	},
	memoryStory : {
		color : 'white',
		marginVertical : 20,
		fontFamily : 'Helvetica',
		fontWeight : 'bold',
		textAlign : 'center',
		fontSize : 15,
		
	},
	memoryStoryContainer : {
		flex : 1,
		width : DIMENSION_WIDTH*0.75,
		justifyContent : 'flex-end'
	},
	imageCarousel : {
		flex : 2,
		marginVertical : 15,
		padding : 0,
	},
	chatContainer : {
		flex : 10,
		alignItems : 'center',
		justifyContent : 'center',
		//backgroundColor : 'yellow',
		width : DIMENSION_WIDTH*0.95,
	},
	chatHeaderContainer : {
		flex : 1, 
		justifyContent : 'center', 
		alignItems : 'center'
	},
	userItemContainer : { 
        //flex : 1, 
        backgroundColor : 'blue',
        justifyContent : 'flex-start',
		flexDirection : 'row',
        alignItems : 'center',
        marginVertical : 10,
		width : DIMENSION_WIDTH,
		height : 75,
    },  
	messageContainer : {
		flex : 16,
		//backgroundColor : 'blue',
		justifyContent : 'center',
		alignItems : 'center',
		width : DIMENSION_WIDTH*0.95,
		marginVertical : 10,
	},
	chatTextInputContainer : {
		marginTop : 10,
		flex : 2,
		flexDirection : 'row',
		//backgroundColor : GRAY,
		justifyContent : 'center',
		alignItems : 'center',
		width : DIMENSION_WIDTH*0.95,
		borderRadius : 5,
		borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                      width: 0,
                      height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	chatTextInputContainerGroupChat : {
		//marginVertical : 5,
		//paddingVertical : 5,
		height : 50,
                flexDirection : 'row',
                backgroundColor : GRAY,
                justifyContent : 'center',
                alignItems : 'center',
                width : DIMENSION_WIDTH,
                borderRadius : 5,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                      width: 0,
                      height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
        },
	textInput : {
		backgroundColor : WHITE,
		justifyContent : 'center',
		alignItems : 'center',
		fontFamily : 'Helvetica',
		fontSize : 18,
		margin : 4,
		width : DIMENSION_WIDTH*0.85,
		height : 38,
		borderRadius : 5,
		borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                      width: 0,
                      height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	uploadOptionsContainer : {
		justifyContent : 'center',
		alignItems : 'center',
	},
	sendButtonContainer : {
		justifyContent : 'center',
		alignItems : 'center'
	},
	sendButtonContainerGroupChat : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	sendButtonImage : {
		resizeMode : 'contain',
		shadowColor: '#000',
                shadowOffset: {
                      width: 2,
                      height: 2
                },  
                shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	attachmentContainer : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'space-around',
		alignItems : 'flex-end',
	},
	attachmentIcon : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		shadowColor: '#000',
                shadowOffset: {
                      width: 0,
                      height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 2,
	},
	contentCarouselContainer : {
		flex : 16,
		justifyContent : 'center',
		alignItems : 'center',
	},
	userSearchResultModal : {
		flex : 4,
		justifyContent : 'center',
		alignItems : 'center'
	},
	userSearchResult : {
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'center',
		alignItems : 'center'
	},
	messageContainer : {
		flex : 10,
		flexDirection : 'row', 
		justifyContent : 'center', 
		alignItems : 'center',
		//backgroundColor : 'white',
		//opacity : 0.5,
		marginVertical : 10,
	},
	usersListContainer : {
        flex :1  ,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'green',
        //opacity : 0.5,
        },
	avatarContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		opacity : 1,
        marginTop : 10,
	},
	messageContentContainer : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center'
	},
	messageTextContainer : {
		flex : 4,
//		height : DIMENSION_HEIGHT*0.4,
		//backgroundColor : 'white'
	},
	userTextContainer : {
		flex : 4,
		justifyContent : 'center',
		flexDirection : 'column',
		alignItems : 'center',
	},
	messageText : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		color : 'white',
		fontFamily : 'Helvetica',
		textAlign : 'justify',
		fontSize : 18,
		marginHorizontal : 5,
	},
	emptyContent : {
		flex : 1,
	},
	messageListContainer : {
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center'
	},
	messageListViewContainer : {
		flex : 1,
		alignItems : 'center',
		justifyContent : 'center',

	},
	emotionSelectorTextInput : {
		paddingHorizontal : 10,
                //flex : 1,
                fontFamily : 'Helvetica',
                fontSize : 18, 
                backgroundColor : 'white',
		width : DIMENSION_WIDTH*0.75,
		height : 22*8,
		justifyContent : 'center',
		alignItems : 'center'
         },
	emotionSelectorTextInputContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		width : DIMENSION_WIDTH*0.75,
	},
	emotionSelectorOptionsHalf : {
		flex : 1,  
                flexDirection : 'column', 
                justifyContent : 'space-evenly', 
                alignItems : 'center',
	},
	emotionIconContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	listEmptyComponentMusicSelection : {
		flex : 1,
		fontFamily : 'Helvetica',
		fontSize : 20,
		justifyContent : 'center',
		alignItems : 'center'
	},
	deleteContainerMusicSelection : {
		width : DIMENSION_WIDTH*0.95,  
                flexDirection : 'row',
                justifyContent : 'flex-end',
		alignItems : 'center',
                //backgroundColor : 'blue',
	},
	flatlistContainerMusicSelection : {
		flex : 10, 
                justifyContent : 'center',
                alignItems : 'center',
	},
	modalContainer : {
		width : DIMENSION_WIDTH*0.95,
                justifyContent : 'center',
                alignItems : 'center',
                margin : 10, 
                //backgroundColor : 'red',
        },
	loginPageContainer : {
        width : DIMENSION_WIDTH,
		height : DIMENSION_HEIGHT,
        justifyContent : 'center',
		alignItems : 'center',

	},
	signupPageContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	loginViewContainer : {
		flex : 3,
		justifyContent : 'center',
		alignItems : 'center',

	},
	loginPageLogoContainer : {
		flex : 1, 
		justifyContent : 'flex-start',
		alignItems : 'center',
		marginTop : 30
	},
	signUpButtonContainer : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center',
	},
	loginPageTextInputContainer : {
		flex : 1, 
		alignItems : 'center',
		justifyContent : 'center'
	},
	loginPageTextInput : {
		width : DIMENSION_WIDTH*0.75,
		height : 40,
		borderColor : NAVY_BLUE,
                backgroundColor : WHITE,
                borderWidth: 1,
                marginVertical : 10,
	},
	loginPageMessageContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	loginPageLoginButtonContainer : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center',
	},
	loginPageSignUpButtonContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	loginPageForgotPasswordContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	onboardingFormSignUpPage : {
		flex : 10,
		justifyContent : 'center',
		alignItems : 'center',
		marginVertical : 50,
		paddingVertical : 50,
	},
	usernameInputContainerSignUpPage : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center'
	},
	emailInputContainerSignUpPage : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center'
	},
	passInputContainerSignUpPage : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center',
	},
	submitButtonContainerSignUpPage : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center',
	},
	textStyleSignUpPage : {
		flex : 1, 
		color : WHITE,
		fontFamily : 'Helvetica',
		fontSize : 20
	},
	textContainerStyleSignUpPage : {
		width : DIMENSION_WIDTH*0.6,
		flex : 1,
		flexDirection : 'row',
		justifyContent : 'flex-start',
		alignItems : 'flex-end',
		//backgroundColor : 'red',
	},
	textInputStyleSignUpPage : {
		width : DIMENSION_WIDTH*0.6,
		backgroundColor : WHITE,
		borderColor : NAVY_BLUE,
		height : 40,
		borderWidth : 1
	},
	firstNameInputContainer : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center'
	},
	lastNameInputContainer : {
		flex : 1, 
		justifyContent : 'center',
		alignItems : 'center'
	},
	phoneInputContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	dobInputContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	cityInputContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	addMememoryModalContainer : {
		flex : 1,
		backgroundColor : 'pink',
		justifyContent : 'center',
		alignItems : 'center'
	},
	memoryNameInputContainer : {
		width : DIMENSION_WIDTH*0.5,
		height : 40,
		backgroundColor : WHITE,
		borderColor : BLACK,
		borderWidth : 1,
	},
	textInputAddMemoryScreen : {
		backgroundColor : WHITE,
                justifyContent : 'center',
                alignItems : 'center',
                fontFamily : 'Helvetica',
                fontSize : 18, 
                margin : 4,
                width : DIMENSION_WIDTH*0.65,
                height : 38, 
                borderRadius : 5,
                borderColor: '#ddd',
                borderBottomWidth: 0,
                shadowColor: '#000',
                shadowOffset: {
                      width: 0,
                      height: 2
                },  
                shadowOpacity: 0.8,
                shadowRadius: 2,

	},
	modalContentContainer : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	keyboardAvoidingView : {
		//flex : 1, 
		width : DIMENSION_WIDTH,
		height : DIMENSION_HEIGHT,
		justifyContent : 'flex-end',
		alignItems : 'center',
		paddingHorizontal : 0,
		marginHorizontal : 0,
	},
	backgroundEmotionSelector : {
		width : DIMENSION_WIDTH,
		height : DIMENSION_HEIGHT,
		justifyContent : 'flex-end',
		paddingHorizontal : 0,
		marginHorizontal : 0,
	},
    bg: {
        flex: 1,
        resizeMode: "cover", 
        justifyContent : 'space-evenly',
        alignItems : 'stretch',
        width: DIMENSION_WIDTH,
        height: DIMENSION_HEIGHT
    },
    profileScreen : {
        flex : 10,
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center"
    },
    upperProfileScreen : {
        flex : 2,
        flexDirection : 'column',
        justifyContent : "space-around",
        alignItems : 'center',
    },
    avatarContainer : {
        flex : 1,
        flexDirection : "column",
        justifyContent : "center",
        alignItems : "center",
        marginVertical : 20,
        borderRadius : 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
                width: 2,
                height: 2
        },  
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    nameDescriptionContainer : {
        flex : 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems : 'center',
        marginBottom: 10,
        width : DIMENSION_WIDTH
    },
    nameText : {
        flex : 1,
        fontSize : 18,
        color : 'white',
        textAlign:'center',
        width : DIMENSION_WIDTH*0.8,
        borderRadius : 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: GRAY,
        shadowOffset: {
            width: 1,
            height: 2
                },  
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    descriptionText : {
        flex : 1,
        fontSize : 15,
        color : 'white',
        textAlign:'center',
        width : DIMENSION_WIDTH*0.8,
        borderRadius : 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: GRAY,
        shadowOffset: {
            width: 1,
            height: 2
                },  
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    settingsContainer : {
        flex : 3
    },
    thoughtBubbleStyle : {
        flex : 0.75,
        //opacity : 0.75,
        //width : DIMENSION_WIDTH*0.95,
        //height : DIMENSION_HEIGHT*0.2,
        alignItems : 'center',
        justifyContent : 'center',
    }, 
    listItemContainerStyle : { 
        flex : 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        width : DIMENSION_WIDTH*0.95,
        borderRadius : 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: GRAY,
        shadowOffset: {
            width: 1,
            height: 2
                },  
        shadowOpacity: 0.8,
        shadowRadius: 2,
        margin : 10,
    },
    listItemtitleStyle : { 
        flex : 1,
        fontSize : 18, 
    },
    viewMemoryButton : {
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 5,
    },
    viewMemoryButtonText : {
        fontSize : 18,
        //backgroundColor : 'green',
        borderWidth: 1,
        borderRadius : 5, 
        //borderColor: '#E91E63',
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2
                },   
        shadowOpacity: 0.8, 
        shadowRadius: 2,
        margin : 10,
        padding : 5,
    },
    viewMemoryButtonContainer : {
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'flex-end',
    },
    selectedEmotionDisplayContainer : { 
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        marginVertical : 10,
    },
    selectedEmotionDisplayContainerTop : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : DIMENSION_WIDTH,
        alignItems : 'center',
        //backgroundColor : 'white',
    },
    selectedEmotionDisplayContainerBottom : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center',
        width : DIMENSION_WIDTH,
    },
    inputStoryDisplayStyle : {
        fontSize : 16,
        fontFamily : 'Helvetica',
        color : 'white',
    },
    inputStoryDisplayContainerStyle : {
        marginBottom : 10,
        marginTop : 20,
    },
    waitingImageStyle : {
        //flex : 1,        
        width : DIMENSION_WIDTH*0.15,
        height : DIMENSION_WIDTH*0.15,
        borderRadius : DIMENSION_WIDTH*0.15/2,
    },
    waitingScreenImageContainer : {
        //flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : DIMENSION_WIDTH*0.15/2, 
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },   
        shadowOpacity: 0.8, 
        shadowRadius: 2,
        opacity : 0.75,
        backgroundColor : 'white',
        width : DIMENSION_WIDTH*0.15,
        height : DIMENSION_WIDTH*0.15,
    },
    waitingScreenMessageContainer : {
        //flex : 1,
        width : DIMENSION_WIDTH,
        height : DIMENSION_WIDTH*0.15,
        //backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'center',
    },
    waitingScreenMessage : {
        fontSize : 18,
        fontFamily : 'Helvetica',
        color : 'white',
    },
    waitingContentContainer : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'red',
    },
    bottomModalContanerStyle : {
        flex : 1,
    },
    bottomModalContentStyle : {
        flex : 1, 
        justifyContent : 'center',
        flexDirection : 'column',
        alignItems : 'center',
        backgroundColor : PEACH,

    },
});

export default styles;
