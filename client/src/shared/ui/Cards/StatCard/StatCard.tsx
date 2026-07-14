import {

Stack,

Typography,

Chip,

Skeleton,

Box

} from "@mui/material";

import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded";

import TrendingDownRounded from "@mui/icons-material/TrendingDownRounded";

import TrendingFlatRounded from "@mui/icons-material/TrendingFlatRounded";

import {

StyledStatCard,

IconWrapper

} from "./StatCard.styles";

import type {

StatCardProps

} from "./StatCard.types";

export default function StatCard({

title,

value,

subtitle,

icon,

trend="neutral",

trendValue,

loading,

footer,

...props

}:StatCardProps){

const TrendIcon={

up:<TrendingUpRounded fontSize="small"/>,

down:<TrendingDownRounded fontSize="small"/>,

neutral:<TrendingFlatRounded fontSize="small"/>

}[trend];

return(

<StyledStatCard

hover

fullHeight

{...props}

>

<Stack spacing={3}>

<Stack

direction="row"

justifyContent="space-between"

alignItems="center"

>

<Box>

<Typography

variant="body2"

color="text.secondary"

>

{title}

</Typography>

</Box>

{icon &&

<IconWrapper>

{icon}

</IconWrapper>

}

</Stack>

{

loading?

<Skeleton height={50}/>

:

<Typography

variant="h3"

fontWeight={800}

>

{value}

</Typography>

}

<Stack

direction="row"

spacing={1}

alignItems="center"

>

<Chip

icon={TrendIcon}

label={trendValue}

size="small"

color={

trend==="up"

?

"success"

:

trend==="down"

?

"error"

:

"default"

}

/>

{subtitle&&(

<Typography

variant="caption"

color="text.secondary"

>

{subtitle}

</Typography>

)}

</Stack>

{footer}

</Stack>

</StyledStatCard>

);

}