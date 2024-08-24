import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from '@/components/ExpenseBlock';
import expensList from '@/data/expenses.json'

const Page = () => {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  return (
    <>
      <Stack.Screen options={{
        header: () => <Header />
      }} />
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.pieChartContainer}>
            <View style={styles.expensesInfoContainer}>
              <Text style={styles.expensesLabel}>
                My <Text style={styles.expensesHighlight}>Expenses</Text>
              </Text>
              <Text style={styles.expensesAmount}>
                $1,500.<Text style={styles.expensesCents}>00</Text>
              </Text>
            </View>
            <View style={styles.pieChartWrapper}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                focusOnPress
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <Text
                        style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          <ExpenseBlock expensList={expensList} />
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  pieChartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expensesInfoContainer: {
    justifyContent: "center",
    rowGap: 8,
  },
  expensesLabel: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "300",
  },
  expensesHighlight: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: "800",
  },
  expensesAmount: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: "800",
  },
  expensesCents: {
    fontSize: 17,
    color: Colors.white,
    fontWeight: "400",
  },
  pieChartWrapper: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
