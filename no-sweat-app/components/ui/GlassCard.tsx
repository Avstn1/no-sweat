import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { BlurView } from "expo-blur";

interface GlassCardProps {
  children: ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <BlurView intensity={60} tint="dark" style={styles.card}>
      <View style={styles.content}>{children}</View>
    </BlurView>
  );
};

interface Styles {
  card: ViewStyle;
  content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    width: "48%",
    minHeight: 130,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 16,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});

export default GlassCard;
