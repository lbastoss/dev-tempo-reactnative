import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";



export const weatherCardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: spacing.lg,
        marginHorizontal: spacing.md,
        marginVertical: spacing.sm,
        alignItems: 'center',

    },

    cityName: {
        ...typography.title,
        color: colors.text,
        marginBottom: spacing.xs
    },

    weatherIcon: {
        width: 100,
        height: 100,
        marginBottom: spacing.sm
    },

    temperature: {
        fontSize: 64,
        fontWeight: 'bold',
        color: colors.primary,
        marginVertical: spacing.md,
    },

    description: {
        ...typography.subtitle,
        color: colors.textSecondary,
        textTransform: 'capitalize',
        marginBottom: spacing.md
    },

    detailsContainer: {
        flexDirection: 'row',
        marginTop: spacing.md,
        gap: spacing.lg

    },

    detailItems: {
        alignItems: 'center',
    },

    detailLabel: {
        ...typography.caption,
        color: colors.textLight,
        marginBottom: spacing.xs
    },

    detailValue: {
        ...typography.body,
        color: colors.text,

    }


})
