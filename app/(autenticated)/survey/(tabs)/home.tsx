import { Typography } from '@/components/ui/typography'
import View from '@/components/ui/view'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function home() {
    const inset = useSafeAreaInsets();
    return (
        <View
            style={{
                flex: 1,
                paddingTop: inset.top,
            }}
            backgroundColor="Background 100"
        >
            <Typography>Home dfdftyty er</Typography>
        </View>
    )
}