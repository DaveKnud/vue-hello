const {createApp} = Vue;

createApp({
    data() {
        return {
            randomText: "Amigo",
            randomNumbers :"13,15,16,24",
            image: "https://fastly.picsum.photos/id/878/300/300.jpg?hmac=nEnxwevmM_w7wyX2VIqEKx6oeuSC5Ybq-zy1xM5e_eo"
        }
    }
}) .mount("#myText");