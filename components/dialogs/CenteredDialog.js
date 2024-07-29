import {BlurView} from 'expo-blur';
import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../assets/styles/colors';
import {normalize} from "../../utils/normalizeUtils";

const CustomDialog = ({visible, title, content, text, intensity, onClose, buttonText}) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <BlurView intensity={intensity}
                          style={styles.blurView}>
                    <View style={styles.dialogContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {
                            content ? <View style={styles.viewCcontent}>
                                {content}
                            </View> : ''
                        }
                        {
                            text ? <Text style={styles.textContent}>
                                {text}
                            </Text> : ''
                        }
                        <TouchableOpacity style={styles.button}
                                          onPress={onClose}>
                            <Text style={styles.buttonText}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    blurView: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    button: {
        alignItems: 'center',
        backgroundColor: Colors.dialogButtonBackground,
        borderColor: Colors.dialogBorder,
        borderRadius: normalize(10),
        borderWidth: normalize(1),
        padding: normalize(15),
        width: '100%',
    },
    buttonText: {
        color: Colors.dialogButtonText,
        fontFamily: 'Universo-Bold',
        fontSize: normalize(16),
    },
    viewContent: {
        justifyContent: 'center',
    },
    textContent: {
        color: Colors.dialogText,
        fontFamily: 'Universo-Regular',
        justifyContent: 'center',
        marginVertical: normalize(40),
    },
    dialogContainer: {
        alignItems: 'center',
        backgroundColor: Colors.dialogBackground,
        borderColor: Colors.dialogBorder,
        borderRadius: normalize(25),
        borderWidth: normalize(1),
        justifyContent: 'space-between',
        padding: normalize(20),
        shadowColor: Colors.shadow,
        shadowOpacity: 1,
        shadowRadius: normalize(30),
        width: '90%',
    },
    overlay: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: Colors.dialogTitle,
        fontFamily: 'Universo-Black',
        fontSize: normalize(22),
        marginTop: normalize(15),
    },
});

export default CustomDialog;
