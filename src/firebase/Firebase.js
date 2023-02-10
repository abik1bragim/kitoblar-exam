import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBl_f0u-nXXFHsLeC8RBeX37TFd_l5xo1k",
    authDomain: "exam-kitoblar-uz.firebaseapp.com",
    projectId: "exam-kitoblar-uz",
    storageBucket: "exam-kitoblar-uz.appspot.com",
    messagingSenderId: "440785708944",
    appId: "1:440785708944:web:a616447ce36f2d67567515",
    measurementId: "G-09XEGZGWX5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);