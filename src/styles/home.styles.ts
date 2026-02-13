import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "../styles/colors";

export const homeStyles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1
    },

    header: {
        paddingTop: spacing.xl,
        paddingBottom: spacing.md,
        paddingHorizontal: spacing.md,
    },

    title: {
        ...typography.title,
        color: colors.text,
        textAlign: 'center'
    },

    subtitle: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textAlign: 'center',
        marginTop: spacing.xs
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: spacing.xl
    },

    emptyText: {
        ...typography.body,
        color: colors.textLight,
        textAlign: 'center'

    },

    gpsButton: {
        backgroundColor: colors.primary,
        marginHorizontal: spacing.md,
        marginTop: spacing.md,
        paddingVertical: spacing.sm + 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 48
    },

    gpsButtonText: {
        color: colors.background,
        fontSize: 16,
        fontWeight: 600
    }

})