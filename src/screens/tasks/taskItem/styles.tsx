import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white', // Set your desired background color
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      taskItem: {
        // Adjust styles for the task item container
        padding: 16,
      },
      actionButton: {
        // Update styles for action buttons
        backgroundColor: 'red', // Set your desired background color
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
      },
      actionText: {
        color: 'white', // Set your desired text color
        fontWeight: 'bold',
      },
      contentContainer: {
        // Add or update styles for the content container
        marginTop: 16,
      },
})