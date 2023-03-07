import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';

export default function SignIn() {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    function changeForm() {
        if (step === 0) {
            setStep(1);
        } else {
            setStep(0);
        }
    }

    function handleSubmit() {
        console.log('Dados enviados');
        console.log({ email, password });
    }

    function validateForm() {
        if (name === '') {
            Alert.alert('Preencha o campo nome');
            return;
        }

        if (email === '') {
            Alert.alert('Preencha o campo e-mail');
            return;
        }

        if (password === '') {
            Alert.alert('Preencha o campo senha');
            return;
        }

        if (repeatPassword === '') {
            Alert.alert('Preencha o campo repetir senha');
            return;
        }

        if (password !== repeatPassword) {
            Alert.alert('As senhas não conferem');
            return;
        }

        handleSubmit();
    }

    return (
        <ImageBackground
            style={styles.container}
            source={{
                uri:
                    'https://th.bing.com/th/id/R.16034aa499468dcc29e0c3f4c190bdb7?rik=XMRlZRGfRElTEw&pid=ImgRaw&r=0',
            }}
            resizeMode="stretch"
        >
            <Text style={styles.title}>{step === 0 ? 'Bem-vindo' : 'Cadastre-se'}</Text>

            {/* Formulários de Login e Cadastro */}
            {step === 0 ? (
                <KeyboardAvoidingView style={styles.form} behavior="padding">
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={[styles.input, { textTransform: 'lowercase' }]}
                        placeholder="Seu melhor e-mail"
                        keyboardType='email-address'
                        secureTextEntry={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha secreta"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changeForm}>
                        <Text style={[styles.label, { textAlign: 'center' }]}>Cadastre-se grátis!</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>

            ) : (
                <KeyboardAvoidingView style={styles.form} behavior="padding">
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu nome completo"
                        secureTextEntry={false}
                        value={name}
                        onChangeText={setName}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu melhor e-mail"
                        keyboardType='email-address'
                        secureTextEntry={false}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha secreta"
                        secureTextEntry
                        autoCorrect={false}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Text style={styles.label}>Repita sua Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Repita sua senha"
                        secureTextEntry
                        autoCorrect={false}
                        value={repeatPassword}
                        onChangeText={setRepeatPassword}
                    />

                    <TouchableOpacity style={styles.button} onPress={validateForm}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={changeForm}>
                        <Text style={[styles.label, { textAlign: 'center' }]}>Já possuo conta</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            )}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#43425D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    form: {
        marginTop: 30,
        width: '70%',
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 12,
        marginTop: 20,
        marginLeft: 10,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 40,
        borderRadius: 20,
        padding: 12,
    },
    button: {
        backgroundColor: '#4dc15f',
        height: 40,
        borderRadius: 20,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }

});
