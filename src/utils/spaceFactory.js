export const spaceFactory = (prop, theme) => ({
    tiny: { [prop]: theme.spacing.tiny },
    small: { [prop]: theme.spacing.small },
    medium: { [prop]: theme.spacing.medium },
    large: { [prop]: theme.spacing.large },
    xLrg: { [prop]: theme.spacing.xLarge },
    xxLrg: { [prop]: theme.spacing.xxLarge }
})