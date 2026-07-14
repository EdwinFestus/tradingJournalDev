import {

Stack,

Typography,

Avatar,

Box,

Chip

} from "@mui/material";

import AppCard from "../AppCard/AppCard";

import { StyledProgress } from "./GoalCard.styles";

import type { GoalCardProps } from "./GoalCard.types";

export default function GoalCard({

title,

current,

target,

unit="",

description,

icon,

footer,

loading,

...props

}:GoalCardProps){

const percentage=Math.min(

(current/target)*100,

100

);

return(

<AppCard

hover

fullHeight

loading={loading}

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

<Avatar>

{icon}

</Avatar>

}

</Stack>

<Typography

variant="h4"

fontWeight={800}

>

{current}{unit}

</Typography>

<StyledProgress

variant="determinate"

value={percentage}

/>

<Stack

direction="row"

justifyContent="space-between"

>

<Typography

variant="caption"

color="text.secondary"

>

Target

</Typography>

<Typography

variant="caption"

fontWeight={700}

>

{target}{unit}

</Typography>

</Stack>

<Chip

label={`${percentage.toFixed(0)}% Complete`}

color={

percentage>=100

?

"success"

:

"primary"

}

/>

{

description&&(

<Typography

variant="body2"

color="text.secondary"

>

{description}

</Typography>

)

}

{footer}

</Stack>

</AppCard>

);

}