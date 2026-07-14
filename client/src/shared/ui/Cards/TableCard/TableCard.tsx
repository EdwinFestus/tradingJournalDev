import {
    Stack,
    Skeleton,
} from "@mui/material";

import AppCard from "../AppCard/AppCard";
import EmptyState from "../../EmptyState";

import {
    TableContainer
} from "./TableCard.styles";

import type {
    TableCardProps
} from "./TableCard.types";

export default function TableCard({

    title,

    subtitle,

    actions,

    search,

    filters,

    loading,

    empty,

    footer,

    children,

    ...props

}: TableCardProps){

return(

<AppCard

title={title}

subtitle={subtitle}

action={actions}

hover

fullHeight

{...props}

>

<Stack spacing={3}>

{

(search||filters)&&(

<Stack

direction={{

xs:"column",

md:"row"

}}

spacing={2}

justifyContent="space-between"

>

{search}

{filters}

</Stack>

)

}

{

loading?

(

<Skeleton

variant="rounded"

height={400}

/>

)

:

empty?

(

<EmptyState

title="No Records"

description="No data available."

/>

)

:

(

<TableContainer>

{children}

</TableContainer>

)

}

{footer}

</Stack>

</AppCard>

);

}