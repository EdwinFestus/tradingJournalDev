// import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    // Alert,
    Grid
} from "@mui/material";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import { useTradeStore } from "@/features/trade/store/tradeStore";

import {
    tradeSchema,
    type TradeFormData,
} from "@/features/trade/validation/tradeSchema";

import {
    NotesSection,
    PositionSection,
    PsychologySection,
    SubmitSection,
    TradeInformationSection,
    TradeSetupSection,
} from "./sections";

import { defaultTradeValues } from "../../validation/tradeDefaualts";

interface Props {
    onSuccess: () => void;
}

export default function TradeForm({
    onSuccess,
}: Props) {
    const createTrade = useTradeStore(
        (state) => state.createTrade
    );



    const methods =
        useForm<TradeFormData>({
            resolver:
                zodResolver(tradeSchema),

            mode: "onBlur",

            defaultValues: defaultTradeValues,
        });

    const {
        handleSubmit,
        reset,
        formState: {
            isSubmitting,
        },
    } = methods;

    const onSubmit = async (
        data: TradeFormData
    ) => {

        try {
            await createTrade(data);

            reset();

            onSuccess();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Grid size={12}>
                    <TradeInformationSection />
                </Grid>

                <Grid size={12}>
                    <TradeSetupSection />
                </Grid>

                <Grid size={12}>
                    <PositionSection />
                </Grid>

                <Grid size={12}>
                    <PsychologySection />
                </Grid>

                <Grid size={12}>
                    <NotesSection />
                </Grid>

                <Grid size={12}>
                <SubmitSection
                        loading={isSubmitting}
                        onCancel={onSuccess}
                    />
                </Grid>
            </form>
        </FormProvider>
    );
}