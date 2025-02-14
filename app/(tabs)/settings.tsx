import React, { useState } from 'react';
import {ScrollView, View, StatusBar, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import { Text, Icon, Card, Divider } from '@rneui/themed';
import CustomPressable from "@/components/ui/custom-pressable";
import {globalStyles} from "@/styles/global";
import BorderedInput from "@/components/ui/bordered-input";
import PrimaryButton from "@/components/ui/primary-button";

function Settings() {
    const [theme, setTheme] = useState('auto');
    const [language, setLanguage] = useState('FR');

    const ThemeOption = ({
         label, value, icon, type='feather'
        }: {
        label: string,
        value: string,
        icon: string,
        type: string
    }) => (
        <TouchableOpacity onPress={() => setTheme(value)} style={styles.optionRow}>
            <View style={styles.optionLabel}>
                <Icon name={icon} type={type} size={20} style={globalStyles.icon} />
                <Text>{label}</Text>
            </View>
            <Icon name={theme === value ? 'check-circle' : 'circle'} type='feather' color={theme === value ? '#6200EE' : '#CCC'} />
        </TouchableOpacity>
    );

    const LanguageOption = ({ label, value }: {label: string, value: string}) => (
        <TouchableOpacity onPress={() => setLanguage(value)} style={styles.optionRow}>
            <Text>{label}</Text>
            <Icon name={language === value ? 'check-circle' : 'circle'} type='feather' color={language === value ? '#6200EE' : '#CCC'} />
        </TouchableOpacity>
    );

    const [showProfileSettingss, setShowProfileSettings] = useState(false);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <StatusBar barStyle='dark-content' backgroundColor='white' />
                <Card containerStyle={styles.card}>
                    {/* profile settings */}
                    <View style={styles.profileSettingsConainer}>
                        <CustomPressable
                            text='Profile'
                            iconName={showProfileSettingss ? 'chevron-down': 'chevron-right'}
                            iconType='feather'
                            onPress={() => setShowProfileSettings(!showProfileSettingss)}
                        />
                        {showProfileSettingss && (
                            <View style={styles.profileSettinDropdown}>
                                <Divider />
                                <CustomPressable
                                    text='Account'
                                    iconName='user'
                                    iconType='feather'
                                />
                                <Divider />
                                <CustomPressable
                                    text='Personal informations'
                                    iconName='info'
                                    iconType='feather'
                                />
                            </View>
                        )}
                    </View>
                    <Divider />
                    <CustomPressable
                        text='Pin'
                        iconName='lock'
                        iconType='feather'
                    />
                    <Divider />
                    <CustomPressable
                        text='About shop'
                        iconName='info'
                        iconType='feather'
                    />
                </Card>

                {/* Theme section */}
                <View style={styles.sectionTitle}>
                    <Icon name='contrast' type='material' size={20} style={globalStyles.icon} />
                    <Text style={styles.sectionTitleText}>Theme</Text>
                </View>

                <Card containerStyle={styles.card}>
                    <ThemeOption label='Automatique' value='auto' icon='contrast' type='material' />
                    <Divider />
                    <ThemeOption label='Light' value='light' icon='sun' type='feather' />
                    <Divider />
                    <ThemeOption label='Dark' value='dark' icon='moon' type='feather' />
                </Card>

                {/* Languages option section*/}
                <View style={styles.sectionTitle}>
                    <Icon name='translate' type='material' size={20} style={globalStyles.icon} />
                    <Text style={styles.sectionTitleText}>Langues</Text>
                </View>

                <Card containerStyle={styles.card}>
                    <LanguageOption label='FR      French' value='FR' />
                    <Divider />
                    <LanguageOption label='EN      English' value='EN' />
                </Card>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        paddingVertical: 20,
        paddingHorizontal: 18,
        width: '100%',
    },
    card: {
        borderRadius: 10,
        width: '100%',
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    optionLabel: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingTop: 25,
        paddingLeft: 10
    },
    sectionTitleText:{
        fontSize: 16,
        fontWeight: '100',
    },
    profileSettinDropdown: {
        backgroundColor: "white",
        width: "100%",
        paddingLeft: 20
    },
    profileSettingsConainer: {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
    }
});

export default Settings;