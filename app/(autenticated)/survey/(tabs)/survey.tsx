import SectionTab from '@/components/survey/survey/SectionTab';
import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
import React from 'react'
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function survey() {
    const inset = useSafeAreaInsets();

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