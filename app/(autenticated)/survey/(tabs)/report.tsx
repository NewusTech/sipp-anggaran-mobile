import View from '@/components/ui/view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SectionTab from '@/components/survey/report/SectionTab';

export default function report() {
    const inset = useSafeAreaInsets();
    const router = useRouter();
    const { Colors } = useAppTheme();

    const [tabDetail, setTabDetail] = useState<
        | "Ruas Jalan"
        | "Ruas Jembatan"
        | "Ruas Drainase"
    >();

    useEffect(() => {
        setTabDetail("Ruas Jalan");
    }, []);
    return (
        <View
            style={{
                flex: 1,
                paddingTop: inset.top,
            }}
            backgroundColor='Background 100'
        >
            <ScrollView>
                <SectionTab />
            </ScrollView>
        </View>
    )
}