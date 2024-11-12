import { IconCalender, IconCaretDown, IconPlus } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SectionTableSurvey from '../home/SectionTable';
import { DateInput } from '@/components/ui/inputDate';
import { Dimensions } from 'react-native';
import { SearchBox } from '@/components/ui/searchBox';
import { Button } from "@/components/ui/button";
import IconFile from '@/components/icons/IconFile';
import { router } from 'expo-router';
import SectionTableRoad from '../survey/tableRoadSurvey';
import VerificationTableRoad from './tableRoadVerification';
import VerificationTableBridge from './tableVerificationBridge';

// Sample kecamatan data; replace with actual data source
const kecamatanOptions = [
    { title: "Kecamatan 1" },
    { title: "Kecamatan 2" },
    { title: "Kecamatan 3" },
    // Add more options as needed
];

export default function TabVerificationBridge() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterKecamatan, setFilterKecamatan] = useState<string | number>("");
    const [filterDateStart, setFilterDateStart] = useState<Date>(new Date());
    const [search, setSearch] = useState<string>("");

    return (
        <View
            style={{
                gap: 10,
            }}
        >
            <View
                style={{
                    padding: 20,
                    paddingHorizontal: 20,
                    gap: 5,
                    backgroundColor: Colors["Background 100"],
                }}
            >
                <SearchBox
                    placeholder="Cari Ruas Jalan"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
                />
                <DateInput
                    withBorder
                    style={{
                        width: Dimensions.get("window").width - 40,
                        marginBottom: 7,
                        marginTop: 7,
                    }}
                    color="Primary Blue"
                    label="Filter Tanggal"
                    trailingIcon={
                        <View style={{ marginLeft: "auto" }}>
                            <IconCalender width={21} height={21} />
                        </View>
                    }
                    onChange={(date) => setFilterDateStart(date || new Date())}
                    value={filterDateStart}
                />
                <SelectInput
                    data={kecamatanOptions}
                    color="Primary Blue"
                    value={filterKecamatan}
                    onSelect={(data) => setFilterKecamatan(data.title)}
                    label="Filter Kecamatan"
                    placeholder="Pilih Kecamatan"
                    trailingIcon={<IconCaretDown />}
                />
            </View>
            {/* card */}
            <View
                style={{
                    paddingHorizontal: 20,
                    gap: 5,
                }}
            >
                <VerificationTableBridge />
            </View>
            {/* card */}
        </View>
    );
}
