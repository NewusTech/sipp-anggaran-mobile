import View from '@/components/ui/view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import SectionTab from '@/components/survey/home/SectionTab';
import { ScrollView } from "react-native";

export default function home() {
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
        >
            <ScrollView>
                <SectionTab />
            </ScrollView>
        </View>
    )
}