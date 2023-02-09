// console.log('VUE OK', Vue);

const apiUri = 'http://localhost:8888/php-dischi-json/api.php';

const app = Vue.createApp({
    data(){
        return {
    
            discs: []
        }
    },
    methods: {
        getDiscs(){
            axios.get(apiUri).then(res => {
                this.discs = res.data;
            })
        }
    },
    mounted(){
        this.getDiscs();
    }
});

app.mount('#root');