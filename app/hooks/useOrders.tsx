import React, {useEffect, useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_ORDERS} from "../../graphql/querues";

export const useCustomerOrders =() =>{
    const {loading,error,data} = useQuery(GET_ORDERS)
    const [orders,setOrders]=useState<Order[]>([])
    useEffect(()=>{
        if (!data) return;

        const orders:Order[] = data.getOrders.map(({value}:OrderResponse)=>({
            Address:value.Address,
            City:value.City,
            Lat:value.Lat,
            Lng:value.Lng,
            carrier:value.carrier,
            createdAt:value.createdAt,
            shippingCost:value.shippingCost,
            trackingId:value.trackingId,
        }))
        setOrders(orders);
    },[data])
    return {loading,error,orders};
}
