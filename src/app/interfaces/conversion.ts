export interface ConvertirData {
    monedaOrigenName: string,
    monedaDestinoName: string,
    cantidad: number,
}

export interface ResultadoData extends ConvertirData
{
    resultado: number 
}