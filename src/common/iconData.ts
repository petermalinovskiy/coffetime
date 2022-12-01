interface  IIconData {
    image: any,
    BGColor: string,
    text: string,
    id: number
}

export const iconData: IIconData[] = [
    {
        image: require('../../resources/images/iconMilk.png'),
        BGColor: '#C8D9AF',
        text: '15мл',
        id: 4441
    },
    {
        image: require('../../resources/images/iconCoffeeGrains.png'),
        BGColor: '#CFE6EC',
        text: '25%',
        id: 4442
    },
    {
        image: require('../../resources/images/iconWaterDrop.png'),
        BGColor: '#F7ECDA',
        text: '25мл',
        id: 4443
    },
    {
        image: require('../../resources/images/iconTemperature.png'),
        BGColor: '#EDF3C0',
        text: '95`',
        id: 4444
    },
    {
        image: require('../../resources/images/iconPreasure.png'),
        BGColor: '#D2D2D2',
        text: '15б',
        id: 4445
    },
]