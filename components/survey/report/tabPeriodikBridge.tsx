import { IconCaretDown } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBox } from '@/components/ui/searchBox';
import PeriodikTableBridge from './tablePeriodikBridge';

// Sample kecamatan data; replace with actual data source
const kecamatanOptions = [
    { title: "Kecamatan 1" },
    { title: "Kecamatan 2" },
    { title: "Kecamatan 3" },
    // Add more options as needed
];
const monthOptions = [
    { title: "Januari" },
    { title: "Februari" },
    { title: "Maret" },
    { title: "April" },
    // Add more options as needed
];

export default function TabPeriodikBridge() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterKecamatan, setFilterKecamatan] = useState<string | number>("");
    const [filterMonth, setFilterMonth] = useState<string | number>("");
    const [search, setSearch] = useState<string>("");

    return (
        <View
            style={{
                gap: 10,
            }}
        >
            <View
                style={{
                    paddingBottom: 10,
                    paddingHorizontal: 20,
                    gap: 10,
                    backgroundColor: Colors["Background 100"],
                }}
            >
                <SearchBox
                    placeholder="Cari Ruas Jembatan"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
                />
                <SelectInput
                    data={monthOptions}
                    color="Primary Blue"
                    value={filterMonth}
                    onSelect={(data) => setFilterMonth(data.title)}
                    label="Filter Bulan"
                    placeholder="Pilih Bulan"
                    trailingIcon={<IconCaretDown />}
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
                <PeriodikTableBridge />
            </View>
            {/* card */}
        </View>
    );
}
