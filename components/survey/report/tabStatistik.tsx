import { IconCaretDown } from '@/components/icons';
import { SelectInput } from '@/components/ui/selectInput';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getLastYears } from '@/helper';
import TypeRoadChart from './statistik/typeRoadChart';
import TypeRoadChartCondition from './statistik/typeRoadCondition';
import Separator from '@/components/ui/separator';
import BridgeChartCondition from './statistik/BridgeConditionChart';
import DrainaseChartCondition from './statistik/DrainaseConditionChart';

export default function TabStatistik() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
    const [filterYear, setFilterYear] = useState<number | string>("");

    return (
        <View
            style={{
                // gap: 10,
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
            </View>
            {/* jenis perkerasan jalan */}
            <TypeRoadChart />
            <Separator />
            <TypeRoadChartCondition />
            <Separator />
            <BridgeChartCondition />
            <Separator />
            <DrainaseChartCondition />
            {/* jenis perkerasan jalan */}
        </View>
    );
}
