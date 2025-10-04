import { useEffect, useState } from "react"
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { Map, BarChart3 } from "lucide-react"
import { AlertPanel } from "./alert_panel";
import { useCurrentPosition } from "@/hooks/position_hook";
import { usePostUserPosition } from "@/hooks/mutation"

export function Dashboard() {
    const [value, setValue] = useState('1');
    const { position, error, loading } = useCurrentPosition({ enableHighAccuracy: true, timeout: 10000 });
    const mutation = usePostUserPosition() ; 
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    useEffect(() => {
    if (position && !loading && !error) {
      mutation.mutate(position)
    }
  }, [position, loading, error])
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <div className="flex-1 space-y-6 p-6 md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
                                Surveillance de la Qualité de l'Air
                            </h1>
                            <p className="mt-2 text-pretty text-muted-foreground">
                                Données en temps réel de la mission TEMPO de la NASA
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            
                        </div>
                    </div>

                    <TabContext  value={value}>
                        <TabList className="grid w-full max-w-md grid-cols-2" onChange={handleChange} aria-label="lab API tabs example">
                            <Tab  icon={<BarChart3 className="h-4 w-4" />}label="Tableau de Bord" value="1" className="gap-2">
                            </Tab>
                            <Tab icon={<Map className="h-4 w-4" />} label ="Carte Interactive" value="2" className=" gap-2">
                            </Tab>
                        </TabList>

                        <TabPanel value="1">
                             <AlertPanel/>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </div>
            </div>
        </>
    );
}
