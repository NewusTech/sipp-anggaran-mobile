import { IconCaretDown, IconPlus } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchBox } from '@/components/ui/searchBox';
import { Button } from "@/components/ui/button";
import { router } from 'expo-router';
import MasterTableDrainase from './tableMasterDrainase';

// Sample kecamatan data; replace with actual data source
const kecamatanOptions = [
    { title: "Kecamatan 1" },
    { title: "Kecamatan 2" },
    { title: "Kecamatan 3" },
    // Add more options as needed
];
const desaOptions = [
    { title: "Desa 1" },
    { title: "Desa 2" },
    { title: "Desa 3" },
    { title: "Desa 4" },
    // Add more options as needed
];

export default function TabMasterDrainase() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterKecamatan, setFilterKecamatan] = useState<string | number>("");
    const [filterDesa, setFilterDesa] = useState<string | number>("");
    const [search, setSearch] = useState<string>("");

    return (
        <View
            style={{
                gap: 10,
                marginTop: 20,
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
                    placeholder="Cari Drainase"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
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
                <SelectInput
                    data={desaOptions}
                    color="Primary Blue"
                    value={filterDesa}
                    onSelect={(data) => setFilterDesa(data.title)}
                    label="Filter Desa"
                    placeholder="Pilih Desa"
                    trailingIcon={<IconCaretDown />}
                />
                <Button
                    color='Primary Blue'
                    style={{
                        marginTop: 10,
                    }}
                    onPress={() => router.push("(autenticated)/survey/master/drainase/add")}
                >
                    <IconPlus color='Background 100' />
                    <Typography color='Background 100'>Tambah</Typography>
                </Button>
            </View>
            {/* card */}
            <View
                style={{
                    paddingHorizontal: 20,
                    gap: 5,
                }}
            >
                <MasterTableDrainase />
            </View>
            {/* card */}
        </View>
    );
}
