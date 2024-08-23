import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.container}>
                <View style={styles.containerHello}>
                    <Image style={styles.profileImage} source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} />
                    <View style={styles.containerHelloBudget}>
                        <Text style={styles.containerHelloName} >Hi, Asrael</Text>
                        <Text style={styles.containerHelloNameBold} >Your <Text style={{ fontWeight: "bold" }} >Budget</Text></Text>
                    </View>
                </View>
                <Pressable style={styles.pressableTransactions} onPress={() => { }} >
                    <Text style={styles.textTransactions} >Transactions</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Header


const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    textTransactions: {
        color: Colors.white
    },
    pressableTransactions: {
        borderColor: "#666",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10
    },
    containerHello: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
    },
    containerHelloName: {
        color: Colors.white,
        fontSize: 12
    },
    containerHelloBudget: {
        justifyContent: "center",
        rowGap: 5
    },
    containerHelloNameBold: {
        color: Colors.white,
        fontSize: 14,
    }
})