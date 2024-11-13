import { Checkbox } from '@/components/ui/checkBox';
import Separator from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import { useGetStatistikDrainase } from '@/services/survey';
import React from 'react';
import { PieChart } from "react-native-gifted-charts";

interface SectionCardSurveyProps {
    filterYear?: string | undefined;
}

export default function DrainaseChartCondition({ filterYear }: SectionCardSurveyProps) {
    const { Colors } = useAppTheme();
    // Fetch data from the API
    const { data, isLoading, error } = useGetStatistikDrainase(filterYear ? "year=" + filterYear : "");

    // Fallback to default data for chart if data is not available yet
    const pieData = data ? [
        { value: parseFloat(data?.data?.baik.toString()), color: '#22C55E', text: `${(parseFloat(data?.data?.baik.toString()) || 0).toFixed(1)}` },
        { value: parseFloat(data?.data?.sedang.toString()), color: '#C084FC', text: `${(parseFloat(data?.data?.sedang.toString()) || 0).toFixed(1)}` },
        { value: parseFloat(data?.data?.rusak.toString()), color: '#2563EB', text: `${(parseFloat(data?.data?.rusak.toString()) || 0).toFixed(1)}` },
        { value: parseFloat(data?.data?.tanah.toString()), color: '#FB923C', text: `${(parseFloat(data?.data?.tanah.toString()) || 0).toFixed(1)}` },
    ] : [];
    return (
        <View
            style={{
                paddingHorizontal: 20,
                backgroundColor: "#F2F2F2",
                paddingVertical: 20,

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
                    Kondisi Drainase
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
                    {['Baik', 'Sedang', 'Rusak', 'Tanah'].map((text, index) => (
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
            {/*  */}
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
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Baik
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {data?.data?.baik ?? '0'}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Sedang
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {data?.data?.sedang ?? '0'}
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
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Rusak
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {data?.data?.rusak ?? '0'}
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Tanah
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        {data?.data?.tanah ?? '0'}
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    );
}
