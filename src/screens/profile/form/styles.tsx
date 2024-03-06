import { StyleSheet } from 'react-native';
import { brand, palette } from '../../../utils/theme/themes';

export default StyleSheet.create({
    blurOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        zIndex: 10,
    },
    formCard: {
        backgroundColor: palette.black,
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    input: {
        borderBottomWidth: 0.8,
        borderBottomColor: palette.highlight,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize:16,
        color: palette.white,
    },
    datePickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    datePickerButtonText: {
        marginLeft: 10,
        fontSize: 16,
        color: palette.white,
    },
    saveButton: {
        backgroundColor: brand.secondaryMain,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop:5,
        paddingBottom:5,
        borderRadius: 20,
        alignItems: 'center',
    },
    saveButtonText: {
        color: palette.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    scheduledText: {
        alignItems:"center",
        color: palette.title,
        marginBottom: 10,
    },
    saveContainer : {
        alignItems:"center",
        flexDirection:"row",
        gap: 15,
    }
});
