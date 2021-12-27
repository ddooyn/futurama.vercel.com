import styled from '@emotion/styled';
import { InventoryData } from '../types/Inventory';

interface InventoryCardProps {
    inventoryData: InventoryData
}

export const InventoryCard = ( {inventoryData }: InventoryCardProps) => {
    const { title, category, description, slogan, price, stock, id } = inventoryData;
    
    return (
        <Card key={`futurama-inventory-${id}`}>
            <Name>{title}</Name>
            <q>{slogan}</q>
            <em>{description}</em>
            <Detail>
            <p><Span>category</Span> {category}</p>
            <p><Span>stock</Span> {stock}</p>
            <strong><Span>price</Span> {price}</strong>
            </Detail>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    max-width: 300px;
    line-height: 1.6em;
    &:hover {
        border: 1px solid #ccc;
        Strong {
            background-color: #F2CF66;
            border-radius: 10px;
            padding-right: 10px;
        }
    }
`

const Name = styled.h2`
    text-decoration: underline;
    border-radius: 5px;
`

const Detail = styled.div`
    width: 180px;
    margin: 20px 0 10px;
    line-height: 1.4em;
    text-align: left;
`

const Span = styled.span`
    display: inline-block;
    background-color: #eee;
    padding: 3px 7px;
    margin-right: auto;
    border-radius: 10px;
`