import React from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ThemedText from "@/components/ThemedText";
import GlassCard from "@/components/ui/GlassCard";

// Simple Circle Progress using Views
const CircleProgress = ({ size, progress }: { size: number; progress: number }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);

  return (
    <View style={{ width: size, height: size, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />
      <View
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: strokeWidth,
          borderColor: "#00E0FF",
          transform: [{ rotate: `${-90 + progress * 360}deg` }],
        }}
      />
    </View>
  );
};

// Statistics card component
const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <GlassCard>
    <ThemedText semi style={styles.statValue}>{value}</ThemedText>
    <ThemedText style={styles.statLabel}>{label}</ThemedText>
  </GlassCard>
);

export default function HomeScreen() {
  const caloriesGoal = 2000;
  const caloriesConsumed = 1420;
  const progress = caloriesConsumed / caloriesGoal;

  return (
    <LinearGradient
      colors={["#010417", "#081224", "#0D1A2A"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Calories Circular Graph */}
        <View style={styles.graphContainer}>
          <CircleProgress size={180} progress={progress} />
          <View style={styles.graphLabel}>
            <ThemedText semi style={styles.graphValue}>{caloriesConsumed}</ThemedText>
            <ThemedText style={styles.graphUnit}>kcal</ThemedText>
          </View>
        </View>

        {/* Chat Shortcut */}
        <TouchableOpacity style={styles.chatCard}>
          <ThemedText semi style={styles.cardTitle}>Chat with your trainer</ThemedText>
        </TouchableOpacity>

        {/* Statistics Section */}
        <View style={styles.row}>
          <StatCard label="Steps" value={7340} />
          <StatCard label="Water" value="1.8 L" />
        </View>
        <View style={styles.row}>
          <StatCard label="Workouts" value={2} />
          <StatCard label="Sleep" value="7.5 h" />
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1, padding: 24 },
  container: { gap: 24, alignItems: "center" },

  graphContainer: { justifyContent: "center", alignItems: "center", marginBottom: 20 },
  graphLabel: { position: "absolute", justifyContent: "center", alignItems: "center" },
  graphValue: { fontSize: 28 },
  graphUnit: { fontSize: 16, opacity: 0.7 },

  chatCard: {
    width: "100%",
    padding: 16,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardTitle: { fontSize: 16 },

  row: { flexDirection: "row", justifyContent: "space-between", width: "100%" },
  statValue: { fontSize: 20 },
  statLabel: { fontSize: 14, opacity: 0.7, marginTop: 4 },
});
