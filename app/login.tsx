import React, { useState } from "react";
import {View, StyleSheet, Image, StatusBar, TouchableOpacity, Alert} from "react-native";
import {Input, Button, Text, CheckBox, Icon} from "@rneui/themed";
import { useRouter } from "expo-router";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const router = useRouter();

    const handleLogin = () => {
        if (email && password) {
            console.log("Connexion réussie !");
            router.push("/(tabs)/home");
            return;
        } else {
            console.log("Veuillez remplir tous les champs.");
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <View style={styles.innerContainer}>

                {/* Logo */}
                <Image source={require('@/assets/images/app-img-1.png')} style={styles.logo} />

                {/* title */}
                <Text h3 style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Login to continue</Text>

                {/* Email field */}
                <Input
                    placeholder="username"
                    leftIcon={{ type: 'feather', name: 'user', color: '#4c8bf5' }}
                    inputContainerStyle={styles.inputContainer}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                {/* Password field */}
                <Input
                    placeholder="Password"
                    secureTextEntry={secureTextEntry}
                    leftIcon={{ type: 'feather', name: 'lock', color: '#4c8bf5' }}
                    rightIcon={
                        <Icon
                            type="feather"
                            name={secureTextEntry ? "eye-off" : "eye"}
                            color="#4c8bf5"
                            onPress={() => setSecureTextEntry(!secureTextEntry)}
                        />
                    }
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Options : Keep me signed in & Forgot password */}
                <View style={styles.optionsContainer}>
                    <CheckBox
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        title="Keep me signed in"
                        containerStyle={styles.checkboxContainer}
                        checkedColor="#4c8bf5"
                    />
                    <TouchableOpacity onPress={() => router.push("/reset-password")}>
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <Button
                    title="Log in"
                    buttonStyle={styles.button}
                    titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
                    containerStyle={{ width: "100%" }}
                    onPress={handleLogin}
                />

                <TouchableOpacity onPress={() => router.push("/signup")}>
                    <Text style={styles.signupText}>Don't have an account ? <Text style={styles.signupLink}>Sign Up</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    innerContainer: {
        width: "85%",
        alignItems: "center",
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
        resizeMode: "contain",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#4c8bf5",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "#4c8bf5",
        marginBottom: 25,
        textAlign: "center",
        fontStyle: "italic",
    },
    inputContainer: {
        borderBottomWidth: 1.5,
        borderBottomColor: "grey",
    },
    optionsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    checkboxContainer: {
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    forgotPassword: {
        color: "#4c8bf5",
        fontWeight: "bold",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#4c8bf5",
        paddingVertical: 10,
        borderRadius: 10,
    },
    signupText: {
        marginTop: 15,
        fontSize: 14,
        color: "#333",
    },
    signupLink: {
        color: "#4c8bf5",
        fontWeight: "bold",
    },
});

export default LoginScreen;
