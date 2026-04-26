import { FC, use, Suspense } from "react";
import Loading from "@/components/Loading.tsx";
import CritterApi from "@/api/CritterApi.ts";
import { useAuthorization } from "@/providers/AuthorizationContext.tsx";

interface KitchenDisplayProps {
    dataPromise: Promise<KitchenData[]>;
}

const KitchenDisplay: FC<KitchenDisplayProps> = ({ dataPromise }) => {
    const data = use(dataPromise);

    return (
        <div className="kitchen-data">
            {data.length === 0 ? (
                <p>No kitchen data available.</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Pressure (hPa)</th>
                            <th>Gas (Ω)</th>
                            <th>Temp (°C)</th>
                            <th>Humidity (%)</th>
                            <th>Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.pressure_hectopascals}</td>
                                <td>{item.gas_resistance_ohms}</td>
                                <td>{item.temp_celsius}</td>
                                <td>{item.relative_humidity}</td>
                                <td>{new Date(item.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const Kitchen: FC = () => {
    const { accessToken } = useAuthorization();

    if (!accessToken) {
        return <Loading />;
    }

    const dataPromise = CritterApi.fetchKitchenData(accessToken);

    return (
        <div className="card">
            <h1>Kitchen Sensor Data</h1>
            <Suspense fallback={<Loading />}>
                <KitchenDisplay dataPromise={dataPromise} />
            </Suspense>
        </div>
    );
};

export default Kitchen;
