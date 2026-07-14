import {
    Box,
    Skeleton,
    Stack,
    Typography,
}  from "@mui/material";

import type { AppCardProps } from "./AppCard.types";
import  { StyledCard } from "./AppCard.styles";

export default function AppCard({
    title,
    subtitle,
    action,
    footer,
    children,
    loading = false,
    hover = false,
    fullHeight = false,
    ...props
}: AppCardProps) {
    return (
        <StyledCard 
            hover={hover}
            fullHeight = {fullHeight}
            elevation = {0}
            {...props}
        > 
            {(title || subtitle || action) && (
                <Stack 
                    direction="row"
                    justifyContent = "space-between"
                    alignItems = "flex-start"
                    mb={3}
                >
                    <Box>
                        {title && (
                            <Typography variant="h6">
                                {title}
                            </Typography>
                        )}

                        {subtitle && (
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {subtitle}
                            </Typography>
                        )}
                        
                    </Box>

                    {action}
                </Stack> 
            )}

            <Box flex={3}>
                {loading ? (
                    <> 
                        <Skeleton height={40} />
                        <Skeleton />
                        <Skeleton />
                    </>
                ) : (
                    children
                )}
            </Box>

            {footer && <Box mt={3}>{footer}</Box> }
        </StyledCard>
    );
}
