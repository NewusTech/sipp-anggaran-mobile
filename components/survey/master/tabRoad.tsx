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
import MasterTableRoad from './tableMasterRoad';


export default function TabMasterRoad() {
    const inset = useSafeAreaInsets();
    const { Colors } = useAppTheme();
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
                    placeholder="Cari Ruas Jalan"
                    width={"100%"}
                    value={search}
                    onChangeText={setSearch}
                />
                <Button
                    color='Primary Blue'
                    style={{
                        marginTop: 10,
                    }}
                    onPress={() => router.push("(autenticated)/survey/master/road/add")}
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
                <MasterTableRoad />
            </View>
            {/* card */}
        </View>
    );
}
