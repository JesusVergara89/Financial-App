import Colors from '@/constants/Colors';
import { AirbnbIcon, AmazonIcon, FigmaIcon, NetflixIcon, ShoopingCartIcon, SpotifyIcon, } from '@/constants/Icons';
import { SpendingType } from '@/types';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

interface SpendingProps  {
    id: string;
    name: string;
    amount: string;
    date: string;
}

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {

    const RenderItem = ({ item }: { item: SpendingProps }) => {
        const icon = (item: SpendingType) => {
            if (item.name === 'AirBnB Rent') {
                return <AirbnbIcon width={22} height={22} color={Colors.white} />
            } else if (item.name === 'Netflix') {
                return <NetflixIcon width={22} height={22} color={Colors.white} />
            } else if (item.name === 'Spotify') {
                return <SpotifyIcon width={22} height={22} color={Colors.white} />
            } else if (item.name === 'Amazon') {
                return <AmazonIcon width={22} height={22} color={Colors.white} />
            } else if (item.name === 'Figma') {
                return <FigmaIcon width={22} height={22} color={Colors.white} />
            } else if (item.name === 'Online Shopping') {
                return <ShoopingCartIcon width={22} height={22} color={Colors.white} />
            }
        }
        return (
            <View style={styles.containerCard} >
                <View style={styles.containerCardIcon} >

                    <View style={styles.incomeContainerSymbolBG} >
                        <View>{icon(item)}</View>
                    </View>

                    <View style={styles.incomeContainerName}>
                        <Text style={styles.incomeContainerNameText1} >{item.name}</Text>
                        <Text style={styles.incomeContainerNameText2} >{item.date}</Text>
                    </View>

                </View>
                <Text style={styles.incomeContainerAmount} >${item.amount}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>July<Text style={styles.textTitleBold} > Spending</Text></Text>
            {
                spendingList.map((item, index)=>(
                    <RenderItem item={item} key={index} />
                ))
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20,
    },
    textTitle: {
        fontSize: 17,
        color: Colors.white,
        marginBottom: 20
    },
    textTitleBold: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: "700",
        marginBottom: 20
    },
    containerCard: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: Colors.black
    },
    containerCardIcon: {
        flexDirection: "row",
        columnGap: 9,
        padding: 5,
    },
    incomeContainerName: {
        justifyContent: "center",
        rowGap: 5,
    },
    incomeContainerNameText1: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: "700",
    },
    incomeContainerNameText2: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: "500",
    },
    incomeContainerAmount: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "700",
    },
    incomeContainerSymbolBG: {
        borderWidth: 1,
        borderColor: "#666",
        padding: 7,
        backgroundColor: Colors.black,
        borderRadius: 50,
    }
})

export default SpendingBlock;
