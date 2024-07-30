import {View} from "react-native";

export default function GPSScreen(
    {
        modalVisible,
        setModalVisible
    }: any
): JSX.Element {
    console.log(modalVisible);
    setModalVisible(modalVisible);

    return (
        <View></View>
    )
};
