import {

Stack,

Typography,

Button,

Chip

} from "@mui/material";

import LightbulbRounded from "@mui/icons-material/LightbulbRounded";

import AppCard from "../AppCard/AppCard";

import { IconContainer } from "./InsightCard.styles";

import type { InsightCardProps } from "./InsightCard.types";

export default function InsightCard({

title,

message,

recommendation,

severity="info",

icon,

actionLabel,

onAction,

footer,

...props

}:InsightCardProps){

return(

<AppCard

hover

fullHeight

{...props}

>

<Stack spacing={3}>

<IconContainer>

{icon ?? <LightbulbRounded/>}

</IconContainer>

<Stack spacing={1}>

<Typography variant="h6">

{title}

</Typography>

<Typography

variant="body2"

color="text.secondary"

>

{message}

</Typography>

</Stack>

{

recommendation && (

<Chip

label={recommendation}

color={

severity==="success"

?

"success"

:

severity==="warning"

?

"warning"

:

severity==="error"

?

"error"

:

"primary"

}

/>

)

}

{

actionLabel && (

<Button

variant="contained"

onClick={onAction}

>

{actionLabel}

</Button>

)

}

{footer}

</Stack>

</AppCard>

);

}