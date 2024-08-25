import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { IncomeType } from '@/types'
import { DollarIcon, WalletAddMoneyIcon, WalletCardIcon } from '@/constants/Icons'

const IncomeBlock = ({ incomeListData }: { incomeListData: IncomeType[] }) => {

    const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
        const newAmount = item.amount.split('.')
        return (
            <View style={styles.incomeContainer}>
                <View style={styles.incomeContainerSymbol} >
                    <View style={styles.incomeContainerSymbolBG} >
                        {item.name === 'Salary'
                            ?
                            <DollarIcon width={22} height={22} color={Colors.white} />
                            :
                            item.name === 'Freelancing'
                                ?
                                <WalletAddMoneyIcon width={22} height={22} color={Colors.white} />
                                :
                                <WalletCardIcon width={22} height={22} color={Colors.white} />}
                    </View>
                    <Text style={styles.incomeContainerThreeDots} >...</Text>
                </View>
                <Text style={styles.incomeContainerName} >{item.name}</Text>
                <Text style={styles.incomeContainerAmount1} >${newAmount[0]}.<Text style={styles.incomeContainerAmount2} >{newAmount[1]}</Text></Text>
            </View>
        )
    }

    return (
        <View>
            <Text style={styles.textIncomeTittle}>My <Text style={styles.textIncomeTittleBold} >income</Text></Text>
            <FlatList
                data={incomeListData}
                renderItem={renderItem}
                horizontal
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
            />
        </View>
    )
}

export default IncomeBlock

const styles = StyleSheet.create({
    textIncomeTittle: {
        fontSize: 16,
        color: Colors.white,
        marginBottom: 20,
    },
    textIncomeTittleBold: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "700",
    },
    incomeContainer: {
        backgroundColor: Colors.grey,
        padding: 20,
        borderRadius: 20,
        width: 150,
        gap: 10,
    },
    incomeContainerName: {
        fontSize: 16,
        fontWeight: "500",
        color: Colors.white
    },
    incomeContainerSymbol: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    incomeContainerSymbolBG: {
        borderWidth: 1,
        borderColor: "#666",
        padding: 7,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 50,
    },
    incomeContainerThreeDots: {
        fontSize: 20,
        color: Colors.white,
        textAlign: "center",
        fontWeight: "800",
    },
    incomeContainerAmount1: {
        fontSize: 22,
        color: Colors.white,
        fontWeight: "600",
    },
    incomeContainerAmount2: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: "400",
    }
})