import Chip from "@mui/material/Chip";

interface Props {
    outcome: string | null;
}

export default function OutcomeChip({
    outcome,
}: Props) {

    if (!outcome) {

        return (
            <Chip
                label="OPEN"
                color="warning"
                size="small"
            />
        );

    }

    const map = {

        WIN: "success",

        LOSS: "error",

        BE: "info",

    } as const;

    return (

        <Chip

            label={outcome}

            color={map[outcome as keyof typeof map]}

            size="small"

        />

    );

}