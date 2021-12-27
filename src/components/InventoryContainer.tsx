import styled from '@emotion/styled';
import { InventoryCard } from './InventoryCard';
import { useInventoryData } from '../hooks/useInventoryData';
import { InventoryData } from '../types/Inventory';

export const InventoryContainer = () => {
    const { data, error } = useInventoryData();

    console.log(data);

    if (error) return <div>An error💥 has occurred.</div>;
    if (!data) return <div>Loading...💫</div>;

    return (
        <Container>
            {data.map((inventory: InventoryData) => {
                return (
                    <InventoryCard
                        inventoryData={inventory}
                        key={`futurama-inventory-${inventory.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px 10px;
    padding: 5vw;
    text-align: center;
`