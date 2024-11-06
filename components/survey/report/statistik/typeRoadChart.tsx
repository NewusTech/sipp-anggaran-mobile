import { Checkbox } from '@/components/ui/checkBox';
import Separator from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import View from '@/components/ui/view';
import { useAppTheme } from '@/context';
import React from 'react';
import { PieChart } from "react-native-gifted-charts";

export default function TypeRoadChart() {
    const { Colors } = useAppTheme();
    const pieData = [
        { value: 54, color: '#22C55E', text: '54%' },
        { value: 40, color: '#C084FC', text: '30%' },
        { value: 20, color: '#2563EB', text: '26%' },
        { value: 15, color: '#FB923C', text: '15%' }, // Warna baru
        { value: 10, color: '#F71317', text: '10%' }, // Warna baru
    ];
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
                    <PieChart
                        donut
                        showText
                        textColor="black"
                        radius={140}
                        textSize={12}
                        showTextBackground
                        textBackgroundRadius={23}
                        data={pieData}
                    />
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
                                backgroundColor: pieData[index].color,
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
                            Panjang Ruas
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Lebar Ruas
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
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
                            Rigit
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        36.850
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                        Hotmix
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                        5.140
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
                            Lapen
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <Typography fontFamily="Poppins-Light" fontSize={14} color="Text 600">
                            Telford
                        </Typography>
                        <Typography fontFamily="Poppins-Regular" fontSize={15} color="Text 900">
                            1
                        </Typography>
                    </View>
                </View>
            </View>
        </View>
    );
}
