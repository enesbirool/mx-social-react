import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next).init({
    resources:{
        en:{
            translations:{
                'Sign Up':'Sign Up',
                'Password mismatch':'Password mismatch',
                "Create your account. It's free and only takes a minute.":"Create your account. It's free and only takes a minute.",
                "Username":"Username",
                "Display Name":"Display Name",
                "Password":"Password",
                "REPasword":"REPassword",
                "Please Sign In":"Please Sign In",
                "Login":"Login",
                "Logout":"Logout"
            }
        },
        tr:{
            translations:{
                'Sign Up':'Kayıt Ol',
                'Password mismatch':'Şifreler Uyuşmuyor',
                "Create your account. It's free and only takes a minute.":"Hesabını oluştur. Sadece bir dakika sürer ve ÜCRETSİZDİR...",
                "Username":"Kullanıcı Adı",
                "Display Name":"Tercih Edilen İsim",
                "Password":"Şifre",
                "REPasword":"Şifreyi Tekrar Giriniz.",
                "Please Sign In":"Lütfen Giriş Yapınız",
                "Login":"Giriş",
                "Logout":"Çıkış"
            }
        }
    },
    fallbackLng:"en",
    ns:["translations"],
    defaultNS:"translations",
    keySeparator:false,
    interpolation:{
        escapeValue:false,
        formatSeparator:","
    },
    react:{
        wait:true
    }
})

export default i18n;