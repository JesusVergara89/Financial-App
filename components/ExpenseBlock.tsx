import { FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ExpenseType } from '@/types'
import Colors from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'

const ExpenseBlock = ({ expensList }: { expensList: ExpenseType[] }) => {


    const renderItem: ListRenderItem<Partial<ExpenseType>> = ({ item, index }) => {
        //console.log(item.amount?.slice(0, -2));

        if (index === 0) {
            return (
                <Pressable>
                    <View style={styles.addItem}>
                        <Feather name='plus' size={22} color={'#ccc'} />
                    </View>
                </Pressable>
            )
        }

        return (
            <View style={[styles.containerExpens,
            {
                backgroundColor:
                    item.name === "Food"
                        ? Colors.blue
                        : item.name === 'Saving'
                            ? Colors.white
                            : Colors.tintColor
            }]}>
                <Text style={[styles.expensName, {
                    color:
                        item.name === "Food"
                            ? Colors.black
                            : item.name === 'Saving'
                                ? Colors.black
                                : Colors.white
                }]} >{item.name}</Text>
                <Text style={[styles.expensAmount, {
                    color:
                        item.name === "Food"
                            ? Colors.black
                            : item.name === 'Saving'
                                ? Colors.black
                                : Colors.white
                }]} >${item.amount?.slice(0, -2)}<Text style={[styles.expensAmountInner, {
                    color:
                        item.name === "Food"
                            ? Colors.black
                            : item.name === 'Saving'
                                ? Colors.black
                                : Colors.white
                }]} >{item.amount?.slice(-2)}</Text> </Text>
                <View style={styles.expensPercentageContainer} >
                    <Text style={[styles.expensPercentage, {
                        color:
                            item.name === "Food"
                                ? Colors.black
                                : item.name === 'Saving'
                                    ? Colors.black
                                    : Colors.white
                    }]} >{item.percentage}%</Text>
                </View>
            </View>
        )
    }

    const static_data = [{ name: "Add item" }]

    return (
        <View style={{ paddingVertical: 20 }}>
            <FlatList
                data={static_data.concat(expensList)}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
            />
        </View>
    )
}

export default ExpenseBlock

const styles = StyleSheet.create({
    containerExpens: {
        backgroundColor: Colors.tintColor,
        width: 100,
        padding: 15,
        borderRadius: 15,
        gap: 8,
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    expensName: {
        fontSize: 14,
    },
    expensAmount: {
        fontSize: 16,
        fontWeight: "600",
    },
    expensAmountInner: {
        fontSize: 12,
        fontWeight: "200",
    },
    expensPercentageContainer: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        paddingHorizontal: 5,
        justifyContent: "center",
        paddingVertical: 3,
        borderRadius: 10,
    },
    expensPercentage: {
        fontSize: 16,
        fontWeight: "600",
    },
    addItem: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#666",
        borderStyle: "dashed",
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
})