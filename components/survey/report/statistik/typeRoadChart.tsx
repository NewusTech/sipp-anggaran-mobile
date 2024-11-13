import { Checkbox } from '@/components/ui/checkBox';
import Separator from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import { useGetStatistikPerkerasan } from '@/services/survey';
import React from 'react';
import { PieChart } from "react-native-gifted-charts";

interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}
export default function TypeRoadChart({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();

    // Fetch data from the API
    const { data, isLoading, error } = useGetStatistikPerkerasan(filterYear ? "year=" + filterYear : "");

    // Fallback to default data for chart if data is not available yet
    const pieData = data ? [
        { value: parseFloat(data?.data?.hotmix_count), color: '#22C55E', text: `${(parseFloat(data?.data?.hotmix_count) || 0).toFixed(1)}` },
        { value: parseFloat(data?.data?.rigit_count), color: '#C084FC', text: `${(parseFloat(data?.data?.rigit_count) || 0).toFixed(1)}` },
        { value: parseFloat(data?.data?.lapen_count), color: '#2563EB', text: `${(parseFloat(data?.data?.lapen_count) || 0).toFixed(1)}` },
        { value: data?.data?.telford_count ? parseFloat(data?.data?.telford_count) : 0, color: '#FB923C', text: `${data?.data?.telford_count ?? 0}` },
        { value: data?.data?.tanah_count ? parseFloat(data?.data?.tanah_count) : 0, color: '#F71317', text: `${data?.data?.tanah_count ?? 0}` },
    ] : [];

    return (
        <View
            style={{
                paddingHorizontal: 20,
                marginTop: 10,
                paddingVertical: 20,
                backgroundColor: "#F2F2F2",
            }}
        >
            <View
                style={{
                    backgroundColor: Colors["Background 100"],
                    padding: 20,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: Colors["Line 100"],
                    display: "flex",
                    marginTop: 10,
                }}
            >
                <Typography
                    style={{
                        fontSize: 16,
                        fontFamily: "Poppins-Medium",
                    }}
                >
                    Jenis Perkerasan Jalan
                </Typography>
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20,
                    }}
                >
                    {isLoading ? (
                        <Typography>Loading...</Typography>
                    ) : error ? (
                        <Typography>Error loading data</Typography>
                    ) : (
                        <PieChart
                            donut
                            showText
                            textColor="black"
                            radius={140}
                            textSize={10}
                            showTextBackground
                            textBackgroundRadius={25}
                            data={pieData}
                        />
                    )}
                </View>
                <View
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        flexDirection: "row",
                        gap: 10,
                        marginTop: 20,
                    }}
                >
                    {['Hotmix', 'Rigit', 'Lapen', 'Telford', 'Tanah'].map((text, index) => (
                        <Typography
                            key={index}
                            style={{
                                textAlign: "center",
                                padding: 10,
                                borderRadius: 10,
                                color: Colors["Background 100"],
                                backgroundColor: pieData[index]?.color,
                            }}
                        >
                            {text}
                        </Typography>
                    ))}
                </View>
            </View>
            {/* Statistics Section */}
            <View
                style={{
                    borderRadius: 15,
                    borderWidth: 1,
                    marginTop: 20,
                    backgroundColor: Colors["Background 100"],
                    borderColor: Colors["Line 100"],
                    paddingVertical: 15,
                    gap: 15,
                }}
            >
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Hotmix
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.hotmix_count ?? '0'} KM
                        </Typography>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Rigit
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.rigit_count ?? '0'} KM
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Lapen
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.lapen_count ?? '0'} KM
                        </Typography>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Telford
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.telford_count ?? '0'} KM
                        </Typography>
                    </View>
                </View>
                <Separator />
                <View
                    style={{
                        marginHorizontal: 20,
                        display: "flex",
                        flexDirection: "row",
                        gap: 5,
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Tanah
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.tanah_count ?? 0} KM
                        </Typography>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Total
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            {data?.data?.total ?? 0} KM
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    );
}
