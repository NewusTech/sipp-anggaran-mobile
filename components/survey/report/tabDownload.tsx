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
import { getLastYears } from '@/helper';

// Sample kecamatan data; replace with actual data source
const kecamatanOptions = [
    { title: "Kecamatan 1" },
    { title: "Kecamatan 2" },
    { title: "Kecamatan 3" },
    // Add more options as needed
];

export default function TabDownload() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterKecamatan, setFilterKecamatan] = useState<string | number>("");
    const [filterDateStart, setFilterDateStart] = useState<Date>(new Date());
    const [search, setSearch] = useState<string>("");
    const [filterYear, setFilterYear] = useState<number | string>("");

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
                    backgroundColor: "#F2F2F2",
                    height: "100%"
                }}
            >
                <View
                    style={{
                        borderRadius: 15,
                        borderWidth: 1,
                        marginTop: 20,
                        backgroundColor: Colors["Background 100"],
                        borderColor: Colors["Line 100"],
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        gap: 15,
                    }}
                >
                    <Typography
                    fontSize={16}
                    >
                        Export Data Ruas Jalan
                    </Typography>
                    <SelectInput
                        data={getLastYears(24).map((d) => {
                            return {
                                title: d,
                            };
                        })}
                        color='Primary Blue'
                        value={filterYear}
                        onSelect={(data) => setFilterYear(data.title)}
                        label="Filter Tahun"
                        placeholder="Pilih Tahun"
                        trailingIcon={<IconCaretDown />}
                    />
                    <Button
                    color='Primary Blue'
                    style={{
                        marginTop: 10,
                    }}
                    >
                        <Typography
                        color='Background 100'
                        >
                            Export
                        </Typography>
                    </Button>
                </View>
                {/*  */}
                <View
                    style={{
                        borderRadius: 15,
                        borderWidth: 1,
                        marginTop: 20,
                        backgroundColor: Colors["Background 100"],
                        borderColor: Colors["Line 100"],
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        gap: 15,
                    }}
                >
                    <Typography
                    fontSize={16}
                    >
                        Export Data Ruas Jembatan
                    </Typography>
                    <SelectInput
                        data={getLastYears(24).map((d) => {
                            return {
                                title: d,
                            };
                        })}
                        color='Primary Blue'
                        value={filterYear}
                        onSelect={(data) => setFilterYear(data.title)}
                        label="Filter Tahun"
                        placeholder="Pilih Tahun"
                        trailingIcon={<IconCaretDown />}
                    />
                    <Button
                    color='Primary Blue'
                    style={{
                        marginTop: 10,
                    }}
                    >
                        <Typography
                        color='Background 100'
                        >
                            Export
                        </Typography>
                    </Button>
                </View>
            </View>
        </View>
    );
}
