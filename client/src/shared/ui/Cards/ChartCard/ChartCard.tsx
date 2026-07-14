import {
    Box,
    Skeleton
} from "@mui/material";

import AppCard from "../AppCard/AppCard";
import EmptyState from "../../EmptyState/EmptyState";

import { ChartContainer } from "./ChartCard.styles";
import type  { ChartCardProps } from "./ChartCard.types";

export default function ChartCard({

    title,

    subtitle,

    actions,

    loading,

    empty,

    emptyTitle = "No data available",

    emptyDescription = "Data will appear here once trades have been recorded.",

    children,

    height = 320,

    ...props

}: ChartCardProps){

return(

<AppCard

hover

fullHeight

title={title}

subtitle={subtitle}

action={actions}

{...props}

>

<ChartContainer

sx={{

height

}}

>

{

loading?

(

<Skeleton

variant="rounded"

height="100%"

/>

)

:

empty?

(

<EmptyState

title={emptyTitle}

description={emptyDescription}

/>

)

:

(

<Box

height="100%"

>

{children}

</Box>

)

}

</ChartContainer>

</AppCard>

);

}