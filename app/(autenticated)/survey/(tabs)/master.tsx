import View from '@/components/ui/view'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from "@/context";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SectionTab from '@/components/survey/master/SectionTab';

export default function master() {
    const inset = useSafeAreaInsets();
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