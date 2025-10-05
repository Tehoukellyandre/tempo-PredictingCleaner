import { useEffect, useState } from "react";
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Map, BarChart3 } from "lucide-react";
import { AlertPanel } from "./alert_panel";
import { useCurrentPosition } from "@/hooks/position_hook";
import Skeleton from "@mui/material/Skeleton";
import { useGetAtmosphericData } from "@/hooks/query";
import { AirQualityMetrics } from "./display_give_organic";

export function Dashboard() {
    const [value, setValue] = useState('1');
    const { position, error, loading } = useCurrentPosition({ enableHighAccuracy: true, timeout: 10000 });
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const { data: atmosphericData, isLoading: atmosphericLoading } = useGetAtmosphericData(position ? position : null);
    return (
        <>
            {!atmosphericLoading &&  atmosphericData ? (
                <div className="flex min-h-screen flex-col">
                    <div className="flex-1 space-y-6 p-6 md:p-8">
                        {/* Header */}
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                                    Air Quality Monitoring
                                </h1>
                                <p className="mt-2 text-pretty text-muted-foreground">
                                    Real-time data from NASA's TEMPO mission
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {/* Add header actions here if needed */}
                            </div>
                        </div>

                        <TabContext value={value}>
                            <TabList
                                className="grid w-full max-w-md grid-cols-2"
                                onChange={handleChange}
                                aria-label="lab API tabs example"
                            >
                                <Tab
                                    icon={<BarChart3 className="h-4 w-4" />}
                                    label="Dashboard"
                                    value="1"
                                    className="gap-2"
                                />
                                <Tab
                                    icon={<Map className="h-4 w-4" />}
                                    label="Interactive Map"
                                    value="2"
                                    className="gap-2"
                                />
                            </TabList>

                            <TabPanel value="1"  className="space-y-6">
                                <AlertPanel city={atmosphericData.city} aqi={atmosphericData.aqi} status={atmosphericData.etat} />
                                <AirQualityMetrics  pollutants ={atmosphericData.components}  aqi = {atmosphericData.aqi}  status={atmosphericData.etat} />
                            </TabPanel>
                            <TabPanel value="2">
                                Item Two
                            </TabPanel>
                        </TabContext>
                    </div>
                </div>
            ) : (
                <div className="flex min-h-screen flex-col space-y-6 p-6 md:p-8">
                    <Skeleton animation="wave" variant="text" height={40} width="60%" />
                    <Skeleton animation="wave" variant="text" height={24} width="40%" />

                    <div className="flex gap-4 mt-4">
                        <Skeleton animation="wave" variant="rectangular" height={48} width={150} className="rounded-md" />
                        <Skeleton animation="wave" variant="rectangular" height={48} width={150} className="rounded-md" />
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Skeleton animation="wave" variant="rectangular" height={200} className="rounded-xl" />
                        <Skeleton animation="wave" variant="rectangular" height={200} className="rounded-xl" />
                    </div>
                </div>
            )}
        </>
    );
}
