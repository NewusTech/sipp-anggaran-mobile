import { IconCaretDown, IconPlus } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
import { useAppTheme } from '@/context';
import { getLastYears } from '@/helper';
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/ui/button';
import { SearchBox } from '@/components/ui/searchBox';
import { router } from 'expo-router';
import SurveyTableDrainase from '../survey/tableDrainaseSurvey';
import VerificationTableDrainase from './tableDrainaseVerification';


export default function TabVerificationDrainase() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterYear, setFilterYear] = useState<number | string>("");
    const [search, setSearch] = useState<string>("");


    return (
        <View
            style={{
                // paddingHorizontal: 20,
                gap: 10,
                // backgroundColor: Colors["Error 200"],
            }}
        >
            <View
                style={{
                    padding: 20,
                    paddingHorizontal: 20,
                    gap: 15,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: Colors["Background 100"],
                }}
            >
                <SearchBox
                    placeholder="Cari Desa"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            {/* card */}
            <View
                style={{
                    paddingHorizontal: 20,
                    gap: 5,
                }}
            >
                <VerificationTableDrainase />
            </View>
            {/* card */}
        </View>
    )
}