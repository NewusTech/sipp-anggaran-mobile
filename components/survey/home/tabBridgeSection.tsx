import { IconCaretDown } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
import { useAppTheme } from '@/context';
import { getLastYears } from '@/helper';
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SectionCardBridge from './SectionCardBridge';
import SectionMapBridge from './SectionBridgeMap';
import SectionTableBridge from './SectionTableBridge';

export default function TabSectionBridege() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterYear, setFilterYear] = useState<number | string>("");

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
                    gap: 5,
                    backgroundColor: Colors["Background 100"],
                }}
            >
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
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 10,
                        gap: 0,
                        justifyContent: "space-between"
                    }}
                >
                    <Typography
                        style={{
                            borderWidth: 1,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 10,
                            padding: 10,
                            fontSize: 14,
                            width: "48%",
                            textAlign: 'center'
                        }}>
                        Provinsi Lampung
                    </Typography>
                    <Typography
                        style={{
                            borderWidth: 1,
                            borderColor: Colors["Primary Blue"],
                            borderRadius: 10,
                            padding: 10,
                            textAlign: 'center',
                            fontSize: 14,
                            width: "50%"
                        }}>
                        Tulang Bawang Barat
                    </Typography>
                </View>
            </View>
            {/* card */}
            <View
                style={{
                    paddingHorizontal: 20,
                    gap: 5,
                }}
            >
                <SectionCardBridge filterYear={filterYear.toString()} />
                <SectionMapBridge />
                <SectionTableBridge filterYear={filterYear.toString()} />
            </View>
            {/* card */}
        </View>
    )
}